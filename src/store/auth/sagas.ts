import { call, takeEvery, all, fork } from 'redux-saga/effects';
import { callApi } from 'utils/api';

import { AuthActionTypes } from './types';

function* handleUserAuthenticationStart() {
  try {
    const res = yield call(callApi, 'get', '/posts');
    console.log('res in sagas', res);
    if (res.error) {
      // fetch fail action
    } else {
      // put(authActons.Success)
      // fetch success action
    }
  } catch (error) {
    if (error instanceof Error && error.stack) {
      // invoke error action with err.stack
    } else {
      // invoke error action with unknown error
    }
  }
}

function* watchUserAuthenticationStart() {
  yield takeEvery(
    AuthActionTypes.START_USER_AUTH,
    handleUserAuthenticationStart
  );
}

export function* authSagas() {
  yield all([fork(watchUserAuthenticationStart)]);
}
