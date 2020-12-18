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
    <div className='d-flex flex-column align-items-center '>
      <JobsDisplay
        jobsList={jobsList}
        setViewedJobId={props.setViewedJobId}
        viewJobId={props.viewJobId}
        setViewedJob={props.setViewedJob}
      />
      <Link to={'/user/post'} className='my-5'>
        <button className='btn btn-info'>Post a new job</button>
      </Link>
    </div>
  );
}

export default User;
