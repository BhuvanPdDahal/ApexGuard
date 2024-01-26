import Link from "next/link";

const Navbar = () => {
    return (
        <nav className='relative px-5 py-2 shadow-second z-10'>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div>
                    <img
                        src='/images/logos/main-logo.svg'
                        alt="ApexGuard"
                        className="h-35px vs:h-40px md:h-45px"
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
            </div>
        </nav>
    )
};

export default Navbar;