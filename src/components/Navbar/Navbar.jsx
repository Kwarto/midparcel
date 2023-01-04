import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, NavLogo, NavItems, NavBtn } from './NavbarElement';
const Navbar = () => {
  return (
    <>
      <NavContainer>
        <NavLogo>
          <h1>LOGO</h1>
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
      </NavContainer>
    </>
  );
};

export default Navbar;
