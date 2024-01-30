"use client";

import { useState, useEffect } from 'react';

import Sidebar from '@components/Sidebar';
import NotFound from '@components/NotFound';
import { useAppSelector } from '@redux/slices';

const Transactions = () => {
    const [token, setToken] = useState('');
    const { user } = useAppSelector((state) => state.auth);

    useEffect(() => {
        setToken(localStorage.getItem('ApexGuardToken') || '');
    }, []);

    if(!user && !token) return <NotFound />
    return (
        <div className='bg-dim'>
            <Sidebar />
        </div>
    )
};

export default Transactions;