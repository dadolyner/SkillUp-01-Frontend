import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { FormContainer, Label, Input, LinkContainer, Link, ConfirmButton } from '../components/FormComponent/Form.styled.js'
import axios from '../api/axios'

const Login = () => {
    let history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginFunction = async () => {
        await axios.post('/auth/login', { email, password })
            .then(response => {
                let accessToken = response.data.accesToken
                let isUserLoggedIn = true;
                localStorage.setItem('accessToken', accessToken)
                localStorage.setItem('userLoggedIn', isUserLoggedIn)
                history.push('/profile')
            })
            .catch(error => {
                console.log(error)
            }, [])
    }

    return (
        <div style={{marginTop: '150px'}}>
            <FormContainer>
                <div style={{ gridColumn: 2 }}>
                    <div style={{ textAlign: 'center' }}>
                        <h2>Welcome <span style={{ color: '#EFB467' }}>back</span></h2>
                        <p>Thank you for comming back. Hope you gave a good day and inspire others.</p>
                    </div>

                    <Label>Email</Label>
                    <Input type={'email'} placeholder={'Email'} value={email} onChange={(e) => setEmail(e.target.value)} />

                    <Label>Password</Label>
                    <Input type={'password'} placeholder={'Password'} value={password} onChange={(e) => setPassword(e.target.value)} />

                    <ConfirmButton onClick={() => loginFunction()}>Login</ConfirmButton>
                    <LinkContainer>
                        <p>Want to create an account?</p>
                        <Link onClick={() => history.push('/signup')}>SignUp</Link>
                    </LinkContainer>
                </div>
            </FormContainer>
        </div>
    );
}

export default Login;