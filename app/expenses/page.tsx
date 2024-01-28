import Sidebar from '@components/Sidebar';
import Expenses from '@components/Expenses';

const ExpensesPage = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <Expenses />
        </div>
    )
};

export default ExpensesPage;