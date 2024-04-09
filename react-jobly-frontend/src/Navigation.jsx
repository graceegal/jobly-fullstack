import { NavLink } from "react-router-dom";
import "./Navigation.css"

function Navigation(){
    return (
        <nav className="Navigation">
            <div className="Navigation-home">
            <NavLink className="active" to="/" >Jobly</NavLink>
            </div>
            <NavLink to="/companies" end>Companies</NavLink>
            <NavLink to="/jobs" end>Jobs</NavLink>
        </nav>
    )
}

export default Navigation;