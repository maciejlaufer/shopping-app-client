import { call, takeEvery, all, fork, put } from 'redux-saga/effects';
import { callApi } from 'utils/api';

import { RegisterActionTypes, StartUserRegistrationRequest } from './types';
import registerActions from 'store/register/actions';

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
    yield put(registerActions.userRegistrationSuccess());
  } catch (error) {
    console.log('error', error);
    if (error.statusCode === 400) {
      const payload: any = {};
      error.message.forEach((message: any) => {
        payload[message.property] = Object.values(message.constraints).join(
          ' '
        );
      });
      yield put(registerActions.userRegistrationError({ errors: payload }));
    }
  }
}

export function* registerSagas() {
  yield all([fork(watchUserRegistrationStart)]);
}
