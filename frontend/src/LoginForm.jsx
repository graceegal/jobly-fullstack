import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

function LoginForm({ login }) {
    console.log("Rendered LoginForm");

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

    /** update form inputs */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    /** call parent component login function and navigates home if valid,
     * otherwise updates errors state
     */
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            await login(formData);
            navigate("/");
        } catch (errors) {
            setErrors(errors);
        }
    }

    return (
        <div className="container col-6 offset-3">
            <h3 className="mt-4">Log In</h3>
            <div className="card p-3">
                <form className="LoginForm-form" onSubmit={handleSubmit}>

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
                        {errors && <Alert msgs={errors} />}
                    </div>

                    <button
                        className="form-control btn btn-primary LoginForm-btn"
                        type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div >
    );
}

export default LoginForm;