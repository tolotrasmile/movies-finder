import React, { useState } from 'react';
import { navigate } from '@reach/router';
import './Header.css';

function MenuLink({ active, children, ...props }) {
  return (
    <li
      {...props}
      className={active ? 'active' : ''}
      style={{
        borderColor: active ? 'red' : 'transparent'
      }}
    >
      {children}
    </li>
  );
}

function Header() {
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  function goTo(path) {
    return () => {
      navigate(path);
      setActiveLink(path);
    };
  }

  return (
    <nav className="header">
      <div className="header__left">Movies list</div>
      <ul className="header__right">
        <MenuLink active={activeLink === '/'} onClick={goTo('/')}>
          Home
        </MenuLink>
        <MenuLink active={activeLink === '/movies'} onClick={goTo('/movies')}>
          Movies
        </MenuLink>
      </ul>
    </nav>
  );
}

export default Header;
