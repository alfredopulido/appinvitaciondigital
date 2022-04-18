import React from "react";

export function requireAuthentication(Component) {
    return class AuthenticatedComponent extends React.Component {
        isAuthenticated() {
            return true;
        }

        render() {
            const loginErrorMessage = (
                <h1>Login</h1>
            );
            return (
                <>
                    { this.isAuthenticated() === true ? <Component {...this.props} /> : loginErrorMessage }
                </>
            );
        }
    };
}

export default requireAuthentication;