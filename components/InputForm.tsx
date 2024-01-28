import { RiAddLine } from "@remixicon/react";

const InputForm = () => {
    return (
        <form className='w-full flex flex-col gap-3 text-15px vs:text-base'>
            <input className='w-full border_solid_grey px-3 vs:px-4 py-2 outline-none rounded-sm focus:border-primary' type="text" placeholder='Title' />
            <input className='w-full border_solid_grey px-3 vs:px-4 py-2 outline-none rounded-sm focus:border-primary' type="number" placeholder='Amount' />
            <input className='bg-white w-full border_solid_grey px-3 vs:px-4 py-2 outline-none rounded-sm focus:border-primary' type="datetime-local" placeholder='Date' />
            <select className='bg-white self-start border_solid_grey px-3 vs:px-4 py-2 outline-none rounded-sm focus:border-primary'>
                <option value="freelancing">Freelancing</option>
                <option value="investment">Investment</option>
                <option value="stocks">Stocks</option>
                <option value="bitcoin">Bitcion</option>
                <option value="other">Other</option>
            </select>
            <textarea className='w-full border_solid_grey px-3 vs:px-4 py-2 outline-none rounded-sm resize-none focus:border-primary' rows={3} placeholder='Comment'></textarea>
            <button className='self-start bg-tertiary flex items-center gap-1 px-3 vs:px-4 py-2 mt-2 text-white rounded-3xl transition-bg duration-300 hover:bg-tertiarydark hover:shadow-first' type='submit'>
                <RiAddLine className='inline h-18px vs:h-20px' />
                Add income
            </button>
        </form>
    )
};

export default InputForm;