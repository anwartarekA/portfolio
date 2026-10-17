import styled from "styled-components"

const Navbar = styled.nav`
padding:10px
display:flex;
justify-content:space-around;
align-items:center;
`
const Logo = styled.div``
const Home = styled.div``
const Projects = styled.div``
const Skills = styled.div``
const Resume = styled.div``
const Experiences = styled.div``
const Contact = styled.div``
function Nav(){
    return <Navbar>
        <Logo>Logo</Logo>
        <Home>Home</Home>
        <Projects>Projects</Projects>
        <Skills>Skills</Skills>
        <Resume>CV/Resume</Resume>
        <Experiences>Experiences</Experiences>
        <Contact>Contact</Contact>
    </Navbar>
}
export default Nav