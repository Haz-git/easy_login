import React, { useEffect } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link, useParams } from 'react-router-dom';
import api from '../apis';
import history from '../history';

const ResetPassword = ({ handleSubmit }) => {

    //Grabbing token from url.
    let { token } = useParams();

    const handleOnSubmit = formValues => {
        //Temp:
        console.log(formValues);
        api.patch(`/resetpassword/${token}`, {...formValues});
        console.log('Password Updated');
        //If task is completed: push user to the main page--
        history.push('/');
    }

    return (
        <div>
            <h1>Hello! If you're here that means that you want to reset your password.</h1>
            <h2>Just input your new password and confirm it below:</h2>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <div>
                    <label>New Password:</label>
                    <Field name='password' component='input' />
                </div>
                <div>
                    <label>Confirm New Password: </label>
                    <Field name='passwordConfirm' component='input' />
                </div>
                <div>
                    <button type="submit">Reset Your Password</button>
                </div>
            </form>
            <Link to='/'>Go back Home</Link>
        </div>
    )
}

export default reduxForm({
    form: "resetPasswordForm"
})(ResetPassword);