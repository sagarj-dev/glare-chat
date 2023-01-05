import React from "react";
import "./Sidebar.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import UserChatPrev from "./UserChatPrev/UserChatPrev";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src="/logo.png" alt="" />
      </div>
      <div className="Sidebar-middle">
        <h3>Messages</h3>

        <div className="SearchChat">
          <i>
            <AiOutlineSearch />
          </i>
          <input type="text" placeholder="Search people or message" />
        </div>
        <div className="ChatList">
          <UserChatPrev />
          <UserChatPrev />
          <UserChatPrev />
          <UserChatPrev />
          <UserChatPrev />
        </div>
      </div>
      <div className="UserDetails">
        <div>
          <div className="left">
            <img src="https://randomuser.me/api/portraits/men/60.jpg" alt="" />
            <div>
              <h5>Zakk Wylde</h5>
              <span>@wyldetheguy</span>
            </div>
          </div>
          <i>
            <BsThreeDots />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
