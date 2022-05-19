import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { FormContainer, TitleContainer, Title, Paragraph, TextArea, CancelButton, ConfirmButton, OrangeText } from '../components/FormComponent/Form.styled';
import UpdateUserInfo from '../components/UpdateUserInfo';

const CreateQuote: React.FC = () => {
	const navigate = useNavigate();
	const [quote, setQuote] = React.useState('');

	const userInfo: any = localStorage.getItem('userInfo');
	const checkUserInfo = () => {
		JSON.parse(userInfo).quote ? setQuote(JSON.parse(userInfo).quote.quote) : setQuote('');
	};
	React.useEffect(() => {
		checkUserInfo();
		UpdateUserInfo();
	}, []);

	const createQuoteFunction = async (event: any) => {
		event.preventDefault();
		try {
			await axios.post('/quote/myquote', { quote }, { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } })
			await UpdateUserInfo();
			navigate('/profile');
		} catch (error) { if (error === 401) { navigate('/login') } }
	};

	return (
		<>
			<div style={{ marginTop: '150px' }}>
				<FormContainer>
					<div style={{ gridColumn: 2 }}>
						<TitleContainer>
							<Title>Are you feeling <OrangeText>inspired?</OrangeText></Title>
							<Paragraph>You can post one quote. You can delete it on your profile or edit it this window</Paragraph>
						</TitleContainer>
		
						<TextArea placeholder={'Quote'} value={quote} onChange={(e) => setQuote(e.target.value)}></TextArea>
		
						<br/>
						
						<div style={{ gridColumn: '2' }}>
							<div style={{ display: 'grid', gridTemplateColumns: '20% 2% 20% 58%' }}>
								<ConfirmButton onClick={(event) => {createQuoteFunction(event)} }>Submit</ConfirmButton><div></div>
								<CancelButton onClick={() => navigate('/profile')}>Cancel</CancelButton><div></div>
							</div>
						</div>
					</div>
				</FormContainer>
			</div>
		</>
	);
};

export default CreateQuote;
