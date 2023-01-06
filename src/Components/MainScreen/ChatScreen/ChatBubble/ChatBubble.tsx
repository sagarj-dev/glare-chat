import React from "react";
import "./ChatBubble.scss";

type ChatBubbleType = {
  msg: string;
  pos: "left" | "right";
};
const ChatBubble = ({ msg, pos }: ChatBubbleType) => {
  return (
    <div className={`ChatBubble-${pos}`}>
      <img src="https://randomuser.me/api/portraits/women/60.jpg" alt="" />
      <div>
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
