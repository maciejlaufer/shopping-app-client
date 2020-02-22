import { AuthActionTypes } from './types';
import axios from 'axios';

function loginUser(username: string, password: string) {
  return (dispatch: any) => {
    dispatch(startAuthenticationProcessing(username, password));

    // axios
    //   .post('', {})
    //   .then(response => {
    //     dispatch(processAuthenticationSuccess(response.data));
    //   })
    //   .catch(error => {
    //     dispatch(processAuthenticationFailure(error.message));
    //   });
  };
}

function startAuthenticationProcessing(username: string, password: string) {
  return {
    type: AuthActionTypes.START_AUTH_PROCESS,
    payload: {
      username,
      password
    }
  };
}

const processAuthenticationSuccess = () => ({});

const processAuthenticationFailure = () => ({});

export default {
  loginUser
};
