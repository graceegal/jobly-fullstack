import { useState } from "react";
import Alert from "./Alert";

/**
 * LoginForm
 *
 * state:
 *  - formData { username, password }
 *
 * props:
 *  - handleSave()
 *
 *
 * RoutesList -> LoginForm
 *
 */

function LoginForm({ handleSave, errors }) {
    console.log("Rendered LoginForm");

    const [formData, setFormData] = useState({
        username: "testuser",
        password: "password"
    });

    /** update form inputs */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    /** call parent function and show alert */
    function handleSubmit(evt) {
        evt.preventDefault();
        handleSave(formData);
    }

    return (
        <div className="container col-9">
            <h3 className="mt-4">Log In</h3>
            <div className="card p-3">
                <form className="LoginForm-form">

                    <div className="mb-3">
                        <label
                            className="LoginForm-label-username form-label"
                            htmlFor="username">
                            <b>Username</b>
                        </label>
                        <input
                            className="LoginForm-input-username form-control"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label
                            className="LoginForm-label-password form-label"
                            htmlFor="password">
                            <b>Password</b>
                        </label>
                        <input
                            className="LoginForm-input-password form-control"
                            name="password"
                            id="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange} />
                    </div>

                    <div>
                        {errors && <Alert errors={errors} />}
                    </div>

                    <button
                        className="form-control btn btn-primary LoginForm-btn"
                        type="submit"
                        onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </div >
    );
}

export default LoginForm;