import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginUserRequest: ['email', 'password'],
  loginUserSuccess: ['data'],
  loginUserFailure: ['error']
});

export const UserTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  data: null,
  fetching: null,
  error: null,
  email: '',
  password: ''
};

/* ------------- Selectors ------------- */

export const UserSelectors = {
  selectUser: state => state.user.data
};

/* ------------- Reducers ------------- */

// request the user
export const loginRequest = (state, action) => {
  const { email, password } = action;
  return {
    ...state,
    email,
    password,
    fetching: true
  };
};
// successful request the user
export const loginSuccess = (state, action) => {
  const { data } = action;
  return {
    ...state,
    data: data,
    fetching: false
  };
};
// failed to get the user
export const loginFailure = (state, action) => {
  const { error } = action;
  return {
    ...state,
    data: null,
    fetching: false,
    error: error
  };
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_USER_REQUEST]: loginRequest,
  [Types.LOGIN_USER_SUCCESS]: loginSuccess,
  [Types.LOGIN_USER_FAILURE]: loginFailure,
});
