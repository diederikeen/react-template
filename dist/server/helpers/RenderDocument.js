'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = renderDocument;

var _server = require('react-dom/server');

function renderDocument(component, state) {
    return '<!doctype html>\n<html lang="en">\n    <head>\n        <meta charset="utf-8">\n        <meta http-equiv="x-ua-compatible" content="ie=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n        <title>Test app</title>\n\n        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">\n\n    </head>\n    <body>\n        <div id="app-container">' + (0, _server.renderToString)(component) + '</div>\n        <script>\n            window.INITIAL_STATE = ' + JSON.stringify(state) + ';\n        </script>\n        <script src="/bundle.js"></script>\n    </body>\n</html>';
}