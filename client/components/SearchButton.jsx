import React from 'react';
function SearchButton(props) {
  return (
    <button
      className='btn btn-outline-info'
      type='button '
      onClick={(e) => {
        e.preventDefault();
        console.log(props);
      }}
    >
      Search
    </button>
  );
}
export default SearchButton;
