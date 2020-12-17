import React from 'react';
import SearchForm from './SearchForm';
function Navbar(props) {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container-fluid '>
        <a href='' className='nav-bar-brand text-white'>
          JOBZ
        </a>
        <SearchForm setJobsList={props.setJobsList} />
        <button className='btn btn-warning'>I'm an employer</button>
      </div>
    </nav>
  );
}
export default Navbar;
