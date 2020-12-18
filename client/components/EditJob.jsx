import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';

//https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Express_Clothing_Logo.SVG/1200px-Express_Clothing_Logo.SVG.png
function EditJob(props) {
  const { register, handleSubmit } = useForm();
  console.log(props.viewedJob);
  const onSubmit = (data) => {
    console.log('in react', data);
    axios
      .put(`/api/edit/${props.viewedJob.id}`, data)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='container'>
      <h2 className='text-center pt-5'>Edit Job Posting</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='pl-5'
        id='edit-form'
        autoComplete='off'
      >
        <label htmlFor='title' id='title'>
          Title:
        </label>
        <br />
        <input
          type='text'
          name='title'
          ref={register({ required: true })}
          defaultValue={props.viewedJob.title}
        />

        <br />
        <label htmlFor='type' id='type'>
          Job type:
        </label>
        <br />
        <input
          type='text'
          name='type'
          ref={register({ required: true })}
          defaultValue={props.viewedJob.type}
        />

        <br />
        <label htmlFor='company' id='company'>
          Company:
        </label>
        <br />
        <input
          type='text'
          name='company'
          ref={register({ required: true })}
          defaultValue={props.viewedJob.company}
        />

        <br />
        <label htmlFor='company_url' id='company_url'>
          Company website:
        </label>
        <br />
        <input
          type='text'
          name='company_url'
          ref={register({ required: true })}
          defaultValue={props.viewedJob.company_url}
        />

        <br />
        <label htmlFor='created_at' id='created_at'>
          Date created:
        </label>
        <br />
        <input
          type='text'
          name='created_at'
          ref={register({ required: true })}
          defaultValue={props.viewedJob.created_at}
        />

        <br />
        <label htmlFor='location' id='location'>
          Company location:
        </label>
        <br />
        <input
          type='text'
          name='location'
          ref={register({ required: true })}
          defaultValue={props.viewedJob.location}
        />

        <br />
        <label htmlFor='description' id='description'>
          Job description:
        </label>
        <br />
        <textarea
          name='description'
          cols='100'
          rows='5'
          ref={register({ required: true })}
          defaultValue={props.viewedJob.description}
        ></textarea>
        <br />
        <label htmlFor='how_to_apply' id='how_to_apply'>
          How to apply:
        </label>
        <br />
        <input
          type='text'
          name='how_to_apply'
          ref={register({ required: true })}
          defaultValue={props.viewedJob.how_to_apply}
        />

        <br />
        <label htmlFor='company_logo' id='company_logo'>
          Company logo img link:
        </label>
        <br />
        <input
          type='text'
          name='company_logo'
          ref={register({ required: true })}
          defaultValue={props.viewedJob.company_logo}
        />

        <br />
        <button type='submit' className='btn btn-success mb-3'>
          Edit job
        </button>
        <br />
        <Link to={'/user/jobs'}> &#8592; Back to user homepage</Link>
      </form>
    </div>
  );
}

export default EditJob;
