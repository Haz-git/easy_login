import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SignUpNotice = ({ userName, userEmail, userStatus }) => {
    return (
        <div>
            <h1>Congratulations!</h1>
            <h2>The sign up was a {userStatus}</h2>
            <h2>{userName} has signed up as {userEmail}.</h2>
            <Link to='/'>Click Here To Go Home</Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userName: state.signin.userSignUp.data.user.name,
        userEmail: state.signin.userSignUp.data.user.email,
        userStatus: state.signin.userSignUp.status
    }
}

export default connect(mapStateToProps)(SignUpNotice);