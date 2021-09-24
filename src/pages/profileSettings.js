import { useHistory } from 'react-router-dom';

const ProfileSettings = () => {
    let history = useHistory();

    return (
        <div className="profileSettings-page">
            <div className="row contentBody">
                <div className="col-4"></div>
                <div className="col-4">
                    <h2>Profile <span className="orangeText">settings.</span></h2>
                    <p>Change your profile settings</p>

                    <p>Email</p>
                    <input type="email" className="form-control inputField" placeholder="Email" />

                    <div className="row">
                        <div className="col">
                            <p>First Name</p>
                            <input type="text" className="form-control inputField inputFieldShort" placeholder="First Name" />
                        </div>
                        <div className="col">
                            <p>Last Name</p>
                            <input type="text" className="form-control inputField inputFieldShort" placeholder="Last Name" />
                        </div>
                    </div>

                    <p>Password</p>
                    <input type="password" className="form-control inputField" placeholder="Password" />

                    <p>Confirm Password</p>
                    <input type="password" className="form-control inputField" placeholder="Confirm Password" />

                    <input type="submit" className="btn btn-primary confirmButton signUpButton" value="Submit" />
                    <input type="submit" className="btn btn-primary confirmButton cancelButton" value="Cancel" onClick={() => history.push('/profile')}/>
                </div>
                <div className="col-4"></div>
            </div>

        </div>
    );
}

export default ProfileSettings;