
/**
 * Alert
 *
 * state: none
 *
 * props:
 *  - errors []
 *
 * { ProfileForm, LoginForm, SignupForm } -> Alert
 */

function Alert ({ msgs, type = "danger" }) {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {msgs.map((msg, idx) => (
                <p key={idx} className="alert-msg mb-0 small">{msg}</p>
            ))}
        </div>
    );
}

export default Alert;