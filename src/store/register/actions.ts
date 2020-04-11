import {
  RegisterActionTypes,
  RegistrationRequestData,
  StartUserRegistrationRequest,
} from './types';

const startUserRegistrationRequest = (
  payload: RegistrationRequestData
): StartUserRegistrationRequest => ({
  type: RegisterActionTypes.START_USER_REGISTRATION,
  payload,
});

export default {
  startUserRegistrationRequest,
};
