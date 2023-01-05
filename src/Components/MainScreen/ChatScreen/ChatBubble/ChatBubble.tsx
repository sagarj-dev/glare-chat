import React from "react";
import "./ChatBubble.scss";
const ChatBubble = () => {
  return (
    <div
      className={`${
        Math.round(Math.random() * 10) % 2 == 0
          ? "ChatBubble-left"
          : "ChatBubble-right"
      }`}
    >
      <img src="https://randomuser.me/api/portraits/women/60.jpg" alt="" />
      <div>
        <p>
          Didn't I tell you not to put your phone on charge just because it's
          the weekend? Didn't I
        </p>
      </div>
    </div>
  );
};

export default ChatBubble;
