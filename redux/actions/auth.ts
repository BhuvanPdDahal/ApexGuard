import { Dispatch } from 'redux';

import * as api from '@api';
import { Action as AuthAction } from '@interfaces/auth';
// import { Action as AlertAction } from '@interfaces/alert';
import {
    START_LOADING,
    END_LOADING
} from '@constants/action';
import {
    AUTH,
    SIGNUP,
    LOGIN,
    signup_success,
    login_success
} from '@constants/auth';
// import { success } from '@constants/alert';
import { FormDataProp } from '@interfaces/auth';
// import { showAlert } from './alert';
// import handleError from '@functions/error';

export const signup = (formData: FormDataProp) => async (dispatch: Dispatch<AuthAction>) => {
    try {
        // dispatch({ type: START_LOADING, for: AUTH });
        console.log('inside signup action. formData is: ', formData);
        
        const { data } = await api.signup(formData);
        console.log('Data: ', data);
        
        // dispatch({ type: SIGNUP, data });
        // dispatch({ type: END_LOADING, for: AUTH });
        // showAlert(signup_success, success, dispatch);
        // navigate('/');
        
    } catch (error) {
        dispatch({ type: END_LOADING, for: AUTH });
        // handleError(error, dispatch);
    }
};

export const login = (formData: FormDataProp) => async (dispatch: Dispatch<AuthAction>) => {
    try {
        // dispatch({ type: START_LOADING, for: AUTH });
        const { data } = await api.login(formData);
        // dispatch({ type: LOGIN, data });
        // dispatch({ type: END_LOADING, for: AUTH });
        // showAlert(login_success, success, dispatch);
        // navigate('/');

    } catch (error) {
        dispatch({ type: END_LOADING, for: AUTH });
        // handleError(error, dispatch);
    }
};

export const loginWithToken = () => async (dispatch: Dispatch<AuthAction>) => {
    try {
        // dispatch({ type: START_LOADING, for: AUTH });
        const { data } = await api.loginWithToken();
        // dispatch({ type: LOGIN, data });
        // dispatch({ type: END_LOADING, for: AUTH });

    } catch (error) {
        dispatch({ type: END_LOADING, for: AUTH });
    }
};