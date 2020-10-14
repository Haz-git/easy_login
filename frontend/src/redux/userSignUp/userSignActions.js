import api from '../../apis';
import USER_SIGN_UP from './userSignTypes';

export const userSignUp = formValues => async dispatch => {
    //Sending information to DB:
    const response = await api.post('/signup', {...formValues});

    dispatch({
        type: USER_SIGN_UP,
        payload: response.data,
    });
}

export default userSignUp;