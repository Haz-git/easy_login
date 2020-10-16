import { USER_SIGN_UP } from './userSignTypes';
import { USER_LOGIN } from './userSignTypes';

const initialState = {};

export default (state = initialState, action) => {
    if (action.type === USER_SIGN_UP) {
        return {...state, userSignUp: action.payload}
    } else if (action.type === USER_LOGIN) {
        return {...state, userLogin: action.payload}
    } else {
        return {...state};
    }
}