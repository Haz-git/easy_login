import api from '../../apis';
import { USER_SIGN_UP }from './userSignTypes';

export const userSignUp = formValues => async dispatch => {
    //Sending information to DB:
    console.log('You have atleast reached here')
    const response = await api.post('/signup', {...formValues});

    console.log(response);

    dispatch({
        type: USER_SIGN_UP,
        payload: response.data,
    });
}

export default userSignUp;