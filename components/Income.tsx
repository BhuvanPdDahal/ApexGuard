import {
    RiAddLine,
    RiBitCoinFill,
    RiFundsFill,
    RiCupFill,
    RiHandCoinFill,
    RiDeleteBin6Line
} from '@remixicon/react';

import Header from './Header';
import InputForm from './InputForm';

const Income = () => {
    return (
        <div className='bg-dim flex-1 px-3 vs:px-4 sm:px-5 py-2 vs:py-3'>
            <Header
                title='Incomes'
            />
            <div className='bg-white flex items-center justify-center gap-3 px-3 vs:px-4 py-2 vs:py-3 mt-2 rounded-lg shadow-second'>
                <span className='font-medium text-normal text-15px vs:text-base'>Total Income:</span>
                <span className='font-semibold text-primary'>$16500</span>
            </div>
            <div className='flex flex-col lg:flex-row gap-5 mt-5'>
                <InputForm />
                <ul className='w-full'>
                    <li className='bg-white flex items-center justify-between p-2 vs:p-3 mt-2 rounded-lg shadow-second'>
                        <div className='flex items-center gap-3'>
                            <div className='p-2 bg-secondary rounded-md'>
                                <RiBitCoinFill className='text-27px sm:text-30px' />
                            </div>
                            <div>
                                <h3 className='text-normal font-semibold text-15px vs:text-base'>From Freelancing</h3>
                                <div className='flex gap-2 vs:gap-3 text-13px vs:text-sm text-medium'>
                                    <p>$1200</p>
                                    <p>2023/12/09</p>
                                    <p>Freelancing</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-1 vs:p-2 rounded-full bg-grey text-normal cursor-pointer hover:bg-darkgrey'>
                            <RiDeleteBin6Line className='h-18px sm:h-20px' />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Income;