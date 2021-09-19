import '../css/login.css'

const Login = () => {
    return (
        <div className="login-page">
            <div class="login-header">
                <h3>Quotastic</h3>
                <button class="signup-button">Sign Up</button>
            </div>
            
            <div class="login-body">
                <h2>Welcome <span>back!</span></h2>
                <p>Thank you for comming back. Hope you gave a good day and inspire others.</p>
                
                <p class="input-text">Email</p>
                <input type="email" class="login-input" placeholder="Email" />
                <p>Password</p>
                <input type="password" class="login-input" placeholder="Password" />
                <input type="submit" class="login-button" value="Login" />
            </div>
            
        </div>
    );
}

export default Login;