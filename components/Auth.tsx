"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface InputLabelProp {
    name: string;
    text: string;
    type: string;
    setter: React.Dispatch<React.SetStateAction<string>>;
}

const InputLabel = ({ name, text, type, setter }: InputLabelProp) => (
    <div className='mt-2'>
        <label
            htmlFor={name}
            className='font-medium'
        >
            {text}
        </label>
        <input
            onChange={(e) => setter(e.target.value)}
            type={type}
            id={name}
            name={name}
            className='w-full border border-solid border-grey rounded-sm px-3 py-2 outline-none focus:border-primary'
            required
        />
    </div>
);

const Auth = () => {
    const pathname = usePathname();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isLogin = pathname === '/login';

    return (
        <section className='min-h-screen bg-dim py-5 px-3 flex items-center justify-center'>
            <div className='bg-white max-w-md w-full shadow-second rounded-lg p-5'>
                <img
                    src="/images/logos/main-logo.svg"
                    alt="ApexGuard"
                    className='h-40px mx-auto'
                />
                <p className='w-full flex items-center justify-center h-1px my-5 bg-grey'>
                    <span className='text-primary px-3 bg-white text-darkgrey'>
                        {isLogin ? 'WELCOME BACK' : 'GET STARTED'}
                    </span>
                </p>
                <form action="">
                    {!isLogin && (
                        <InputLabel
                            name='name'
                            text='Name'
                            type='text'
                            setter={setName}
                        />
                    )}
                    <InputLabel
                        name='email'
                        text='Email'
                        type='email'
                        setter={setEmail}
                    />
                    <InputLabel
                        name='password'
                        text='Password'
                        type='password'
                        setter={setPassword}
                    />
                    <button
                        type="submit"
                        className='w-full px-3 py-2 rounded-sm bg-primary text-white mt-5 transition-bg duration-300 hover:bg-primarydark hover:shadow-first'
                    >
                        {isLogin ? 'Login' : 'Signup'}
                    </button>
                    <div className='flex justify-between mt-2 font-medium'>
                        <div>
                            {isLogin ? 'New to us?' : 'Already joined?'}
                        </div>
                        <Link
                            href={isLogin ? '/signup' : '/login'}
                            className='text-tertiary transition-bg duration-300 hover:text-tertiarydark hover:underline'
                        >
                            {isLogin ? 'Signup' : 'Login'}
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Auth;