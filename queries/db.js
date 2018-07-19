import promise from "bluebird";

const options = {
  promiseLib: promise
};

const pgp = require("pg-promise")(options);

const cn = {
  host: "office.cdtmthwbgs86.eu-west-3.rds.amazonaws.com",
  port: 5432,
  database: "office",
  user: "jmertz",
  password: "S3id6*&3#tHqzH"
};

const db = pgp(cn);

export default db;