import { FormEvent } from "react";

export interface TransactionFormProp {
    plainText: string;
    loadingText: string;
}

export interface FormDataProp {
    title: string;
    amount: string;
    date: string;
    category: string;
    comment: string;
}