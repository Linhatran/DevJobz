import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DeleteJob(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios
      .delete(`/api/delete/${props.viewedJob.id}`, data)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='container' style={{ backgroundColor: '#eef5fa' }}>
      <h2 className='text-center mt-5'>
        Are you sure about deleting this job posting?
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='d-flex justify-content-center mt-5'
      >
        <button className='btn btn-danger mr-3' type='submit'>
          Yes, delete it!
        </button>
        <button className='btn btn-link btn-outline-primary' type='button'>
          <Link to={'/user/jobs'}>Back to user homepage</Link>
        </button>
      </form>
    </div>
  );
}

export default DeleteJob;
