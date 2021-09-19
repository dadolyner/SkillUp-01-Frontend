import '../css/style.css'

const Login = () => {
    return (
        <div className="login-page">
            <div class="login-header">
                <h3>Quotastic</h3>
                <button class="top-button">Sign Up</button>
            </div>
            
            <div class="form-body">
                <h2>Welcome <span>back!</span></h2>
                <p>Thank you for comming back. Hope you gave a good day and inspire others.</p>
                
                <p>Email</p>
                <input type="email" class="credentials-input" placeholder="Email" />
                <p>Password</p>
                <input type="password" class="credentials-input" placeholder="Password" />
                <input type="submit" class="button-input" value="Login" />
            </div>
            
        </div>
    );
}

export default Login;