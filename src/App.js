import { Route, Switch } from "react-router-dom";
import "./App.css";
import MainLoginPage from "./login-register/MainLoginPage";
import MainRegisterPage from "./login-register/MainRegisterPage";
import HomePage from "./home/HomePage";
import UnderAge from "./home/underAge/UnderAge";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./about/About";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login-register/MainLoginPage" exact component={MainLoginPage} />
        <Route path="/login-register/MainRegisterPage" exact component={MainRegisterPage} />
        <Route path="/UnderAge/:name" component={UnderAge} />
        <Route path="/about/About" component={About} />
      </Switch>
    </div>
  );
}

export default App;
