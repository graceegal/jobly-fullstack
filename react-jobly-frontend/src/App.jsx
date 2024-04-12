import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Navigation from './Navigation';
import { useEffect, useState } from 'react';
import userContext from "./userContext";
import JoblyApi from './api';
import { decodeToken } from 'react-jwt';

/** Component for entire page.
 *
 * Props: none
 *
 * State: token
 *        currUser {username, firstName, lastName, email, isAdmin}
 *
 * App -> { RoutesList, Navigation }
 *
*/

//TODO: isLoading?

function App() {
  const [token, setToken] = useState(null);
  const [currUser, setCurrUser] = useState(null);

  console.log("Rendered App");
  console.log("app token", token);
  console.log("app currUser", currUser);

  /** When token updates, fetch user data and set currUser */
  useEffect(function fetchUserDataUponValidToken() {
    console.log("Inside fetchUserDataUponValidToken use Effect");
    async function fetchUserData() {
      try {
        const { username } = decodeToken(token);
        JoblyApi.token = token;
        const userData = await JoblyApi.getUser(username);
        delete userData.jobs;
        setCurrUser(userData);
      } catch (errors) {
        setToken(null);
      }
    }
    if (token !== null) {
      fetchUserData();
    } else {
      setCurrUser(null);
      JoblyApi.token = null;
    }
  }, [token]);

  /** Make API call to login using user inputs from login form;
   * update token state if valid request
  */
  async function login(formData) {
    const token = await JoblyApi.login(formData);
    setToken(token);
  }

  /** Make API call to signup new user using inputs from signup form;
   * update token state if valid request
  */
  async function signup(formData) {
    const token = await JoblyApi.signup(formData);
    setToken(token);
  }

  /** Clears token and currUser states */
  function logout() {
    setToken(null);
    setCurrUser(null);
  }

  return (
    <div className="App">
      <userContext.Provider value={{ currUser: currUser }}>
        <BrowserRouter>
          <Navigation logout={logout} />
          <div>
            <RoutesList
              login={login}
              signup={signup} />
          </div>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
};

export default App;


