export interface AuthState {
  readonly loading: boolean;
  readonly user: any;
  readonly roles: string[];
  readonly isAuthenticated: boolean;
  readonly errors?: string;
}

export const AuthActionTypes = {
  START_USER_AUTH: '@@auth/START_AUTH_PROCESS'
};

export interface AuthenticationRequestData {
  username: string;
  password: string;
}

export interface StartUserAuthenticationRequest {
  type: typeof AuthActionTypes.START_USER_AUTH;
  payload: AuthenticationRequestData;
}

export type AuthActions = StartUserAuthenticationRequest;
