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
 * State: currUser {username, firstName, lastName, email, isAdmin}
 *
 * App -> { RoutesList, Navigation }
 *
*/

function App() {
  const [currUser, setCurrUser] = useState({data: null, isLoading: true});

  console.log("Rendered App");
  console.log("app currUser", currUser);
  console.log("jobly.api token", JoblyApi.token);
  console.log("local storage token", localStorage.getItem("token"));

  /** When token updates, fetch user data and set currUser */
  useEffect(function fetchUserDataUponValidToken() {
    console.log("Inside fetchUserDataUponValidToken use Effect");
    async function fetchUserData() {
      try {
        const { username } = decodeToken(localStorage.getItem("token"));
        JoblyApi.token = localStorage.getItem("token");
        const userData = await JoblyApi.getUser(username);
        delete userData.jobs;
        setCurrUser({data: userData, isLoading: false});
      } catch (errors) {
        localStorage.removeItem("token");
        setCurrUser({currUser: null, isLoading: false});
      }
    }
    if (currUser.isLoading) {
        fetchUserData();}
  }, [currUser]);

  /** Make API call to login using user inputs from login form;
   * update token state if valid request
  */
  async function login(formData) {
    const token = await JoblyApi.login(formData);
    localStorage.setItem("token", token);
    setCurrUser(curr => ({...curr, isLoading: true}));
  }

  /** Make API call to signup new user using inputs from signup form;
   * update token state if valid request
  */
  async function signup(formData) {
    const token = await JoblyApi.signup(formData);
    localStorage.setItem("token", token);
    setCurrUser(curr => ({...curr, isLoading: true}));
  }

  /** Clears token and currUser states */
  function logout() {
    localStorage.removeItem("token");
    setCurrUser({data: null, isLoading: false});
    JoblyApi.token = null;
  }

  if(currUser.isLoading) return <i>Loading...</i>;

  return (
    <div className="App">
      <userContext.Provider value={{ currUser: currUser.data }}>
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


