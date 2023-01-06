import { Socket } from "socket.io-client";

export interface UserProfileModel {
  name: string;
  id: string;
}

export interface ChatModel {
  id: string;
  msg: string;
}

export interface AllChats {
  user: UserProfileModel;
  msgs: ChatModel[];
}

export interface DataModel {
  user: UserProfileModel;
  onlineUsers: UserProfileModel[];
  allChats: AllChats[];
  currentChat: AllChats;
}
