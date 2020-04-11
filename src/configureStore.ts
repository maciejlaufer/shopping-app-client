import createSagaMiddleware from 'redux-saga';
import { Store, createStore, applyMiddleware } from 'redux';
import { History } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import { ApplicationState, createRootReducer, rootSaga } from './store';

export default function configureStore(
  history: History
): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(history),
    // default state
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
