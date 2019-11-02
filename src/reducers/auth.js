// import { CHANGE_AUTH } from 'actions/types';
import { Roles } from "_helpers";

const defaultState = {
  isLoggedIn: true,
  role: Roles.User
};

export default function(state = defaultState, action) {
  switch (action.type) {
    // case CHANGE_AUTH:
    // return action.payload;
    default:
      return state;
  }
}
