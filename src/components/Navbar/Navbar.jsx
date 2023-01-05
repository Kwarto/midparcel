import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, NavLogo, NavItems, NavBtn, MenuBar, Burger } from './NavbarElement';
import logoImg from '../../img/transit.png'
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <NavContainer className={isMobile? 'res-nav' : 'nav'}>
        <NavLogo>
          <h1>Mid</h1>
          <span>
            <img src={logoImg} alt="logo" />
          </span>
        </NavLogo>
        <NavItems>
          <Link to={'/'}>
            <p>Overview</p>
          </Link>
          <Link to={'/'}>
            <p>Parcels</p>
          </Link>
          <Link to={'/'}>
            <p>Delivery</p>
          </Link>
          <Link to={'/'}>
            <p>Products</p>
          </Link>
        </NavItems>
        <NavBtn>
          <Link to={'/'}>
            <p>Download App</p>
          </Link>
        </NavBtn>
        <MenuBar onClick={() => setIsMobile(true)}>
          <Burger />
          <Burger />
          <Burger />
        </MenuBar>
      </NavContainer>
    </>
  );
};

export default Navbar;
