import User from '@models/User';
import { connectToDB } from "@utils/database";
import { ExtendedAuthNextApiRequest } from '@interfaces/auth';
import { NextApiResponse } from 'next';

export const POST = async (req: ExtendedAuthNextApiRequest, res: NextApiResponse) => {
    try {
        await connectToDB();
        const { name, email, password } = req.body;
        console.log(name, email, password);
        
        res.status(200).json({ message: 'Hello' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};