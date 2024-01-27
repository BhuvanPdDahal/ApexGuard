import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '@models/User';
import { connectToDB } from "@utils/database";

export const POST = async (req: Request) => {
    try {
        await connectToDB();
        const { name, email, password } = await req.json();
        const userExists = await User.findOne({ email });
        if(userExists) return new Response('User with this email already exists', { status: 400 });
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({ name, email, password: hashedPassword });
        const token = jwt.sign({ email, id: newUser._id }, process.env.SECRET_KEY || '');
        return new Response(JSON.stringify({ user: newUser, token }), { status: 200 });
    } catch (error: any) {
        console.log(error.message);
        return new Response('Something went wrong', { status: 500 });
    }
};