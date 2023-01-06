import React from "react";
import "./Sidebar.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import UserChatPrev from "./UserChatPrev/UserChatPrev";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks/redux-hooks";

const Sidebar = () => {
  const onlineUsers = useAppSelector((state) => state.data.onlineUsers);
  const user = useAppSelector((state) => state.data.user);
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
          {onlineUsers.length > 0 ? (
            onlineUsers.map((user) => (
              <UserChatPrev key={user.id} name={user.name} id={user.id} />
            ))
          ) : (
            <h1>no users</h1>
          )}
        </div>
      </div>
      <div className="UserDetails">
        <div>
          <div className="left">
            <img src="https://randomuser.me/api/portraits/men/60.jpg" alt="" />
            <div>
              <h5>{user.name}</h5>
              <span>@{user.id}</span>
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
