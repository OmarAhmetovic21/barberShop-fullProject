import { getLoadingButtonUtilityClass } from '@mui/lab';
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


    const logout = () => {
      localStorage.removeItem('loginToken');
      window.location = '/'
    }

// GET TOKEN FROM LOCALSTORAGE

const loginToken = localStorage.getItem("loginToken")


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
        
              <NavBtn style={{marginRight: "10px", marginLeft: "10px"}}><a className="noLink text-color-white" href="about">About</a></NavBtn>
              
              <NavItem>
                <NavLinks to="team">team</NavLinks>
              </NavItem>
              

                <NavBtn style={{marginRight: "10px", marginLeft: "10px"}}><a className="noLink text-color-white" href="services">services</a></NavBtn>
              
              { loginToken ? <></>: <NavBtn style={{marginRight: "10px", marginLeft: "10px"}}><a className="noLink text-color-white" href="SignUp">sign up</a></NavBtn> }
              
                          
          </NavMenu>
          
          { loginToken ? <NavBtn style={{paddingRight: "10px", paddingLeft: "10px"}}><div className="noLink text-color-white" onClick={logout}>Logout</div> </NavBtn> :
           <NavBtn style={{paddingRight: "10px", paddingLeft: "10px"}}><a className="noLink text-color-white" href="login">Sign in</a></NavBtn> }

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