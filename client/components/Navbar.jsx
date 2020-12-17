import React from 'react';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';
function Navbar(props) {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container-fluid '>
        <Link
          to={'/'}
          className='nav-bar-brand text-white text-decoration-none'
        >
          JOBZ
        </Link>
        <SearchForm setJobsList={props.setJobsList} />
        <Link to={`/login`}>
          <button className='btn btn-warning'>I'm an employer</button>
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
