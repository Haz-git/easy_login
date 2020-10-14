import React from 'react';
import Buttons from './Buttons';

const Header = () => {
    return (
        <>
            <h1>Hello! This is the test page connecting to my custom API.</h1>
            <h2>Try clicking the sign up button to sign up for a new account!</h2>
            <h2>Then, try logging in via the login button!</h2>
            <Buttons />
        </>
    )
}

export default Header;