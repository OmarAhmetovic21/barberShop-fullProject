import React from 'react'
import { SidebarContainer, 
         Icon,
         CloseIcon,
         SidebarWrapper,
         SidebarMenu,
         SidebarLink,
         SideBtnWrap,
         SidebarRoute } from 
'./SidebarElements';

const logout = () => {
    localStorage.removeItem('loginToken');
    window.location = '/'
  }

const loginToken = localStorage.getItem("loginToken")

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>

          
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>

                <SideBtnWrap style={{paddingRight: "20px", paddingLeft: "20px", marginTop: '50px'}}><a style={{fontSize: "24px"}} className="noLink text-color-white" href="about">About</a></SideBtnWrap>

                <SideBtnWrap style={{paddingRight: "20px", paddingLeft: "20px",marginTop: '50px'}}><a style={{fontSize: "24px"}} className="noLink text-color-white" href="team">team</a></SideBtnWrap>

                <SideBtnWrap style={{paddingRight: "20px", paddingLeft: "20px", marginTop: '50px'}}><a style={{fontSize: "24px"}} className="noLink text-color-white" href="services">services</a></SideBtnWrap>
                
                { loginToken ? <SideBtnWrap style={{paddingRight: "20px", paddingLeft: "20px", marginTop: '50px'}}><a style={{fontSize: "24px"}} className="noLink text-color-white" href="listAppointments">appointments</a></SideBtnWrap>: 
                <SideBtnWrap style={{paddingRight: "20px", paddingLeft: "20px", marginTop: '50px'}}><a style={{fontSize: "24px"}} className="noLink text-color-white" href="SignUp">sign up</a></SideBtnWrap> }
            </SidebarMenu>

        </SidebarWrapper>

        { loginToken ? <SideBtnWrap style={{paddingRight: "20px", paddingLeft: "20px", marginBottom: '50px'}}><div style={{fontSize: "24px"}} className="noLink text-color-white" onClick={logout}>Logout</div> </SideBtnWrap> :
           <SideBtnWrap style={{paddingRight: "20px", paddingLeft: "20px", marginBottom: '50px'}}><a style={{fontSize: "24px"}} className="noLink text-color-white" href="login">Login</a></SideBtnWrap> }
    </SidebarContainer>
  );

}

export default Sidebar