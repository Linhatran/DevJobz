import React, { useState } from 'react';
import SearchButton from './SearchButton';
function SearchForm() {
  const [jobInput, setJobInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [checkboxInput, setCheckboxInput] = useState(true);
  return (
    <form className='d-flex my-2' id='search-form'>
      <input
        className='form-control mr-3 col-4'
        type='search'
        placeholder='Search for jobs...'
        aria-label='Search'
        id='job-field'
        onKeyUp={(e) => setJobInput(e.target.value)}
      />
      <input
        className='form-control mr-3 col-4'
        type='search'
        placeholder='Search for job location...'
        aria-label='Search'
        id='location-field'
        onKeyUp={(e) => setLocationInput(e.target.value)}
      />
      <div className='form-check mr-3 align-self-center'>
        <input
          className='form-check-input'
          type='checkbox'
          value=''
          id='checkbox'
          onChange={() =>
            checkboxInput ? setCheckboxInput(false) : setCheckboxInput(true)
          }
        />
        <label class='form-check-label text-white' for='flexCheckChecked'>
          Full-time
        </label>
      </div>
      <SearchButton
        description={jobInput}
        location={locationInput}
        full_time={!checkboxInput}
      />
    </form>
  );
}
export default SearchForm;
