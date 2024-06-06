import React from 'react';

const ListItem = ({ imgUrl, song, artist, className }) => {
    return (
        <div className='flex py-2 cursor-pointer border border-transparent transition ease-in-out delay-50 hover:border-b-customGreen'>
            <img
                src={imgUrl}
                alt="song"
                className='h-12 w-12 rounded-sm'
            ></img>
            <div className={`pl-2 ${className}`}>
                <p className='text-white text-base truncate'>{song}</p>
                <p className='text-white text-base font-extralight truncate'>{artist}</p>
            </div>
        </div>
    );
}

export default ListItem;