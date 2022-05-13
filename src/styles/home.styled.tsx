import styled from 'styled-components';
import Background from '../multimedia/Background.png';
import Avatar from '../multimedia/Avatar.png';
import CreateQuote from '../multimedia/CreateQuote.png';

export const Container = styled.div`
    background-image: url(${Background});
	background-repeat: no-repeat;
	background-size: cover;

    padding: 0 100px;
`;

export const TopButtons = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

export const LeftBox = styled.div`
    align-items: flex-start;
`;
export const RightBox = styled.div`
    display: flex;
    width: 400px;
    justify-content: space-between;
    align-items: center;

    button {margin: 0 10px; }

    @media screen and (max-width: 1250px) {
        display: none;
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 150px;
    @media screen and (max-width: 1250px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 64px;
    font-weight: 100;
    width: 400px;
`;

export const Paragraph = styled.p`
    width: 400px;
`;

export const Slogan = styled.h2`
    margin-top: 150px;
    font-size: 38px;
    font-weight: 100;
    text-align: center;
`;

export const BodyTitle = styled.h3`
    font-size: 32px;
    font-weight: 100;
    text-align: center;
    margin-top: 150px;
`;

export const BodyDesc= styled.p`
    font-size: 20px;
    font-weight: 100;
    text-align: center;
`;

export const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 200px;
`;

export const OrangeText = styled.span`
    color: #DE8667;
`;

export const LinkerLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    margin: 0 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        color: #ccc;
        transform: scale(1.05);
    }
`;

export const LinkerButton = styled.button`
    border: 0;
    outline: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: cover;

    &.profile { background-image: url(${Avatar}); }
    &.quote { background-image: url(${CreateQuote}); }
`;