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
                <SidebarLink to="services"onClick={toggle}>
                    services
                </SidebarLink>
                <SidebarLink to="signup"onClick={toggle}>
                    sign up
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>

        { loginToken ? <SideBtnWrap><div className="noLink text-color-white" onClick={logout}>Logout</div> </SideBtnWrap> :
           <SideBtnWrap><a style={{fontSize: "24px"}} className="noLink text-color-white" href="login">Sign in</a></SideBtnWrap> }
    </SidebarContainer>
  );

}

export default Sidebar