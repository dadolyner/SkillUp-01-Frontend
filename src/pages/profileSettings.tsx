import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContainer, HalfGrid, TitleContainer, Title, Paragraph, Label, Input, ConfirmButton, OrangeText } from '../components/FormComponent/Form.styled';
import axios from '../api/axios'
import UpdateUserInfo from '../components/UpdateUserInfo';

const ProfileSettings: React.FC = () => {
    const [first_name, setFirstName] = React.useState('')
    const [last_name, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfPassword] = React.useState('')

    const changeSettingsFunction = async (event: any) => {
        event.preventDefault();
        try {
            if (password === confirmPassword) {
                await axios.patch('/auth/update', { first_name, last_name, email, username, password }, { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } })
                await UpdateUserInfo();
                navigate('/profile')
            } else {
                return
            }
        } catch(error) {}
    }
    
    let navigate = useNavigate();

    return (
        <>
        <div style={{marginTop: '100px'}}>
            <FormContainer>
                <div style={{ gridColumn: 2 }}>
                    <TitleContainer>
						<Title>Profile <OrangeText>settings</OrangeText></Title>
						<Paragraph>Change your profile settings</Paragraph>
					</TitleContainer>

                    <Label>Email</Label>
                    <Input type={'email'} placeholder={'Email'} value={email} onChange={(e) => setEmail(e.target.value)} />
                    
                    <Label>Username</Label>
                    <Input type={'text'} placeholder={'Username'} value={username} onChange={(e) => setUsername(e.target.value)} />

                    <HalfGrid>
                        <div style={{ gridColumn: 1 }}>
                            <Label>First Name</Label>
                            <Input type={'text'} placeholder={'First Name'} value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div style={{ gridColumn: 3 }}>
                            <Label>Last Name</Label>
                            <Input type={'text'} placeholder={'Last Name'} value={last_name} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                    </HalfGrid>

                    <Label>Password</Label>
                    <Input type={'password'} placeholder={'Password'} value={password} onChange={(e) => setPassword(e.target.value)} />

                    <Label>Confirm Password</Label>
                    <Input type={'password'} placeholder={'Confirm Password'} value={confirmPassword} onChange={(e) => setConfPassword(e.target.value)} />

                    <br/>
                    
                    <ConfirmButton onClick={(event) => changeSettingsFunction(event)}>Change settings</ConfirmButton>
                </div>
            </FormContainer>
        </div>
        </>
    );
}

export default ProfileSettings;