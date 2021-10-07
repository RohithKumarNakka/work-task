import React, { useState } from "react";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Welcome /> : <Login />}
            <Welcome />
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
