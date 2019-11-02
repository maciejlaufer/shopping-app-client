import React from "react";
import logo from "assets/images/logo.svg";
import "./App.scss";
import Login from "components/Login/Login";
import Dashboard from "components/Dashboard/Dashboard";
import PrivateRoute from "components/Shared/PrivateRoute/PrivateRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Router>
          <div>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Dashboard} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
