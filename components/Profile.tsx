const Profile = () => {
    return (
        <div  className='bg-dim min-h-screen flex-1 flex items-center justify-center px-3 vs:px-4 sm:px-5 pt-2 vs:pt-3 pb-75px vs:pb-80px sm:pb-3'>
            <div>
                <img
                    src="/images/assets/profile.png"
                    alt="profile-img"
                    className="mx-auto"
                />
                <p className="text-center text-normal text-lg font-semibold">Bhuvan Dahal</p>
                <p className="text-center text-medium">Joined at 2024/01/29</p>
                <div className="flex justify-center gap-4 mt-2">
                    <button className="bg-tertiary text-white px-3 py-2 rounded-sm hover:bg-tertiarydark hover:shadow-first">Edit profile</button>
                    <button className="bg-tertiary text-white px-3 py-2 rounded-sm hover:bg-tertiarydark hover:shadow-first">Settigs</button>
                </div>
            </div>
        </div>
    )
};

export default Profile;