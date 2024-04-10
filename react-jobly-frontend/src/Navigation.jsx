import { NavLink } from "react-router-dom";
import "./Navigation.css"

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
    return (
        <nav className="Navigation navbar bg-body-tertiary">
            <div className="Navigation-home container-fluid">
                <NavLink className="active navbar-brand" to="/" >Jobly</NavLink>
                <NavLink className="nav-link" to="/companies" end>Companies</NavLink>
                <NavLink className="nav-link" to="/jobs" end>Jobs</NavLink>
            </div>
        </nav>
    );
}

export default Navigation;