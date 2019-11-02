import React from "react";
import "./App.scss";
import { Login, Dashboard, AdminPanel } from "components";
import { history, Roles } from "_helpers";
import { PrivateRoute } from "components/Shared";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/login" component={Login} />
              <PrivateRoute
                path="/admin"
                roles={[Roles.Admin]}
                component={AdminPanel}
              />
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
