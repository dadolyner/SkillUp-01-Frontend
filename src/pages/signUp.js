import '../css/style.css'
import { useHistory } from 'react-router-dom';
import Avatar from "../multimedia/Avatar.png";
import axios from '../api/axios'
import {useState} from 'react';

const SignUp = () => {
    let history = useHistory();

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfPassword] = useState('')

    const signUpFunction = async() => {
        if(password === confirmPassword){
            await axios.post('/auth/signup', {first_name, last_name, email, username, password, confirmPassword})
            .then(response => {
                history.push('/login')
            })
        } else {
            return
        }
    }

    return (
        <div className="signup-page">
            <div className="row">
                <div className="col-1"><h3 className="quotasticHeader">Quotastic</h3></div>
                <div className="col-10"></div>
                <div className="col-1"><button className="btn btn-primary topButton loginButton" onClick={() => history.push('/login')}>Login</button></div>
            </div>

            <div className="row contentBody">
                <div className="col-4"></div>
                <div className="col-4">
                    <h2 style={{ "text-align": "center" }}>What is your <span className="orangeText">name?</span></h2>
                    <p style={{ "text-align": "center" }}>Your name will appear on quotes and your public profile.</p>

                    <img src={Avatar} alt="" style={{ "width": "150px" }} />
                    <p>Email</p>
                    <input type="email" className="form-control inputField" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>

                    <div className="row">
                        <div className="col">
                            <p>First Name</p>
                            <input type="text" className="form-control inputField inputFieldShort" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)}/>
                        </div>
                        <div className="col">
                            <p>Last Name</p>
                            <input type="text" className="form-control inputField inputFieldShort" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)}/>
                        </div>
                    </div>

                    <p>Username</p>
                    <input type="email" className="form-control inputField" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>

                    <p>Password</p>
                    <input type="password" className="form-control inputField" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>

                    <p>Confirm Password</p>
                    <input type="password" className="form-control inputField" placeholder="Confirm Password" onChange={(e)=>setConfPassword(e.target.value)}/>

                    <input type="submit" className="btn btn-primary confirmButton signUpButton" value="Signup" style={{ "width": "100%" }} onClick={signUpFunction}/>


                    <div className="row">
                        <div className="col">
                            <p>Already have an account?</p>
                        </div>
                        <div className="col loginHref">
                            <a href="/login" className="loginHref">Signin</a>
                        </div>
                    </div>


                </div>
                <div className="col-4"></div>

            </div>
        </div>
    );
}

export default SignUp;