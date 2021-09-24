import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';
import axios from '../api/axios'

const Login = () => {
    let history = useHistory();
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginFunction = async() => {
        await axios.post('/auth/login', {email, password})
        .then(response => {        
            history.push('/profile')
        })
    }

    return (
        <div className="login-page">
            <div className="row">
                <div className="col-1"><h3 className="quotasticHeader">Quotastic</h3></div>
                <div className="col-10"></div>
                <div className="col-1"><button className="btn btn-primary topButton signUpButton" onClick={() => history.push('/signup')}>Sign Up</button></div>
            </div>

            <div className="row contentBody">
                <div className="col-4"></div>
                <div className="col-4">
                    <h2 style={{"text-align": "center"}}>Welcome <span className="orangeText">back</span></h2>
                    <p style={{"text-align": "center"}}>Thank you for comming back. Hope you gave a good day and inspire others.</p>

                    <p>Email</p>
                    <input type="email" className="form-control inputField" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                    <p>Password</p>
                    <input type="password" className="form-control inputField" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                    <input type="submit" className="btn btn-primary confirmButton loginButton" value="Login" style={{"width":"100%"}} onClick={loginFunction}/>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    );
}

export default Login;