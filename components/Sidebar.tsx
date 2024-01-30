"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import {
    RiDashboardLine,
    RiDashboardFill,
    RiExchangeDollarLine,
    RiExchangeDollarFill,
    RiWallet3Line,
    RiWallet3Fill,
    RiWalletLine,
    RiWalletFill,
    RiUser3Line,
    RiUser3Fill,
    RiLogoutBoxRLine
} from "@remixicon/react";

import { useAppSelector } from "@redux/slices";
import { loginWithToken } from "@redux/actions/auth";

const Sidebar = () => {
    const pathname = usePathname();
    const dispatch: any = useDispatch();
    const token = localStorage.getItem('ApexGuardToken');

    useEffect(() => {
        if(!user && token) {
            dispatch(loginWithToken());
        }
    }, []);

    const { user } = useAppSelector((state) => state.auth);

    return (
        <>
            {/* Desktop Navigation */}
            <section className='hidden sm:flex flex-col sticky top-0 z-10 h-screen w-230px bg-white shadow-second'>
                <header className='border-b border-solid border-grey px-3 py-1'>
                    <img
                        src="/images/logos/main-logo.svg"
                        alt="ApexGuard"
                        className="h-35px"
                    />
                </header>
                <ul className='flex-1 p-2 overflow-auto'>
                    <li className="">
                        <Link href='/dashboard' className="w-full flex items-center gap-1 px-3 py-2 rounded-md transition-bg duration-300 hover:bg-dim">
                            {pathname.includes('/dashboard') ? (
                                <>
                                    <RiDashboardFill size={20} className="inline text-primarylight" />
                                    <span className="font-medium">Dashboard</span>
                                </>
                            ) : (
                                <>
                                    <RiDashboardLine size={20} className="inline text-normal" />
                                    <span className="text-normal">Dashboard</span>
                                </>
                            )}
                        </Link>
                    </li>
                    <li className="">
                        <Link href='/transactions' className="w-full flex items-center gap-1 px-3 py-2 rounded-md transition-bg duration-300 hover:bg-dim">
                            {pathname.includes('/transactions') ? (
                                <>
                                    <RiExchangeDollarFill size={20} className="inline text-primarylight" />
                                    <span className="font-medium">Transactions</span>
                                </>
                            ) : (
                                <>
                                    <RiExchangeDollarLine size={20} className="inline text-normal" />
                                    <span className="text-normal">Transactions</span>
                                </>
                            )}
                        </Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <Link href='/income' className="w-full flex items-center gap-1 px-3 py-2 rounded-md transition-bg duration-300 hover:bg-dim">
                            {pathname.includes('/income') ? (
                                <>
                                    <RiWallet3Fill size={20} className="inline text-primarylight" />
                                    <span className="font-medium">Income</span>
                                </>
                            ) : (
                                <>
                                    <RiWallet3Line size={20} className="inline text-normal" />
                                    <span className="text-normal">Income</span>
                                </>
                            )}
                        </Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <Link href='/expenses' className="w-full flex items-center gap-1 px-3 py-2 rounded-md transition-bg duration-300 hover:bg-dim">
                            {pathname.includes('/expenses') ? (
                                <>
                                    <RiWalletFill size={20} className="inline text-primarylight" />
                                    <span className="font-medium">Expenses</span>
                                </>
                            ) : (
                                <>
                                    <RiWalletLine size={20} className="inline text-normal" />
                                    <span className="text-normal">Expenses</span>
                                </>
                            )}
                        </Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <Link href='/profile' className="w-full flex items-center gap-1 px-3 py-2 rounded-md transition-bg duration-300 hover:bg-dim">
                            {pathname.includes('/profile') ? (
                                <>
                                    <RiUser3Fill size={20} className="inline text-primarylight" />
                                    <span className="font-medium">Profile</span>
                                </>
                            ) : (
                                <>
                                    <RiUser3Line size={20} className="inline text-normal" />
                                    <span className="text-normal">Profile</span>
                                </>
                            )}
                        </Link>
                    </li>
                </ul>
                <footer className='border-t border-solid border-grey p-2'>
                    <Link href='/login' className='w-full flex items-center justify-center gap-1 py-1 text-normal rounded-md transition-bg duration-300 hover:bg-dim'>
                        <RiLogoutBoxRLine size={20} className="inline" />
                        Logout
                    </Link>
                </footer>
            </section>

            {/* Mobile Navigation */}
            <section className='sm:hidden fixed left-0 bottom-0 z-10 bg-white w-screen p-3 shadow-fourth'>
                <ul className='flex gap-2'>
                    <li className="w-full ">
                        <Link href='/dashboard'>
                            {pathname.includes('/dashboard') ? (
                                <RiDashboardFill size={18} className="mx-auto text-primarylight" />
                            ) : (
                                <RiDashboardLine size={18} className="mx-auto text-normal" />
                            )}
                            <p className={`text-10px vs:text-13px text-center ${pathname.includes('/profile') ? 'font-medium' : 'text-normal'}`}>Dashboard</p>
                        </Link>
                    </li>
                    <li className="w-full ">
                        <Link href='/transactions'>
                            {pathname.includes('/transactions') ? (
                                <RiExchangeDollarFill size={18} className="mx-auto text-primarylight" />
                            ) : (
                                <RiExchangeDollarLine size={18} className="mx-auto text-normal" />
                            )}
                            <p className={`text-10px vs:text-13px text-center ${pathname.includes('/profile') ? 'font-medium' : 'text-normal'}`}>Transactions</p>
                        </Link>
                    </li>
                    <li className="w-full ">
                        <Link href='/income'>
                            {pathname.includes('/income') ? (
                                <RiWallet3Fill size={18} className="mx-auto text-primarylight" />
                            ) : (
                                <RiWallet3Line size={18} className="mx-auto text-normal" />
                            )}
                            <p className={`text-10px vs:text-13px text-center ${pathname.includes('/profile') ? 'font-medium' : 'text-normal'}`}>Income</p>
                        </Link>
                    </li>
                    <li className="w-full ">
                        <Link href='/expenses'>
                            {pathname.includes('/expenses') ? (
                                <RiWalletFill size={18} className="mx-auto text-primarylight" />
                            ) : (
                                <RiWalletLine size={18} className="mx-auto text-normal" />
                            )}
                            <p className={`text-10px vs:text-13px text-center ${pathname.includes('/profile') ? 'font-medium' : 'text-normal'}`}>Expenses</p>
                        </Link>
                    </li>
                    <li className="w-full ">
                        <Link href='/profile'>
                            {pathname.includes('/profile') ? (
                                <RiUser3Fill size={18} className="mx-auto text-primarylight" />
                            ) : (
                                <RiUser3Line size={18} className="mx-auto text-normal" />
                            )}
                            <p className={`text-10px vs:text-13px text-center ${pathname.includes('/profile') ? 'font-medium' : 'text-normal'}`}>Profile</p>
                        </Link>
                    </li>
                </ul>
            </section>
        </>
    ) 
};

export default Sidebar;