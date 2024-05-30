import { Link } from "react-router-dom";

/** Component for Not Found 404.
 *
 * Props: "message"
 *
 * State: none
 *
*/

function NotFound({ message = "Not Found" }) {
    console.log("Rendered NotFound");
    return (
        <div className="container">
            <div className="NotFound mt-5 text-center">
                <h1 className="mb-4">{message}</h1>
                <Link className="btn btn-primary mt-2 ms-2" to={"/"} >Back to home</Link>
            </div>
        </div>
    );
};

export default NotFound;
