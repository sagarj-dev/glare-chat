import React from "react";
import "./NoChat.scss";
const NoChat = () => {
  return (
    <div className="NoChat">
      <h5>You don’t have a message selected.</h5>
      <span>Choose one from your existing messages, or start a new one.</span>
      <button>New Message</button>
    </div>
  );
};

export default NoChat;
