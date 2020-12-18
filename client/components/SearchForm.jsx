import React, { useState } from 'react';
import axios from 'axios';
function SearchForm(props) {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [full_time, setFull_Time] = useState(true);
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post('/api/jobs', {
        description,
        location,
        full_time,
      })
      .then((result) => props.setJobsList(result.data))
      .catch((err) => console.log(err));
  }

  return (
    <form
      className='d-flex my-2'
      id='search-form'
      onSubmit={handleSubmit}
      autoComplete='off'
    >
      <input
        className='form-control mr-3 col-4'
        type='search'
        placeholder='Search for jobs...'
        aria-label='Search'
        id='job-field'
        onKeyUp={(e) => setDescription(e.target.value)}
      />
      <input
        className='form-control mr-3 col-4'
        type='search'
        placeholder='Search for job location...'
        aria-label='Search'
        id='location-field'
        onKeyUp={(e) => setLocation(e.target.value)}
      />
      <div className='form-check mr-3 align-self-center'>
        <input
          className='form-check-input'
          type='checkbox'
          value=''
          id='checkbox'
          onChange={() =>
            full_time ? setFull_Time(false) : setFull_Time(true)
          }
        />
        <label
          className='form-check-label text-white'
          htmlFor='flexCheckChecked'
        >
          Full-time
        </label>
      </div>
      <button className='btn btn-info' type='submit'>
        Search
      </button>
    </form>
  );
}
export default SearchForm;
