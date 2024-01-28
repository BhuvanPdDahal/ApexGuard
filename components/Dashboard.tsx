import Header from "./Header";

const Dashboard = () => {
    return (
        <div className='bg-dim flex-1 px-3 vs:px-4 sm:px-5 py-2 vs:py-3'>
            <Header
                title='All Transactions'
            />
            <div className='flex flex-col lg:flex-row gap-3 vs:gap-5 mt-2'>
                <div className='w-full'>
                    <div className='bg-white h-200px w-full rounded-lg shadow-second'></div>
                    <ul className='grid grid-cols-2 gap-3 sm:gap-4 mt-3 vs:mt-4 sm:mt-5'>
                        <li className='bg-white px-3 vs:px-4 py-2 rounded-lg shadow-second'>
                            <div className='text-15px vs:text-base font-medium text-normal text-center'>Total Income</div>
                            <div className='text-xl vs:text-2xl sm:text-3xl font-semibold text-normal text-center vs:mt-2px sm:mt-1'>$18500</div>
                        </li>
                        <li className='bg-white px-3 vs:px-4 py-2 rounded-lg shadow-second'>
                            <div className='text-15px vs:text-base font-medium text-normal text-center'>Total Expenses</div>
                            <div className='text-xl vs:text-2xl sm:text-3xl font-semibold text-tertiary text-center vs:mt-2px sm:mt-1'>$4500</div>
                        </li>
                        <li className='bg-white px-3 vs:px-4 py-2 rounded-lg shadow-second'>
                            <div className='text-15px vs:text-base font-medium text-normal text-center'>Total Balance</div>
                            <div className='text-xl vs:text-2xl sm:text-3xl font-semibold text-primary text-center vs:mt-2px sm:mt-1'>$126500</div>
                        </li>
                    </ul>
                </div>
                <div className='w-full'>
                    <div>
                        <h2 className='text-normal font-semibold sm:text-lg'>Recent History</h2>
                        <ul className='mt-2 flex flex-col gap-3 sm:gap-4'>
                            <li className='bg-white flex justify-between px-3 vs:px-4 py-2 rounded-lg shadow-second'>
                                <div className='text-15px vs:text-base font-medium text-normal'>Appointment</div>
                                <div className='font-semibold text-tertiary'>-$100</div>
                            </li>
                            <li className='bg-white flex justify-between px-3 vs:px-4 py-2 rounded-lg shadow-second'>
                                <div className='text-15px vs:text-base font-medium text-normal'>Travelling</div>
                                <div className='font-semibold text-tertiary'>-$100</div>
                            </li>
                            <li className='bg-white flex justify-between px-3 vs:px-4 py-2 rounded-lg shadow-second'>
                                <div className='text-15px vs:text-base font-medium text-normal'>Freelance</div>
                                <div className='font-semibold text-primary'>+$100</div>
                            </li>
                        </ul>
                    </div>
                    <div className='mt-5'>
                        <h3 className='flex justify-between text-normal text-15px vs:text-base px-3'>
                            <div className='font-medium'>Min</div>
                            <div className='font-semibold'>Salary</div>
                            <div className='font-medium'>Max</div>
                        </h3>
                        <div className='bg-white flex justify-between px-3 vs:px-4 py-2 mt-1 rounded-lg shadow-second'>
                            <div className='font-semibold text-tertiary'>$1200</div>
                            <div className='font-semibold text-primary'>$8000</div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h3 className='flex justify-between text-normal text-15px vs:text-base px-3'>
                            <div className='font-medium'>Min</div>
                            <div className='font-semibold'>Expense</div>
                            <div className='font-medium'>Max</div>
                        </h3>
                        <div className='bg-white flex justify-between px-3 vs:px-4 py-2 mt-1 rounded-lg shadow-second'>
                            <div className='font-semibold text-tertiary'>$1200</div>
                            <div className='font-semibold text-primary'>$8000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;