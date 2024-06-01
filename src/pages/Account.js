import React from 'react';
import Container from '../components/Container';
import UserInfoSection from '../components/UserInfoSection';
import AuthorItem from '../components/AuthorItem';
import TopTracksSection from '../components/TopTracksSection';

const Account = () => {
    return (
        <div className='h-[93vh] flex justify-center items-center'>
            <div className='h-[85vh] grid grid-flow-col grid-rows-3 gap-8 relative w-full max-w-7xl mx-auto px-6 body-font'>
                <UserInfoSection></UserInfoSection>
                <TopTracksSection></TopTracksSection>
                <Container title={"Топ виконавців у цьому місяці"} className={'col-span-3'}>
                    <div className='h-full flex justify-between space-x-2'>
                        <AuthorItem></AuthorItem>
                        <AuthorItem></AuthorItem>
                        <AuthorItem></AuthorItem>
                        <AuthorItem></AuthorItem>
                        <AuthorItem></AuthorItem>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Account;