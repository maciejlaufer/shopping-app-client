import { START_AUTH_PROCESS } from 'actions/types';
import { Roles } from '_helpers';

const defaultState = {
  isLoggedIn: false,
  role: Roles.User
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case START_AUTH_PROCESS:
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
}
