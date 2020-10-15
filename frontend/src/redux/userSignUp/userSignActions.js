import api from '../../apis';
import { USER_SIGN_UP }from './userSignTypes';
import history from '../../history';

export const userSignUp = formValues => async dispatch => {
    //Sending information to DB:
    const response = await api.post('/signup', {...formValues});
    dispatch({
        type: USER_SIGN_UP,
        payload: response.data,
    });

    history.push('/signupnotice');
}

export default userSignUp;