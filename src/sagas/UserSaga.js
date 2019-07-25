import { call, put } from 'redux-saga/effects';
import { path } from 'ramda';
import UserActions from '../reducers/UserRedux';

export function * loginUser (api, action) {
  const { email, password } = action;
  // make the call to the api
  const response = yield call(api.loginUser, email, password);

  if (response.ok) {
    const data = path(['data'], response);
    // do data conversion here if needed

    yield call(api.setAuthToken, data.authentication_token);
    yield put(UserActions.loginUserSuccess(data));

  } else {
    yield put(UserActions.loginUserFailure('Network error'))
  }
}
