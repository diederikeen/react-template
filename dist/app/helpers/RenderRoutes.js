'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = renderRoutes;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderRoutes(routes) {
  return _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    routes.map(function (route, i) {
      return route.childRoutes ? _react2.default.createElement(route.component, { key: i }, renderRoutes(route.childRoutes)) : _react2.default.createElement(_reactRouterDom.Route, _extends({ key: i }, route));
    })
  );
}