import '../css/style.css'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { FormContainer, TextArea, Link, ConfirmButton, CancelButton } from '../components/FormComponent/Form.styled.js'
import axios from '../api/axios'

const CreateQuote = () => {
    let history = useHistory();

    const [quote, setQuote] = useState('')

    const createQuoteFunction = async () => {
        await axios.post('/user/myquote', { quote }, { headers: { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` } }).then(() => {
            history.push('/myquotes')
        })
    }

    return (
        <div style={{marginTop: '150px'}}>
            <FormContainer>
                <div style={{ gridColumn: 2 }}>
                    <div>
                        <h2>Are you feeling <span style={{ color: '#EFB467' }}>inspired?</span></h2>
                        <p>You can post one quote. You can delete it on your profile or edit it inthis window</p>
                    </div>

                    <TextArea placeholder={'Quote'} onChange={(e) => setQuote(e.target.value)}></TextArea>

                    <div style={{ gridColumn: '2' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '20% 2% 20% 58%' }}>
                            <ConfirmButton>Submit</ConfirmButton>
                            <div></div>
                            <CancelButton onClick={() => createQuoteFunction()}>Cancel</CancelButton>
                            <div></div>
                        </div>
                    </div>
                </div>
            </FormContainer>
        </div>
    );
}

export default CreateQuote;