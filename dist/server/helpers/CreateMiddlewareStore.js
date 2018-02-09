'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createStoreMiddleware;

var _redux = require('redux');

var _reducers = require('../../app/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createStoreMiddleware(req, res, next) {
    req.store = (0, _redux.createStore)(_reducers2.default);
    next();
}