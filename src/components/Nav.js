import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
const Navbar = styled.nav`
width:50%;
display:flex;
justify-content:space-around;
align-items:center;
color:white;
cursor:pointer;
padding:10px;
margin:auto;
`
const Logo = styled.div`
width:20%;
color:white;
cursor:pointer;
text-align:center;
padding:17px;
`
const divStyling = {
    'display':'flex',
    'align-items':'center',
    'justify-content':'space-evenly',
    'font-size':'18px',
}
const Home = styled.div`
padding:7px 12px;
transition:.3s all;
&:hover {
    background-color:rgb(146 220 94);
    color:blue;
    border-radius:10px;
}
`
const Projects = styled.div`
padding:7px 12px;
transition:.3s all;
&:hover {
    background-color:rgb(146 220 94);
    color:blue;
    border-radius:10px;
}`
const Skills = styled.div`
padding:7px 12px;
transition:.3s all;
&:hover {
    background-color:rgb(146 220 94);
    color:blue;
    border-radius:10px;
}`
const Resume = styled.div`
padding:7px 12px;
transition:.3s all;
&:hover {
    background-color:rgb(146 220 94);
    color:blue;
    border-radius:10px;
}`
const Experiences = styled.div`
padding:7px 12px;
transition:.3s all;
&:hover {
    background-color:rgb(146 220 94);
    color:blue;
    border-radius:10px;
}`
const Contact = styled.div`
padding:7px 12px;
transition:.3s all;
&:hover {
    background-color:rgb(146 220 94);
    color:blue;
    border-radius:10px;
}`
const ThemeIcon = styled(FontAwesomeIcon)`
    width:20%;
    color:#ffd43b;
    font-size:25px;
    cursor:pointer;
    text-align:center;
    padding:17px
`
function Nav(){
    return <div style={divStyling}>
        <Logo>Anwar Tarek</Logo>
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