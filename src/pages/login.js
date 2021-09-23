import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useHistory } from 'react-router-dom';

const Login = () => {
    let history = useHistory();
    
    return (
        <div className="login-page">
            <div class="row">
                <div class="col-1"><h3 class="quotasticHeader">Quotastic</h3></div>
                <div class="col-10"></div>
                <div class="col-1"><button class="btn btn-primary topButton signUpButton" onClick={() => history.push('/signup')}>Sign Up</button></div>
            </div>

            <div class="row contentBody">
                <div class="col-4"></div>
                <div class="col-4">
                    <h2 style={{"text-align": "center"}}>Welcome <span class="orangeText">back</span></h2>
                    <p style={{"text-align": "center"}}>Thank you for comming back. Hope you gave a good day and inspire others.</p>

                    <p>Email</p>
                    <input type="email" class="form-control inputField" placeholder="Email" />
                    <p>Password</p>
                    <input type="password" class="form-control inputField" placeholder="Password" />
                    <input type="submit" class="btn btn-primary confirmButton loginButton" value="Login" style={{"width":"100%"}} onClick={() => history.push('/profile')}/>
                </div>
                <div class="col-4"></div>
            </div>
        </div>
    );
}

export default Login;