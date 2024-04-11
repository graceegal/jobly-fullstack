import { useState } from "react";
import Alert from "./Alert";

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
 * RoutesList -> SignupForm
 *
 */

function SignupForm({ handleSave, errors }) {
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
        <div className="container col-9">
            <h3 className="mt-4">Sign Up</h3>
            <div className="card p-3">
                <form className="SignupForm-form">

                    <div className="mb-3">
                        <label
                            className="SignupForm-label-username form-label"
                            htmlFor="username">
                            <b>Username</b>
                        </label>
                        <input
                            className="SignupForm-input-username form-control"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label
                            className="SignupForm-label-password form-label"
                            htmlFor="password">
                            <b>Password</b>
                        </label>
                        <input
                            className="SignupForm-input-password form-control"
                            name="password"
                            id="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label
                            className="SignupForm-label-firstName form-label"
                            htmlFor="firstName">
                            <b>First Name</b>
                        </label>
                        <input
                            className="SignupForm-input-firstName form-control"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label
                            className="SignupForm-label-lastName form-label"
                            htmlFor="lastName">
                            <b>Last Name</b>
                        </label>
                        <input
                            className="SignupForm-input-lastName form-control"
                            name="lastName"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label
                            className="SignupForm-label-email form-label"
                            htmlFor="email">
                            <b>Email</b>
                        </label>
                        <input
                            className="SignupForm-input-email form-control"
                            name="email"
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange} />
                    </div>

                    <div>
                        {errors && <Alert errors={errors} />}
                    </div>

                    <button
                        className="form-control btn btn-primary SignupForm-btn"
                        type="submit"
                        onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignupForm;