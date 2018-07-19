"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require("bluebird");

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  promiseLib: _bluebird2.default
};

var pgp = require("pg-promise")(options);

var cn = {
  host: 'office.cdtmthwbgs86.eu-west-3.rds.amazonaws.com',
  port: 5432,
  database: 'office',
  user: 'jmertz',
  password: 'S3id6*&3#tHqzH'
};

var db = pgp(cn);

function getAllPuppies(req, res, next) {
  db.any("select * from pups").then(function (data) {
    res.status(200).json({
      status: "success",
      data: data,
      message: "Retrieved ALL puppies"
    });
  }).catch(function (err) {
    return next(err);
  });
}

function getSinglePuppy(req, res, next) {
  var pupID = parseInt(req.params.id);
  db.one('select * from pups where id = $1', pupID).then(function (data) {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Retrieved ONE puppy'
    });
  }).catch(function (err) {
    return next(err);
  });
}

function createPuppy(req, res, next) {

  db.none("insert into pups(name, breed, sex) " + "values(${name}, ${breed}, ${sex})", req.body).then(function () {
    res.status(200).json({
      status: 'success',
      message: 'Inserted one puppy'
    });
  }).catch(function (err) {
    return next(err);
  });
}

function updatePuppy(req, res, next) {
  db.none('update pups set name=$1, breed=$2, age=$3, sex=$4 where id=$5', [req.body.name, req.body.breed, parseInt(req.body.age), req.body.sex, parseInt(req.params.id)]).then(function () {
    res.status(200).json({
      status: 'success',
      message: 'Updated puppy'
    });
  }).catch(function (err) {
    return next(err);
  });
}

function removePuppy(req, res, next) {
  var pupID = parseInt(req.params.id);
  db.result('delete from pups where id = $1', pupID).then(function (result) {
    /* jshint ignore:start */
    res.status(200).json({
      status: 'success',
      message: "Removed " + result.rowCount + " puppy"
    });
    /* jshint ignore:end */
  }).catch(function (err) {
    return next(err);
  });
}

exports.default = {
  getAllPuppies: getAllPuppies,
  getSinglePuppy: getSinglePuppy,
  createPuppy: createPuppy,
  updatePuppy: updatePuppy,
  removePuppy: removePuppy
};