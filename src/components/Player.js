import React from 'react';

const Player = () => {
    return (<>
        <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a4/67/ba/a467ba62-87df-9d10-98d2-c517f68ac870/16UMGIM60882.rgb.jpg/600x600bf-60.jpg"
            alt="song"
            className='w-full rounded-lg p-1'
        ></img>
        <h1 className='text-white text-lg font-bold'>Every Breath You Take</h1>
        <h2 className='text-white text-base font-light'>The Police</h2>
        <div className='flex items-center justify-center'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 1.5V22.5429C24 23.1857 23.3625 23.6143 22.875 23.2714L6.375 12.4286V23.1429C6.375 23.6143 6.0375 24 5.625 24H0.75C0.3375 24 0 23.6143 0 23.1429V0.857143C0 0.385714 0.3375 0 0.75 0H5.625C6.0375 0 6.375 0.385714 6.375 0.857143V11.6143L22.875 0.728572C23.3625 0.428572 24 0.857143 24 1.5Z" fill="white" />
            </svg>
            <div className='px-4'>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 0C10.7438 0 0 10.7438 0 24C0 37.2562 10.7438 48 24 48C37.2562 48 48 37.2562 48 24C48 10.7438 37.2562 0 24 0ZM34.9219 25.9219L21.4219 34.1719C21.0656 34.3875 20.6531 34.5 20.25 34.5C18.9666 34.5 18 33.45 18 32.25V15.75C18 14.5594 18.9562 13.5 20.25 13.5C20.6572 13.5 21.0636 13.6103 21.4228 13.8296L34.9228 22.0796C35.5875 22.4906 36 23.2125 36 24C36 24.7875 35.5875 25.5094 34.9219 25.9219Z" fill="white" />
                </svg>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.5V22.5429C0 23.1857 0.6375 23.6143 1.125 23.2714L17.625 12.4286V23.1429C17.625 23.6143 17.9625 24 18.375 24H23.25C23.6625 24 24 23.6143 24 23.1429V0.857143C24 0.385714 23.6625 0 23.25 0H18.375C17.9625 0 17.625 0.385714 17.625 0.857143V11.6143L1.125 0.771428C0.6375 0.428571 0 0.857143 0 1.5Z" fill="white" />
            </svg>
        </div>
        <div className='mt-2'>
            <div className='bg-white h-1 rounded-full'>
                <div className="bg-red-500 h-1 rounded-full w-1/2"></div>
            </div>
            <div className="flex justify-between text-sm text-white">
                <span>1:57</span>
                <span>3:53</span>
            </div>
        </div>
    </>)
}

export default Player;