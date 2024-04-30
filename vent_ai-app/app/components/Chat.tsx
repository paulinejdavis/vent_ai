
import { useChat } from 'ai/react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Inter, Lora} from 'next/font/google';

const Chat = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/openai',
    });

    const chatContainer = useRef<HTMLDivElement>(null);

    const scroll = () => {
        const { offsetHeight, scrollHeight, scrollTop } = chatContainer.current as HTMLDivElement
        if (scrollHeight >= scrollTop + offsetHeight) {
            chatContainer.current?.scrollTo(0, scrollHeight + 200)
        }
    }
   
    const renderResponse = () => {
        return (
            <div className="response">
                {messages.map((m, index) => (
                    <div key={m.id} className={`chat-line ${m.role === 'user' ?  'user-chat' : 'ai-chat'}`}>
                        <Image className="avatar" alt="avatar" src={m.role === 'user' ? '/assets/user-avatar.png' : '/assets/ai-avatar.png'} width={64} height={64}></Image>
                    <div style={{width: '100%', marginLeft: '16px'}}>
                        <p className="message">{m.content}</p>
                        {index < messages.length-1 && <div className="horiontal-line"/>}
                    </div>
                </div>
            ))}
            </div>
        );
    };


    return (
        <div ref={chatContainer} className="chat">
            {renderResponse()}
            <form onSubmit={handleSubmit} className="mainForm">
            <input name="input-field" type="text" placeholder="say it" onChange={handleInputChange} value={input}/>
            <button type="submit" className="mainButton" />
        </form>
        </div>
    );
}

export default Chat;
