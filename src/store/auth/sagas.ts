import { call, takeEvery, all, fork, put } from 'redux-saga/effects';
import { callApi } from 'utils/api';

import { AuthActionTypes } from './types';

function* watchUserAuthenticationStart() {
  yield takeEvery(
    AuthActionTypes.START_USER_AUTH,
    handleUserAuthenticationStart
  );
}

function* handleUserAuthenticationStart() {
  try {
    const res = yield call(callApi, 'get', '/posts');
    console.log('res in sagas', res);
  } catch (error) {
    console.log('error', error);
  }
}

export function* authSagas() {
  yield all([fork(watchUserAuthenticationStart)]);
}
