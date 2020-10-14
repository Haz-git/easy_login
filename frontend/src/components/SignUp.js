import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <h2> This should be a signup form requiring the name, email, password, and confirm</h2>
            <Link to='/'>Go Back Home</Link>
        </div>
    )
}

export default SignUp;