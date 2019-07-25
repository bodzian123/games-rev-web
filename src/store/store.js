import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import rootReducer from '../reducers'
import mySaga from '../sagas'
import throttle from 'lodash/throttle'
import { loadState, saveState } from './localStorage'
import createSagaMiddleware from 'redux-saga'

export const history = createBrowserHistory();

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const enhancers = [];
const middleware = [
  sagaMiddleware,
  routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  composedEnhancers
);

// then run the saga
sagaMiddleware.run(mySaga)

store.subscribe(throttle(() => {
  saveState({
    user: store.getState().user
  });
}, 1000));

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('../reducers/index');
    store.replaceReducer(nextRootReducer);
  });
}

export default store
