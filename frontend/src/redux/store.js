import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import signInReducers from './userSignUp/userSignReducer';
import { reducer as formReducer } from 'redux-form';
import reduxThunk from 'redux-thunk';

//Creating Enhancers:

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//RootReducer:
const rootReducer = combineReducers({
    signin: signInReducers,
    form: formReducer,
});

//Creating store with reducers and redux extension
export default createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));