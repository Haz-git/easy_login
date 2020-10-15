import React from 'react';
import { connect } from 'react-redux';

const SignUpNotice = ({ userName, userEmail, userStatus }) => {
    return (
        <div>
            <h1>Congratulations!</h1>
            <h2>The sign up was a `${userStatus}`!</h2>
            <h2>`${userName}` has signed up as `${userEmail}`.</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userName: state.signin.user.data.user.name,
        userEmail: state.signin.user.data.user.email,
        userStatus: state.signin.user.status
    }
}

export default connect(mapStateToProps)(SignUpNotice);