import React from 'react';
import PlayerSection from '../components/PlayerSection';
import PlaylistSection from '../components/PlaylistSection';
import QueueSection from '../components/QueueSection';

const Home = () => {
    return (
        <div className='h-[93vh] flex justify-center items-center'>
            <div className='grid grid-cols-7 gap-8 relative max-w-7xl mx-auto px-6 body-font'>
                <PlaylistSection></PlaylistSection>
                <PlayerSection
                    imgUrl={"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a4/67/ba/a467ba62-87df-9d10-98d2-c517f68ac870/16UMGIM60882.rgb.jpg/600x600bf-60.jpg"}
                    name="Every Breath You Take"
                    author={"The Police"}
                ></PlayerSection>
                <QueueSection></QueueSection>
            </div>
        </div>
    );
}

export default Home;