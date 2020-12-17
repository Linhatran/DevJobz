import Job from './Job';
import React from 'react';
import { useState } from 'react';
function JobsDisplay(props) {
  return (
    <div className='container d-flex flex-wrap justify-content-center pl-5'>
      {props.jobsList.map((job, i) => (
        <Job
          job={job}
          key={i}
          jobId={job.id}
          setViewedJobId={props.setViewedJobId}
          viewedJobId={props.viewedJobId}
          setViewedJob={props.setViewedJob}
        />
      ))}
    </div>
  );
}
export default JobsDisplay;
