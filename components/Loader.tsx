import React from 'react'

const Loader = () => {
    return (
        <div className='bg-dim min-h-rem flex items-center justify-center'>
            <img
                src="images/assets/loading-primary.svg"
                alt="loading..."
                className='h-60px'
            />
        </div>
    )
};

export default Loader;