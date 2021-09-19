import '../css/style.css'

const SignUp = () => {
    return (
        <div className="signup-page">
            <div class="signup-header">
                <h3>Quotastic</h3>
                <button class="top-button">Login</button>
            </div>
            
            <div class="form-body">
                <h2>What is your name <span>back!</span></h2>
                <p>Your name will appear on quotes and your public profile.</p>
                
                <p>Email</p>
                <input type="email" class="credentials-input" placeholder="Email" />

                <p>First Name</p>
                <input type="text" class="credentials-input-short" placeholder="First Name" />

                <p>Last Name</p>
                <input type="text" class="credentials-input-short" placeholder="Last Name" />
                
                <p>Password</p>
                <input type="password" class="credentials-input" placeholder="Password" />

                <p>Confirm Password</p>
                <input type="password" class="credentials-input" placeholder="Confirm Password" />
                
                <input type="submit" class="button-input" value="Signup" />
            </div>
            
        </div>
    );
}

export default SignUp;