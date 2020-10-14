import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div>
            <h2> This should be a login form requiring an email and a password </h2>
            <Link to='/'>Go Back Home</Link>
        </div>
    )
}

export default Login;