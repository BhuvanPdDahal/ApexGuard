import { FormEvent } from 'react';

import Header from './Header';
import InputForm from './TransactionForm';
import HistoryBox from './HistoryBox';

const Expenses = () => {
    const createExpense = (e: FormEvent<HTMLFormElement>) => {

    };

    return (
        <div className='bg-dim min-h-screen flex-1 px-3 vs:px-4 sm:px-5 pt-2 vs:pt-3 pb-75px vs:pb-80px sm:pb-3'>
            <Header
                title='Expenses'
            />
            <div className='bg-white flex items-center justify-center gap-3 px-3 vs:px-4 py-2 vs:py-3 mt-2 rounded-lg shadow-second'>
                <span className='font-medium text-normal text-15px vs:text-base'>Total Expense:</span>
                <span className='font-semibold text-primary'>$16500</span>
            </div>
            <div className='flex flex-col lg:flex-row gap-4 sm:gap-5 mt-5'>
                <InputForm
                    plainText='Add expense'
                    loadingText='Adding expense...'
                />
                <div className='w-full'>
                    <h2 className='text-normal font-semibold text-15px vs:text-base sm:text-lg'>Recent History</h2>
                    <ul>
                        <HistoryBox />
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Expenses;