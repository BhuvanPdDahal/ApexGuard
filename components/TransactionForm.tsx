"use client";

import { useState, FormEvent } from "react";
import { RiAddLine } from "@remixicon/react";
import { useDispatch } from "react-redux";

import { TransactionFormProp } from "@interfaces/util";

const TransactionForm = ({
    plainText,
    loadingText
}: TransactionFormProp) => {
    const dispatch: any = useDispatch();
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('freelancing');
    const [comment, setComment] = useState('');
    const isLoading = false;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = {
            title, amount, date, category, comment
        };
        console.log(formData);
        // TODO - Dispatch the action to create transaction
    };

    return (
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-2 vs:gap-3 text-15px vs:text-base'>
            <input onChange={(e) => setTitle(e.target.value)} className='w-full border_solid_grey px-3 vs:px-4 py-2 outline-none rounded-sm focus:border-primary' type="text" placeholder='Title' value={title} minLength={3} required />
            <input onChange={(e) => setAmount(e.target.value)} className='w-full border_solid_grey px-3 vs:px-4 py-2 outline-none rounded-sm focus:border-primary' type="number" placeholder='Amount' value={amount} required />
            <input onChange={(e) => setDate(e.target.value)} className='bg-white w-full border_solid_grey px-3 vs:px-4 py-2 outline-none rounded-sm focus:border-primary' type="date" placeholder='Date' value={date} required />
            <select onChange={(e) => setCategory(e.target.value)} className='bg-white self-start border_solid_grey px-3 vs:px-4 py-2 outline-none rounded-sm focus:border-primary' value={category}>
                <option value="freelancing">Freelancing</option>
                <option value="investment">Investment</option>
                <option value="stocks">Stocks</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="other">Other</option>
            </select>
            <textarea onChange={(e) => setComment(e.currentTarget.value)} className='w-full border_solid_grey px-3 vs:px-4 py-2 outline-none rounded-sm resize-none focus:border-primary' rows={3} placeholder='Comment' value={comment} minLength={10} required></textarea>
            <button className={`self-start bg-tertiary flex items-center gap-1 px-3 vs:px-4 py-2 mt-1 text-white rounded-3xl transition-bg duration-300 ${isLoading ? 'cursor-not-allowed' : 'hover:bg-tertiarydark hover:shadow-first'}`} type='submit' disabled={isLoading}>
                {isLoading && (
                    <img
                        src="/images/assets/loading-secondary.svg"
                        alt=""
                        className='h-20px inline mr-1'
                    />
                )}
                <RiAddLine className={`${isLoading ? 'hidden' : 'inline'} h-18px vs:h-20px`} />
                {isLoading ? loadingText : plainText}
            </button>
        </form>
    )
};

export default TransactionForm;