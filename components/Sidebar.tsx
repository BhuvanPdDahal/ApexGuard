"use client";

import Link from "next/link";
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

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <section className='sticky top-0 z-10 h-screen w-250px bg-white flex flex-col shadow-second'>
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
    ) 
};

export default Sidebar;