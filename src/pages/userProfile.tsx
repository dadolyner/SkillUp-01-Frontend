import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, TopButtons, LeftBox, RightBox, LinkerLink, LinkerButton, User, UserImage, UserName, UserKarma, UsersQuote, UsersQuoteTitle, LikedTitle, Body } from "../styles/profile.styled";
import { Logout } from '../components/Logout'
import Avatar from '../multimedia/Avatar.png';
import Quote from '../components/QuoteComponent/Quote';
import axios from '../api/axios';

const UserProfile: React.FC = () => {
    const [usersQuoteValue, setMyQuote] = React.useState<any[]>([]);
    const [usersLikedQuotesValue, setMyLikedQuotes] = React.useState<any[]>([]);
    const [userInfo, setUserInfo] = React.useState<any>({});
    
    const navigate = useNavigate();
    const params = useParams<{ id: string }>();
    
    const getUserInfo = async () => {
        try {
            const response = await axios.get(`/user/${params.id}`);
            setUserInfo(response.data);
            return response.data;
        } catch (error) {}
	};
    React.useEffect(() => { getUserInfo() }, []);

    const getUsersQuote = async () => {
		const response = await axios.get('/quote/list');
        const info = await getUserInfo()
		setMyQuote(response.data.filter((quote: any )=> quote.id === info.quote.id));
	};
    React.useEffect(() => { getUsersQuote(); }, []);
    
    const sumQuoteVote = (votes: object[]): number => {
		let sum = 0;
		votes.forEach((vote: any) => (vote.vote === 1 ? sum++ : (sum += 0)));
		return sum;
	};

    const getLikedQuotes = async () => {
        const response = await axios.get('/quote/list');
        const { data } = response
        let likedQuoteId: string[] = [];
        const info = await getUserInfo()
        info.votes.filter((vote: any) => vote.vote === 1).forEach((vote: any) => likedQuoteId.push(vote.quoteId))
        const likedQuotes = data.filter((quote: any) => likedQuoteId.includes(quote.id))
        setMyLikedQuotes(likedQuotes);
    }
    React.useEffect(() => { getLikedQuotes(); }, []);


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
                <UserName>{userInfo.first_name + ' ' + userInfo.last_name}</UserName>
                <UserKarma>
                    <div>Quotastic Karma</div>
                    <div>100</div>
                </UserKarma>
            </User>

            <UsersQuote>
                <UsersQuoteTitle>Quote</UsersQuoteTitle>
                { usersQuoteValue.map((quote) => {
					return <Quote key={quote.id} id={quote.id} votes={sumQuoteVote(quote.votes)} quote={quote.quote} user={`${quote.user.first_name} ${quote.user.last_name}`} userId={quote.user.id}/>;
				})}                
            </UsersQuote>

            <LikedTitle>Likes</LikedTitle>
            <Body>
                { usersLikedQuotesValue.map((quote) => {
					return <Quote key={quote.id} id={quote.id} votes={sumQuoteVote(quote.votes)} quote={quote.quote} user={`${quote.user.first_name} ${quote.user.last_name}`} userId={quote.user.id} userLiked={true}/>;
                })}
            </Body>
        </Container>
        </>
    );
}

export default UserProfile;