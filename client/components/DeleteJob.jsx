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
    <div>
      <h2>Are you sure about deleting this job posting?</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <button type='submit'>Yes, delete it!</button>
      </form>
      <Link to={'/user/jobs'}>Back to user homepage</Link>
    </div>
  );
}

export default DeleteJob;
