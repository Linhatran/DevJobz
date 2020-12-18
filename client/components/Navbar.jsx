import React from 'react';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';
function Navbar(props) {
  return (
    <nav className='navbar navbar-dark' style={{ backgroundColor: '#1D3557' }}>
      <div className='container-fluid '>
        <Link
          to={'/'}
          className='nav-bar-brand text-decoration-none'
          style={{ color: '#E63946' }}
        >
          <em>
            <h3>DevJobz</h3>
          </em>
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
