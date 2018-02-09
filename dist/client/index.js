'use strict';

var _main = require('../assets/styles/main.css');

var _main2 = _interopRequireDefault(_main);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _redux = require('redux');

var _reactRouterDom = require('react-router-dom');

var _reducers = require('../app/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _routes = require('../app/routes');

var _routes2 = _interopRequireDefault(_routes);

var _renderRoutes = require('../app/helpers/renderRoutes');

var _renderRoutes2 = _interopRequireDefault(_renderRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default, window.INITIAL_STATE, (0, _redux.applyMiddleware)(_reduxThunk2.default));

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    (0, _renderRoutes2.default)(_routes2.default)
  )
), document.getElementById('app-container'));