import { useState } from "react";

/**
 * SignupForm
 *
 * state:
 *  - formData { username, password, firstName, lastName, email }
 *
 * props:
 *  - handleSave()
 *
 *
 * TODO: -> SignupForm
 *
 */

function SignupForm({ handleSave }) {
    console.log("Rendered SignupForm");

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
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
            <h3>Sign Up</h3>
            <form className="SignupForm-form my-3">

                <label
                    className="SignupForm-label-username form-label"
                    htmlFor="username">
                    Username
                </label>
                <input
                    className="SignupForm-input-username col-9 form-control-lg"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange} />

                <label
                    className="SignupForm-label-password form-label"
                    htmlFor="password">
                    Password
                </label>
                <input
                    className="SignupForm-input-password col-9 form-control-lg"
                    name="password"
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange} />

                <label
                    className="SignupForm-label-firstName form-label"
                    htmlFor="firstName">
                    First Name
                </label>
                <input
                    className="SignupForm-input-firstName col-9 form-control-lg"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange} />

                <label
                    className="SignupForm-label-lastName form-label"
                    htmlFor="lastName">
                    Last Name
                </label>
                <input
                    className="SignupForm-input-lastName col-9 form-control-lg"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange} />

                <label
                    className="SignupForm-label-email form-label"
                    htmlFor="email">
                    Email
                </label>
                <input
                    className="SignupForm-input-email col-9 form-control-lg"
                    name="email"
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange} />

                <button
                    className="btn btn-lg btn-primary SignupForm-btn ms-2"
                    type="submit"
                    onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default SignupForm;