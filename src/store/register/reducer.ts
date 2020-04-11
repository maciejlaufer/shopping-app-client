import { RegisterActionTypes, RegisterState } from './types';
import { Roles } from 'utils/roles';
import { Reducer } from 'redux';

export const initialState: RegisterState = {
  loading: false,
  success: false,
  errors: {},
};

const reducer: Reducer<RegisterState> = (
  state = initialState,
  action
): RegisterState => {
  switch (action.type) {
    case RegisterActionTypes.START_USER_REGISTRATION:
      return { ...state, loading: true };
    case RegisterActionTypes.USER_REGISTRATION_SUCCESS:
      return { ...state, loading: false };
    case RegisterActionTypes.USER_REGISTRATION_ERROR:
      return { ...state, loading: false, errors: action.payload.errors };
    default:
      return state;
  }
};

export { reducer as registerReducer };
