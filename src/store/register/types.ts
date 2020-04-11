export interface RegisterState {
  readonly loading: boolean;
  readonly success: boolean;
  readonly errors?: any;
}

export const RegisterActionTypes = {
  START_USER_REGISTRATION: '@@register/START_USER_REGISTRATION_PROCESS',
  USER_REGISTRATION_SUCCESS: '@@register/USER_REGISTRATION_SUCCESS',
  USER_REGISTRATION_ERROR: '@@register/USER_REGISTATION_ERROR',
};

export interface RegistrationRequestData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface StartUserRegistrationRequest {
  type: typeof RegisterActionTypes.START_USER_REGISTRATION;
  payload: RegistrationRequestData;
}

export interface UserRegistrationRequestSuccess {
  type: typeof RegisterActionTypes.USER_REGISTRATION_SUCCESS;
}

export interface RegistrationRequestErrorData {
  errors: any;
}

export interface UserRegistrationRequestError {
  type: typeof RegisterActionTypes.USER_REGISTRATION_ERROR;
  payload: RegistrationRequestErrorData;
}

export type AuthActions =
  | StartUserRegistrationRequest
  | UserRegistrationRequestSuccess
  | UserRegistrationRequestError;
