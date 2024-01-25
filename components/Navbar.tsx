import Link from "next/link";

const Navbar = () => {
    return (
        <nav className='relative flex items-center justify-between px-5 py-2 shadow-second z-10'>
            <div>
                <img
                    src='/images/logos/main-logo.svg'
                    alt="ApexGuard"
                    className="h-45px"
                />
            </div>
            <div>
                <Link
                    href='/login'
                    className="px-4 py-2 rounded-sm bg-secondary mr-3 transition-bg duration-300 hover:bg-secondarydark hover:shadow-first"
                >
                    Login
                </Link>
                <Link
                    href='/login'
                    className="px-4 py-2 rounded-sm bg-primary text-white transition-bg duration-300 hover:bg-primarydark hover:shadow-first"
                >
                    Signup
                </Link>
            </div>
        </nav>
    )
};

export default Navbar;