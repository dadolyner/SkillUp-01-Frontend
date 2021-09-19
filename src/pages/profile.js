
const Profile = () => {
    return (
        <div className="profile-page">
            <div class="login-header">
                <h3>Quotastic</h3>
                <a href="/">Home</a>
                <a href="/profile-settings">Settings</a>
                <a href="/">Logout</a>
            </div>

            <div class="profile-name">
                 <h1>David Škulj</h1>
                 <div class="quote-karma">
                     <p>Quotastic karma</p>
                     <p>100</p>
                 </div>
            </div>

            <div class="MyQuote">
                <h3>Quote</h3>
                <div class="quote-stats">
                All our dreams can come true, if we have the courage to pursue them.
                </div>
            </div>
        </div>
    );
}

export default Profile;