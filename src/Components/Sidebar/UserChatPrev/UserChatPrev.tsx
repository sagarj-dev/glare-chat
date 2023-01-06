import React from "react";
import { useAppDispatch } from "../../../Redux/hooks/redux-hooks";
import { UserProfileModel } from "../../../Redux/models/redux-models";
import { setCurrentUserChat } from "../../../Redux/store/data-slice/data-slice";
import "./UserChatPrev.scss";

type UserChatPrevType = {
  username: string;
};

const UserChatPrev = ({ name, id }: UserProfileModel) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="UserChatPrev"
      onClick={() => dispatch(setCurrentUserChat({ name, id }))}
    >
      <img src="https://randomuser.me/api/portraits/women/60.jpg" alt="" />
      <div>
        <div>
          <span className="username">{name}</span>
          <span className="userid">{id}</span>
        </div>
        <span className="lastMsgPrev">Click to Chat</span>
      </div>
      <span className="chatDate"></span>
    </div>
  );
};

export default UserChatPrev;
