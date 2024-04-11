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

function Navigation() {
    console.log("Rendered Navigation");

    const { user } = useContext(userContext);
    console.log("user from context", user);
    // access context to see if there is a currUser
    // if no curr User - show Jobly, signup and login
    // if curr user, show Jobly, companies, jobs, profile, logout
    return (
        <nav className="Navigation navbar bg-body-tertiary">
            <div className="Navigation-home container-fluid">
                <NavLink className="active navbar-brand" to="/" >Jobly</NavLink>
                {user.username
                    ?   <div className="right-nav d-flex">
                            < NavLink className="nav-link ms-2" to="/jobs" end>Jobs</NavLink>
                            <NavLink className="nav-link ms-2" to="/companies" end>Companies</NavLink>
                            <NavLink className="nav-link ms-2" to="/profile" end>Profile</NavLink>
                        </div>
                    :   <div className="right-nav d-flex">
                            <NavLink className="nav-link ms-2" to="/signup" end>Sign Up</NavLink>
                            <NavLink className="nav-link ms-2" to="/login" end>Login</NavLink>
                        </div>
                }
            </div>
        </nav >
    );
}

export default Navigation;