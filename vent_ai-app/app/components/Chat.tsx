import { useChat } from "ai/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "./chat.css";

const Responses = ({ messages }) => {
  return (
    <div className="response">
      {messages.map((m, index) => (
        <div
          key={m.id}
          className={`chat-container ${
            m.role === "user" ? "user-chat" : "ai-chat"
          }`}
        >
          <div className="chat-line">{m.content}</div>
        </div>
      ))}
    </div>
  );
};

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/openai",
  });
  console.log(messages);
  const chatContainer = useRef<HTMLDivElement>(null);

  const scroll = () => {
    const { offsetHeight, scrollHeight, scrollTop } =
      chatContainer.current as HTMLDivElement;
    if (scrollHeight >= scrollTop + offsetHeight) {
      chatContainer.current?.scrollTo(0, scrollHeight + 200);
    }
  };

  return (
    <div
      ref={chatContainer}
      className="chat"
      style={{ fontFamily: "helvetica, Arial, sans-serif" }}
    >
      <div className="avatar-wrapper">
        <Image
          className="avatar"
          alt="avatar"
          src="/assets/ai-avatar.png"
          width={64}
          height={64}
        />
        <h2>Jess</h2>
      </div>
      <Responses messages={messages} />
      <form onSubmit={handleSubmit} className="mainForm">
        <input
          name="input-field"
          type="text"
          placeholder="say it"
          onChange={handleInputChange}
          value={input}
          className="helvetica-font"
        />
        <button type="submit" className="mainButton">
          submit
        </button>
      </form>
    </div>
  );
};

export default Chat;
