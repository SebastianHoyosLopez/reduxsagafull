import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { sagaMiddleware, store } from './redux/store';
import { Provider } from 'react-redux';
import rootSaga from './redux/rootSaga';

const root = ReactDOM.createRoot(document.getElementById('root'));

sagaMiddleware.run(rootSaga)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
