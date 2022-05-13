import React from 'react';
import {FaBars} from 'react-icons/fa'
import{
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
     NavLinks,
     NavBtn,
     NavBtnLink
    } from './NavbarElements';
import '../../App.css';


 const Navbar = ({toggle}) => {
  return (
  <>
  <Nav>
      <NavbarContainer>
          <NavLogo to='/'>cuts</NavLogo>
          <MobileIcon onClick={toggle}>
              <FaBars />
          </MobileIcon>
          <NavMenu>
              <NavItem>
                <NavLinks to="about">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="team">team</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services">services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="signup">sign up</NavLinks>
              </NavItem>
              <NavBtn>
              <a className="noLink text-color-white" href="appointment">Create Appointment</a>
              
              </NavBtn>
              
          </NavMenu>
  <NavBtn>
    {/*<NavBtnLink to='/signin'>sign in</NavBtnLink> */}
    <a className="noLink text-color-white" href="login">Login</a>
  </NavBtn>
      </NavbarContainer>
  </Nav>
  </>
  );
};

export default Navbar;
















//npm install
//npm add styled-components or npm install styled-components
//npm install react-router-dom
//npm install react-icons --save
//npm install react-scroll