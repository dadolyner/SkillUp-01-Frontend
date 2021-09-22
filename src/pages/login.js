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
                <div class="col-1"><button class="btn btn-primary topButton" onClick={() => history.push('/signup')}>Sign Up</button></div>
            </div>

            <div class="row contentBody">
                <div class="col-4"></div>
                <div class="col-4">
                    <h2>Welcome <span>back!</span></h2>
                    <p>Thank you for comming back. Hope you gave a good day and inspire others.</p>

                    <p>Email</p>
                    <input type="email" class="form-control" placeholder="Email" />
                    <p>Password</p>
                    <input type="password" class="form-control" placeholder="Password" />
                    <input type="submit" class="btn btn-primary confirmButton" value="Login" onClick={() => history.push('/profile')}/>
                </div>
                <div class="col-4"></div>
            </div>
        </div>
    );
}

export default Login;