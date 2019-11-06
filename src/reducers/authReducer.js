import { START_AUTH_PROCESS } from 'actions/types';
import { Roles } from '_helpers';

const defaultState = {
  isLoggedIn: false,
  isLoadingUser: false,
  role: Roles.User,
  user: null
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case START_AUTH_PROCESS:
      return { ...state, isLoggedIn: true, isLoadingUser: true };
    default:
      return state;
  }
}
