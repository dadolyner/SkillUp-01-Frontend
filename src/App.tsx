import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import CreateQuote from './pages/createQuote';
import Profile from './pages/profile';
import ProfileSettings from './pages/profileSettings';
import SignUp from './pages/signUp';
import Footer from './components/FooterComponent/Footer';
import Navigation from './components/Navigation/navigation';
import './styles/style.css';

const App: React.FC = () => {
	return (
		<>
			<Navigation />
			
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/create-quote' element={<CreateQuote />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/profile-settings' element={<ProfileSettings />} />
				<Route path='/signup' element={<SignUp />} />
			</Routes>

			<Footer />
		</>
	);
};

export default App;
