import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";
import "./Navigation.css";

/** Navigation Bar.
 *
 * Props: none
 *
 * State: none
 *
 * App -> Navigation
 *
*/

function Navigation({logout}) {
    console.log("Rendered Navigation");

    const { currUser } = useContext(userContext);

    // access context to see if there is a currUser
    // if no curr User - show Jobly, signup and login
    // if curr user, show Jobly, companies, jobs, profile, logout
    return (
        <nav className="Navigation navbar bg-body-tertiary">
            <div className="Navigation-home container-fluid">
                <NavLink className="active navbar-brand" to="/" >Jobly</NavLink>
                {currUser
                    ?   <div className="right-nav d-flex">
                            < NavLink className="nav-link ms-5" to="/jobs" end>Jobs</NavLink>
                            <NavLink className="nav-link ms-5" to="/companies" end>Companies</NavLink>
                            <NavLink className="nav-link ms-5" to="/profile" end>Profile</NavLink>
                            <button className="nav-link ms-5" onClick={logout}>Log out {currUser.username}</button>
                        </div>
                    :   <div className="right-nav d-flex">
                            <NavLink className="nav-link ms-5" to="/signup" end>Sign Up</NavLink>
                            <NavLink className="nav-link ms-5" to="/login" end>Login</NavLink>
                        </div>
                }
            </div>
        </nav >
    );
}

export default Navigation;