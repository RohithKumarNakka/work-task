import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
      <div>
        <div>Login To Your Account</div>
        <div>
          <form action="/" autoComplete="off" method="get">
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
        <div class="flex items-center justify-center mt-6">
          <a href="/register" onClick={history.push("/register")}>
            You don't have an account?
          </a>
        </div>
      </div>
    </>
  );
};
export default Login;
