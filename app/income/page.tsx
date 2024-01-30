"use client";

import { useState, useEffect } from 'react';

import Sidebar from '@components/Sidebar';
import NotFound from '@components/NotFound';
import Income from '@components/Income';
import { useAppSelector } from '@redux/slices';

const IncomePage = () => {
    const [token, setToken] = useState('');
    const { user } = useAppSelector((state) => state.auth);

    useEffect(() => {
        setToken(localStorage.getItem('ApexGuardToken') || '');
    }, []);

    if(!user && !token) return <NotFound />
    return (
        <div className='flex'>
            <Sidebar />
            <Income />
        </div>
    )
};

export default IncomePage;