import React from "react";
import "./ChatScreen.scss";
import { RiImage2Line, RiFileGifLine } from "react-icons/ri";
import { AiOutlineSend } from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";
import ChatBubble from "./ChatBubble/ChatBubble";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Redux/hooks/redux-hooks";
import { sendMsg } from "../../../Redux/store/data-slice/data-slice";

const ChatScreen = () => {
  const currentChat = useAppSelector((state) => state.data.currentChat);
  const mainUser = useAppSelector((state) => state.data.user);
  const dispatch = useAppDispatch();

  const [boxMsg, setBoxMsg] = React.useState("");

  const handleMsgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoxMsg(e.target.value);
  };
  const handleMsgkeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(sendMsg(boxMsg));
      setBoxMsg("");
    }
  };

  return (
    <>
      {currentChat.user.id ? (
        <div className="ChatScreen">
          <div className="header">
            <img
              src="https://randomuser.me/api/portraits/women/60.jpg"
              alt=""
            />
            <div>
              <h5>{currentChat.user.name}</h5>
              <span>{currentChat.user.id}</span>
            </div>
          </div>
          {currentChat.msgs.length > 0 ? (
            <div className="chats">
              {currentChat.msgs.map((msg) => (
                <ChatBubble
                  msg={msg.msg}
                  pos={msg.id === mainUser.id ? "right" : "left"}
                />
              ))}
            </div>
          ) : (
            <div className="chats">
              <h1>No msg</h1>
            </div>
          )}
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
                <input
                  type="text"
                  onChange={handleMsgChange}
                  onKeyUp={handleMsgkeyUp}
                  value={boxMsg}
                />
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
      ) : (
        <h1>no chat</h1>
      )}
    </>
  );
};

export default ChatScreen;
