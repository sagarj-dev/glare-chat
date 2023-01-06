import React from "react";
import { useAppDispatch } from "../../Redux/hooks/redux-hooks";
import { setUser } from "../../Redux/store/data-slice/data-slice";
import "./login.scss";
const Login = () => {
  const [name, setName] = React.useState("");

  const dispatch = useAppDispatch();
  return (
    <div className="Login">
      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              dispatch(setUser(name));
            }
          }}
        />
        <button onClick={() => dispatch(setUser(name))}>Start</button>
      </div>
    </div>
  );
};

export default Login;
