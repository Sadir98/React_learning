import React from 'react';
import hed from './Header.module.css';
const Header = () => {
    return (
      <header className={hed.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png' alt=""/>
      </header>
    );
  }
  
  export default Header;