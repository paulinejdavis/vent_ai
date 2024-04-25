import OpenAI from 'openai';
import React, { useRef, useEffect } from 'react';
import { useChat } from 'ai/react';
import Image from 'next/image';

const Chat = () => {
    const { messages, input, handleInputChange } = useChat({
        api: '/api/openai',
    });
    const chatContainer = useRef<HTMLDivElement>(null);

    // export async function POST(req: Request) {
    //     const { messages } = await req.json();
       
    //     // Ask OpenAI for a streaming chat completion given the prompt
    //     const response = await openai.chat.completions.create({
    //       model: 'gpt-3.5-turbo',
    //       stream: true,
    //       messages,
    //     });
       
    //     // Convert the response into a friendly text-stream
    //     const stream = OpenAIStream(response);
    //     // Respond with the stream
    //     return new StreamingTextResponse(stream);
    //   }

    // Overridden handleSubmit
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission action

        try {
            // const response = await fetch('http://localhost:3000/api/openai', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ data: input }),  // Use the 'input' from useChat
            // });

            // if (!response.ok) {
            //     throw new Error(`HTTP error! status: ${response.status}`);
            // }

            // Ask OpenAI for a streaming chat completion given the prompt
            const messages = [{role: "system", content: "tell me something"}]

            // const response = await openai.chat.completions.create({
            //     model: 'gpt-3.5-turbo',
            //     stream: true,
            //     messages
            // });

            console.log('AAA', process.env.OPENAI_API_KEY);
            const openai = new OpenAI({
                // apiKey: process.env.OPENAI_API_KEY,
               
                
              });
            
            const response = await openai.chat.completions.create({
                // model: 'gpt-3.5-turbo',
                model: "gpt-4-1106-preview",
                messages: [
                  {
                    role: "system",
                    content:
                      `You are a professional counsellor who has been hired to respond with care, sympathy and kindness. The responses should be natural, candid, and thought-provoking. They should explore a variety of themes and ideas for mental health challenges, life goals and general chit chatter. Each response should be unique and memorable, with compelling engagement and natural dialogue.`,
                  },
                ],
                // stream: true,
                temperature: 1,
              });

              console.log('SUCCESS:');
              console.log(response.choices[0].message.content);

            
            // const data = await response.json();
            // // Handle your response here
            // console.log(data);

            // const stream = OpenAIStream(response);
            // return new StreamingTextResponse(stream);
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
