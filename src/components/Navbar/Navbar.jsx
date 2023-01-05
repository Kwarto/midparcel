import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, NavLogo, NavItems, NavBtn } from './NavbarElement';
import logoImg from '../../img/transit.png'
const Navbar = () => {
  return (
    <>
      <NavContainer>
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
      </NavContainer>
    </>
  );
};

export default Navbar;
