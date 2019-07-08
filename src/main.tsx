import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { FromAccountContainer } from './components/from-account/from-account.component';
import { reducers } from './reducers';
import { rootSaga } from './sagas';
import { SendToComponent, SendToContainer } from './components/send-to/send-to.component';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, {},
  compose(
    applyMiddleware(sagaMiddleware),
    window['__REDUX_DEVTOOLS_EXTENSION__'] ? window['__REDUX_DEVTOOLS_EXTENSION__']() : f => f
  )
);


sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <>
      <FromAccountContainer />
      <SendToContainer />
    </>
  </Provider>,
  document.getElementById('root'));
