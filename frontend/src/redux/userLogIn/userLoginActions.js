import api from '../../apis';
import { USER_LOGIN } from '../userSignUp/userSignTypes';
import history from '../../history';

export const userLogin = formValues => async dispatch => {
    //Sending information to DB:
    const response = await api.post('/login', {...formValues});
    console.log(response);

    dispatch({
        type: USER_LOGIN,
        payload: response.data,
    });

    // history.push('/signupnotice');
}

export default userLogin;