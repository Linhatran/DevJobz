const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const jobsController = require('./controllers/jobsController');
//parse request body later
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//display html on load at root endpoint
app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../client/index.html'));
});

//handle GET request to /api/

app.get(
  '/api/',
  jobsController.getApiJobs,
  jobsController.getDbJobs,
  (req, res) => {
    const jobs = res.locals.jobs;
    return res.status(200).json(jobs);
  }
);
// app.get(
//   '/api/:id',
//   jobsController.getApiJobs,
//   jobsController.viewJob,
//   (req, res) => {
//     const job = res.locals.viewedJob;
//     res.status(200).json(job);
//   }
// );
app.post('/api/post', jobsController.postJob, (req, res) => {
  res.send('Posted job');
});
app.delete('/api/delete/:id', jobsController.deleteJob, (req, res) => {
  res.send('Deleted job');
});
app.put('/api/edit/:id', jobsController.editJob, (req, res) => {
  res.send('Updated job');
});
//run this for production
app.use('/build', express.static(path.join(__dirname, '../build')));
app.listen(3000, () => console.log('listening on port 3000...')); //listens on port 3000 -> http://localhost:3000/
