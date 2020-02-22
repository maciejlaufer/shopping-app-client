import { combineReducers } from 'redux';
import { History } from 'history';
import { authReducer } from './auth/reducer';
import { AuthState } from './auth/types';
import { all, fork } from 'redux-saga/effects';
import { connectRouter, RouterState } from 'connected-react-router';

export interface ApplicationState {
  auth: AuthState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    auth: authReducer,
    router: connectRouter(history)
  });

export function* rootSaga() {
  yield all([]);
}
