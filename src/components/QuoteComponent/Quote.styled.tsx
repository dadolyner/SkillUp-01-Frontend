import styled from 'styled-components';

export const CardContainer = styled.div`
    flex: 1 0 21%;
    position: relative;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.3);
    min-height: 180px;
    max-height: 250px;
    max-width: 350px;
    min-width: 350px;
    display: flex;
    flex-direction: row;
    font-family: Poppins;
    margin: 10px;
    background-color: #fff;
    padding: 10px;
`;

export const CardLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    margin-left: 10px;
`;

export const UpArrow = styled.div`
    margin: 0 auto;
    width: 10px;
    height: 10px;
    border-right: 0.2em solid black;
    border-top: 0.2em solid black;
    transform: rotate(-45deg);
    &:hover {
        cursor: pointer;

    }
    &.upVoted {
        border-right: 0.2em solid #EFB467;
        border-top: 0.2em solid #EFB467;
        pointer-events: none;
    }
`;
export const Score = styled.div`
    text-align: center;
`;

export const DownArrow = styled.div`
    margin: 0 auto;
    width: 10px;
    height: 10px;
    border-right: 0.2em solid black;
    border-top: 0.2em solid black;
    transform: rotate(135deg);
    &:hover {
        cursor: pointer;

    }
    &.downVoted {
        border-right: 0.2em solid #EFB467;
        border-top: 0.2em solid #EFB467;
        pointer-events: none;
    }
`;

export const CardRight = styled.div`
    display: flex;
    flex-direction: column;
`;

export const QuoteText = styled.div`
    vertical-align: center;
    padding: 0 15px 15px 15px;
`;

export const QuoteAuthor = styled.div`
    margin-top: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    bottom: 5px;
    padding: 0 15px;

    &:hover {
        cursor: pointer;
    }
`;