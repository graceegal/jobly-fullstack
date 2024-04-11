import { useState } from "react";

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
 * TODO: -> LoginForm
 *
 */

function LoginForm({ handleSave }) {
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
        <div>
            <h3>Log In</h3>
            <form className="LoginForm-form my-3">

                <label
                    className="LoginForm-label-username form-label"
                    htmlFor="username">
                    Username
                </label>
                <input
                    className="LoginForm-input-username col-9 form-control-lg"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange} />

                <label
                    className="LoginForm-label-password form-label"
                    htmlFor="password">
                    Password
                </label>
                <input
                    className="LoginForm-input-password col-9 form-control-lg"
                    name="password"
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange} />

                <button
                    className="btn btn-lg btn-primary LoginForm-btn ms-2"
                    type="submit"
                    onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default LoginForm;