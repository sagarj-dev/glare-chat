import React from "react";
import "./App.scss";
import MainScreen from "./Components/MainScreen/MainScreen";
import Sidebar from "./Components/Sidebar/Sidebar";
import { io } from "socket.io-client";
function App() {
  React.useEffect(() => {
    const socket = io("http://localhost:8000");
    socket.on("connection", (a) => {
      console.log("1", a);
    });
    // socket.on("connection", (a) => {
    //   console.log("2", a);
    // });
    // console.log(socket);
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <MainScreen />
    </div>
  );
}

export default App;
