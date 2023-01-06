import React from "react";
import { useAppSelector } from "../../Redux/hooks/redux-hooks";
import ChatScreen from "./ChatScreen/ChatScreen";
import "./MainScreen.scss";
import NoChat from "./NoChat/NoChat";
const MainScreen = () => {
  const isChat = useAppSelector((state) => state.data.currentChat.user.id);
  return <div>{isChat ? <ChatScreen /> : <NoChat />}</div>;
};

export default MainScreen;
