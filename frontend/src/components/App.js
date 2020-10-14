import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Components:
import Header from './Header';
import SignUp from './SignUp';
import Login from './Login';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Route exact path='/' component={Header} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/login' component={Login} />
            </BrowserRouter>
        </>
    )
}

export default App;