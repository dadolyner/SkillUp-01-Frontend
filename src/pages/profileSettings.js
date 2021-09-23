import { useHistory } from 'react-router-dom';

const ProfileSettings = () => {
    let history = useHistory();

    return (
        <div className="profileSettings-page">
            <div class="row contentBody">
                <div class="col-4"></div>
                <div class="col-4">
                    <h2>Profile <span class="orangeText">settings.</span></h2>
                    <p>Change your profile settings</p>

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

                    <input type="submit" class="btn btn-primary confirmButton signUpButton" value="Submit" />
                    <input type="submit" class="btn btn-primary confirmButton cancelButton" value="Cancel" onClick={() => history.push('/profile')}/>
                </div>
                <div class="col-4"></div>
            </div>

        </div>
    );
}

export default ProfileSettings;