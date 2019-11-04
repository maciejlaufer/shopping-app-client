import types from 'actions/types';
import axios from 'axios';

const loginUser = value => {
  return dispatch => {
    dispatch(startAuthenticationProcessing());

    axios
      .post('', {})
      .then(response => {
        dispatch(processAuthenticationSuccess(response.data));
      })
      .catch(error => {
        dispatch(processAuthenticationFailure(error.message));
      });
  };
};

const startAuthenticationProcessing = () => ({});

const processAuthenticationSuccess = () => ({});

const processAuthenticationFailure = () => ({});

export default {
  loginUser
};
