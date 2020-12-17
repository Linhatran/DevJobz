import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Job(props) {
  const [id, setId] = useState(props.jobId);

  return (
    <div
      className='job-card col-md-3 mt-5 mr-5'
      onClick={() => {
        return props.setViewedJobId(props.jobId);
      }}
    >
      <Link to={`/job/${id}`}>
        <h5>
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
