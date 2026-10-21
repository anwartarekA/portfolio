import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
const Navbar = styled.nav`
  width: 55%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #e8f5ee;
  background-color: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
  border-radius: 999px;
  padding: 10px;
`;

const Logo = styled.div`
  width: 15%;
  background:linear-gradient(to right ,#10b981, #6ee7b7);
  background-clip:text;
  color:transparent;
  border-radius: 12px;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  font-family:Segoe UI
`;

const NavItem = styled.div`
  cursor: pointer;
  padding: 7px 14px;
  color: #e8f5ee;
  border-radius: 999px;
  transition: color 0.3s, background-color 0.3s;
  font-family:Segoe UI;

  &:hover {
    color: #6ee7b7;
    background-color: rgba(16, 185, 129, 0.15);
  }
`;
const divStyling = {
    'width':'100%',
    'position':'fixed',
    'top':'0',
    'display':'flex',
    'alignItems':'center',
    'justifyContent':'space-evenly',
    'fontSize':'18px',
}

const ThemeIcon = styled(FontAwesomeIcon)`
    width:10%;
    color:#ffd43b;
    font-size:25px;
    cursor:pointer;
    text-align:center;
    padding:17px;
`
function Nav(){
    return <>
    <div style={divStyling }>
        <Logo>Anwar Tarek</Logo>
    <Navbar>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Skills</NavItem>
        <NavItem>CV/Resume</NavItem>
        <NavItem>Experiences</NavItem>
        <NavItem>Contact</NavItem>
    </Navbar>
        <ThemeIcon icon={faMoon}/>
    </div>
    </>
}
export default Nav