import React from 'react';

const ListItem = () => {
    return (
        <div className='flex py-2'>
            <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a4/67/ba/a467ba62-87df-9d10-98d2-c517f68ac870/16UMGIM60882.rgb.jpg/600x600bf-60.jpg"
                alt="song"
                className='h-12 w-12 rounded-sm'
            ></img>
            <div className='pl-2'>
                <p className='text-white text-base'>Every Breath You Take</p>
                <p className='text-white text-base font-extralight'>The Police</p>
            </div>
        </div>
    );
}

export default ListItem;