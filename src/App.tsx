import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
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
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/create-quote' element={<CreateQuote />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/profile-settings' element={<ProfileSettings />} />
					<Route path='/signup' element={<SignUp />} />
				</Routes>
			</div>

			<Footer />
		</>
	);
};

export default App;
