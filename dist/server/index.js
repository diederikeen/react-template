'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _CreateMiddlewareStore = require('./helpers/CreateMiddlewareStore');

var _CreateMiddlewareStore2 = _interopRequireDefault(_CreateMiddlewareStore);

var _RenderDocument = require('./helpers/RenderDocument');

var _RenderDocument2 = _interopRequireDefault(_RenderDocument);

var _RenderRoutes = require('../app/helpers/RenderRoutes');

var _RenderRoutes2 = _interopRequireDefault(_RenderRoutes);

var _index = require('../app/routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static(__dirname + '/../public'));
app.use(_CreateMiddlewareStore2.default);

app.get('*', function (req, res) {
  var context = {};

  var markup = (0, _RenderDocument2.default)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: req.store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { context: context, location: req.url },
      (0, _RenderRoutes2.default)(_index2.default)
    )
  ), req.store.getState());

  res.send(markup);
});

app.listen(1337, function () {
  console.info('Listening on port 1337');
});