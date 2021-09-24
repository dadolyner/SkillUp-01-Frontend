import '../css/style.css'
import { useHistory } from 'react-router-dom'

const CreateQuote = () => {
    let history = useHistory();

    return (
        <div className="createQuote-page">
            <div className="row contentBody">
                <div className="col-4"></div>
                <div className="col-4">
                    <h2>Are you feeling <span className="orangeText">inspired?</span></h2>
                    <p>You can post one quote. You can delete it on your profile or edit it inthis window</p>

                    <textarea className="form-control">
                        All our dreams can come true, if we have the courage to pursue them.
                    </textarea>
                    <input type="submit" className="btn btn-primary confirmButton signUpButton" value="Submit" />
                    <input type="submit" className="btn btn-primary confirmButton cancelButton" value="Cancel" onClick={() => history.push('/profile')}/>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    );
}

export default CreateQuote;