import '../css/style.css'
import { useHistory } from 'react-router-dom';
import Avatar from "../multimedia/Avatar.png";

const SignUp = () => {
    let history = useHistory();

    return (
        <div className="signup-page">
            <div class="row">
                <div class="col-1"><h3 class="quotasticHeader">Quotastic</h3></div>
                <div class="col-10"></div>
                <div class="col-1"><button class="btn btn-primary topButton loginButton" onClick={() => history.push('/login')}>Login</button></div>
            </div>

            <div class="row contentBody">
                <div class="col-4"></div>
                <div class="col-4">
                    <h2 style={{ "text-align": "center" }}>What is your <span class="orangeText">name?</span></h2>
                    <p style={{ "text-align": "center" }}>Your name will appear on quotes and your public profile.</p>

                    <img src={Avatar} alt="" style={{ "width": "150px" }} />
                    <p>Email</p>
                    <input type="email" class="form-control inputField" placeholder="Email" />

                    <div class="row">
                        <div class="col">
                            <p>First Name</p>
                            <input type="text" class="form-control inputField inputFieldShort" placeholder="First Name" />
                        </div>
                        <div class="col">
                            <p>Last Name</p>
                            <input type="text" class="form-control inputField inputFieldShort" placeholder="Last Name" />
                        </div>
                    </div>

                    <p>Password</p>
                    <input type="password" class="form-control inputField" placeholder="Password" />

                    <p>Confirm Password</p>
                    <input type="password" class="form-control inputField" placeholder="Confirm Password" />

                    <input type="submit" class="btn btn-primary confirmButton signUpButton" value="Signup" style={{ "width": "100%" }} />


                    <div class="row">
                        <div class="col">
                            <p>Already have an account?</p>
                        </div>
                        <div class="col loginHref">
                            <a href="/login" class="loginHref">Signin</a>
                        </div>
                    </div>


                </div>
                <div class="col-4"></div>

            </div>
        </div>
    );
}

export default SignUp;