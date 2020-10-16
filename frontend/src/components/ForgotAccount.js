import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

const ForgotAccount = ({ isOnline }) => {

    const renderText = () => {
        if (isOnline === true) {
            return (
                <div>
                    <h1>Welcome! I see that you're logged in. That means you haven't forgot your password!</h1>
                    <h2>Did you mean 'I want to change my password?'</h2>
                    <Link to='/'>I want to change my password!</Link>
                </div>
            )
        } else if (isOnline === false || isOnline === undefined) {
            return (
                <div>
                    <h1>Welcome! I'm sorry that you've forgot your password.</h1>
                    <h2>We can help with that! Just provide your email address below:</h2>
                    <Field name='email' component='input' />
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
    if (state.signup) {
        return {
            isOnline: state.signin.userLogin.completed
        }
    } else {
        return undefined;
    }
}

const reduxForgotAccount = connect(mapStateToProps)(ForgotAccount);

export default reduxForm({
    form: 'forgotPasswordForm'
})(reduxForgotAccount);