import React, {useRef, useEffect} from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if(div){
            div.scrollTop = div.scrollHeight;
        }

    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author="Carlos Guttemberg"
                        date="18/07/2020"
                        content="Teste de mensagem para o clone do discord"
                    />
                ))}

                <ChannelMessage 
                    author="Diego Fernandes" 
                    date="18/07/2020" 
                    content={
                        <>
                            <Mention>@Carlos Guttemberg</Mention> Teste de mensagem para o clone do discord
                        </>
                    }  
                    hasMention 
                    isBot />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon/>
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;