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
router.get("/api/puppies", _queries2.default.getAllPuppies);
router.get("/api/puppies/:id", _queries2.default.getSinglePuppy);
router.post("/api/puppies", _queries2.default.createPuppy);
router.put("/api/puppies/:id", _queries2.default.updatePuppy);
router.delete("/api/puppies/:id", _queries2.default.removePuppy);

//Clients Routes
router.get("/api/clients", _Clients2.default.getAllClients);
router.get("/api/clients/:id", _Clients2.default.getSingleClient);
router.post("/api/clients", _Clients2.default.createClient);
router.put("/api/clients/:id", _Clients2.default.updateClient);
router.delete("/api/clients/:id", _Clients2.default.removeClient);

exports.default = router;