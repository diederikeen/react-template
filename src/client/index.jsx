import css from '../assets/styles/main.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducer from '../app/reducers';
import routes from '../app/routes';
import renderRoutes from '../app/helpers/renderRoutes';

const store = createStore(reducer, window.INITIAL_STATE, applyMiddleware(thunk));

render((
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
 </Provider>
), document.getElementById('app-container'));
