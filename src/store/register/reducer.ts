import { RegisterActionTypes, RegisterState } from './types';
import { Roles } from 'utils/roles';
import { Reducer } from 'redux';

export const initialState: RegisterState = {
  loading: false,
  errors: [],
};

const reducer: Reducer<RegisterState> = (
  state = initialState,
  action
): RegisterState => {
  switch (action.type) {
    case RegisterActionTypes.START_USER_REGISTRATION:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export { reducer as registerReducer };
