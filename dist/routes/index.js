'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _queries = require('../queries');

var _queries2 = _interopRequireDefault(_queries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/puppies', _queries2.default.getAllPuppies);
router.get('/puppies/:id', _queries2.default.getSinglePuppy);
router.post('/puppies', _queries2.default.createPuppy);
router.put('/puppies/:id', _queries2.default.updatePuppy);
router.delete('/puppies/:id', _queries2.default.removePuppy);

exports.default = router;