import React from "react"
import { 
    HeaderDiv, 
    StyledNavLink, 
    NavDiv, 
    HeaderH2, 
    ContactDiv, 
    ContactImg, 
    NameTitleDiv,
    NavAndContact
} from './HeaderStyle'


const Header = () =>
{
    return (
        <HeaderDiv>
            <NameTitleDiv>
                <HeaderH2>Eli Sacks</HeaderH2>
                <HeaderH2>Web Developer</HeaderH2>
            </NameTitleDiv>
            <NavDiv>
                <StyledNavLink exact to="/" activeClassName="active-nav">About Me</StyledNavLink>
                <StyledNavLink to="/skills" activeClassName="active-nav">Skills</StyledNavLink>
                <StyledNavLink to="/projects" activeClassName="active-nav">Projects</StyledNavLink>
                {/* <StyledNavLink to="/resume" activeClassName="active-nav">Resume</StyledNavLink> */}
            </NavDiv>
            <ContactDiv>
                <a href="https://www.linkedin.com/in/eli-sacks"><ContactImg src='assets/images/LI-In-Bug.png'/></a>
                <a href="https://github.com/Bastlifa"><ContactImg src='assets/images/Github-Mark-Light-120px-plus.png'/></a>
                <a href="mailto:elisacksdev@gmail.com"><ContactImg src='assets/images/Mail.png' /></a>
            </ContactDiv>
        </HeaderDiv>
    )
}

export default Header