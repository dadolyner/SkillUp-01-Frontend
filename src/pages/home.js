import { useHistory } from 'react-router-dom';

const Home = () => {
    let history = useHistory();

    return (
        <div className="main-page">
            <div class="row">
                <div class="col-1"><h3 class="quotasticHeader">Quotastic</h3></div>
                <div class="col-10"></div>
                <div class="col-1">
                    <button class="btn btn-primary topButton" onClick={() => history.push('/login')}>Login</button>
                </div>
            </div>

            <div class="row contentBody">
                <div class="col-4"></div>
                <div class="col-4"><h1>Home</h1></div>
                <div class="col-4"></div>
            </div>
        </div>
    );
}

export default Home;