import { useState } from "react";
import { useContext } from "react";
import userContext from "./userContext";
import Alert from "./Alert";

/**
 * ProfileForm
 *
 * state:
 *  - formData { username, firstName, lastName, email }
 *  - messages {[msgs], "type"}
 *
 * props:
 *  - updateUserData()
 *
 *
 * RoutesList -> ProfileForm
 *
 */

function ProfileForm({ updateUserData }) {
    console.log("Rendered ProfileForm");

    const {currUser} = useContext(userContext);
    const {username, firstName, lastName, email} = currUser

    const [formData, setFormData] = useState({username, firstName, lastName, email});
    const [messages, setMessages] = useState({msgs: [], type: null});

    /** update form inputs */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    /** calls parent function to update user data */
    async function handleSubmit(evt) {
        evt.preventDefault();
        try{
            await updateUserData(formData);
            setMessages({msgs:["Updated successfully!"], type:"success"});
        } catch(errors) {
            setMessages({msgs: errors, type: "danger"});
        }
    }

    return (
        <div className="container col-6 offset-3">
            <h3 className="mt-4">Profile</h3>
            <div className="card p-3">
                <form className="ProfileForm-form" onSubmit={handleSubmit}>

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
                        {messages.msgs.length > 0 &&
                        <Alert msgs={messages.msgs} type={messages.type} />}
                    </div>

                    <button
                        className="form-control btn btn-primary ProfileForm-btn"
                        type="submit">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ProfileForm;