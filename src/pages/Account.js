import React from 'react';
import Container from '../components/Container';
import UserInfoSection from '../components/UserInfoSection';
import AuthorItem from '../components/AuthorItem';
import Table from '../components/Table';

const Account = () => {
    return (
        <div className='h-[93vh] flex justify-center items-center'>
            <div className='h-[85vh] grid grid-flow-col grid-rows-3 gap-8 relative w-full max-w-7xl mx-auto px-6 body-font'>
                <UserInfoSection></UserInfoSection>
                <Container title={"Топ треків у цьому місяці"} className={'row-span-2 col-span-3'}>
                    <div className='h-full pt-3'>
                        <Table></Table>
                    </div>
                </Container>
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