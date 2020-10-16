import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import api from '../apis';
import history from '../history';

const ForgotAccount = ({ isOnline, handleSubmit }) => {

    useEffect(() => {
        console.log(isOnline)
    },[]);

    const handleOnSubmit = async values => {
        console.log(values);
        //Temporary handler--need action creator for submission function? Or directly send request to server?
        await api.post('/forgotpassword', {...values});
        history.push('/');
    }

    const renderText = () => {
        if (isOnline === true) {
            return (
                <div>
                    <h1>Welcome! I see that you're logged in. That means you haven't forgot your password!</h1>
                    <h2>Did you mean 'I want to change my password?'</h2>
                    <Link to='/'>I want to change my password!</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Welcome! I'm sorry that you've forgot your password.</h1>
                    <h2>We can help with that! Just provide your email address below:</h2>
                    <form onSubmit={handleSubmit(handleOnSubmit)}>
                        <label>Email:</label>
                        <Field name='email' component='input' />
                        <button type='submit'>Reset My Password</button>
                    </form>
                </div>
            )
        }
    }

    return (
        <div>
            {renderText()}
            <div>
                <Link to='/'>Go back home</Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    if (state.signin.userLogin) {
        return {
            isOnline: state.signin.userLogin.completed
        }
    }
}

const reduxForgotAccount = connect(mapStateToProps)(ForgotAccount);

export default reduxForm({
    form: 'forgotPasswordForm'
})(reduxForgotAccount);