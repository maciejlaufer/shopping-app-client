export interface AuthState {
  readonly loading: boolean;
  readonly user: any;
  readonly roles: string[];
  readonly isAuthenticated: boolean;
  readonly errors?: string;
}

export const AuthActionTypes = {
  START_AUTH_PROCESS: '@@auth/START_AUTH_PROCESS'
};
