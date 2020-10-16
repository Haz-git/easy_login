import React from 'react';
import { Router, Route } from 'react-router-dom';

//Components:
import Header from './Header';
import SignUp from './SignUp';
import Login from './Login';
import SignUpNotice from './SignUpNotice';
import LoginNotice from './LoginNotice';
import ForgotAccount from './ForgotAccount';

//History Object:
import history from '../history';

const App = () => {
    return (
        <>
            <Router history={history}>
                <Route exact path='/' component={Header} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/signupnotice' component={SignUpNotice} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/loginnotice' component={LoginNotice} />
                <Route exact path='/forgotaccount' component={ForgotAccount} />
            </Router>
        </>
    )
}

export default App;