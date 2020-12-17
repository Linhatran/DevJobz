import Job from './Job';
import React from 'react';
function JobsDisplay(props) {
  return (
    <div className='container d-flex flex-wrap justify-content-center"'>
      {props.jobsList.map((job, i) => (
        <Job
          job={job}
          key={i}
          jobId={job.id}
          setViewedJobId={props.setViewedJobId}
          setJob={props.setJob}
        />
      ))}
    </div>
  );
}
export default JobsDisplay;
