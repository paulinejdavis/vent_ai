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
//               <p
//                   style={{
//                   fontFamily: 'Helvetica, Arial, sans-serif',
//                   fontWeight: 'bold', // Makes text bold
//                   color: 'black', // Sets text color to black
//                   margin: '0 1px',
//                 }}
//               >
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//               </p>

//               <Image
//                   src="/assets/button.png"
//                   alt="button"
//                   width={100}
//                   layout="responsive"
//                   //height={5600}
//               />
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

"use client";

import { useState } from "react";
import { useChat } from "ai/react";
import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link
import './globals.css';

export default function Chat() {
  const { messages, append, isLoading } = useChat();
  const [state, setState] = useState({ genre: "", tone: "" });

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  return (
    <div>
      <header style={{
        backgroundColor: 'rgb(255, 202, 255)', // Mast Pink
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 0'
      }}>
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={200}
          height={200}
          style={{width: '200px', height: '200px'}}
        />
      </header>
      <main className="mx-auto w-full p-24 flex flex-col">
        <div className="p4 m-4">
          <div className="flex flex-col items-center justify-center space-y-8 text-white">
            <div className="space-y-2">
              <p style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold', color: 'black', margin: '0 20px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              {/* Using Link to navigate */}
              <Link href="/friends" className="linkStyle">
                  <Image
                    src="/assets/button.png"
                    alt="Choose your friend"
                    width={200}
                    height={200}
                    style={{width: '870px', height: '160px'}}
                    //layout="responsive"
                  />
              </Link>
            </div>
            {/* The rest of your component */}
          </div>
        </div>
      </main>
    </div>
  );
}
