import jwt from 'jsonwebtoken';

interface DecodedData {
    email: string;
    id: string;
}

const middleware = async (req: Request, res: any, next: any) => {
    // try {
    //     const token = req.headers.authorization.split(' ')[1];
    //     if(token) {
    //         const decodedData = jwt.verify(token, process.env.SECRET_KEY || '');
    //         req.email = (decodedData as DecodedData)?.email;
    //         req.userId = (decodedData as DecodedData)?.id;
    //         next();
    //     }
    // } catch (error) {
    //     return new Response(JSON.stringify({ message: "Authentication failed" }), { status: 500 });
    // }
};

export default middleware;