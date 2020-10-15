import api from '../../apis';
import { USER_LOGIN } from '../userSignUp/userSignTypes';
import history from '../../history';

export const userLogin = formValues => async dispatch => {
    //Sending information to DB:
    const response = await api.post('/login', {...formValues});

    dispatch({
        type: USER_LOGIN,
        payload: response.data,
    });

    console.log(response);

    if (response.data.completed === true) {
        history.push('/loginnotice');
    }
}

export default userLogin;