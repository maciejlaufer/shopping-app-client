import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

type Props = {
  path: string;
  component: React.ReactNode;
  exact?: boolean;
  roles?: string[];
};

const PrivateRoute: React.FC<Props> = ({
  component: Component,
  roles,
  ...rest
}: any) => (
  <Route
    {...rest}
    render={(props: any) => {
      const currentUser = rest.auth;
      if (!currentUser.isLoggedIn) {
        return (
          <Redirect
            to={{ pathname: '/auth', state: { from: props.location } }}
          />
        );
      }

      if (roles && roles.indexOf(currentUser.role) === -1) {
        return <Redirect to={{ pathname: '/' }} />;
      }

      return <Component {...props} />;
    }}
  />
);

function mapStateToProps(state: any) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(PrivateRoute);
