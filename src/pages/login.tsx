import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useHistory } from 'react-router-dom';
import * as React from 'react';
import axios from '../api/axios';
import { FormContainer, Label, Input, ConfirmButton, LinkContainer, Link } from '../components/FormComponent/Form.styled';

const Login: React.FC = () => {
	let history = useHistory();

	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const loginFunction = async () => {
		const loginResponse = await axios.post('/auth/login', { email, password });
		let accessToken: string = loginResponse.data.accesToken;
		let isUserLoggedIn: string = 'true';
		localStorage.setItem('accessToken', accessToken);
		localStorage.setItem('userLoggedIn', isUserLoggedIn);
		const userInfoResponse = await axios.get('/user/me', { headers: { Authorization: `Bearer ${accessToken}` } });
		let userInfo = userInfoResponse.data.user;
		localStorage.setItem('userInfo', JSON.stringify(userInfo));
		history.push('/profile');
	};

	return (
		<div style={{ marginTop: '100px' }}>
			<FormContainer>
				<div style={{ gridColumn: 2 }}>
					<div style={{ textAlign: 'center' }}>
						<h2>
							Welcome <span style={{ color: '#EFB467' }}>back</span>
						</h2>
						<p>Thank you for comming back. Hope you gave a good day and inspire others.</p>
					</div>

					<Label>Email</Label>
					<Input type={'email'} placeholder={'Email'} value={email} onChange={(e) => setEmail(e.target.value)} />

					<Label>Password</Label>
					<Input type={'password'} placeholder={'Password'} value={password} onChange={(e) => setPassword(e.target.value)} />

					<ConfirmButton onClick={() => loginFunction()}>Login</ConfirmButton>
				
					<LinkContainer>
                        <p>Dont have an account?</p>
                        <Link onClick={() => history.push('/signup')}>SignUp</Link>
                    </LinkContainer>
				</div>
			</FormContainer>
		</div>
	);
};

export default Login;
