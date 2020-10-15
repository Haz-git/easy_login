import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import userLogin from '../redux/userLogIn/userLoginActions';


const Login = ({ handleSubmit, userLogin }) => {

    const handleOnSubmit = formValues => {
        console.log(formValues);
        userLogin(formValues);
    }

    return (
        <div>
            <div>
                <h1>Hello! Welcome to the login page.</h1>
                <h2>I hope you remember your email and password when you've signed up.</h2>
            </div>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <div>
                    <div>
                        <label>Please Enter Your Email Address:</label>
                        <Field name='email' component='input' />
                    </div>
                    <div>
                        <label>Please Enter Your Password</label>
                        <Field name='password' component='input' />
                    </div>
                </div>
                <button type='submit'>Submit</button>
            </form>
            <Link to='/'>Go Back Home</Link>
        </div>
    )
}

const connectedLoginForm = connect(null, { userLogin })(Login);

export default reduxForm({
    form: 'loginForm'
})(connectedLoginForm);