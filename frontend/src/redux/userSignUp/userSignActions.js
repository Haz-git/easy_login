import api from '../../apis';
import { USER_SIGN_UP }from './userSignTypes';
import history from '../../history';

export const userSignUp = formValues => async dispatch => {
    //Sending information to DB:
    console.log('You have atleast reached here')
    const response = await api.post('/signup', {...formValues});

    console.log(response);

    dispatch({
        type: USER_SIGN_UP,
        payload: response.data,
    });

    history.push('/signupnotice');
}

export default userSignUp;