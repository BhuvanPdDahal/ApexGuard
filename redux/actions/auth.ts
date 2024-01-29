import * as api from '@api';
// import { Action as AlertAction } from '@interfaces/alert';
import {
    startLoading,
    endLoading,
    sign,
    logout
} from '@redux/slices/auth';
import {
    AUTH
} from '@constants/auth';
// import { success } from '@constants/alert';
import { FormDataProp, Action } from '@interfaces/auth';
import { AppDispatch } from '@redux/slices';
// import { showAlert } from './alert';
// import handleError from '@functions/error';

const payload = { for: AUTH };

export const signup = (formData: FormDataProp, router: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(startLoading(payload));
        console.log('inside signup action. formData is: ', formData);
        const { data } = await api.signup(formData);
        console.log('Data: ', data);
        dispatch(sign(data));
        dispatch(endLoading(payload));
        router.push('/dashboard');
    } catch (error) {
        console.log(error);
        
        dispatch(endLoading(payload));
    }
};

export const login = (formData: FormDataProp, router: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(startLoading(payload));
        console.log('inside signup action. formData is: ', formData);
        const { data } = await api.login(formData);
        console.log('Data: ', data);
        dispatch(sign(data));
        dispatch(endLoading(payload));
        router.push('/dashboard');
    } catch (error) {
        dispatch(endLoading(payload));
    }
};

export const loginWithToken = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(startLoading(payload));
        const { data } = await api.loginWithToken();
        dispatch(sign(data));
        dispatch(endLoading(payload));
    } catch (error) {
        dispatch(endLoading(payload));
    }
};