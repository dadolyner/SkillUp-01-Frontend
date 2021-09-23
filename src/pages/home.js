import { useHistory } from 'react-router-dom';
import Avatar from "../multimedia/Avatar.png";
import Quote from "../multimedia/CreateQuote.png";

let isLoggedIn = true;
const Home = () => {
    let history = useHistory();

    //user is not logged in
    if (!isLoggedIn) {
        return (
            <div className="main-page">
                <div class="row">
                    <div class="col-1"><h3 class="quotasticHeader">Quotastic</h3></div>
                    <div class="col-10"></div>
                    <div class="col-1">
                        <button class="btn btn-primary topButton signUpButton" style={{ "marginRight": "120px" }} onClick={() => history.push('/signup')}>Signup</button>
                        <button class="btn btn-primary topButton loginButton" onClick={() => history.push('/login')}>Login</button>
                    </div>
                </div>

                <div class="row contentBody">
                    <div class="col-5">
                        <div style={{ "marginLeft": "100px" }}>
                            <h1>Welcome to <span class="orangeText">Quotastic</span></h1>
                            <p>Quotastic is free online platform for you to explore the  quips, quotes, and proverbs. Sign up and express yourself.</p>
                            <button class="btn btn-primary signUpButton" style={{ "marginRight": "120px" }} onClick={() => history.push('/signup')}>Signup</button>
                        </div>
                    </div>
                    <div class="col-2"></div>
                    <div class="col-5 headerQuotes">
                        <div class="headerVotes">

                            <h4>153</h4>
                        </div>
                        <div class="headerQuoteText">
                            <h5><span class="headerQUoteText">Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.</span></h5>
                            <img src={Avatar} alt="" class="smallImg" /><h6>Islam Mušić</h6>
                        </div>
                    </div>
                </div>

                <div class="row contentBody">
                    <div class="col-4"></div>
                    <div class="col-4" style={{ "textAlign": "center" }}>
                        <h2>Explore the world of <span class="orangeText">fantastic quotes</span></h2>
                    </div>
                    <div class="col-4"></div>
                </div>

                <div class="row contentBody">
                    <div class="col-4"></div>
                    <div class="col-4" style={{ "textAlign": "center" }}>
                        <h4 class="orangeText">Most upvoted quotes</h4>
                        <p>Most upvoted quotes on the platform. Sign up or login to like the quotes and keep them saved in your profile</p>
                    </div>
                    <div class="col-4"></div>
                </div>
            </div>
        );
    }

    //user is logged in
    else {
        return (
            <div className="main-page">
                <div class="row">
                    <div class="col-2"><h3 class="quotasticHeader">Quotastic</h3></div>
                    <div class="col-8"></div>
                    <div class="col-2 TopHrefLinks">
                        <a href="/" style={{ "marginRight": "300px" }}>Home</a>
                        <a href="/profile-settings" style={{ "marginRight": "220px" }}>Settings</a>
                        <a href="/" style={{ "marginRight": "140px" }}>Logout</a>
                        <img src={Avatar} class="smallImgHeader" style={{ "marginRight": "70px" }} alt="" onClick={() => history.push('/profile')} />
                        <img src={Quote} class="smallImgHeader" style={{ "marginRight": "10px" }} alt="" onClick={() => history.push('/create-quote')} />
                    </div>
                </div>

                <div class="row contentBody">
                    <div class="col-4"></div>
                    <div class="col-4" style={{ "textAlign": "center" }}>
                        <h4 class="orangeText">Quote of the day</h4>
                        <p>Quote of the day is randomly choosen quote.</p>
                    </div>
                    <div class="col-4"></div>
                </div>

                <div class="row" style={{"padding-top":"20px"}}>
                    <div class="col-4"></div>
                    <div class="col-4 headerQuotes">
                        <div class="headerVotes">
                            <h4>153</h4>
                        </div>
                        <div class="headerQuoteText">
                            <h5><span class="headerQUoteText">Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.</span></h5>
                            <img src={Avatar} alt="" class="smallImg" /><h6>Islam Mušić</h6>
                        </div></div>
                    <div class="col-4"></div>
                </div>

                <div class="row contentBody">
                    <div class="col-4"></div>
                    <div class="col-4" style={{ "textAlign": "center" }}>
                        <h4 class="orangeText">Most upvoted quotes</h4>
                        <p>Most upvoted quotes on the platform. Give a like to the ones you like to keep them saved in your profile.</p>
                    </div>
                    <div class="col-4"></div>
                </div>
            </div>
        )
    }
}

export default Home;