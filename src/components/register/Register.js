import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });
  const handleChange = (e) => {
    const { name, userName, email, phone, password, role, value } = e.target;
    setUser({
      ...user,
      [name]: value,
      [userName]: value,
      [email]: value,
      [phone]: value,
      [password]: value,
      [role]: value,
    });
  };

  //register function
  const registerClick = () => {
    const { name, userName, email, phone, password, role } = user;
    if (name && userName && email && phone && password && role) {
      axios
        .post("http://localhost:4000/register", user)
        .then((res) => console.log(res));
    } else {
      alert("invalid input");
    }
  };
  return (
    <>
      <div>
        <div>Create a new account</div>
        <span>
          Already have an account ?<a href="/login">Sign in</a>
        </span>
        <div>
          <form action="/login" method="get">
            <div>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="text"
                name="userName"
                value={user.userName}
                onChange={handleChange}
                placeholder="UserName"
              />
            </div>
            <div>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="password"
              />
            </div>
            <div>
              Role
              <select>
                <input onChange={handleChange} />
                <option>Admin</option>
                <option>CoAdmin</option>
                <option>Manager</option>
              </select>
            </div>
            <div>
              <button type="submit" onClick={registerClick}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
