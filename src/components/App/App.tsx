import React from 'react';
import './App.scss';
import { Login, Dashboard, AdminPanel } from 'components';
import { Roles } from 'utils/roles';
import { PrivateRoute } from 'components/Shared';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

const App = () => (
  <div className="App">
    <header className="App-header"></header>
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute
            path="/admin"
            roles={[Roles.ADMIN]}
            component={AdminPanel}
          />
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
