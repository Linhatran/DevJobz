const fetch = require('node-fetch');
const db = require('../models/jobsModels');

const usersController = {};

usersController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM "users" WHERE username =$1 AND password = $2 ;', [
    username,
    password,
  ])
    .then((response) => {
      res.locals.result = response.rows.length ? true : false;
      return next();
    })
    .catch((err) => console.log('Error executing query ', err.stack));
};
module.exports = usersController;
