import React, { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  //register function
  const register = () => {
    const { name, email, password } = user;
    if (name && email && password) {
      axios
        .post("http://localhost:6969/Register", user)
        .then((res) => console.log(res));
    } else {
      alert("invalid input");
    }
    return (
      <>
        <div>
          <div>Create a new account</div>
          <div>
            <form action="#">
              <input
                type="text"
                id="create-account-pseudo"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="FullName"
              />
              <div>
                <input
                  type="text"
                  id="create-account-first-name"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="create-account-email"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="password"
                />
              </div>
              <div>
                <button type="submit" onClick={register}>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };
};

export default RegisterPage;
