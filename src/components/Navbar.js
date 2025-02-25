import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: '#333', padding: '1rem', textAlign: 'center' }}>
      <Link to="/" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>
        Home
      </Link>
      <Link to="/courses" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>
        Courses
      </Link>
      <Link to="/add-course" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>
        Add Course
      </Link>
    </nav>
  );
};

export default Navbar;
