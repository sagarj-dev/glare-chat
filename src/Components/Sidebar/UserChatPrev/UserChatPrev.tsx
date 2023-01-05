import React from "react";
import "./UserChatPrev.scss";
const UserChatPrev = () => {
  return (
    <div className="UserChatPrev">
      <img src="https://randomuser.me/api/portraits/women/60.jpg" alt="" />
      <div>
        <div>
          <span className="username">Suzana Colin</span>
          <span className="userid">@suzana</span>
        </div>
        <span className="lastMsgPrev">
          thank a lot for your good recommendati...
        </span>
      </div>
      <span className="chatDate">Dec 15</span>
    </div>
  );
};

export default UserChatPrev;
