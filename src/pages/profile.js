import Avatar from "../multimedia/Avatar.png";
import Quote from "../multimedia/CreateQuote.png";
import TopCurve from "../multimedia/ProfileTopCurve.png";
import { useHistory } from 'react-router-dom';

const Profile = () => {
    let history = useHistory();

    return (
        <div className="profile-page">
            <img src={TopCurve} class="topCurveBackground" alt="" />
            <div class="row">
                <div class="col-2"><h3 class="quotasticHeader" style={{ "color": "white" }}>Quotastic</h3></div>
                <div class="col-8"></div>
                <div class="col-2 TopHrefLinks">
                    <a href="/" style={{ "marginRight": "300px" }}>Home</a>
                    <a href="/profile-settings" style={{ "marginRight": "220px" }}>Settings</a>
                    <a href="/" style={{ "marginRight": "140px" }}>Logout</a>
                    <img src={Avatar} class="smallImgHeader" style={{ "marginRight": "70px" }} alt="" onClick={() => history.push('/profile')}/>
                    <img src={Quote} class="smallImgHeader" style={{ "marginRight": "10px" }} alt="" onClick={() => history.push('/create-quote')} />
                </div>
            </div>

            <div class="profileOverImage">
                <div class="row overProfile">
                    <div class="col-4"></div>
                    <div class="col-4">
                        <img src={Avatar} alt="" />
                        <h1 class="center">David Škulj</h1>
                    </div>
                    <div class="col-4"></div>
                </div>

                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4">
                        <div class="quoteKarma center">
                            <h5>Quote Karma</h5>
                            <h6>100</h6>
                        </div>
                    </div>
                    <div class="col-4"></div>
                </div>
            </div>

            <div class="row">
                <div class="col-4"></div>
                <div class="col-4"> </div>
                <div class="col-4"></div>
            </div>
        </div>
    );
}

export default Profile;