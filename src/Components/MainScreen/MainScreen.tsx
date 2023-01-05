import React from "react";
import ChatScreen from "./ChatScreen/ChatScreen";
import "./MainScreen.scss";
import NoChat from "./NoChat/NoChat";
const MainScreen = () => {
  return (
    <div>
      {/* <NoChat /> */}
      <ChatScreen />
    </div>
  );
};

export default MainScreen;
