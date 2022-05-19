import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { ConfirmButton, CancelButton } from '../components/FormComponent/Form.styled';
import Quote from '../components/QuoteComponent/Quote';
import { Container, TopButtons, LeftBox, RightBox, LinkerLink, LinkerButton, Header, Title, Paragraph, BodyTitle, BodyDesc, Body, Slogan, OrangeText } from '../styles/home.styled';
import { Logout } from '../components/Logout';

const Home: React.FC = () => {
	let navigate = useNavigate();
	const [quotes, setQuotes] = React.useState<any[]>([]);
	const isLoggedIn = localStorage.getItem('userLoggedIn');

	const output = async () => {
		const response = await axios.get('/quote/list');
		setQuotes(response.data);
	};
	React.useEffect(() => { output() }, []);
	
	const sumQuoteVote = (votes: object[]): number => {
		let sum = 0;
		votes.forEach((vote: any) => (vote.vote === 1 ? sum++ : (sum += 0)));
		return sum;
	};

	const getRandomQuote = () => {
		try { return quotes[Math.floor(Math.random() * quotes.length)]; } 
		catch (error) { return error }
	}
	const randomQuote = getRandomQuote();

	console.log(quotes)

	return (
		<>
			<Container>
				<TopButtons>
					<LeftBox onClick={() => navigate("/")}><h3>Quotastic</h3></LeftBox>

					<RightBox>
						{ isLoggedIn === 'true' ? (
								<>
									<LinkerLink onClick={() => navigate('/')}>Home</LinkerLink>
									<LinkerLink onClick={() => navigate('/profile-settings')}>Settings</LinkerLink>
									<LinkerLink onClick={() => { Logout(); navigate('/') }}>Logout</LinkerLink>
									<LinkerButton className='profile' onClick={() => navigate('/profile')}></LinkerButton>
									<LinkerButton className='quote' onClick={() => navigate('/create-quote')}></LinkerButton>
								</>
							) : (
								<>
									<ConfirmButton onClick={() => navigate('/signup')}>Sign up</ConfirmButton>
									<CancelButton onClick={() => navigate('/login')}>Login</CancelButton>
								</>
							)
						}
						
					</RightBox>
				</TopButtons>


				<Header>
					{ isLoggedIn === 'true' ? (
						<>
							<div>	
								<Title style={{fontSize: '40px', textAlign: 'center'}}><OrangeText>Quote of the day</OrangeText></Title>
								<Paragraph style={{textAlign: 'center'}}>Quote of the day is randomly choosen quote.</Paragraph>
								{ randomQuote ? <Quote key={randomQuote.id} id={randomQuote.id} votes={sumQuoteVote(randomQuote.votes)} quote={randomQuote.quote} user={`${randomQuote.user.first_name} ${randomQuote.user.last_name}` } userId={randomQuote.user.id}/> : <Quote id={'HeaderQuote'} votes={158} quote={'Coding is like dark humor. When you have to explain it, its bad.'} user={'Janez Novak'} userId={'123JanezNovak321'}/> }
							</div>
						</>
					) : (
						<>
							<div>
								<Title>Welcome<br/> to <OrangeText>Quotastic</OrangeText></Title>
								<Paragraph>Quotastic is free online platform for you to explore the  quips, quotes, and proverbs. Sign up and express yourself.</Paragraph>
								<ConfirmButton className={'short'} onClick={() => navigate('/signup')}>Sign up</ConfirmButton>
							</div>
							<div>
								{ randomQuote ? <Quote key={randomQuote.id} id={randomQuote.id} votes={sumQuoteVote(randomQuote.votes)} quote={randomQuote.quote} user={`${randomQuote.user.first_name} ${randomQuote.user.last_name}`} userId={randomQuote.user.id}/> : <Quote id={'HeaderQuote'} votes={158} quote={'Coding is like dark humor. When you have to explain it, its bad.'} user={'Janez Novak'} userId={'123JanezNovak321'}/> }
							</div>
						</>
					)
				}
				</Header>

				{ isLoggedIn === 'true' ? (
						<>
						</>
					) : (
						<>
							<Slogan>Explore the world of <br/><OrangeText>fantastic quotes</OrangeText></Slogan>
						</>
					)
				}
				<BodyTitle><OrangeText>Most upvoted quotes</OrangeText></BodyTitle>
				<BodyDesc>Most upvoted quotes on the platform. Sign up or login to like the quotes<br/> and keep them saved in your profile</BodyDesc>
				<Body>
					{quotes.map((quote) => {
						return <Quote key={quote.id} id={quote.id} votes={sumQuoteVote(quote.votes)} quote={quote.quote} user={`${quote.user.first_name} ${quote.user.last_name}`} userId={quote.user.id}/>;
					})}
				</Body>
			</Container>
		</>
	);
};

export default Home;
