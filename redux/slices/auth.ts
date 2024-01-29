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
        startLoading: (state, action: PayloadAction<Action>) => {
            if(action?.payload?.for !== AUTH) return state;
            return { ...state, isLoading: true };
        },
        endLoading: (state, action: PayloadAction<Action>) => {
            if(action?.payload?.for !== AUTH) return state;
            return { ...state, isLoading: false };
        },
        sign: (state, action: PayloadAction<Action>) => {
            localStorage.setItem('ApexGuardToken', action?.payload?.token || '');
            return {
                ...state,
                user: action?.payload?.user || null,
                token: action?.payload?.token || ''
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