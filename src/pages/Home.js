import React from 'react';
import PlayerSection from '../components/PlayerSection';
import PlaylistSection from '../components/PlaylistSection';
import QueueSection from '../components/QueueSection';

const Home = () => {
    return (
        <div className='h-[93vh] flex justify-center items-center'>
            <div className='grid grid-cols-7 gap-8 relative max-w-7xl mx-auto px-6 body-font'>
                <PlaylistSection></PlaylistSection>
                <PlayerSection></PlayerSection>
                <QueueSection></QueueSection>
            </div>
        </div>
    );
}

export default Home;