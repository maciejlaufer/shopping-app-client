import React from 'react';
import styles from './App.module.scss';
import { Auth, Dashboard, AdminPanel } from 'components';
import { Roles } from 'utils/roles';
import { PrivateRoute } from 'components/Shared';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

const App = () => (
  <div className={styles.AppWrapper}>
    <header className="App-header"></header>
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={Auth} />
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
