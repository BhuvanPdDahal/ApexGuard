import jwt from 'jsonwebtoken';

import User from '@models/User';
import { connectToDB } from "@utils/database";

interface ExtendedRequest extends Request {
    userId: string;
    email: string;
}

export const POST = async (req: ExtendedRequest) => {
    try {
        await connectToDB();
        const { userId } = req;
        const user = await User.findById(userId);
        const token: string = jwt.sign({ email: user.email, id: user._id }, process.env.SECRET_KEY || '');
        return new Response(JSON.stringify({ user, token }), { status: 200 });
    } catch (error: any) {
        console.log(error.message);
        return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
    }
};