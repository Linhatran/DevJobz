const { json } = require('express');
const fetch = require('node-fetch');
const jobsController = {};
const apiURL = `https://jobs.github.com/positions.json?page=`;

jobsController.getJobs = (req, res, next) => {
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

// jobsController.getMoreJobs = (req, res, next) => {
//   fetch(`https://jobs.github.com/positions.json?page=2`)
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.length !== 0) {
// res.locals.jobs = res.locals.jobs.concat(data);
// this.getMoreJobs()
//       }

//       return next();
//     })
//     .catch((err) => console.log(err));
// };
module.exports = jobsController;
