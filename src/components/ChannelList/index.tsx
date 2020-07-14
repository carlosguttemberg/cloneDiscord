import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

const ServerName: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon/>
            </Category>

            {/* <ChannelButton channelName="chat-livre"/>
            <ChannelButton channelName="trabalho"/>
            <ChannelButton channelName="csgo"/>
            <ChannelButton channelName="fifa"/>
            <ChannelButton channelName="gta"/> */}
        </Container>
    );
};

export default ServerName;