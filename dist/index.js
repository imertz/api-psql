'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes/');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 5656;
// routes go here

app.use(_express2.default.json());
app.use('/', _routes2.default);

app.listen(port, function () {
    console.log('http://localhost:' + port);
});