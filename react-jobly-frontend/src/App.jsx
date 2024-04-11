import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Navigation from './Navigation';
import { useEffect, useState } from 'react';
import userContext from "./userContext";

/** Component for entire page.
 *
 * Props: none
 *
 * State: none
 *
 * App -> { RoutesList, Navigation }
 *
*/

function App() {
    const [currUser, setCurrUser] = useState({ userData: null, isLoading: true });
    const [token, setToken] = useState({token: null, isLoading: true});
    const [loginData, setLoginData] = useState(null);
    const [signupData, setSignupData] = useState(null);
    console.log("Rendered App");


    // get user data from handleAuth
    // update login/signup Data state
    // useEffect uses user data to make API login/signup call
    // if good credentials, update context
    // if bad credentials, set errors, don't update context, clear user state

    /** Sets loginData state with user inputs from login form */
    function handleLogin(formData) {
        setLoginData(formData);
    }

    /** Sets signupData state with user inputs from signup form */
    function handleSignup(formData) {
        setSignupData(formData);
    }

    async function signup() {

    }






    return (
        <div className="App">
            <userContext.Provider value={{ user: currUser }}>
                <BrowserRouter>
                    <Navigation />
                    <div>
                        <RoutesList />
                    </div>
                </BrowserRouter>
            </userContext.Provider>
        </div>
    );
};

export default App;
