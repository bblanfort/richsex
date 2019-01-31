import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <NavbarUnAuth />
    </nav>
  );
};

const NavbarUnAuth = () => (
  <ul className="navbar">
    <li>
      <NavLink to="/" exact>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="Test">Test</NavLink>
    </li>  
    <li>
      <NavLink to="/search">Search</NavLink>
    </li>
    <li>
      <NavLink to="/signin">Signin</NavLink>
    </li>
    <li>
      <NavLink to="/signup">Signup</NavLink>
    </li>
    <li>
      <NavLink to="/test">Test</NavLink>
    </li>
  </ul>
);

export default Navbar;

