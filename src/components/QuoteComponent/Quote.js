
import { CardContainer, CardLeft, UpArrow, Score, DownArrow, CardRight, QuoteText, QuoteAuthor } from './Quote.styled.js'
import React, { useState } from 'react';

const Quote = (props) => {

    const [upVote, setupVote] = useState(false)
    const [downVote, setdownVote] = useState(false)
    const ToggleClass = (type) => {
        if (type === 'upVote') {
            upVote ? setupVote(false) : setupVote(true)
            setdownVote(false)
        } else {
            downVote ? setdownVote(false) : setdownVote(true)
            setupVote(false)
        }
    }

    return (
        <div>
            <CardContainer>
                <CardLeft>
                    <UpArrow className={upVote ? "upVoted" : ""} onClick={() => ToggleClass('upVote')} />
                    <Score>{props.score}</Score>
                    <DownArrow className={downVote ? "downVoted" : ""} onClick={() => ToggleClass('downVote')} />
                </CardLeft>

                <CardRight>
                    <QuoteText>{props.quote}</QuoteText>
                    <QuoteAuthor>{props.author}</QuoteAuthor>
                </CardRight>
            </CardContainer>
        </div>
    );
}

export default Quote;