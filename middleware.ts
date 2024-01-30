// import jwt from 'jsonwebtoken';
// import { NextApiRequest } from 'next';
// import { NextResponse } from 'next/server';

// import { useAppSelector } from '@redux/slices';

// interface DecodedData {
//     email: string;
//     id: string;
// }


// const { token } = useAppSelector((state) => state.auth);

export const middleware = (req: Request) => {
    // if(token) {
    //     console.log('Has token');
        
    //     return NextResponse.redirect(new URL('/dashboard', req.url));
    // }
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
    
};

export const config = {
    matcher: '/'
};