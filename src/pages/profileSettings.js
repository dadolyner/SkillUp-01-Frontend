import { useHistory } from 'react-router-dom';
import { useState } from 'react'
import { FormContainer, Label, Input, HalfGrid, Link, ConfirmButton } from '../components/FormComponent/Form.styled.js'
import axios from '../api/axios'

const ProfileSettings = () => {
    let history = useHistory();

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfPassword] = useState('')

    const changeSettingsFunction = async () => {
        if (password === confirmPassword) {
            await axios.post('/auth/signup', { first_name, last_name, email, password, confirmPassword })
                .then(() => {
                    history.push('/login')
                })
        } else {
            return
        }
    }

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