import Avatar from "../multimedia/Avatar.png";
import Quote from "../multimedia/CreateQuote.png";
import TopCurve from "../multimedia/ProfileTopCurve.png";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    let navigate = useNavigate();

    return (
        <div className="profile-page">
            <img src={TopCurve} className="topCurveBackground" alt="" />
            <div className="row">
                <div className="col-2"><h3 className="quotasticHeader" style={{ "color": "white" }}>Quotastic</h3></div>
                <div className="col-8"></div>
                <div className="col-2 TopHrefLinks">
                    <a href="/" style={{ "marginRight": "300px" }}>Home</a>
                    <a href="/profile-settings" style={{ "marginRight": "220px" }}>Settings</a>
                    <a href="/" style={{ "marginRight": "140px" }}>Logout</a>
                    <img src={Avatar} className="smallImgHeader" style={{ "marginRight": "70px" }} alt="" onClick={() => navigate('/profile')}/>
                    <img src={Quote} className="smallImgHeader" style={{ "marginRight": "10px" }} alt="" onClick={() => navigate('/create-quote')} />
                </div>
            </div>

            <div className="profileOverImage">
                <div className="row overProfile">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <img src={Avatar} alt="" style={{"width": "150px"}}/>
                        <h1 className="center">David Škulj</h1>
                    </div>
                    <div className="col-4"></div>
                </div>

                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <div className="quoteKarma center">
                            <h5>Quote Karma</h5>
                            <h6>100</h6>
                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>

            <div className="row">
                <div className="col-4"></div>
                <div className="col-4"> </div>
                <div className="col-4"></div>
            </div>
        </div>
    );
}

export default Profile;