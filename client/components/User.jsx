import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import JobsDisplay from '../components/JobsDisplay';
import axios from 'axios';
import { useEffect } from 'react';
function User(props) {
  const [jobsList, setJobsList] = useState([]);

  useEffect(() => {
    axios
      .get('/api/db')
      .then((result) => {
        setJobsList(result.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>User homepage</h1>
      <Link to={'/user/post'}>Post a new job</Link>
      <JobsDisplay
        jobsList={jobsList}
        setViewedJobId={props.setViewedJobId}
        viewJobId={props.viewJobId}
        setViewedJob={props.setViewedJob}
      />
    </div>
  );
}

export default User;
