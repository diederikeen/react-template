'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = userReducer;
var initialState = exports.initialState = {
  name: 'Diederik Eenschooten'
};

function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  return state;
}