// "use client";

// import { useState } from "react";
// import { useChat } from "ai/react";
// import Image from 'next/image';
// import './globals.css';

// export default function Chat() {
//   const { messages, append, isLoading } = useChat();
//   const genres = [
//     { emoji: "🐼", value: "Mavis" },
//     { emoji: "🐻", value: "Candice" },
//     { emoji: "🦅", value: "David" },
//     { emoji: "🦋", value: "Anna" },
//   ];
//   const tones = [
//     { emoji: "😊", value: "Cut to the chase" },
//     { emoji: "😢", value: "Mumsy" },
//     { emoji: "😏", value: "Deep and spiritual" },
//     { emoji: "😂", value: "chat with a friend" },
//   ];

//   const [state, setState] = useState({
//     genre: "",
//     tone: "",
//   });

//   const handleChange = ({
//     target: { name, value },
//   }) => {
//     setState({
//       ...state,
//       [name]: value,
//     });
//   };

//   return (
//     <div>
//       <header style={{
//   backgroundColor: 'rgb(255, 202, 255)', // Mast Pink
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   padding: '10px 0'
// }}>
//   <Image
//     src="/assets/logo.png"
//     alt="Logo"
//     width={200}
//     height={400}
//     layout="fixed"
//   />
// </header>
//       <main className="mx-auto w-full p-24 flex flex-col">
//         <div className="p4 m-4">
//           <div className="flex flex-col items-center justify-center space-y-8 text-white">
//             <div className="space-y-2">
//               {/* <h2 className="text-3xl font-bold">vent_ai App</h2> */}
//               {/* <p
//                   style={{
//                   fontFamily: 'Helvetica, Arial, sans-serif',
//                   fontWeight: 'bold', // Makes text bold
//                   color: 'black', // Sets text color to black
//                   margin: '0 1px',
//                 }}
//               >
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p> */}

//               {/* <Image
//                   src="/assets/button.png"
//                   alt="button"
//                   width={100}
//                   layout="responsive"
//                   //height={5600}
//               /> */}
//             </div>
//             <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
//               <h3 className="text-xl font-semibold">Chat</h3>
//               <div className="flex flex-wrap justify-center">
//                 {genres.map(({ value, emoji }) => (
//                   <div
//                     key={value}
//                     className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg"
//                   >
//                     <input
//                       id={value}
//                       type="radio"
//                       name="genre"
//                       value={value}
//                       onChange={handleChange}
//                     />
//                     <label className="ml-2" htmlFor={value}>
//                       {emoji} {value}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
//               <h3 className="text-xl font-semibold">Tones</h3>
//               <div className="flex flex-wrap justify-center">
//                 {tones.map(({ value, emoji }) => (
//                   <div
//                     key={value}
//                     className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg"
//                   >
//                     <input
//                       id={value}
//                       type="radio"
//                       name="tone"
//                       value={value}
//                       onChange={handleChange}
//                     />
//                     <label className="ml-2" htmlFor={value}>
//                       {emoji} {value}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
//               disabled={isLoading || (!state.genre || !state.tone)}
//               onClick={() =>
//                 append({
//                   role: "user",
//                   content: `Generate a ${state.genre} chat in a ${state.tone} tone`,
//                 })
//               }
//             >
//               Generate Chat
//             </button>
//             <div
//               hidden={
//                 messages.length === 0 ||
//                 messages[messages.length - 1]?.content.startsWith("Generate")
//               }
//               className="bg-opacity-25 bg-gray-700 rounded-lg p-4"
//             >
//               {messages[messages.length - 1]?.content}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// "use client";

// import React from 'react';
// import Link from 'next/link';
// // import Friends from './components/ui/riends';

// const Home = () => {
//   return (
//     <div>
//       <header style={{ backgroundColor: 'rgb(255, 202, 255)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 0' }}>
//         <img src="/assets/logo.png" alt="Logo" width={200} height={200} style={{ width: '200px', height: '200px' }} />
//       </header>
//       <main className="mx-auto w-full p-24 flex flex-col">
//         <div className="p4 m-4">
//           <div className="flex flex-col items-center justify-center space-y-8 text-white">
//             {/* <p
//               style={{
//                 fontFamily: 'Helvetica, Arial, sans-serif',
//                 fontWeight: 'bold',
//                 color: 'black',
//                 margin: '0 1px',
//               }}
//             >
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p> */}
//             {/* <Link href="/friends">
//               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go to Friends Page</button>
//             </Link> */}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Home;
// pages/page.tsx - This should be named as page.client.tsx to use "use client"

// "use client";

// import React, { useState } from 'react';
// import { useChat } from "ai/react";
// import Image from 'next/image';
// import Link from 'next/link';

// const Home = () => {
//   const [userMessage, setUserMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   const sendMessageToAI = async () => {
//     const newMessages = [...messages, { role: 'user', content: userMessage }];
//     setMessages(newMessages);
//     setUserMessage('');

//     // Here we post to our API route
//     const response = await fetch('/api/chat', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ messages: newMessages }),
//     });

//     const data = await response.json();
//     if (data?.message) {
//       setMessages([...newMessages, { role: 'system', content: data.message }]);
//     }
//   };

//   return (
//     <div>
//       <header style={{ backgroundColor: 'rgb(255, 202, 255)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 0' }}>
//         {/* Logo here */}
//       </header>
//       <main className="mx-auto w-full p-24 flex flex-col">
//         <div className="p4 m-4">
//           <div className="flex flex-col items-center justify-center space-y-8 text-white">
//             {/* Chat messages here */}
//             {messages.map((message, index) => (
//               <div key={index} className={message.role === 'user' ? 'user-message' : 'ai-message'}>
//                 {message.content}
//               </div>
//             ))}
//             <input
//               type="text"
//               value={userMessage}
//               onChange={(e) => setUserMessage(e.target.value)}
//               placeholder="Type your message here"
//             />
//             <button onClick={sendMessageToAI}>Send</button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Home;
// pages/chat.page.tsx

// Since this file will use the useState, we're declaring it as a client component.
// use client

// pages/chat.page.tsx

// Since this file will use the useState, we're declaring it as a client component.
// use client

//
"use client";

// use client
import { useState } from "react";
import Chat from "./components/chat";
import "./page.css";
//import landing from "./components/landing";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
    }
  };
  return (
    <main className={`App ${theme}-theme`}>
      <div className="container">
        <header className="hero">
          <img className="logo" src="/assets/logo.png" alt="Logo" />
        </header>
        {/* <p>
          Talk to <span className="special-text">Vent-ai</span>
        </p> */}
        <div className="chatContainer">
          <Chat toggleTheme={toggleTheme} />
        </div>
      </div>
    </main>
  );
}
