import React from 'react';
import ListItem from '../components/ListItem';
import Player from '../components/Player';
import Container from '../components/Container';

const Home = () => {
    return (
        <div className='h-[93vh] flex justify-center items-center'>
            <div className='grid grid-cols-7 gap-8 col-start-2 relative mx-auto px-6 body-font'>
                <Container title={"Плейлисти"} className={'col-span-2'}>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                </Container>
                <Container title={""} className={'col-span-3'}>
                    <Player
                        imgUrl={"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a4/67/ba/a467ba62-87df-9d10-98d2-c517f68ac870/16UMGIM60882.rgb.jpg/600x600bf-60.jpg"}
                        name="Every Breath You Take"
                        author={"The Police"}
                    ></Player>
                </Container>
                <Container title="Черга" className={'col-span-2'}>
                    <h2 className='font-medium text-sm text-white pb-1'>Відтворюється:</h2>
                    <ListItem></ListItem>
                    <h2 className='font-medium text-sm text-white py-1'>Наступні в черзі:</h2>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                </Container>
            </div>
        </div>);
}

export default Home;