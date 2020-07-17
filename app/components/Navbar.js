import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/" className="navbarLink">Homepage</Link>
      <Link to="/campuses" className="navbarLink">Campuses</Link>
      <Link to="/students" className="navbarLink">Students</Link>
      <Link to="/newCampus" className="navbarLink">Add a Campus</Link>
      <Link to="/newStudent" className="navbarLink">Add a Student</Link>
    </div>
  )
}

export default Navbar;
