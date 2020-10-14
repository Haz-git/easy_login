import { createStore } from 'redux';
import reducers from './userReducer';

//Creating store with reducers and redux extension
export default createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());