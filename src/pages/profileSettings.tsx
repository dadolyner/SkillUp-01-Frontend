import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContainer, Label, Input, ConfirmButton, HalfGrid} from '../components/FormComponent/Form.styled';
import axios from '../api/axios'

const ProfileSettings: React.FC = () => {
    const [first_name, setFirstName] = React.useState('')
    const [last_name, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfPassword] = React.useState('')

    const changeSettingsFunction = async () => {
        if (password === confirmPassword) {
            await axios.post('/auth/signup', { first_name, last_name, email, password, confirmPassword })
            navigate('/login')
        } else {
            return
        }
    }
    
    let navigate = useNavigate();

    return (
        <div style={{marginTop: '100px'}}>
            <FormContainer>
                <div style={{ gridColumn: 2 }}>
                    <div style={{ textAlign: 'center' }}>
                        <h2>Profile <span style={{ color: '#EFB467' }}>settings</span></h2>
                        <p>Change your profile settings</p>
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

                    <Label>Password</Label>
                    <Input type={'password'} placeholder={'Password'} onChange={(e) => setPassword(e.target.value)} />

                    <Label>Confirm Password</Label>
                    <Input type={'password'} placeholder={'Confirm Password'} onChange={(e) => setConfPassword(e.target.value)} />

                    <ConfirmButton onClick={() => changeSettingsFunction()}>Change settings</ConfirmButton>
                </div>
            </FormContainer>
        </div>
    );
}

export default ProfileSettings;