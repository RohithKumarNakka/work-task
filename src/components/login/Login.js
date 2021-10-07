import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../../index.css";

const Login = ({ setLoginUser }) => {
  const history = useHistory();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { email, value } = e.target;
    setUser({ ...user, [email]: value });
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
      <div className="body">
        <p>Login To Your Account</p>
        <div>
          <form action="/" method="get">
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
        </div>
        <div>
          <a href="/register" onClick={history.push("/register")}>
            You don't have an account?
          </a>
        </div>
      </div>
    </>
  );
};
export default Login;
