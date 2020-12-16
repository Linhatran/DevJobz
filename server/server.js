const express = require('express');
const app = express();
const path = require('path');
const jobsController = require('./controllers/jobsController');
//parse request body later
app.use(express.json());

//display html on load at root endpoint
app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../client/index.html'));
});

//handle GET request to /api/
app.get(
  '/api/',
  jobsController.getJobs,
  //   jobsController.getMoreJobs,
  async (req, res) => {
    const jobs = await res.locals.jobs;
    return res.status(200).json(jobs);
  }
);

//run this for production
app.use('/build', express.static(path.join(__dirname, '../build')));
app.listen(3000, () => console.log('listening on port 3000...')); //listens on port 3000 -> http://localhost:3000/
