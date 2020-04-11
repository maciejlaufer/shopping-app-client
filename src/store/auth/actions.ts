import {
  AuthActionTypes,
  AuthenticationRequestData,
  StartUserAuthenticationRequest,
} from './types';

const startUserAuthenticationRequest = ({
  username,
  password,
}: AuthenticationRequestData): StartUserAuthenticationRequest => ({
  type: AuthActionTypes.START_USER_AUTH,
  payload: {
    username,
    password,
  },
});

const processAuthenticationSuccess = () => ({});

const processAuthenticationFailure = () => ({});

export default {
  startUserAuthenticationRequest,
};
