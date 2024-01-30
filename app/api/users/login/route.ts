import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '@models/User';
import { connectToDB } from "@utils/database";
import { RequestBody } from '@interfaces/auth';

export const POST = async (req: Request) => {
    try {
        await connectToDB();
        const { email, password }: RequestBody = await req.json();
        const user = await User.findOne({ email });
        if(!user) return new Response(JSON.stringify({ message: 'User not found' }), { status: 400 });
        const passwordIsMatching = await bcrypt.compare(password, user.password);
        if (!passwordIsMatching) return new Response(JSON.stringify({ message: "Password is not matching" }), { status: 400 });
        const token = jwt.sign({ email, id: user._id }, process.env.SECRET_KEY || '');
        return new Response(JSON.stringify({ user, token }), { status: 200 });
    } catch (error: any) {
        console.log(error.message);
        return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
    }
};