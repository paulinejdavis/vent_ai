import { useChat } from "ai/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "./chat.css";
import { ToggleSlider } from "./toggleSlider/toggleSlider";

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

interface Params {
  toggleTheme: Function;
}

const Chat = (params: Params) => {
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

  const toggleTheme = () => {
    params.toggleTheme();
  };

  return (
    <div
      ref={chatContainer}
      className="chat"
      style={{ fontFamily: "helvetica, Arial, sans-serif" }}
    >
      <div>
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
      </div>

      <div className="footer">
        <form onSubmit={handleSubmit} className="mainForm">
          <input
            name="input-field"
            type="text"
            // placeholder="say it"
            onChange={handleInputChange}
            value={input}
            className="userInput"
          />
          <button type="submit" className="mainButton">
            VENT &gt;
          </button>
        </form>
        {/* <button onChange={toggleTheme}>light/Dark</button> */}
        <div className="toggleThemeContainer">
          <ToggleSlider onToggle={toggleTheme} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
