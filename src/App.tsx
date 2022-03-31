import * as React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import CreateQuote from './pages/createQuote';
import Profile from './pages/profile';
import ProfileSettings from './pages/profileSettings';
import SignUp from './pages/signUp';
import Footer from './components/FooterComponent/Footer';

const App: React.FC = () => {
	return (
		<>
			<div className='App'>
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/create-quote' component={CreateQuote} />
				<Route exact path='/profile' component={Profile} />
				<Route exact path='/profile-settings' component={ProfileSettings} />
				<Route exact path='/signup' component={SignUp} />
			</div>

			<Footer />
		</>
	);
};

export default App;
