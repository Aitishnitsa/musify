import React from 'react';

const Home = () => {
    return (
        <>
            <div className='grid grid-cols-7 gap-8 col-start-2 relative mx-auto px-6 body-font py-8 h-[93vh]'>
                <div className='col-span-2 bg-customBlack rounded-2xl isolate px-6 py-3'>
                    <h1 className='text-white'>Плейлисти</h1>
                </div>
                <div className='col-span-3 bg-customBlack rounded-2xl isolate px-6 py-3'>
                    <h1 className='text-white'>Home</h1>
                </div>
                <div className='col-span-2 bg-customBlack rounded-2xl isolate px-6 py-3'>
                    <h1 className='text-white'>Черга</h1>
                </div>
            </div>
        </>
    );
}

export default Home;