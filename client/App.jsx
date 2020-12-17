import React, { Component, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import JobsDisplay from './components/JobsDisplay';
import Navbar from './components/Navbar';
import FullPosting from './components/FullPosting';

function App() {
  const [jobsList, setJobsList] = useState([]);
  const [viewedJobId, setViewedJobId] = useState(null);

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
            <JobsDisplay jobsList={jobsList} setViewedJobId={setViewedJobId} />
          )}
        />
        ;
        <Route
          exact
          path='/job/:id'
          render={() => <FullPosting viewedJobId={viewedJobId} />}
        />
      </Switch>
    </div>
  );
}

export default App;
