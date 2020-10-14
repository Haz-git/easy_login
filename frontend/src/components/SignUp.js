import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';


const SignUp = ({ handleSubmit }) => {

    const handleOnSubmit = formValues => {
        console.log(formValues);
    }



    return (
        <div>
            <div>
                <h1>Hello! Please sign up as a new user!</h1>
            </div>
                <form onSubmit={handleSubmit(handleOnSubmit)}>
                    <div>
                        <label>Please enter a name: </label>
                        <Field name='name' component='input'></Field>
                    </div>
                    <div>
                        <label>Please enter an email address: </label>
                        <Field name='email' component='input'></Field>
                    </div>
                    <div>
                        <label>Please enter a password: </label>
                        <Field name='password' component='input'></Field>
                    </div>
                    <div>
                        <label>Please confirm your password: </label>
                        <Field name='passwordConfirm' component='input'></Field>
                    </div>
                    <button type='submit'>Submit!</button>
                </form>
            <div>
                <Link to='/'>Go Back Home</Link>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'signUpForm'
})(SignUp)