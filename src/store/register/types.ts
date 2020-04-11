export interface RegisterState {
  readonly loading: boolean;
  readonly errors?: any;
}

export const RegisterActionTypes = {
  START_USER_REGISTRATION: '@@auth/START_USER_REGISTRATION_PROCESS',
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

export type AuthActions = StartUserRegistrationRequest;
