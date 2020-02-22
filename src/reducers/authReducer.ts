import { START_AUTH_PROCESS } from 'actions/types';
import { Roles } from '_helpers';

const defaultState = {
  isLoggedIn: false,
  isLoadingUser: false,
  role: Roles.User,
  user: null
};

//TODO: figure out way to specify action types (propably by union type)
export default function(state = defaultState, action: any) {
  switch (action.type) {
    case START_AUTH_PROCESS:
      return { ...state, isLoggedIn: true, isLoadingUser: true };
    default:
      return state;
  }
}
