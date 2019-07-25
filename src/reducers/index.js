import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

/* ------------- Assemble The Reducers ------------- */
export const appReducer = combineReducers({
  routing: routerReducer,
});

export default (state, action) => {
  if (action.type === 'LOGOUT') {
    const { routing } = state;
    state = { routing }
  }
  return appReducer(state, action)
}
