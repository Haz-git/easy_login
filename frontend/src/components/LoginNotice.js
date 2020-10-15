import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const LoginNotice = ({ name, email }) => {
    return (
        <div>
            <h1>Congratulations! You've successfully logged in as {email}! </h1>
            <h2>Welcome back, {name}.</h2>
            
            <Link to='/'>Click Here To Go Home</Link>
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        name: state.signin.userLogin.userDetails.name,
        email: state.signin.userLogin.userDetails.email
    }
}

export default connect(mapStateToProps)(LoginNotice);