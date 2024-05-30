import React from 'react';
import Container from '../components/Container';

const Account = () => {
    return (
        <div className='h-[93vh] flex justify-center items-center'>
            <div className='grid grid-cols-7 gap-8 relative max-w-7xl mx-auto px-6 body-font'>
                <Container title={""} className={'col-span-2'}>hello</Container>
                <Container title={""} className={'col-span-3'}>world</Container>
                <Container title={""} className={'col-span-2'}>!</Container>
            </div>
        </div>
    );
}

export default Account;