import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const login = ({ setLoginUser }) => {
  const history = useHistory();
  const [user, setUser] = useState({ name: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginClick = () => {
    axios.post("http://localhost:4000/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      history.push("/");
    });
  };

  return (
    <>
      <div>Login To Your Account</div>
      <form action="#" autoComplete="off">
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Your email"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Your password"
        />
        <div>
          <button type="submit" onClick={loginClick}>
            Login
          </button>
        </div>
      </form>
    </>
  );
};
export default login;
