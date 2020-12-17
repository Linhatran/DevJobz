import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Job(props) {
  const [id, setId] = useState(props.jobId);

  return (
    <div
      className='job-card col-md-3 mt-5 mr-5'
      onClick={(e) => {
        props.setViewedJobId(props.jobId);
        props.setViewedJob(props.job);
      }}
    >
      <Link to={`/job/${id}`}>
        <h5 className='mt-3'>
          {props.job.title} - {props.job.type}
        </h5>
      </Link>
      <p>Company: {props.job.company}</p>
      <p>Location: {props.job.location}</p>
      <p>Posted on: {props.job.created_at}</p>
    </div>
  );
}

export default Job;
