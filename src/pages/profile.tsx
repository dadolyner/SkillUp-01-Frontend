import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TopButtons, LeftBox, RightBox, LinkerLink, LinkerButton, User, UserImage, UserName, UserKarma, UsersQuote, UsersQuoteTitle, LikedTitle, Body } from "../styles/profile.styled";
import { Logout } from '../components/Logout'
import Avatar from '../multimedia/Avatar.png';
import Quote from '../components/QuoteComponent/Quote';
import axios from '../api/axios';

const Profile: React.FC = () => {
    const currentUser = localStorage.getItem('userInfo');
    const userString = currentUser ? JSON.parse(currentUser) : '';
    const [myQuoteValue, setMyQuote] = React.useState<any[]>([]);
    
    let navigate = useNavigate();

    const myQuote = async () => {
		const response = await axios.get('/quote/list');
		setMyQuote(response.data.filter((quote: any )=> quote.id === userString.quote.id));
	};

    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(() => { myQuote() }, []);
    
    const sumQuoteVote = (votes: object[]): number => {
		let sum = 0;
		votes.forEach((vote: any) => (vote.vote === 1 ? sum++ : (sum += 0)));
		return sum;
	};

    return (
        <>
        <Container>
            <TopButtons>
				<LeftBox onClick={() => navigate("/")}><h3 style={{color: 'white'}}>Quotastic</h3></LeftBox>
				<RightBox>
					<LinkerLink onClick={() => navigate('/')}>Home</LinkerLink>
					<LinkerLink onClick={() => navigate('/profile-settings')}>Settings</LinkerLink>
					<LinkerLink onClick={() => { Logout(); navigate('/') }}>Logout</LinkerLink>
					<LinkerButton className='profile' onClick={() => navigate('/profile')}></LinkerButton>
					<LinkerButton className='quote' onClick={() => navigate('/create-quote')}></LinkerButton>
				</RightBox>
			</TopButtons>

            <User>
                <UserImage src={Avatar} alt={'avatar.png'}/>
                <UserName>{userString.first_name + ' ' + userString.last_name}</UserName>
                <UserKarma>
                    <div>Quotastic Karma</div>
                    <div>100</div>
                </UserKarma>
            </User>

            <UsersQuote>
                <UsersQuoteTitle>Quote</UsersQuoteTitle>
                { myQuoteValue.map((quote) => {
					return <Quote key={quote.id} id={quote.id} votes={sumQuoteVote(quote.votes)} quote={quote.quote} user={`${quote.user.first_name} ${quote.user.last_name}`} userId={quote.user.id}/>;
				})}                
            </UsersQuote>

            <LikedTitle>Likes</LikedTitle>
            <Body>

            </Body>
        </Container>
        </>
    );
}

export default Profile;