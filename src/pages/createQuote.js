import '../css/style.css'
import { useHistory } from 'react-router-dom'

const CreateQuote = () => {
    let history = useHistory();

    return (
        <div className="createQuote-page">
            <div class="row contentBody">
                <div class="col-4"></div>
                <div class="col-4">
                    <h2>Are you feeling <span class="orangeText">inspired?</span></h2>
                    <p>You can post one quote. You can delete it on your profile or edit it inthis window</p>

                    <textarea class="form-control">
                        All our dreams can come true, if we have the courage to pursue them.
                    </textarea>
                    <input type="submit" class="btn btn-primary confirmButton signUpButton" value="Submit" />
                    <input type="submit" class="btn btn-primary confirmButton cancelButton" value="Cancel" onClick={() => history.push('/profile')}/>
                </div>
                <div class="col-4"></div>
            </div>
        </div>
    );
}

export default CreateQuote;