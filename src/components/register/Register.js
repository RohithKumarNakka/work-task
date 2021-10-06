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
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  //register function
  const register = () => {
    const { name, email, phone, password, role } = user;
    if (name && email && phone && password && role) {
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
        <div>
          <form action="#">
            <div>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="FullName"
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
                type={Number}
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
                <input value={user.role} onChange={handleChange} />
                <option>Admin</option>
                <option>CoAdmin</option>
                <option>Manager</option>
              </select>
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

export default Register;
