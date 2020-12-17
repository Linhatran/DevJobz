import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import JobsDisplay from './components/JobsDisplay';
import Navbar from './components/Navbar';
import FullPosting from './components/FullPosting';
import Login from './components/Login';
import User from './components/User';
import CreateJob from './components/CreateJob';
import EditJob from './components/EditJob';

function App() {
  const [jobsList, setJobsList] = useState([]);
  const [viewedJobId, setViewedJobId] = useState(null);
  const [viewedJob, setViewedJob] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    fetch('/api/')
      .then((res) => res.json())
      .then(
        (data) => {
          setJobsList(data);
          sessionStorage.setItem('jobsList', JSON.stringify(data));
        },
        (err) => console.log('ERRORRR ', err)
      );
  }, []);

  return (
    <div>
      <Navbar setJobsList={setJobsList} />
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <JobsDisplay
              jobsList={jobsList}
              setViewedJobId={setViewedJobId}
              setViewedJob={setViewedJob}
            />
          )}
        />
        ;
        <Route
          exact
          path='/job/:id'
          render={() => <FullPosting viewedJobId={viewedJobId} />}
        />
        <Route
          exact
          path='/login'
          render={() => <Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          exact
          path='/user/jobs'
          render={() => (
            <User
              setViewedJobId={setViewedJobId}
              viewedJobId={viewedJobId}
              setViewedJob={setViewedJob}
            />
          )}
        />
        <Route exact path='/user/post' render={() => <CreateJob />} />
        <Route
          exact
          path='/user/edit'
          render={() => (
            <EditJob setViewedJob={setViewedJob} viewedJob={viewedJob} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
