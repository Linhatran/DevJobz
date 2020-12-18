import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function FullPosting(props) {
  const id = props.viewedJobId;
  const jobsList = JSON.parse(sessionStorage.getItem('jobsList'));
  const job = jobsList.filter((post) => post.id === id)[0];

  return (
    <div className='container my-5'>
      <div className='my-5 mx-5'>
        <img
          className='mt-5'
          src={job.company_logo}
          alt='logo'
          style={{ width: '200px' }}
        />
        <h3 className='mt-5'>
          {job.title} - {job.type}
        </h3>
        <h4>Company: {job.company}</h4>
        <a>{job.company_url}</a>
        <p>
          <strong>Location:</strong> {job.location}
        </p>
        <p>
          <strong>Posted on:</strong> {job.created_at}
        </p>
        <p dangerouslySetInnerHTML={{ __html: job.description }}></p>
        <p dangerouslySetInnerHTML={{ __html: job.how_to_apply }}></p>
        <div className='d-flex justify-content-between pb-5'>
          <Link to={'/'}> &#8592; Go back to dashboard</Link>
          <Link to={'/user/delete'} className='text-danger'>
            &#8593; Delete this job posting
          </Link>
          <Link to={'/user/edit'}>Edit job posting &#8594;</Link>
        </div>
      </div>
    </div>
  );
}
export default FullPosting;
