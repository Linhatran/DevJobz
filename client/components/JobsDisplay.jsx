import Job from './Job';
import React from 'react';
import { useState } from 'react';
import header from '../styles/header.svg';
function JobsDisplay(props) {
  return (
    <div>
      <div className='header d-flex flex-column align-items-center my-5'>
        <img src={header} alt='' className='col-6 ' />
        <div className='d-flex'>
          <h3 className='mt-5 display-4' style={{ color: '#386480' }}>
            <em>Your dream job is only a click away</em>
          </h3>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='45'
            height='45'
            fill='currentColor'
            style={{ color: '#EF6C75' }}
            className='bi bi-box-arrow-up-right align-self-center mt-4 ml-4'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z'
            />
            <path
              fill-rule='evenodd'
              d='M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z'
            />
          </svg>
        </div>
      </div>
      <div className='container d-flex flex-wrap justify-content-center pl-5 pb-5'>
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
    </div>
  );
}
export default JobsDisplay;
