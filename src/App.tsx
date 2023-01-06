import React from "react";
import "./App.scss";
import MainScreen from "./Components/MainScreen/MainScreen";
import Sidebar from "./Components/Sidebar/Sidebar";
import { io } from "socket.io-client";
import { useAppDispatch, useAppSelector } from "./Redux/hooks/redux-hooks";
import {
  setChatMsg,
  setSocket,
  setUserOffline,
  setUserOnline,
} from "./Redux/store/data-slice/data-slice";
import Login from "./Components/Login/Login";
function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.data.user.name);
  React.useEffect(() => {
    const socket = io("http://localhost:8000");
    dispatch(setSocket(socket));

    socket.on("userOnline", (user) => {
      console.log(user);
      dispatch(setUserOnline(user));
    });

    socket.on("userOffline", (user) => {
      console.log("dis", user);
      dispatch(setUserOffline(user));
    });

    socket.on("sendMsg", (data) => {
      console.log(data);
      dispatch(setChatMsg(data));
    });
  }, [dispatch]);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Sidebar />
          <MainScreen />
        </div>
      )}
    </>
  );
}

export default App;
