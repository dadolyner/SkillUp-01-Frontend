import '../css/style.css'
import { useHistory } from 'react-router-dom';

const SignUp = () => {
    let history = useHistory();

    return (
        <div className="signup-page">
            <div class="row">
                <div class="col-1"><h3 class="quotasticHeader">Quotastic</h3></div>
                <div class="col-10"></div>
                <div class="col-1"><button class="btn btn-primary topButton" onClick={() => history.push('/login')}>Login</button></div>
            </div>

            <div class="row contentBody">
                <div class="col-4"></div>
                <div class="col-4">
                    <h2>What is your name <span>back!</span></h2>
                    <p>Your name will appear on quotes and your public profile.</p>

                    <p>Email</p>
                    <input type="email" class="form-control" placeholder="Email" />

                    <p>First Name</p>
                    <input type="text" class="form-control" placeholder="First Name" />

                    <p>Last Name</p>
                    <input type="text" class="form-control" placeholder="Last Name" />

                    <p>Password</p>
                    <input type="password" class="form-control" placeholder="Password" />

                    <p>Confirm Password</p>
                    <input type="password" class="form-control" placeholder="Confirm Password" />

                    <input type="submit" class="btn btn-primary confirmButton" value="Signup" />
                </div>
                <div class="col-4"></div>

            </div>
        </div>
    );
}

export default SignUp;