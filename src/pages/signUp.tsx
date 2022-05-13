import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContainer, HalfGrid, TopButtons, LeftBox, RightBox, TitleContainer, Title, Paragraph, Label, Input, ConfirmButton, CancelButton, OrangeText } from '../components/FormComponent/Form.styled';
import axios from '../api/axios'

const SignUp: React.FC = () => {
    let navigate = useNavigate();

    const [first_name, setFirstName] = React.useState('')
    const [last_name, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfPassword] = React.useState('')

    const signUpFunction = async() => {
        if(password === confirmPassword){
            await axios.post('/auth/signup', {first_name, last_name, email, username, password, confirmPassword})
            navigate('/login')    
        } else {
            return
        }
    }

    return (
        <>
            <TopButtons>
				<LeftBox><h3 onClick={() => navigate('/')}>Quotastic</h3></LeftBox>
				<RightBox>
					<CancelButton className='short' onClick={() => navigate('/login')}>Login</CancelButton>
				</RightBox>
			</TopButtons>

            <FormContainer>
                <div style={{ gridColumn: 2 }}>
                    <TitleContainer>
						<Title>What is your <OrangeText>name?</OrangeText></Title>
						<Paragraph>Your name will appear on quotes and your public profle.</Paragraph>
					</TitleContainer>

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

                    <br/>
                    
                    <ConfirmButton onClick={() => signUpFunction}>SignUp</ConfirmButton>
                </div>
            </FormContainer>
        </>
    );
}

export default SignUp;