import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Navigation from './Navigation';
import { useEffect, useState } from 'react';
import userContext from "./userContext";
import JoblyApi from './api';

const EMPTY_CURR_USER = { username: null, firstName: null, lastName: null, email: null, isAdmin: null };


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
    const [token, setToken] = useState(null);
    const [currUser, setCurrUser] = useState(EMPTY_CURR_USER);
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    console.log("Rendered App");
    console.log("app token", token);
    console.log("app currUser", currUser);
    console.log("app errors", errors);

    /** Make API call to login using user inputs from login form;
     * update token state and currUser state with username if valid request,
     * otherwise update errors state
    */
    async function handleLogin(formData) {
        let token = null;
        setIsLoading(true);
        try {
            token = await JoblyApi.login(formData);
            setCurrUser(curr => (
                { ...curr, username: formData.username }
            ));
            setToken(token);
            JoblyApi.token = token;
        } catch (error) {
            setErrors(error);
        }
        setIsLoading(false);
    }

    /** Make API call to signup new user using inputs from signup form;
     * update token state and currUser state with username if valid request,
     * otherwise update errors state
    */
    async function handleSignup(formData) {
        let token = null;
        setIsLoading(true);
        try {
            token = await JoblyApi.signup(formData);
            setCurrUser(curr => (
                { ...curr, username: formData.username }
            ));
            setToken(token);
            JoblyApi.token = token;
        } catch (error) {
            setErrors(error);
        }
        setIsLoading(false);
    }

    /** When token updates, fetch user data */
    useEffect(function fetchUserDataUponValidToken() {
        setIsLoading(true);
        async function fetchUserData() {
            let userData;
            try {
                userData = await JoblyApi.getUser(currUser.username);
                delete userData.jobs;
                setCurrUser(userData);
            } catch (errors) {
                setErrors(errors);
            }
        }
        setIsLoading(false);
        if(currUser.username !== null) fetchUserData();
    }, [token]);

    if (isLoading) return <i>Loading...</i>;

    return (
        <div className="App">
            <userContext.Provider value={{ user: currUser }}>
                <BrowserRouter>
                    <Navigation />
                    <div>
                        <RoutesList
                            handleLogin={handleLogin}
                            handleSignup={handleSignup}
                            errors={errors} />
                    </div>
                </BrowserRouter>
            </userContext.Provider>
        </div>
    );
};

export default App;
