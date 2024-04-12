import { useState } from "react";

/**
 * ProfileForm
 *
 * state:
 *  - formData { username, firstName, lastName, email }
 *
 * props:
 *  - handleSave()
 *  - errors []
 *
 *
 * RoutesList -> ProfileForm
 *
 */

function ProfileForm({ handleSave, errors }) {
    console.log("Rendered ProfileForm");

    const [formData, setFormData] = useState(userData);

    /** update form inputs */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    /** call parent function and show alert for update successful */
    function handleSubmit(evt) {
        evt.preventDefault();
        handleSave(formData);
    }

    return (
        <div className="container col-6 offset-3">
            <h3 className="mt-4">Profile</h3>
            <div className="card p-3">
                <form className="ProfileForm-form">

                    <div className="mb-3">
                        <label
                            className="ProfileForm-label-username form-label"
                            htmlFor="username">
                            <b>Username</b>
                        </label>
                        <input
                            className="ProfileForm-input-username form-control"
                            name="username"
                            id="username"
                            disabled={true}
                            value={formData.username}
                            onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label
                            className="ProfileForm-label-firstName form-label"
                            htmlFor="firstName">
                            <b>First Name</b>
                        </label>
                        <input
                            className="ProfileForm-input-firstName form-control"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label
                            className="ProfileForm-label-lastName form-label"
                            htmlFor="lastName">
                            <b>Last Name</b>
                        </label>
                        <input
                            className="ProfileForm-input-lastName form-control"
                            name="lastName"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label
                            className="ProfileForm-label-email form-label"
                            htmlFor="email">
                            <b>Email</b>
                        </label>
                        <input
                            className="ProfileForm-input-email form-control"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange} />
                    </div>

                    <div>
                        {errors && <Alert errors={errors} />}
                    </div>

                    <button
                        className="form-control btn btn-primary ProfileForm-btn"
                        type="submit"
                        onClick={handleSubmit}>
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ProfileForm;