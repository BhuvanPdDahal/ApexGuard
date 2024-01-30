"use client";

import { useState, useEffect } from 'react';

import Sidebar from '@components/Sidebar';
import Profile from '@components/Profile';
import NotFound from '@components/NotFound';
import { useAppSelector } from '@redux/slices';

const ProfilePage = () => {
    const [token, setToken] = useState('');
    const { user } = useAppSelector((state) => state.auth);

    useEffect(() => {
        setToken(localStorage.getItem('ApexGuardToken') || '');
    }, []);

    if(!user && !token) return <NotFound />
    return (
        <div className='flex'>
            <Sidebar />
            <Profile />
        </div>
    )
};

export default ProfilePage;