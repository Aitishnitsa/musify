import React from "react";
import ListItem from "./ListItem";
import Container from "./Container";

const PlaylistSection = () => {
    return (<>
        <Container title={"Плейлисти"} className={'col-span-2'}>
            <div className="mt-3">
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
            </div>
        </Container>
    </>);
}

export default PlaylistSection;