import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { State, Action } from '@interfaces/auth';
import { AUTH } from "@constants/auth";

const initialState: State = {
    isLoading: false,
    user: null,
    token: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        startLoading: (state: State, action: Action) => {
            if(action?.for !== AUTH) return state;
            return { ...state, isLoading: true };
        },
        endLoading: (state: State, action: Action) => {
            if(action?.for !== AUTH) return state;
            return { ...state, isLoading: true };
        },
        sign: (state: State, action: Action) => {
            localStorage.setItem('ApexGuardToken', action?.data?.token || '');
            return {
                ...state,
                user: action?.data?.user || null,
                token: action?.data?.token || ''
            };
        },
        logout: () => {
            localStorage.removeItem('ApexGuardToken');
            return initialState;
        }
    }
});

export const { startLoading, endLoading, sign, logout } = authSlice.actions;
export default authSlice.reducer;