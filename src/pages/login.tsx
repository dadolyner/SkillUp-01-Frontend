import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import axios from '../api/axios';
import { FormContainer, TopButtons, LeftBox, RightBox, TitleContainer, Title, Paragraph, Label, Input, ConfirmButton, OrangeText } from '../components/FormComponent/Form.styled';

const Login: React.FC = () => {
	let navigate = useNavigate();

	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const loginFunction = async (event: any) => {
		event.preventDefault();
		try {
			const loginResponse = await axios.post('/auth/login', { email, password });
			let accesToken = loginResponse.data.accesToken;
			let isUserLoggedIn = 'true';
			localStorage.setItem('accessToken', accesToken);
			localStorage.setItem('userLoggedIn', isUserLoggedIn);
			const userInfoResponse = await axios.get('/user/me', { headers: { Authorization: `Bearer ${accesToken}` } });
			localStorage.setItem('userInfo', JSON.stringify(userInfoResponse.data));
			navigate('/profile');
		} catch (error) { console.log(error); }
	};

	return (
		<>
			<TopButtons>
				<LeftBox><h3 onClick={() => navigate('/')}>Quotastic</h3></LeftBox>
				<RightBox>
					<ConfirmButton className='short' onClick={() => navigate('/signup')}>SignUp</ConfirmButton>
				</RightBox>
			</TopButtons>
			
			<FormContainer>
				<div style={{ gridColumn: 2 }}>
					<TitleContainer>
						<Title>Welcome <OrangeText>back</OrangeText></Title>
						<Paragraph>Thank you for comming back. Hope you gave a good day and inspire others.</Paragraph>
					</TitleContainer>

					<Label>Email</Label>
					<Input type={'email'} placeholder={'Email'} onChange={(e) => setEmail(e.target.value)} />

					<Label>Password</Label>
					<Input type={'password'} placeholder={'Password'} onChange={(e) => setPassword(e.target.value)} />

					<br/>

					<ConfirmButton onClick={(event) => loginFunction(event)}>Login</ConfirmButton>
				</div>
			</FormContainer>
		</>
	);
};

export default Login;
