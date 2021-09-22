import { useHistory } from 'react-router-dom';

const ProfileSettings = () => {
    let history = useHistory();

    return (
        <div className="profileSettings-page">
            <div class="row contentBody">
                <div class="col-4"></div>
                <div class="col-4">
                    <h2>Profile <span>settings</span></h2>
                    <p>Change your profile settings</p>

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

                    <input type="submit" class="btn btn-primary confirmButton" value="Submit" />
                    <input type="submit" class="btn btn-primary confirmButton" value="Cancel" onClick={() => history.push('/profile')}/>
                </div>
                <div class="col-4"></div>
            </div>

        </div>
    );
}

export default ProfileSettings;