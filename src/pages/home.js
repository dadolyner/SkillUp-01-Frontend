import { useHistory } from 'react-router-dom';
import Avatar from "../multimedia/Avatar.png";
import axios from '../api/axios'
import { useState } from 'react';
import Quote from '../components/QuoteComponent/Quote.js'

import { ConfirmButton, CancelButton } from '../components/FormComponent/Form.styled.js'

const Home = () => {
    let history = useHistory();
    const [quotes, setQuotes] = useState([])

    const output = async () => {
        axios.get('/user/allQuotes').then(response => setQuotes(response.data))
    }
    output();
    return (
        <div style={{ fontFamily: 'Poppins' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '20% 60% 20%' }}>
                <h3>Quotastic</h3>
                <div></div>
                <div style={{ gridColumn: 3, display: 'flex', margin: '0 10px' }}>
                    <ConfirmButton onClick={() => history.push('/signup')}>Sign up</ConfirmButton>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <CancelButton onClick={() => history.push('/login')}>Login</CancelButton>
                </div>
            </div>



            <div style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
                <div style={{ "marginLeft": "100px" }}>
                    <p style={{ fontSize: 48 }}>Welcome to <span className="orangeText">Quotastic</span></p>
                    <p>Quotastic is free online platform for you to explore the  quips, quotes, and proverbs. Sign up and express yourself.</p>
                    <ConfirmButton style={{ width: '150px' }} onClick={() => history.push('/signup')}>Sign up</ConfirmButton>
                </div>
                <div>
                    <Quote score={'153'} quote={'Twenty years from now you will be more disappointed by the things that you didnt do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.'} author={'Janez Novak'} />
                </div>
            </div>


            <div>
                <div style={{ textAlign: "center" }}>
                    <h2>Explore the world of <span className="orangeText">fantastic quotes</span></h2>
                </div>
            </div>



            <div>
                <div style={{ "textAlign": "center" }}>
                    <h4 className="orangeText">Most upvoted quotes</h4>
                    <p>Most upvoted quotes on the platform. Sign up or login to like the quotes and keep them saved in your profile</p>
                </div>

                {quotes.map(quote => (
                    <div key={quote.id} className="headerQuotes">
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

export default Home;