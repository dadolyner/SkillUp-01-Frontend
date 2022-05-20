import styled from 'styled-components';
import '../fonts.css'

export const FormContainer = styled.form`
    box-sizing: border-box;    
    display: grid;
    grid-template-columns: 30% 40% 30%;
    font-family: Poppins;
    min-width: 600px;
`;

export const HalfGrid = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 45% 10% 45%;
`;

export const Label = styled.label`
    box-sizing: border-box;
    display: block;
    margin-top: 20px;
`;

export const Input = styled.input`
    box-sizing: border-box;
    display: block;
    outline: none;
    border:none;
    width: 100%;
    height: 40px;
    padding: 0 15px;
    border: 2px solid #ccc;
    border-radius: 30px;
    font-size: 16px;
    &:focus {
        border: 2px solid #EFB467;
    }
`;

export const TextArea = styled.textarea`
    box-sizing: border-box;
    display: block;
    outline: none;
    border:none;
    width: 100%;
    height: 150px;
    padding: 10px 15px;
    border: 2px solid #ccc;
    border-radius: 30px;
    resize: none;
    font-size: 16px;
    margin-top: 20px;
    &:focus {
        border: 2px solid #EFB467;
    }

`;

export const LinkContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

export const Link = styled.a`
    box-sizing: border-box;
    text-decoration: none;
    color: #EFB467;
    font-size: 16px;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const CancelButton = styled.button`
    box-sizing: border-box;
    outline: none;
    border: none;
    border-radius: 32px !important;
    width: 100%;
    height: 40px;
    background: #fff;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
    color: #EFB467;
    border: 1px solid #EFB467;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background: linear-gradient(240deg, #EFB467 0%, #DE8667 100%);
        color: #fff;
        border: 1px solid #fff;
        transform: scale(1.05);
    }

    &.short {
        width: 150px;
    }
`;

export const ConfirmButton = styled.button`
    box-sizing: border-box;
    outline: none;
    border: none;
    border-radius: 32px;
    width: 100%;
    height: 40px;
    background: linear-gradient(240deg, #EFB467 0%, #DE8667 100%);
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
    color: #fff;
    border: 1px solid #fff;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background: #fff;
        color: #EFB467;
        border: 1px solid #EFB467;
        transform: scale(1.05);
    }

    &.short {
        width: 150px;
    }
`;

export const TitleContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 600px;
    margin: 0 auto;

    @media screen and (max-width: 1250px) {
        width: 100%;
    }
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 48px;
    font-weight: 100;
    width: 600px;
    text-align: center;

    @media screen and (max-width: 1250px) {
        font-size: 24px;
        width: 100%;
    }
`;

export const Paragraph = styled.p`
    width: 400px;
    text-align: center;

    @media screen and (max-width: 1250px) {
        width: 100%;
    }
`;

export const TopButtons = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
`;

export const LeftBox = styled.div`
    justify-content: space-between;
    align-items: center;
`;
export const RightBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 150px;
`;

export const OrangeText = styled.span`
    color: #DE8667;
`;