import {
  RegisterActionTypes,
  RegistrationRequestData,
  StartUserRegistrationRequest,
  RegistrationRequestErrorData,
} from './types';

const startUserRegistrationRequest = (
  payload: RegistrationRequestData
): StartUserRegistrationRequest => ({
  type: RegisterActionTypes.START_USER_REGISTRATION,
  payload,
});

const userRegistrationSuccess = () => ({
  type: RegisterActionTypes.USER_REGISTRATION_SUCCESS,
});

const userRegistrationError = (payload: RegistrationRequestErrorData) => ({
  type: RegisterActionTypes.USER_REGISTRATION_ERROR,
  payload,
});

export default {
  startUserRegistrationRequest,
  userRegistrationSuccess,
  userRegistrationError,
};
