import {
    RiAddLine,
    RiBitCoinFill,
    RiFundsFill,
    RiCupFill,
    RiHandCoinFill,
    RiDeleteBin6Line
} from '@remixicon/react';

const HistoryBox = () => {
    return (
        <li className='bg-white flex items-center justify-between gap-1 p-2 vs:p-3 mt-2 rounded-lg shadow-second'>
            <div className='flex items-center gap-3'>
                <div className='p-2 bg-secondary rounded-md'>
                    <RiBitCoinFill className='text-27px sm:text-30px' />
                </div>
                <div>
                    <h3 className='text-normal font-semibold text-sm vs:text-base'>From Freelancing</h3>
                    <div className='flex gap-2 vs:gap-3 text-11px vs:text-sm text-medium'>
                        <p>$1200</p>
                        <p>2023/12/09</p>
                        <p>Freelancing</p>
                    </div>
                </div>
            </div>
            <div className='p-1 vs:p-2 rounded-full bg-grey text-normal cursor-pointer transition-bg duration-300 hover:bg-darkgrey'>
                <RiDeleteBin6Line className='h-18px sm:h-20px' />
            </div>
        </li>
    )
};

export default HistoryBox;