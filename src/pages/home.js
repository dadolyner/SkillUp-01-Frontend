import { useHistory } from 'react-router-dom';
import Avatar from "../multimedia/Avatar.png";
import Quote from "../multimedia/CreateQuote.png";
import axios from '../api/axios'
import { useState } from 'react';

const Home = () => {
    let history = useHistory();
    const [quotes, setQuotes] = useState([])

    const output = async() => {
        axios.get('/user/allQuotes').then(response => setQuotes(response.data))
    }
    output();

    //user is not logged in
    if (!localStorage.getItem('userLoggedIn')) {
        return (
            <div className="main-page">
                <div className="row">
                    <div className="col-1"><h3 className="quotasticHeader">Quotastic</h3></div>
                    <div className="col-10"></div>
                    <div className="col-1">
                        <button className="btn btn-primary topButton signUpButton" style={{ "marginRight": "120px" }} onClick={() => history.push('/signup')}>Signup</button>
                        <button className="btn btn-primary topButton loginButton" onClick={() => history.push('/login')}>Login</button>
                    </div>
                </div>

                <div className="row contentBody">
                    <div className="col-5">
                        <div style={{ "marginLeft": "100px" }}>
                            <h1>Welcome to <span className="orangeText">Quotastic</span></h1>
                            <p>Quotastic is free online platform for you to explore the  quips, quotes, and proverbs. Sign up and express yourself.</p>
                            <button className="btn btn-primary signUpButton" style={{ "marginRight": "120px" }} onClick={() => history.push('/signup')}>Signup</button>
                        </div>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5 headerQuotes">
                        <div className="headerVotes">

                            <h4>153</h4>
                        </div>
                        <div className="headerQuoteText">
                            <h5><span className="headerQuoteText">Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.</span></h5>
                            <img src={Avatar} alt="" className="smallImg" /><h6>Janez Novak</h6>
                        </div>
                    </div>
                </div>

                <div className="row contentBody">
                    <div className="col-4"></div>
                    <div className="col-4" style={{ "textAlign": "center" }}>
                        <h2>Explore the world of <span className="orangeText">fantastic quotes</span></h2>
                    </div>
                    <div className="col-4"></div>
                </div>

                <div className="row contentBody">
                    <div className="col-4"></div>
                    <div className="col-4" style={{ "textAlign": "center" }}>
                        <h4 className="orangeText">Most upvoted quotes</h4>
                        <p>Most upvoted quotes on the platform. Sign up or login to like the quotes and keep them saved in your profile</p>
                    </div>
                    <div className="col-4"></div>

                    {quotes.map(quote => (
                        <div key={quote.id} className="col-5 headerQuotes">
                            <div className="headerVotes">
                                <h4>0</h4>
                            </div>

                            <div className="headerQuoteText">
                                <h5><span className="headerQuoteText">{quote.quote}</span></h5>
                                <img src={Avatar} alt="" className="smallImg" /><h6>Janez Novak</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    //user is logged in
    else {
        return (
            <div className="main-page">
                <div className="row">
                    <div className="col-2"><h3 className="quotasticHeader">Quotastic</h3></div>
                    <div className="col-8"></div>
                    <div className="col-2 TopHrefLinks">
                        <a href="/" style={{ "marginRight": "300px", "color":"#EFB467" }}>Home</a>
                        <a href="/profile-settings" style={{ "marginRight": "220px", "color":"#EFB467"  }}>Settings</a>
                        <a href="/" style={{ "marginRight": "140px", "color":"#EFB467"  }}>Logout</a>
                        <img src={Avatar} className="smallImgHeader" style={{ "marginRight": "70px" }} alt="" onClick={() => history.push('/profile')} />
                        <img src={Quote} className="smallImgHeader" style={{ "marginRight": "10px" }} alt="" onClick={() => history.push('/create-quote')} />
                    </div>
                </div>

                <div className="row contentBody">
                    <div className="col-4"></div>
                    <div className="col-4" style={{ "textAlign": "center" }}>
                        <h4 className="orangeText">Quote of the day</h4>
                        <p>Quote of the day is randomly choosen quote.</p>
                    </div>
                    <div className="col-4"></div>
                </div>

                <div className="row" style={{"paddingTop":"20px"}}>
                    <div className="col-4"></div>
                    <div className="col-4 headerQuotes">
                        <div className="headerVotes">
                            <h4>153</h4>
                        </div>
                        <div className="headerQuoteText">
                            <h5><span className="headerQuoteText">Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.</span></h5>
                            <img src={Avatar} alt="" className="smallImg" /><h6>Islam Mušić</h6>
                        </div></div>
                    <div className="col-4"></div>
                </div>

                <div className="row contentBody">
                    <div className="col-4"></div>
                    <div className="col-4" style={{ "textAlign": "center" }}>
                        <h4 className="orangeText">Most upvoted quotes</h4>
                        <p>Most upvoted quotes on the platform. Give a like to the ones you like to keep them saved in your profile.</p>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        )
    }
}

export default Home;