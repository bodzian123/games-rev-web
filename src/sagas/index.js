import 'regenerator-runtime/runtime'
import { takeLatest, all, select } from 'redux-saga/effects';
import API from '../services/api';
import { UserSelectors } from '../reducers/UserRedux'

/* ------------- Types ------------- */

/* ------------- Sagas ------------- */

/* ------------- Connect Types To Sagas ------------- */
export default function * root () {
  // setting api token
  let api = API.create();
  const user = yield select(UserSelectors.selectUser);
  if (user !== null) {
    api = API.create(user.authentication_token);
  }

  yield all([
  ])
}
