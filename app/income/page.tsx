import Sidebar from '@components/Sidebar';
import Income from '@components/Income';

const IncomePage = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <Income />
        </div>
    )
};

export default IncomePage;