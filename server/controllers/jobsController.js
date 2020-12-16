const { json } = require('express');
const fetch = require('node-fetch');
const db = require('../models/jobsModels');
const apiURL = `https://jobs.github.com/positions.json?page=`;

const jobsController = {};

jobsController.getApiJobs = (req, res, next) => {
  try {
    async function fetchData(url, page = 1, result = []) {
      await fetch(url + page)
        .then((response) => response.json())
        .then((data) => {
          if (data.length !== 0) {
            console.log('page ', page);
            page++;
            fetchData(url, page, result.concat(data));
          } else {
            console.log('page 4');
            res.locals.jobs = result;
            return next();
          }
        })
        .catch((err) => console.log(err));
      return result;
    }
    //fetch data call
    fetchData(apiURL, 1, (result = []));
  } catch (err) {
    //need to handle error globally
    console.log(err);
  }
};

jobsController.getDbJobs = (req, res, next) => {
  console.log('in getdb');
  db.query('SELECT * FROM "jobs";')
    .then((response) => {
      res.locals.jobs = res.locals.jobs.concat(response.rows);
      return next();
    })
    .catch((err) => console.log('Error executing query ', err.stack));
};
module.exports = jobsController;

jobsController.postJob = (req, res, next) => {
  const {
    type,
    created_at,
    company,
    company_url,
    location,
    title,
    description,
    how_to_apply,
    company_logo,
  } = req.body;

  const queryString = `INSERT INTO jobs (type, created_at, company, company_url, location, title, description, how_to_apply, company_logo)
                VALUES ('${type}', '${created_at}', '${company}', '${company_url}', '${location}', '${title}', '${description}', '${how_to_apply}', '${company_logo}' );`;
  db.query(queryString)
    .then((res) => {
      return next();
    })
    .catch((err) => console.log('Error executing query ', err.stack));
};

jobsController.editJob = (req, res, next) => {
  const { id } = req.params;
  const {
    type,
    created_at,
    company,
    company_url,
    location,
    title,
    description,
    how_to_apply,
    company_logo,
  } = req.body;
  const queryString = `UPDATE jobs SET type = '${type}', created_at = '${created_at}', company = '${company}', company_url = '${company_url}', location = '${location}', title = '${title}', description = '${description}', how_to_apply = '${how_to_apply}', company_logo = '${company_logo}'  
WHERE job_id=$1;`;
  const queryParams = [id];
  db.query(queryString, queryParams)
    .then((response) => {
      return next();
    })
    .catch((err) => console.log('Error executing query ', err.stack));
};

jobsController.deleteJob = (req, res, next) => {
  const { id } = req.params;
  const queryString = `DELETE FROM jobs WHERE job_id=$1;`;
  const queryParams = [id];
  db.query(queryString, queryParams)
    .then((response) => {
      return next();
    })
    .catch((err) => console.log('Error executing query ', err.stack));
};
