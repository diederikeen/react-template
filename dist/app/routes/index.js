'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

var _Index = require('../components/Index');

var _Index2 = _interopRequireDefault(_Index);

var _Blog = require('../components/Blog');

var _Blog2 = _interopRequireDefault(_Blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  component: _App2.default,
  childRoutes: [{
    exact: true,
    path: '/',
    component: _Index2.default
  }, {
    exact: true,
    path: '/blog',
    component: _Blog2.default
  }]
}];