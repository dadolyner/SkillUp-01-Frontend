import * as React from 'react';
import { CardContainer, CardLeft, UpArrow, Score, DownArrow, CardRight, QuoteText, QuoteAuthor } from './Quote.styled';

type QuoteProps = {
	score: number;
	quote: string;
	author: string;
};

const Quote: React.FC<QuoteProps> = (props: QuoteProps) => {
	const [upVote, setupVote] = React.useState(false);
	const [downVote, setdownVote] = React.useState(false);
	const ToggleClass = (type: string) => {
		if (type === 'upVote') {
			setupVote(true);
			setdownVote(false);
		} else {
			setdownVote(true);
			setupVote(false);
		}
	};

	return (
		<div>
			<CardContainer>
				<CardLeft>
					<UpArrow className={upVote ? 'upVoted' : ''} onClick={() => ToggleClass('upVote')} />
					<Score>{props.score}</Score>
					<DownArrow className={downVote ? 'downVoted' : ''} onClick={() => ToggleClass('downVote')} />
				</CardLeft>

				<CardRight>
					<QuoteText>{props.quote}</QuoteText>
					<QuoteAuthor>{props.author}</QuoteAuthor>
				</CardRight>
			</CardContainer>
		</div>
	);
};

export default Quote;
