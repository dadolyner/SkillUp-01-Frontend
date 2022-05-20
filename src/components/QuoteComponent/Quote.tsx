import * as React from 'react';
import { CardContainer, CardLeft, UpArrow, Score, DownArrow, CardRight, QuoteText, QuoteAuthor } from './Quote.styled';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import UpdateUserInfo from '../UpdateUserInfo';
import Avatar from '../../multimedia/Avatar.png';

type QuoteProps = {
	id: string;
	votes: number;
	quote: string;
	user: string;
	userId: string;
	userLiked?: boolean;
};

const Quote: React.FC<QuoteProps> = (props: QuoteProps) => {
	const { id, votes, quote, user, userId, userLiked } = props;
	
	let navigate = useNavigate();
	const [upVote, setupVote] = React.useState(false);
	const [downVote, setdownVote] = React.useState(false);
	const [score, setScore] = React.useState(votes);

	const ToggleClass = async (type: string) => {
		if (type === 'upVote') {
			await axios.post(`/vote/${id}/upvote`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }).catch((error) => {if(error.response.status === 401) {navigate('/login')}});
			setupVote(true);
			setdownVote(false);
			setScore(score + 1);
			UpdateUserInfo();
		} else {
			await axios.post(`/vote/${id}/downvote`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }).catch((error) => {if(error.response.status === 401) {navigate('/login')}});
			setupVote(false);
			setdownVote(true);
			setScore(score - 1);
			UpdateUserInfo();
		}
	};
	const SetVotedQuotes = () => {
		const userInfo = localStorage.getItem('userInfo') ? localStorage.getItem('userInfo') : null
		const userVotes = userInfo ? JSON.parse(userInfo).votes : [];
		if(!userVotes) return
		userVotes.forEach((vote:any) => {
			if (vote.quoteId === id) {
				if (vote.vote === 1) {
					setupVote(true);
					setdownVote(false);
				} else {
					setupVote(false);
					setdownVote(true);
				}
			}
		})
	}
	React.useEffect(() => {
		SetVotedQuotes();
	}, []);

	const OpenUserProfilePage = async () => {
		await axios.get(`/user/${userId}`);
		navigate(`/userProfile/${userId}`);
		window.location.reload()
	}

	return (
		<div id={id}>
			<CardContainer>
				<CardLeft>
					{ userLiked ? (
						<>
							<UpArrow className={'upVoted'} />
							<Score>{score}</Score>
							<DownArrow className={''} />
						</>
					) : (
						<>
							<UpArrow className={upVote ? 'upVoted' : ''} onClick={() => ToggleClass('upVote')} />
							<Score>{score}</Score>
							<DownArrow className={downVote ? 'downVoted' : ''} onClick={() => ToggleClass('downVote')} />
						</>
					) }
					
				</CardLeft>

				<CardRight>
					<QuoteText>{quote}</QuoteText>
					<QuoteAuthor onClick={() => { OpenUserProfilePage() }}><img src={Avatar} alt={'Avatar.png'} height={'30px'}/>{user}</QuoteAuthor>
				</CardRight>
			</CardContainer>
		</div>
	);
};

export default Quote;
