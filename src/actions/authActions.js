import types from 'actions/types';

const loginUser = value => ({
  type: types.LOGIN_USER,
  value: value
});

export default {
  loginUser
};
