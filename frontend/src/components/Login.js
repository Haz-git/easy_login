import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';


const Login = () => {
    return (
        <div>
            <div>
                <h1>Hello! Welcome to the login page.</h1>
                <h2>I hope you remember your email and password when you've signed up.</h2>
            </div>
            <div>
                <div>
                    <label>Please Enter Your Email Address:</label>
                    <Field name='loginEmail' component='input' />
                </div>
                <div>
                    <label>Please Enter Your Password</label>
                    <Field name='loginPassword' component='input' />
                </div>
            </div>
            <Link to='/'>Go Back Home</Link>
        </div>
    )
}

export default reduxForm({
    form: 'loginForm'
})(Login);