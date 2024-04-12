import { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "./userContext";

/**
 * Homepage
 *
 * state: none
 *
 * props: none
 *
 *
 * RoutesList -> Homepage
 *
 */

function Homepage() {
    console.log("Rendered Homepage");

    const { currUser } = useContext(userContext);

    return (
        <div className="container">
            <div className="mt-5 text-center">
                <h1 className="home-title mb-4 ">Jobly</h1>
                <div className="home-description" >All the jobs in one, convenient place.</div>
                {currUser
                    ? <h2 className="mt-2">Welcome back, {currUser.firstName}</h2>
                    : <div>
                        <Link to="/login" className="btn btn-primary mt-2 ms-2">Log in</Link>
                        <Link to="/signup" className="btn btn-primary mt-2 ms-2">Sign up</Link>
                    </div>
                }
            </div>
        </div>
    );
}

export default Homepage;