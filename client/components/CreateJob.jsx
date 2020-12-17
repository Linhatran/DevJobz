import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';

//https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Express_Clothing_Logo.SVG/1200px-Express_Clothing_Logo.SVG.png
function CreateJob() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .post('/api/post', data)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Create Job</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='title' id='title'>
          Title:
        </label>
        <input type='text' name='title' ref={register({ required: true })} />
        <br />
        <label htmlFor='type' id='type'>
          Job type:
        </label>
        <input type='text' name='type' ref={register({ required: true })} />
        <br />
        <label htmlFor='company' id='company'>
          Company:
        </label>
        <input type='text' name='company' ref={register({ required: true })} />
        <br />
        <label htmlFor='company_url' id='company_url'>
          Company website:
        </label>
        <input
          type='text'
          name='company_url'
          ref={register({ required: true })}
        />
        <br />
        <label htmlFor='created_at' id='created_at'>
          Date created:
        </label>
        <input
          type='text'
          name='created_at'
          ref={register({ required: true })}
        />
        <br />
        <label htmlFor='location' id='location'>
          Company location:
        </label>
        <input type='text' name='location' ref={register({ required: true })} />
        <br />
        <label htmlFor='description' id='description'>
          Job description:
        </label>
        <textarea
          name='description'
          cols='100'
          rows='5'
          ref={register({ required: true })}
        ></textarea>
        <br />
        <label htmlFor='how_to_apply' id='how_to_apply'>
          How to apply:
        </label>
        <input
          type='text'
          name='how_to_apply'
          ref={register({ required: true })}
        />
        <br />
        <label htmlFor='company_logo' id='company_logo'>
          Company logo img link:
        </label>
        <input
          type='text'
          name='company_logo'
          ref={register({ required: true })}
        />
        <br />
        <button type='submit'>Post job</button>
      </form>
      <Link to={'/user/jobs'}> &#8592; Back to user homepage</Link>
    </div>
  );
}

export default CreateJob;
