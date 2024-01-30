import jwt from 'jsonwebtoken';
import { NextApiRequest } from 'next';

interface DecodedData {
    email: string;
    id: string;
}

// const middleware = async (req: NextApiRequest, res: any, next: any) => {
const middleware = async () => {
    // try {
    //     const token = req?.headers?.authorization?.split(' ')[1];
    //     if(token) {
    //         const decodedData = jwt.verify(token, process.env.SECRET_KEY || '');
    //         req.email = (decodedData as DecodedData)?.email;
    //         req.userId = (decodedData as DecodedData)?.id;
    //         next();
    //     }
    // } catch (error) {
    //     return new Response(JSON.stringify({ message: "Authentication failed" }), { status: 500 });
    // }
    console.log('Hello there');
};

export default middleware;