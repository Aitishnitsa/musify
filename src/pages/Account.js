import React from 'react';
import UserInfoSection from '../components/UserInfoSection';
import TopTracksSection from '../components/TopTracksSection';
import TopArtistsSection from '../components/TopArtistsSection';

const Account = () => {
    return (
        <div className='h-[93vh] flex justify-center items-center'>
            <div className='h-[85vh] grid grid-flow-col grid-rows-3 gap-8 relative w-full max-w-7xl mx-auto px-6 body-font'>
                <UserInfoSection></UserInfoSection>
                <TopTracksSection></TopTracksSection>
                <TopArtistsSection></TopArtistsSection>
            </div>
        </div>
    );
}

export default Account;