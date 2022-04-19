import * as React from 'react';
import { CardContainer, CardLeft, UpArrow, Score, DownArrow, CardRight, QuoteText, QuoteAuthor } from './Quote.styled';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import UpdateUserInfo from '../UpdateUserInfo';

type QuoteProps = {
	id: string;
	votes: number;
	quote: string;
	user: string;
};

const Quote: React.FC<QuoteProps> = (props: QuoteProps) => {
	let navigate = useNavigate();
	const [upVote, setupVote] = React.useState(false);
	const [downVote, setdownVote] = React.useState(false);
	const [score, setScore] = React.useState(props.votes);
	const ToggleClass = async (type: string) => {
		if (type === 'upVote') {
			await axios.post(`/vote/${props.id}/upvote`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }).catch((error) => {if(error.response.status === 401) {navigate('/login')}});
			setupVote(true);
			setdownVote(false);
			setScore(score + 1);
			UpdateUserInfo();
		} else {
			await axios.post(`/vote/${props.id}/downvote`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }).catch((error) => {if(error.response.status === 401) {navigate('/login')}});
			setdownVote(true);
			setupVote(false);
			setScore(score - 1);
			UpdateUserInfo();
		}
	};
	const SetVotedQuotes = () => {
		const userInfo = localStorage.getItem('userInfo')
		const userVotes = userInfo ? JSON.parse(userInfo).votes : [];
		userVotes.forEach((vote:any) => {
			if (vote.quoteId === props.id) {
				if (vote.vote === 1) {
					setupVote(true);
					setdownVote(false);
				} else {
					setdownVote(true);
					setupVote(false);
				}
			}
		})
	}
	React.useEffect(() => {
		SetVotedQuotes();
	});

	return (
		<div id={props.id}>
			<CardContainer>
				<CardLeft>
					<UpArrow className={upVote ? 'upVoted' : ''} onClick={() => ToggleClass('upVote')} />
					<Score>{score + 100}</Score>
					<DownArrow className={downVote ? 'downVoted' : ''} onClick={() => ToggleClass('downVote')} />
				</CardLeft>

				<CardRight>
					<QuoteText style={{ fontSize: `${props.quote.length > 100 ? '10px' : '16px'}` }}>{props.quote}</QuoteText>
					<QuoteAuthor>{props.user}</QuoteAuthor>
				</CardRight>
			</CardContainer>
		</div>
	);
};

export default Quote;
