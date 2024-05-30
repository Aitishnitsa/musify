import React from 'react';
import ListItem from '../components/ListItem';
import Player from '../components/Player';

const Home = () => {
    return (<>
        <div className='grid grid-cols-7 gap-8 col-start-2 relative mx-auto px-4 body-font py-4'>
            <div className='col-span-2 bg-customBlack rounded-2xl isolate px-6 py-3'>
                <h1 className='text-white font-bold pb-3'>Плейлисти</h1>
                <ListItem></ListItem>
            </div>
            <div className='col-span-3 bg-customBlack rounded-2xl isolate px-6 py-3'>
                <Player></Player>
            </div>
            <div className='col-span-2 bg-customBlack rounded-2xl isolate px-6 py-3'>
                <h1 className='text-white font-bold'>Черга</h1>
            </div>
        </div>
    </>);
}

export default Home;