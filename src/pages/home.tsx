import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { ConfirmButton, CancelButton } from '../components/FormComponent/Form.styled';
import Quote from '../components/QuoteComponent/Quote';

const Home: React.FC = () => {
	let navigate = useNavigate();
	const [quotes, setQuotes] = React.useState<any[]>([]);

	const output = async () => {
		const response = await axios.get('/quote/list');
		setQuotes(response.data);
	};
	React.useEffect(() => {
		output();
	}, []);
	const sumQuoteVote = (votes: object[]): number => {
		let sum = 0;
		votes.forEach((vote: any) => (vote.vote === 1 ? sum++ : (sum += 0)));
		return sum;
	};

	return (
		<div style={{ fontFamily: 'Poppins' }}>
			<div style={{ display: 'grid', gridTemplateColumns: '20% 60% 20%' }}>
				<h3>Quotastic</h3>
				<div></div>
				<div style={{ gridColumn: 3, display: 'flex', margin: '0 10px' }}>
					<ConfirmButton onClick={() => navigate('/signup')}>Sign up</ConfirmButton>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<CancelButton onClick={() => navigate('/login')}>Login</CancelButton>
				</div>
			</div>

			<div style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
				<div style={{ marginLeft: '100px' }}>
					<p style={{ fontSize: 48 }}>
						Welcome to <span className='orangeText'>Quotastic</span>
					</p>
					<p>Quotastic is free online platform for you to explore the quips, quotes, and proverbs. Sign up and express yourself.</p>
					<ConfirmButton style={{ width: '150px' }} onClick={() => navigate('/signup')}>
						Sign up
					</ConfirmButton>
				</div>
				<div>
					<Quote id={'HeaderQuote'} votes={158} quote={'Twenty years from now you will be more disappointed by the things that you didnt do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.'} user={'Janez Novak'} />
				</div>
			</div>

			<div>
				<div style={{ textAlign: 'center' }}>
					<h2>
						Explore the world of <span className='orangeText'>fantastic quotes</span>
					</h2>
				</div>
			</div>

			<div>
				<div style={{ textAlign: 'center' }}>
					<h4 className='orangeText'>Most upvoted quotes</h4>
					<p>Most upvoted quotes on the platform. Sign up or login to like the quotes and keep them saved in your profile</p>
				</div>

				<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
					{quotes.map((quote) => {
						return <Quote id={quote.id} votes={sumQuoteVote(quote.votes)} quote={quote.quote} user={`${quote.user.first_name} ${quote.user.last_name}`} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;
