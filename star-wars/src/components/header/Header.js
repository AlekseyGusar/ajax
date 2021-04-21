import React from 'react';
import './Header.css';

function Header ({onHeaderClick }) {
  function handleClick(tabName) {
    onHeaderClick(tabName); 
  }
  return (
    <div>
      <div className="header">
        <div onClick={() => handleClick('People')}>People</div>
        <div onClick={() => handleClick('Planets')}>Planets</div>
        <div onClick={() => handleClick('Starhips')}>Starhips</div>
      </div>
    </div>
  )
}
export default Header;

