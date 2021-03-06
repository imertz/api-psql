import db from "./queries/db";

function getAllPuppies(req, res, next) {
  db.any("select * from pups")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL puppies"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function getSinglePuppy(req, res, next) {
  var pupID = parseInt(req.params.id);
  db.one("select * from pups where id = $1", pupID)
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ONE puppy"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function createPuppy(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db.one(
    "insert into pups(name, breed, age, sex)" +
      "values(${name}, ${breed}, ${age}, ${sex}) returning name, id",
    req.body
  )
    .then(function(data) {
      res.status(200).json({
        status: "success",
        message: "Inserted one puppy",
        data
      });
      console.log(data);
    })
    .catch(function(err) {
      return next(err);
    });
}

function updatePuppy(req, res, next) {
  db.none("update pups set name=$1, breed=$2, age=$3, sex=$4 where id=$5", [
    req.body.name,
    req.body.breed,
    parseInt(req.body.age),
    req.body.sex,
    parseInt(req.params.id)
  ])
    .then(function() {
      res.status(200).json({
        status: "success",
        message: "Updated puppy"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function removePuppy(req, res, next) {
  var pupID = parseInt(req.params.id);
  db.result("delete from pups where id = $1", pupID)
    .then(function(result) {
      /* jshint ignore:start */
      res.status(200).json({
        status: "success",
        message: `Removed ${result.rowCount} puppy`
      });
      /* jshint ignore:end */
    })
    .catch(function(err) {
      return next(err);
    });
}

export default {
  getAllPuppies: getAllPuppies,
  getSinglePuppy: getSinglePuppy,
  createPuppy: createPuppy,
  updatePuppy: updatePuppy,
  removePuppy: removePuppy
};
