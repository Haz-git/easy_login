import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <h1>Hello! This is the test page connecting to my custom API.</h1>
            <h2>Try clicking the sign up button to sign up for a new account!</h2>
            <h2>Then, try logging in via the login button!</h2>
            <div>
                <Link to='/Signup'>Sign Up!</Link>
            </div>
            <div>
                <Link to='/login'>Login!</Link>
            </div>
        </>
    )
}

export default Header;