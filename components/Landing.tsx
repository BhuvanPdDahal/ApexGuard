import Link from "next/link";

const Landing = () => {
    return (
        <section className='bg-dim min-h-rem flex flex-col items-center justify-center px-3 py-5'>
            <h1 className='text-center'>
                <span className='text-3xl vs:text-4xl md:text-5xl leading-40px vs:leading-50px md:leading-58px bg-gradient-to-r from-primarylight to-primarydark bg-clip-text text-transparent font-bold'>
                    TAKE CONTROL OF YOUR EXPENSES
                </span>
                <br />
                <span className='text-2xl vs:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-tertiarydark to-tertiary bg-clip-text text-transparent'>
                    With ApexGuard
                </span>
            </h1>
            <p className='max-w-3xl sm:text-lg text-normal font-medium text-center mt-4'>
                ApexGuard is the cutting-edge app designed to simplify your expense management journey. Say goodbye to financial stress and hello to financial freedom!
            </p>
            <Link
                href='/signup'
                className="px-6 py-3 mt-8 rounded-sm bg-primary text-white text-15px vs:text-base md:text-lg transition-bg duration-300 hover:bg-primarydark hover:shadow-first"
            >
                Get Started Now
            </Link>
        </section>
    )
};

export default Landing;