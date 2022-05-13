import styled from 'styled-components';
import Avatar from '../multimedia/Avatar.png';
import TopCurve from "../multimedia/ProfileTopCurve.png";
import CreateQuote from '../multimedia/CreateQuote.png';

export const Container = styled.div`
    padding: 0 100px;

    background-image: url(${TopCurve});
	background-repeat: no-repeat;
	background-size: 100% 1600px;
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

export const User = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const UserImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

export const UserName = styled.h3`
    font-size: 32px;
    font-weight: 100;
    color: #fff;
    text-align: center;
`;

export const UserKarma = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    padding: 16px 32px;
    border-radius: 10px;
    background-color: #fff;
`;

export const UsersQuote = styled.div`
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const UsersQuoteTitle = styled.h3`
    color: #DE8667;
    font-size: 32px;
    font-weight: 100;
    text-align: center;
`;

export const LikedTitle = styled.h3`
    margin-top: 100px;
    font-size: 32px;
    font-weight: 100;
    text-align: left;
`;

export const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 200px;
`;