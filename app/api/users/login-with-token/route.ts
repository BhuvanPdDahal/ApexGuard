import jwt from 'jsonwebtoken';

import User from '@models/User';
import { connectToDB } from "@utils/database";

interface DecodedData {
    id: string;
    email: string;
}

export const POST = async (req: Request) => {
    try {
        await connectToDB();
        const token = req.headers.get('Authorization')?.split(' ')[1];
        if(!token) return new Response(JSON.stringify({ message: 'No token provided' }), { status: 400 });
        const decodedData = jwt.verify(token, process.env.SECRET_KEY || '');
        const user = await User.findById((decodedData as DecodedData).id);
        const newToken: string = jwt.sign({ email: user.email, id: user._id }, process.env.SECRET_KEY || '');
        return new Response(JSON.stringify({ user, token: newToken }), { status: 200 });
    } catch (error: any) {
        console.log(error.message);
        return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
    }
};