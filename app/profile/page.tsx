import Sidebar from '@components/Sidebar';
import Profile from '@components/Profile';

const ProfilePage = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <Profile />
        </div>
    )
};

export default ProfilePage;