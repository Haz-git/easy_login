import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = () => {
    return (
        <>
            <div>
                <Link to='/signup'>Sign Up!</Link>
            </div>
            <div>
                <Link to='/login'>Login!</Link>
            </div>
            <div>
                <h2>Test your password resets here:</h2>
            </div>
            <div>
                <Link to='/forgotaccount'>I forgot my password</Link>
            </div>
        </>
    )
}

export default Buttons;