import "./App.css";
import HomePage from "./components/homepage/HomePage";
import LoginPage from "./components/loginpage/LoginPage";
import RegisterPage from "./components/registerpage/RegisterPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/RegisterPage">
            <RegisterPage />
          </Route>
          <Route path="/LoginPage">
            <LoginPage setLoginUser={setLoginUser} />
          </Route>
          <Route exact path="/">
            {user && user._id ? <HomePage /> : <LoginPage />}
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
