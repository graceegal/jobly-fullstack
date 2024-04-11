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
  const [currUser, setCurrUser] = useState({ userData: EMPTY_CURR_USER, isLoading: false });
  const [token, setToken] = useState({ token: null, isLoading: false });
  const [errors, setErrors] = useState(null);
  console.log("Rendered App");

  /** Make API call to login using user inputs from login form;
   * update token state and currUser state with username if valid request,
   * otherwise update errors state
  */
  async function handleLogin(formData) {
    let token = null;
    setToken({ token: token, isLoading: true });
    try {
      token = await JoblyApi.login(formData);
      setCurrUser(curr => (
        { userData: { ...curr.userData, username: formData.username }, isLoading: false }
      ));
    } catch (error) {
      setErrors(error);
    }
    JoblyApi.token = token;
    setToken({ token: token, isLoading: false });
  }

  /** Make API call to signup new user using inputs from signup form;
   * update token state and currUser state with username if valid request,
   * otherwise update errors state
  */
  async function handleSignup(formData) {
    let token = null;
    setToken({ token: token, isLoading: true });
    try {
      token = await JoblyApi.signup(formData);
      setCurrUser(curr => (
        { userData: { ...curr.userData, username: formData.username }, isLoading: false }
      ));
    } catch (error) {
      setErrors(error);
    }
    JoblyApi.token = token;
    setToken({ token: token, isLoading: false });
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
