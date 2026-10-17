import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
const Navbar = styled.nav`
width:75%;
display:flex;
justify-content:space-around;
align-items:center;
color:white;
background-color:red;
cursor:pointer;
padding:10px;
`
const Logo = styled.div`
width:15%;
color:white;
background-color:blue;
cursor:pointer;
text-align:center;
padding:10px;
`
const divStyling = {
    'display':'flex',
    'align-items':'center',
    'font-size':'18px'
}
const Home = styled.div``
const Projects = styled.div``
const Skills = styled.div``
const Resume = styled.div``
const Experiences = styled.div``
const Contact = styled.div``
const ThemeIcon = styled(FontAwesomeIcon)`
    width:10%;
    color:#ffd43b;
    font-size:25px;
    cursor:pointer;
    text-align:center
`
function Nav(){
    return <div style={divStyling}>
        <Logo>Logo</Logo>
    <Navbar>
        <Home>Home</Home>
        <Projects>Projects</Projects>
        <Skills>Skills</Skills>
        <Resume>CV/Resume</Resume>
        <Experiences>Experiences</Experiences>
        <Contact>Contact</Contact>
    </Navbar>
        <ThemeIcon icon={faMoon}/>
    </div>
}
export default Nav