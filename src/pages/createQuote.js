import '../css/style.css'

const CreateQuote = () => {
    return (
        <div className="createQuote-page">  
            <div class="form-body">
                <h2>Are you feeling <span>inspired?</span></h2>
                <p>You can post one quote. You can delete it on your profile or edit it inthis window</p>
                
                <textarea class="quote">
                    All our dreams can come true, if we have the courage to pursue them.
                </textarea>
                <input type="submit" class="top-button" value="Submit"/>
            </div>
            
        </div>
    );
}

export default CreateQuote;