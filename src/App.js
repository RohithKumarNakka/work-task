import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Register">
            <Register />
          </Route>

          <Route path="/Login">
            <Login setLoginUser={setLoginUser} />
          </Route>

          <Route exact path="/">
            {user && user._id ? <Welcome /> : <Login />}
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
