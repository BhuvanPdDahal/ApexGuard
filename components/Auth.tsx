"use client";

import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation';
import { useState, FormEvent } from 'react';

import { InputLabelProp } from '@interfaces/auth';
import { login, signup } from '@redux/actions/auth';

const InputLabel = ({ name, text, type, setter }: InputLabelProp) => (
    <div className='mt-2 text-15px vs:text-base'>
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
    const dispatch: any = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const isLogin = pathname === '/login';

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(isLoading);
        
        const formData = {
            name, email, password
        };
        if(isLogin) {
            dispatch(login(formData));
        } else {
            dispatch(signup(formData));
        }
        setIsLoading(false);
    };

    return (
        <section className='min-h-screen bg-dim py-5 px-1 vs:px-3 flex items-center justify-center'>
            <div className='bg-white max-w-md w-full shadow-second rounded-lg p-4 vs:p-5'>
                <img
                    src="/images/logos/main-logo.svg"
                    alt="ApexGuard"
                    className='h-35px vs:h-40px mx-auto'
                />
                <p className='w-full flex items-center justify-center h-1px my-4 vs:my-5 bg-grey'>
                    <span className='text-primary px-3 text-15px vs:text-base bg-white text-darkgrey'>
                        {isLogin ? 'WELCOME BACK' : 'GET STARTED'}
                    </span>
                </p>
                <form onSubmit={handleSubmit}>
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
                        className='w-full px-3 py-2 rounded-sm text-15px vs:text-base bg-primary text-white mt-4 vs:mt-5 transition-bg duration-300 hover:bg-primarydark hover:shadow-first'
                    >
                        {isLoading && (
                            <img
                                src="/images/assets/loading-secondary.svg"
                                alt=""
                                className='h-20px inline mr-1'
                            />
                        )}
                        {isLogin
                            ? isLoading ? 'Logging in...' : 'Login'
                            : isLoading ? 'Signing up...' : 'Signup'
                        }
                    </button>
                    <div className='flex justify-between text-15px vs:text-base mt-2 font-medium'>
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