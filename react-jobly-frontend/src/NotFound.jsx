import { Link } from "react-router-dom";

/** Component for Not Found 404.
 *
 * Props: none
 *
 * State: none
 *
*/

function NotFound({ message = "Not Found" }) {
    console.log("Rendered NotFound");
    return (
        <div className="NotFound">
            <p>{message}</p>
            <Link className="btn btn-primary" to={"/"} >Back to home</Link>
        </div>
    );
};

export default NotFound;
