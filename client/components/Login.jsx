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
    <div className='container d-flex justify-content-center '>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id='login-form'
        className='bg-dark col-md-8 d-flex flex-column align-items-center'
      >
        <input
          name='username'
          placeholder='Username'
          ref={register({ required: true })}
          type='text'
          className='col-6 my-4'
        />

        <input
          name='password'
          ref={register({ required: true })}
          type='password'
          placeholder='Password'
          className='col-6 mb-4'
        />
        <Link to={'/user/jobs'}>
          <button type='submit' className=' mb-4'>
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}
export default Login;
