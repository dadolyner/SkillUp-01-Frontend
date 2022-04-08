import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { FormContainer, TextArea, ConfirmButton, CancelButton } from '../components/FormComponent/Form.styled';

const CreateQuote: React.FC = () => {
	const navigate = useNavigate();
	const [quote, setQuote] = React.useState('');

	const userInfo: any = localStorage.getItem('userInfo');
	const checkUserInfo = () => {
		JSON.parse(userInfo) ? setQuote(JSON.parse(userInfo).quote.quote) : setQuote('');
	};
	React.useEffect(() => {
		checkUserInfo();
	}, []);

	const createQuoteFunction = async () => {
		await axios.post('/quote/myquote', { quote }, { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }).then(() => {
			navigate('/myquotes');
		});
	};

	return (
		<div style={{ marginTop: '150px' }}>
			<FormContainer>
				<div style={{ gridColumn: 2 }}>
					<div>
						<h2>
							Are you feeling <span style={{ color: '#EFB467' }}>inspired?</span>
						</h2>
						<p>You can post one quote. You can delete it on your profile or edit it inthis window</p>
					</div>

					<TextArea placeholder={'Quote'} value={quote} onChange={(e) => setQuote(e.target.value)}></TextArea>

					<div style={{ gridColumn: '2' }}>
						<div style={{ display: 'grid', gridTemplateColumns: '20% 2% 20% 58%' }}>
							<ConfirmButton onClick={() => createQuoteFunction()}>Submit</ConfirmButton>
							<div></div>
							<CancelButton onClick={() => navigate('/profile')}>Cancel</CancelButton>
							<div></div>
						</div>
					</div>
				</div>
			</FormContainer>
		</div>
	);
};

export default CreateQuote;
