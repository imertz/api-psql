"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _queries = require("../queries.js");

var _queries2 = _interopRequireDefault(_queries);

var _Clients = require("../queries/Clients");

var _Clients2 = _interopRequireDefault(_Clients);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Puppies Routes
router.get("/puppies", _queries2.default.getAllPuppies);
router.get("/puppies/:id", _queries2.default.getSinglePuppy);
router.post("/puppies", _queries2.default.createPuppy);
router.put("/puppies/:id", _queries2.default.updatePuppy);
router.delete("/puppies/:id", _queries2.default.removePuppy);

//Clients Routes
router.get("/clients", _Clients2.default.getAllClients);
router.get("/clients/:id", _Clients2.default.getSingleClient);
router.post("/clients", _Clients2.default.createClient);
router.put("/clients/:id", _Clients2.default.updateClient);
router.delete("/clients/:id", _Clients2.default.removeClient);

exports.default = router;