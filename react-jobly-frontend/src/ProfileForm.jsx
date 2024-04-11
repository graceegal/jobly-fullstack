import { useState } from "react";

/**
 * ProfileForm
 *
 * state:
 *  - formData { username, firstName, lastName, email }
 *
 * props:
 *  - handleSave()
 *  - userData { username, firstName, lastName, email }
 *
 *
 * TODO: -> ProfileForm
 *
 */

function ProfileForm({ handleSave, userData }) {
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
        <div>
            <h3>Profile</h3>
            <form className="ProfileForm-form my-3">

                <label
                    className="ProfileForm-label-username form-label"
                    htmlFor="username">
                    Username
                </label>
                <input
                    className="ProfileForm-input-username col-9 form-control-lg"
                    name="username"
                    id="username"
                    disabled={true}
                    value={formData.username}
                    onChange={handleChange} />

                <label
                    className="ProfileForm-label-firstName form-label"
                    htmlFor="firstName">
                    First Name
                </label>
                <input
                    className="ProfileForm-input-firstName col-9 form-control-lg"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange} />

                <label
                    className="ProfileForm-label-lastName form-label"
                    htmlFor="lastName">
                    Last Name
                </label>
                <input
                    className="ProfileForm-input-lastName col-9 form-control-lg"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange} />

                <label
                    className="ProfileForm-label-email form-label"
                    htmlFor="email">
                    Email
                </label>
                <input
                    className="ProfileForm-input-email col-9 form-control-lg"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange} />

                <button
                    className="btn btn-lg btn-primary ProfileForm-btn ms-2"
                    type="submit"
                    onClick={handleSubmit}>
                    Save Changes
                </button>
            </form>
        </div>
    );
}

export default ProfileForm;