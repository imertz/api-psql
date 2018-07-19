import db from "./db.js";

function getAllClients(req, res, next) {
  db.any("select * from clients")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL clients"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function getSingleClient(req, res, next) {
  var clientID = parseInt(req.params.id);
  db.one("select * from clients where id = $1", clientID)
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ONE client"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function createClient(req, res, next) {
  db.one(
    "insert into clients(name)" + "values(${name}) returning name, id",
    req.body
  )
    .then(function(data) {
      res.status(200).json({
        status: "success",
        message: "Inserted one client",
        data
      });
      console.log(data);
    })
    .catch(function(err) {
      return next(err);
    });
}

function updateClient(req, res, next) {
  db.none("update clients set name=$1 where id=$2", [
    req.body.name,
    parseInt(req.params.id)
  ])
    .then(function() {
      res.status(200).json({
        status: "success",
        message: "Updated client"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function removeClient(req, res, next) {
  const clientID = parseInt(req.params.id);
  db.result("delete from clients where id = $1", clientID)
    .then(function(result) {
      /* jshint ignore:start */
      res.status(200).json({
        status: "success",
        message: `Removed ${result.rowCount} clients`
      });
      /* jshint ignore:end */
    })
    .catch(function(err) {
      return next(err);
    });
}

export default {
  getAllClients: getAllClients,
  getSingleClient: getSingleClient,
  createClient: createClient,
  updateClient: updateClient,
  removeClient: removeClient
};
