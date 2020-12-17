const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const jobsController = require('./controllers/jobsController');
const usersController = require('./controllers/usersController');

//parse request body later
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//display html on load at root endpoint
app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../client/index.html'));
});

//handle GET request to /api/
//get ALL jobs
app.get(
  '/api/',
  jobsController.getApiJobs,
  jobsController.getDbJobs,
  (req, res) => {
    const jobs = res.locals.jobs;
    return res.status(200).json(jobs);
  }
);
//get only jobs from DB
app.get('/api/db', jobsController.getDbJobs, (req, res) => {
  const jobs = res.locals.jobs;
  return res.status(200).json(jobs);
});
//query jobs with params
app.post('/api/jobs', jobsController.queryJobs, (req, res) => {
  const { jobs } = res.locals;
  res.status(200).json(jobs);
});
//post a job
app.post('/api/post', jobsController.postJob, (req, res) => {
  res.send('Posted job');
});
//delete a job
app.delete('/api/delete/:id', jobsController.deleteJob, (req, res) => {
  res.send('Deleted job');
});
//edit a job
app.put('/api/edit/:id', jobsController.editJob, (req, res) => {
  res.send('Updated job');
});

// handle users

app.post('/api/login', usersController.verifyUser, (req, res) => {
  const { result } = res.locals;
  res.status(200).json(result);
});
//run this for production
app.use('/build', express.static(path.join(__dirname, '../build')));
app.listen(3000, () => console.log('listening on port 3000...')); //listens on port 3000 -> http://localhost:3000/
