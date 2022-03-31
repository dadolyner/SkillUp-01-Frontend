import {Route} from 'react-router-dom'
import Home from './pages/home.tsx'
import Login from './pages/login.tsx'
import CreateQuote from './pages/createQuote.tsx'
import Profile from './pages/profile'
import ProfileSettings from './pages/profileSettings.tsx'
import SignUp from './pages/signUp.tsx'

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/create-quote" component={CreateQuote} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile-settings" component={ProfileSettings} />
      <Route exact path="/signup" component={SignUp} />
    </div>
  );
}

export default App;
