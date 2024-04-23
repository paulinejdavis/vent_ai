import React, { useRef, useEffect } from 'react';
import { useChat } from 'ai/react';
import Image from 'next/image';

const Chat = () => {
    const { messages, input, handleInputChange } = useChat({
        api: '/api/openai',
    });
    const chatContainer = useRef<HTMLDivElement>(null);

    // Overridden handleSubmit
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission action

        try {
            const response = await fetch('/api/openai', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: input }),  // Use the 'input' from useChat
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            // Handle your response here
            console.log(data);
        } catch (error) {
            console.error('Failed to fetch from openai:', error);
        }
    };

    useEffect(() => {
        const scroll = () => {
            const { offsetHeight, scrollHeight, scrollTop } = chatContainer.current;
            if (scrollHeight > scrollTop + offsetHeight) {
                chatContainer.current.scrollTo(0, scrollHeight);
            }
        };

        scroll();
    }, [messages]);

    const renderResponse = () => (
        <div className="response">
            {messages.map((m, index) => (
                <div key={m.id} className={`chat-line ${m.role === 'user' ? 'user-chat' : 'ai-chat'}`}>
                    {/* Avatar and message rendering code */}
                </div>
            ))}
        </div>
    );

    return (
        <div ref={chatContainer} className="chat">
            {renderResponse()}
            <form onSubmit={handleSubmit} className="mainform">
                <input
                    name="input-field"
                    type="text"
                    placeholder="Say something..."
                    onChange={handleInputChange}
                    value={input}
                />
                <button type="submit" className="mainButton">Send</button>
            </form>
        </div>
    );
};

export default Chat;
