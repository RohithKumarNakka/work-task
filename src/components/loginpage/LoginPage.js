import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginPage = ({ setLoginUser }) => {
  const history = useHistory();
  const [user, setUser] = useState({ name: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    axios.post("http://localhost:6969/Login", user).then((res) => {
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
          id="sign-in-email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Your email"
        />
        <input
          type="password"
          id="sign-in-email"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Your password"
        />
        <div>
          <button type="submit" onClick={login}>
            Login
          </button>
        </div>
      </form>
    </>
  );
};
export default LoginPage;
