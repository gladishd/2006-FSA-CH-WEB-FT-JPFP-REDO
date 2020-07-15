import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Homepage</Link>
      <Link to="/campuses">Campuses</Link>
      <Link to="/students">Campuses</Link>
    </nav>
  )
}

export default Navbar;
