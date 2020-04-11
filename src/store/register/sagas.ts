import { call, takeEvery, all, fork, put } from 'redux-saga/effects';
import { callApi } from 'utils/api';

import { RegisterActionTypes, StartUserRegistrationRequest } from './types';
import authActions from 'store/auth/actions';

function* watchUserRegistrationStart() {
  yield takeEvery(
    RegisterActionTypes.START_USER_REGISTRATION,
    handleUserRegistrationStart
  );
}

function* handleUserRegistrationStart(action: StartUserRegistrationRequest) {
  try {
    const res = yield call(callApi, 'post', '/auth/register', action.payload);
    console.log('res', res);
    // yield put(authActions.)
  } catch (error) {
    console.log('error', error);
  }
}

export function* registerSagas() {
  yield all([fork(watchUserRegistrationStart)]);
}
