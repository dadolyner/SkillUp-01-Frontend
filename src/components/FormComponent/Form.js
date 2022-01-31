import { FormContainer, HalfGrid, Label, Input, TextArea, Link, CancelButton, ConfirmButton } from './Form.styled.js'

const Form = (props) => {
    if (props.type === 'login') {
        return (
            <div>
                <FormContainer>
                    <div style={{ gridColumn: 2 }}>
                        <div style={{ textAlign: 'center' }}>
                            <h2>Welcome <span style={{ color: '#EFB467' }}>back</span></h2>
                            <p>Thank you for comming back. Hope you gave a good day and inspire others.</p>
                        </div>

                        <Label>Email</Label>
                        <Input type={'email'} placeholder={'Email'} />

                        <Label>Password</Label>
                        <Input type={'password'} placeholder={'Password'} />

                        <ConfirmButton>Login</ConfirmButton>
                    </div>
                </FormContainer>
            </div>
        );
    }
    else if (props.type === 'signup') {
        return (
            <div>
                <FormContainer>
                    <div style={{ gridColumn: 2 }}>
                        <div style={{ textAlign: 'center' }}>
                            <h2>What is your <span style={{ color: '#EFB467' }}>name?</span></h2>
                            <p>Your name will appear on quotes and your public profile.</p>
                        </div>

                        <Label>Email</Label>
                        <Input type={'email'} placeholder={'Email'} />

                        <HalfGrid>
                            <div style={{ gridColumn: 1 }}>
                                <Label>First Name</Label>
                                <Input type={'text'} placeholder={'First Name'} />
                            </div>
                            <div style={{ gridColumn: 3 }}>
                                <Label>Last Name</Label>
                                <Input type={'text'} placeholder={'Last Name'} />
                            </div>
                        </HalfGrid>
                        <Label>Username</Label>
                        <Input type={'text'} placeholder={'Username'} />

                        <Label>Password</Label>
                        <Input type={'password'} placeholder={'Password'} />

                        <Label>Confirm Password</Label>
                        <Input type={'password'} placeholder={'Confirm Password'} />

                        <ConfirmButton>SignUp</ConfirmButton>
                    </div>
                </FormContainer>
            </div>
        );
    }
    else if (props.type === 'create-quote') {
        return (
            <div>
                <FormContainer>
                    <div style={{ gridColumn: 2 }}>
                        <div>
                            <h2>Are you feeling <span style={{ color: '#EFB467' }}>inspired?</span></h2>
                            <p>You can post one quote. You can delete it on your profile or edit it inthis window</p>
                        </div>

                        <TextArea placeholder={'Quote'}></TextArea>

                        <div style={{ gridColumn: '2' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '20% 2% 20% 58%' }}>
                                <ConfirmButton>Submit</ConfirmButton>
                                <div></div>
                                <CancelButton>Cancel</CancelButton>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </FormContainer>
            </div>
        );
    }
    else if (props.type === 'profile-settings') {
        return (
            <div>
                <FormContainer>
                    <div style={{ gridColumn: 2 }}>
                        <div>
                            <h2>Profile <span style={{ color: '#EFB467' }}>settings</span></h2>
                            <p>Change your profile settings</p>
                        </div>

                        <Label>Email</Label>
                        <Input type={'email'} placeholder={'Email'} />

                        <HalfGrid>
                            <div style={{ gridColumn: 1 }}>
                                <Label>First Name</Label>
                                <Input type={'text'} placeholder={'First Name'} />
                            </div>
                            <div style={{ gridColumn: 3 }}>
                                <Label>Last Name</Label>
                                <Input type={'text'} placeholder={'Last Name'} />
                            </div>
                        </HalfGrid>

                        <Label>Password</Label>
                        <Input type={'password'} placeholder={'Password'} />

                        <Label>Confirm Password</Label>
                        <Input type={'password'} placeholder={'Confirm Password'} />

                        <ConfirmButton>Change settings</ConfirmButton>
                    </div>
                </FormContainer>
            </div>
        );
    }
}

export default Form;