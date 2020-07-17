import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/" className="singleLink">Homepage</Link>
      <Link to="/campuses" className="singleLink">Campuses</Link>
      <Link to="/students" className="singleLink">Students</Link>
      <Link to="/newCampus" className="singleLink">Add a Campus</Link>
      <Link to="/newStudent" className="singleLink">Add a Student</Link>
    </div>
  )
}

export default Navbar;
