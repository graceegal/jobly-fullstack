import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Navigation from './Navigation';
import { useEffect, useState } from 'react';
import userContext from "./userContext";
import JoblyApi from './api';
import { decodeToken } from 'react-jwt';
//TODO: jwt-decode
/** Component for entire page.
 *TODO: move
 * Props: token
 *        currUser {username, firstName, lastName, email, isAdmin}
 *
 * State: none
 *
 * App -> { RoutesList, Navigation }
 *
*/
//TODO: isLoading?
//TODO: state, useEffects, other stuff

function App() {
    const [token, setToken] = useState(null);
    const [currUser, setCurrUser] = useState(null);
    console.log("Rendered App");
    console.log("app token", token);
    console.log("app currUser", currUser);

    /** Make API call to login using user inputs from login form;
     * update token state and currUser state with username if valid request
    */
    async function handleLogin(formData) {
        const token = await JoblyApi.login(formData);
        setToken(token);
        JoblyApi.token = token;
    }

    /** Make API call to signup new user using inputs from signup form;
     * update token state and currUser state with username if valid request
    */
    async function handleSignup(formData) {
        const token = await JoblyApi.signup(formData);
        setToken(token);
        JoblyApi.token = token;
    }
//TODO: setToken and joblyApi.token to useEffect
//TODO: add error handling, set user back to null (as safeguard, not to display errors)
//TODO: else {user = null}
    /** When token updates, fetch user data and set currUser */
    useEffect(function fetchUserDataUponValidToken() {
        console.log("Inside fetchUserDataUponValidToken use Effect");
        async function fetchUserData() {
            const { username } = decodeToken(token);
            const userData = await JoblyApi.getUser(username);
            delete userData.jobs;
            setCurrUser(userData);
        }
        if (token !== null) fetchUserData();
    }, [token]);

    /** Clears token and currUser states */
    function handleLogout() {
        setToken(null);
        setCurrUser(null);
    }
//TODO: signup, login, logout. Also consider handleSubmit/handleSave name changes
    return (
        <div className="App">
            <userContext.Provider value={{ currUser: currUser }}>
                <BrowserRouter>
                    <Navigation logout={handleLogout} />
                    <div>
                        <RoutesList
                            handleLogin={handleLogin}
                            handleSignup={handleSignup} />
                    </div>
                </BrowserRouter>
            </userContext.Provider>
        </div>
    );
};

export default App;


