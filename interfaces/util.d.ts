import { FormEvent } from "react";

export interface InputFormProp {
    plainText: string;
    loadingText: string;
}

export interface FormDataProp {
    title: string;
    amount: string;
    date: string;
    type: string;
    comment: string;
    setTitle: Dispatch<SetStateAction<string>>;
    setAmount: Dispatch<SetStateAction<string>>;
    setDate: Dispatch<SetStateAction<string>>;
    setType: Dispatch<SetStateAction<string>>;
    setComment: Dispatch<SetStateAction<string>>;
}