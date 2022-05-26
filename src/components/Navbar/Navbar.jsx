import React from 'react';
import { NavLink } from 'react-router-dom';
import nav from './Navbar.module.css';
const Navbar = () => {
    return (
      <div className={nav.nav}>
            <div className={nav.item}><NavLink to='/profile' className={({ isActive }) => isActive ? nav.active : undefined}>Profile</NavLink></div>
            <div className={nav.item}><NavLink to='/dialogs' className={({ isActive }) => isActive ? nav.active : undefined}>Dialogs</NavLink></div>
            <div className={nav.item}><a href='#s'>News</a></div>
            <div className={nav.item}><a href='#s'>Music</a></div>
            <div className={nav.item}><a href='#s'>Settings</a></div>
      </div>
    );
  }
  
  export default Navbar;

  // History API html 5
  // preventDefault