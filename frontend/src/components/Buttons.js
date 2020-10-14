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
        </>
    )
}

export default Buttons;