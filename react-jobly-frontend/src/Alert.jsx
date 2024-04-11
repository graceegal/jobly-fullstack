
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

function Alert ({ errors }) {
    return (
        <div className="alert alert-danger" role="alert">
            {errors.map((err, idx) => (
                <p key={idx} className="alert-msg mb-0 small">{err}</p>
            ))}
        </div>
    );
}

export default Alert;