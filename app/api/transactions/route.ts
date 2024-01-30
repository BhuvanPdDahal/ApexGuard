import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '@models/User';
import Transaction from '@models/Transaction';
import { connectToDB } from "@utils/database";
import { FormDataProp as RequestBody } from '@interfaces/util';

export const POST = async (req: Request) => {
    try {
        await connectToDB();
        // const token = req?.headers?.authorization?.split(' ')[1];
        const { type } = req.url.search.arguments;
        const { title, amount, date, category, comment }: RequestBody = await req.json();
        // const user = await User.findById(userId);
        const newTransaction = await Transaction.create({ title, amount, date, category, comment });
    } catch (error: any) {
        console.log(error.message);
        return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
    }
};