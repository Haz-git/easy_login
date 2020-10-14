import { USER_SIGN_UP } from './userSignTypes';

const initialState = {};

export default (state = initialState, action) => {
    if (action.type === USER_SIGN_UP) {
        return {...state, user: action.payload}
    } else {
        return state;
    }
}