import { Route, Switch} from "react-router-dom";
import "./App.css";
import MainLoginPage from "./login-register/MainLoginPage";
import MainRegisterPage from "./login-register/MainRegisterPage"
import HomePage from "./home/HomePage";
import UnderAge from './home/underAge/UnderAge'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login-register/MainLoginPage" exact component={MainLoginPage} />
      <Route path="/login-register/MainRegisterPage" exact component={MainRegisterPage} />
      <Route path="/home/UnderAge/:name" component={UnderAge} />
      </Switch>
    </div>
  );
}

export default App;
