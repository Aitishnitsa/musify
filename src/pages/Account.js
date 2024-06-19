import React from 'react';
import UserInfoSection from '../components/UserInfoSection';
import Table from '../components/Table';
import Container from "../components/Container";
import AuthorItem from "../components/AuthorItem";
import Loader from '../components/Loader';
import { fetchWebApi } from '../config';
import useFetchData from '../hooks/useFetchData';

const Account = () => {
    const topSongs = useFetchData(fetchWebApi, 'array', `tracks`);
    const topArtists = useFetchData(fetchWebApi, 'array', `artists`);

    return (
        <div className='sm:h-[93vh] py-6 sm:py-0 flex justify-center items-center overflow-y-auto sm:overflow-hidden'>
            <div className='sm:h-[85vh] grid sm:grid-flow-col sm:grid-rows-3 gap-8 relative w-full max-w-7xl mx-auto px-6 body-font'>
                <UserInfoSection />
                <Container title={"Топ треків у цьому місяці"} className={'row-span-2 col-span-1 sm:col-span-3'}>
                    <div className='h-full pt-3'>
                        {topSongs.length !== 0 ? <Table array={topSongs} /> : <Loader />}
                    </div>
                </Container>
                <Container title={"Топ виконавців у цьому місяці"} className={'col-span-1 sm:col-span-3'}>
                    <div className='h-full flex flex-col sm:flex-row justify-between sm:space-x-2 mt-3'>
                        {topArtists.length !== 0 ?
                            topArtists.map((item) => (
                                <AuthorItem
                                    key={item.id}
                                    imgUrl={item.images[0]?.url}
                                    artist={item.name} />
                            )) :
                            <Loader />
                        }
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Account;