import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Navigation from './Navigation';
import { useEffect, useState } from 'react';
import userContext from "./userContext";
import JoblyApi from './api';
import { decodeToken } from 'react-jwt';
import Loading from './Loading';

/** Component for entire page.
 *
 * Props: none
 *
 * State: token (null || "")
 *        currUser {username, firstName, lastName, email, isAdmin}
 *
 * App -> { RoutesList, Navigation }
 *
*/

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [currUser, setCurrUser] = useState({ data: null, isLoading: true });

  console.log("Rendered App");
  console.log("app token", token);
  console.log("app currUser", currUser);
  console.log("jobly.api token", JoblyApi.token);
  console.log("local storage token", localStorage.getItem("token"));

  /** When token updates, fetch user data and set currUser */
  useEffect(function fetchUserDataOnTokenChange() {
    console.log("Inside fetchUserDataOnTokenChange use Effect");
    async function fetchUserData() {
      setCurrUser(curr => ({ ...curr, isLoading: true }));
      try {
        const { username } = decodeToken(token);
        localStorage.setItem("token", token);
        JoblyApi.token = token;
        const userData = await JoblyApi.getUser(username);
        delete userData.jobs;
        setCurrUser({ data: userData, isLoading: false });
      } catch (errors) {
        localStorage.removeItem("token");
        setToken(null);
        setCurrUser({ data: null, isLoading: false });
      }
    }
    if (token) {
      fetchUserData();
    }
    else {
      setCurrUser({ data: null, isLoading: false });
      // THIS IS FOR SAFEGUARDING - SCENARIO NEVER SHOULD HAPPEN -- UNNECESSARY
      // JoblyApi.token = null;
      // localStorage.removeItem("token");
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
    setCurrUser({ currUser: null, isLoading: false });
    JoblyApi.token = null;
    localStorage.removeItem("token");
  }

  /** updates user information and updates user state */
  async function updateUserData(formData) {
    const {username, firstName, lastName, email} = formData;
    const updatedUserData = await JoblyApi.updateUser(username, {firstName, lastName, email});
    setCurrUser(curr => ({...curr, data:{ ...curr.data, ...updatedUserData}}));
  }

  if (currUser.isLoading) return <Loading />;

  return (
    <div className="App">
      <userContext.Provider value={{ currUser: currUser.data }}>
        <BrowserRouter>
          <Navigation logout={logout} />
          <div>
            <RoutesList
              login={login}
              signup={signup}
              updateUserData={updateUserData} />
          </div>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
};

export default App;


