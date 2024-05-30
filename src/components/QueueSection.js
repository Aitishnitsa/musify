import React from "react";
import ListItem from "./ListItem";
import Container from "./Container";

const QueueSection = () => {
    return (<>
        <Container title="Черга" className={'col-span-2'}>
            <div className="mt-3">
                <h2 className='font-medium text-sm text-white pb-1'>Відтворюється:</h2>
                <ListItem></ListItem>
                <h2 className='font-medium text-sm text-white py-1'>Наступні в черзі:</h2>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
            </div>
        </Container>
    </>);
}

export default QueueSection;