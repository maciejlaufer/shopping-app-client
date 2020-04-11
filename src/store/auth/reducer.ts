import { AuthActionTypes, AuthState } from './types';
import { Roles } from 'utils/roles';
import { Reducer } from 'redux';

export const initialState: AuthState = {
  loading: false,
  user: null,
  roles: [],
  isAuthenticated: false,
};

const reducer: Reducer<AuthState> = (
  state = initialState,
  action
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.START_USER_AUTH:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export { reducer as authReducer };
