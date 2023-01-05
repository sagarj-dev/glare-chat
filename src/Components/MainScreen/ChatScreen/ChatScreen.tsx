import React from "react";
import "./ChatScreen.scss";
import { RiImage2Line, RiFileGifLine } from "react-icons/ri";
import { AiOutlineSend } from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";
import ChatBubble from "./ChatBubble/ChatBubble";
const ChatScreen = () => {
  return (
    <div className="ChatScreen">
      <div className="header">
        <img src="https://randomuser.me/api/portraits/women/60.jpg" alt="" />
        <div>
          <h5>Suzana Colin</h5>
          <span>@suzana</span>
        </div>
      </div>
      <div className="chats">
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
      </div>
      <div className="addMsgBox-container">
        <div className="addMsgBox">
          <div className="left">
            <i>
              <RiImage2Line />
            </i>
            <i>
              <RiFileGifLine />
            </i>
          </div>
          <div className="inputBox">
            <input type="text" name="" id="" />
            <i>
              <FaRegSmile />
            </i>
          </div>
          <div className="sendButton">
            <i>
              <AiOutlineSend />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
