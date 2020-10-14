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
                <Header />
                <Route path='/signup' exact component={SignUp} />
                <Route path='/login' exact component={Login} />
            </BrowserRouter>
        </>
    )
}

export default App;