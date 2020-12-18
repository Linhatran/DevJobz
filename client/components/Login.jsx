import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Login(props) {
  const { register, handleSubmit } = useForm();
  // const { endPoint, setEndPoint } = useState('/login');
  const onSubmit = (data) => {
    axios
      .post('/api/login', data)
      .then((result) => {
        console.log(result.data);
        // return result.data ? setEndPoint('/user') : setEndPoint('/login');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className='container d-flex justify-content-center'
      style={{ backgroundColor: '#eef5fa' }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        id='login-form'
        className=' col-md-6 d-flex flex-column align-items-center'
        style={{ backgroundColor: '#386480', borderRadius: '15px' }}
      >
        <h3 className='text-white mt-5'>
          <em>Welcome back!</em>
        </h3>
        <input
          name='username'
          placeholder='Username'
          ref={register({ required: true })}
          type='text'
          className='form-control col-7'
          style={{ marginTop: '40px', marginBottom: '40px' }}
        />

        <input
          name='password'
          ref={register({ required: true })}
          type='password'
          placeholder='Password'
          className='form-control col-7'
          style={{ marginBottom: '40px' }}
        />
        <Link to={'/user/jobs'}>
          <button
            type='submit'
            className='btn btn-warning mb-4'
            style={{ marginBottom: '80px' }}
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}
export default Login;
