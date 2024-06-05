import React from 'react';
import PlaylistSection from '../components/PlaylistSection';
import QueueSection from '../components/QueueSection';
import SearchSection from '../components/SearchSection';

const Search = () => {
    return (<>
        <div className='h-[93vh] flex justify-center items-center'>
            <div className='grid grid-cols-1 sm:grid-cols-7 gap-1 sm:gap-3 md:gap-5 lg:gap-8 relative max-w-7xl mx-auto px-2 md:px-6 body-font'>
                <PlaylistSection></PlaylistSection>
                <SearchSection></SearchSection>
                <QueueSection></QueueSection>
            </div>
        </div>
    </>);
}

export default Search;