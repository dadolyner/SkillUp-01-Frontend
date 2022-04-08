import * as React from 'react';
import { CardContainer, CardLeft, UpArrow, Score, DownArrow, CardRight, QuoteText, QuoteAuthor } from './Quote.styled';
import axios from '../../api/axios';

type QuoteProps = {
	id: string;
	votes: number;
	quote: string;
	user: string;
};

const Quote: React.FC<QuoteProps> = (props: QuoteProps) => {
	const [upVote, setupVote] = React.useState(false);
	const [downVote, setdownVote] = React.useState(false);
	const [score, setScore] = React.useState(props.votes);
	const ToggleClass = async (type: string) => {
		if (type === 'upVote') {
			setupVote(true);
			setdownVote(false);
			setScore(score + 1);
			const voteResponse = await axios.post(`/vote/${props.id}/upvote`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } });
		} else {
			setdownVote(true);
			setupVote(false);
			setScore(score - 1);
			const voteResponse = await axios.post(`/vote/${props.id}/downvote`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }, params: { id: props.id } });
		}
	};

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
