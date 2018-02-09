'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.App = App;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
    var children = _ref.children,
        user = _ref.user;


    return _react2.default.createElement(
        'main',
        null,
        children
    );
}

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        user: state.user
    };
})(App);