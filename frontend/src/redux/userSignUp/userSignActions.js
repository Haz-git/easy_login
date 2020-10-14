import USER_SIGN_UP from './userSignTypes';

export const userSignUp = (name, email, password, passwordConfirm) => {
    return {
        type: USER_SIGN_UP,
        payload: {
            name,
            email,
            password,
            passwordConfirm,
        }
    }
}

export default userSignUp;