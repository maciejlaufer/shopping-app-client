import { combineReducers } from 'redux';
import { History } from 'history';
import { authReducer } from './auth/reducer';
import { registerReducer } from './register/reducer';
import { AuthState } from './auth/types';
import { all, fork } from 'redux-saga/effects';
import { connectRouter, RouterState } from 'connected-react-router';
import { authSagas } from './auth/sagas';
import { registerSagas } from './register/sagas';
import { RegisterState } from './register/types';

export interface ApplicationState {
  auth: AuthState;
  register: RegisterState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    auth: authReducer,
    register: registerReducer,
    router: connectRouter(history),
  });

export function* rootSaga() {
  yield all([fork(authSagas), fork(registerSagas)]);
}
