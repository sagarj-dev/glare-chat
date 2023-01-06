import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";
import {
  AllChats,
  ChatModel,
  DataModel,
  UserProfileModel,
} from "../../models/redux-models";

let initialState: DataModel = {
  user: {
    id: "",
    name: "",
  },
  currentChat: {
    msgs: [],
    user: { id: "", name: "" },
  },
  onlineUsers: [],
  allChats: [],
};

let socket: Socket;

const addmsginchat = (allchat: AllChats[], newchat: ChatModel) => {
  console.log(allchat);
};

const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setSocket(state, action: PayloadAction<Socket>) {
      socket = action.payload;
      setTimeout(() => {
        console.log("socket", socket);
      }, 1000);
    },
    setUser(state, action: PayloadAction<string>) {
      socket.connect();
      state.user.id = socket.id;
      state.user.name = action.payload;
      socket.emit("userOnline", state.user);
    },
    setUserOnline(state, action: PayloadAction<UserProfileModel[]>) {
      state.onlineUsers = action.payload.filter(
        (user) => user.id !== state.user.id
      );
    },

    setUserOffline(state, action: PayloadAction<string>) {
      state.onlineUsers = state.onlineUsers.filter(
        (user) => user.id !== action.payload
      );

      if (state.currentChat.user.id === action.payload) {
        state.currentChat.user = {
          id: "",
          name: "",
        };
      }
    },

    setCurrentUserChat(state, action: PayloadAction<UserProfileModel>) {
      state.currentChat = state.allChats.filter(
        (chat) => chat.user.id === action.payload.id
      )[0];

      if (!state.currentChat) {
        state.currentChat = { user: action.payload, msgs: [] };
      }
    },

    setChatMsg(state, action: PayloadAction<ChatModel>) {
      let allchates = [...state.allChats];

      let selectedchat = allchates.filter(
        (chat) => chat.user.id === action.payload.id
      )[0];

      if (selectedchat) {
        selectedchat.msgs.push(action.payload);
        state.allChats = [
          ...allchates.filter((chat) => chat.user.id !== action.payload.id),
          selectedchat,
        ];
      } else {
        let onlineUsers = [...state.onlineUsers];
        let currentUser = onlineUsers.filter(
          (user) => user.id === action.payload.id
        )[0];
        state.allChats = [
          ...state.allChats,
          { user: currentUser, msgs: [action.payload] },
        ];
      }

      if (state.currentChat.user.id === action.payload.id) {
        state.currentChat.msgs = state.allChats.filter(
          (chat) => chat.user.id === state.currentChat.user.id
        )[0].msgs;
      }

      // const temp = state.allChats.filter(chat => chat.user.id === action.payload.id)
      // console.log(temp);

      // if (!temp) {
      //   state.allChats = [...state.allChats,{}]
      // }
    },

    sendMsg(state, action: PayloadAction<string>) {
      socket.emit("sendMsg", state.currentChat.user.id, {
        id: state.user.id,
        msg: action.payload,
      });

      let allchates = [...state.allChats];

      let selectedchat = allchates.filter(
        (chat) => chat.user.id === state.currentChat.user.id
      )[0];

      if (selectedchat) {
        selectedchat.msgs.push({ id: state.user.id, msg: action.payload });
        state.allChats = [
          ...allchates.filter(
            (chat) => chat.user.id !== state.currentChat.user.id
          ),
          selectedchat,
        ];
      } else {
        state.allChats = [
          ...state.allChats,
          {
            user: state.currentChat.user,
            msgs: [{ id: state.user.id, msg: action.payload }],
          },
        ];
      }

      state.currentChat.msgs = state.allChats.filter(
        (chat) => chat.user.id === state.currentChat.user.id
      )[0].msgs;
    },
  },
});

export default DataSlice;
export const {
  setChatMsg,
  setCurrentUserChat,
  setSocket,
  setUser,
  setUserOffline,
  setUserOnline,
  sendMsg,
} = DataSlice.actions;
