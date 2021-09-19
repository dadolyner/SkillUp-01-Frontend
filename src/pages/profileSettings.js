
const ProfileSettings = () => {
    return (
        <div className="profileSettings-page">            
            <div class="form-body">
                <h2>Profile <span>settings</span></h2>
                <p>Change your profile settings</p>
                
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
                
                <input type="submit" class="top-button" value="Submit" />
            </div>
            
        </div>
    );
}

export default ProfileSettings;