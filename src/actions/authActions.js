import types from 'actions/types';
import axios from 'axios';

function loginUser(username, password) {
  return dispatch => {
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

function startAuthenticationProcessing(username, password) {
  return {
    type: types.START_AUTH_PROCESS,
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
