"use client";

import { useState } from "react";
//import Chat from "./components/chat";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "./chat.css";
//import page from "./page";

const Home = () => {
  return (
    // <main className={`App ${theme}-theme`}>
    <div className="container">
      <header className="hero">
        <img className="logo" src="/assets/logo.png" alt="Logo" />
      </header>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <a href="landing_button" target="/chat">
          CHOOSE YOUR FRIEND NOW
        </a>
      </div>
    </div>
    // </main>
  );
};
