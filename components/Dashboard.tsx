import Header from "./Header";
import { TotalBoxProp, HistoryBoxProp, MinMaxSectionProp } from "@interfaces/dashboard";

const TotalBox = ({ title, value, color }: TotalBoxProp) => (
    <li className='bg-white px-3 vs:px-4 py-2 rounded-lg shadow-second'>
        <div className='text-15px vs:text-base font-medium text-normal text-center'>{title}</div>
        <div className={`text-xl vs:text-2xl sm:text-3xl font-semibold text-${color} text-center vs:mt-2px sm:mt-1`}>${value}</div>
    </li>
);

const HistoryBox = ({ title, type, value }: HistoryBoxProp) => (
    <li className='bg-white flex justify-between px-3 vs:px-4 py-2 rounded-lg shadow-second'>
        <div className='text-15px vs:text-base font-medium text-normal'>{title}</div>
        <div className={`font-semibold ${type === 'income' ? 'text-primary' : 'text-tertiary'}`}>{type === 'income' ? '+' : '-'}${value}</div>
    </li>
);

const MinMaxSection = ({ type, min, max }: MinMaxSectionProp) => (
    <div className='mt-5'>
        <h3 className='flex justify-between text-normal text-15px vs:text-base px-3'>
            <div className='font-medium'>Min</div>
            <div className='font-semibold'>{type}</div>
            <div className='font-medium'>Max</div>
        </h3>
        <div className='bg-white flex justify-between px-3 vs:px-4 py-2 mt-1 rounded-lg shadow-second'>
            <div className='font-semibold text-tertiary'>${min}</div>
            <div className='font-semibold text-primary'>${max}</div>
        </div>
    </div>
);

const Dashboard = () => {
    return (
        <div className='bg-dim flex-1 px-3 vs:px-4 sm:px-5 pt-2 vs:pt-3 pb-75px vs:pb-80px sm:pb-3'>
            <Header
                title='All Transactions'
            />
            <div className='flex flex-col lg:flex-row gap-3 vs:gap-5 mt-2'>
                <div className='w-full'>
                    <div className='bg-white h-200px w-full rounded-lg shadow-second'></div>
                    <ul className='grid grid-cols-2 gap-3 sm:gap-4 mt-3 vs:mt-4 sm:mt-5'>
                        <TotalBox
                            title="Total Income"
                            value={18500}
                            color="normal"
                        />
                        <TotalBox
                            title="Total Expenses"
                            value={4500}
                            color="tertiary"
                        />
                        <TotalBox
                            title="Total Balance"
                            value={126500}
                            color="primary"
                        />
                    </ul>
                </div>
                <div className='w-full'>
                    <div>
                        <h2 className='text-normal font-semibold text-15px vs:text-base sm:text-lg'>Recent History</h2>
                        <ul className='mt-2 flex flex-col gap-3 sm:gap-4'>
                            <HistoryBox
                                title="Stock Market"
                                type="income"
                                value={200}
                            />
                            <HistoryBox
                                title="Travelling"
                                type="expense"
                                value={100}
                            />
                            <HistoryBox
                                title="Freelance"
                                type="income"
                                value={250}
                            />
                        </ul>
                    </div>
                    <MinMaxSection
                        type="Salary"
                        min={1200}
                        max={8000}
                    />
                    <MinMaxSection
                        type="Expense"
                        min={1200}
                        max={8000}
                    />
                </div>
            </div>
        </div>
    )
};

export default Dashboard;