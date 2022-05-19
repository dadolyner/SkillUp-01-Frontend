import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, NavigationLogo, NavigationItems, Item, Hamburger, Lines } from './navigation.styled';
import { ConfirmButton, CancelButton } from '../FormComponent/Form.styled';
import Avatar from '../../multimedia/Avatar.png'
import { Logout } from '../Logout';

const Navigation: React.FC = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const isLoggedIn = localStorage.getItem('userLoggedIn');
	let navigate = useNavigate();

	const currentUser = localStorage.getItem('userInfo');
	const userString = currentUser ? JSON.parse(currentUser) : '';

	return (
		<>
			<Container>
				<NavigationLogo onClick={() => navigate("/")}><h3>Quotastic</h3></NavigationLogo>

				<Hamburger onClick={() => setIsOpen(!isOpen)}>
					<Lines />
					<Lines />
					<Lines />
				</Hamburger>

				{isLoggedIn === 'true' ? (
					<NavigationItems isOpen={isOpen}>
						<Item onClick={() => {navigate("/profile"); setIsOpen(false);}}>
							<img src={Avatar} alt={'avatar.png'} height={'50px'} width={'50px'} style={{marginRight: '20px'}}/>
							{userString.first_name + ' ' + userString.last_name}
						</Item>
						<Item onClick={() => {navigate("/"); setIsOpen(false);}}>Home</Item>
						<Item onClick={() => {navigate("/profile-settings"); setIsOpen(false);}}>Settings</Item>
						<Item onClick={() => { Logout(); navigate('/'); setIsOpen(false);}}>Logout</Item>
					</NavigationItems>
				) : (
					<NavigationItems isOpen={isOpen}>
						<Item onClick={() => { navigate("/"); setIsOpen(false);}}>Home</Item>
						<Item onClick={() => { navigate("/signup"); setIsOpen(false);}}><ConfirmButton>Signup</ConfirmButton></Item>
						<Item onClick={() => { navigate("/login"); setIsOpen(false);}}><CancelButton>Login</CancelButton></Item>
					</NavigationItems>
				)
				}
			</Container>
		</>
	);
};

export default Navigation;
