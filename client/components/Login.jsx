import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .post('/api/login', data)
      .then((result) => {
        result.data
          ? console.log('Authenticated')
          : console.log('User not found');
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name='username'
        placeholder='Username'
        ref={register({ required: true })}
      />

      <input
        name='password'
        ref={register({ required: true })}
        placeholder='Password'
      />

      <input type='submit' />
    </form>
  );
}
export default Login;
