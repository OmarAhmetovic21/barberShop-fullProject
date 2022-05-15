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
                <SidebarLink to="about"onClick={toggle}>
                    about
                </SidebarLink>
                <SidebarLink to="team"onClick={toggle}>
                    team
                </SidebarLink>
                <SideBtnWrap style={{paddingRight: "20px", paddingLeft: "20px"}}><a style={{fontSize: "24px"}} className="noLink text-color-white" href="services">services</a></SideBtnWrap>
                
                { loginToken ? <></>: <SideBtnWrap><a style={{fontSize: "24px"}} className="noLink text-color-white" href="SignUp">sign up</a></SideBtnWrap> }
            </SidebarMenu>
        </SidebarWrapper>

        { loginToken ? <SideBtnWrap><div style={{fontSize: "24px"}} className="noLink text-color-white" onClick={logout}>Logout</div> </SideBtnWrap> :
           <SideBtnWrap><a style={{fontSize: "24px"}} className="noLink text-color-white" href="login">Sign in</a></SideBtnWrap> }
    </SidebarContainer>
  );

}

export default Sidebar