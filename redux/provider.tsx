"use client";

import { store } from "./slices";
import { Provider } from "react-redux";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}