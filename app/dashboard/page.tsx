import Sidebar from '@components/Sidebar';
import Dashboard from '@components/Dashboard';

const DashboardPage = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <Dashboard />
        </div>
    )
};

export default DashboardPage;