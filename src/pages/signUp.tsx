import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { FormContainer, Label, Input, ConfirmButton, HalfGrid, LinkContainer, Link } from '../components/FormComponent/Form.styled';
import axios from '../api/axios'

const SignUp: React.FC = () => {
    let history = useHistory();

    const [first_name, setFirstName] = React.useState('')
    const [last_name, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfPassword] = React.useState('')

    const signUpFunction = async() => {
        if(password === confirmPassword){
            await axios.post('/auth/signup', {first_name, last_name, email, username, password, confirmPassword})
            .then(() => {
                history.push('/login')
            })
        } else {
            return
        }
    }

    return (
        <div style={{ marginTop: '100px' }}>
            <FormContainer>
                <div style={{ gridColumn: 2 }}>
                    <div style={{ textAlign: 'center' }}>
                        <h2>What is your <span style={{ color: '#EFB467' }}>name?</span></h2>
                        <p>Your name will appear on quotes and your public profile.</p>
                    </div>

                    <Label>Email</Label>
                    <Input type={'email'} placeholder={'Email'} onChange={(e) => setEmail(e.target.value)} />

                    <HalfGrid>
                        <div style={{ gridColumn: 1 }}>
                            <Label>First Name</Label>
                            <Input type={'text'} placeholder={'First Name'} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div style={{ gridColumn: 3 }}>
                            <Label>Last Name</Label>
                            <Input type={'text'} placeholder={'Last Name'} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                    </HalfGrid>
                    <Label>Username</Label>
                    <Input type={'text'} placeholder={'Username'} onChange={(e) => setUsername(e.target.value)} />

                    <Label>Password</Label>
                    <Input type={'password'} placeholder={'Password'} onChange={(e) => setPassword(e.target.value)} />

                    <Label>Confirm Password</Label>
                    <Input type={'password'} placeholder={'Confirm Password'} onChange={(e) => setConfPassword(e.target.value)} />

                    <ConfirmButton onClick={() => signUpFunction()}>SignUp</ConfirmButton>

                    <LinkContainer>
                        <p>Already have an account?</p>
                        <Link onClick={() => history.push('/login')}>LogIn</Link>
                    </LinkContainer>
                </div>
            </FormContainer>
        </div>
    );
}

export default SignUp;