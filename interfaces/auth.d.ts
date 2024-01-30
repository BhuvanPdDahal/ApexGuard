import { ObjectId } from 'mongoose';
import { NextApiRequest } from 'next';

export interface InputLabelProp {
    name: string;
    text: string;
    type: string;
    setter: React.Dispatch<React.SetStateAction<string>>;
}

export interface FormDataProp {
    name: string;
    email: string;
    password: string;
}

export interface RequestBody {
    name: string;
    email: string;
    password: string;
}

export interface User {
    _id: ObjectId;
    name: string;
    email: string;
    password: string;
    joinedAt: string;
}

export interface State {
    isLoading: boolean;
    user: User | null;
    token: string;
}

export interface Action {
    for?: string;
    user?: User;
    token?: string;
}