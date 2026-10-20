import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faUser,faLocationDot , faMessage,faPhone , faCode, faTrophy, faChartSimple} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import styled, { keyframes } from "styled-components"
const Image = styled.img`
    width:200px;
    height:200px;
    border-radius:50%;
    border:1px solid  #34d399
    `
const animatedImage = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-12px); }
`;
const ImageContainter = styled.div`
    animation-name:${animatedImage};
    animation-duration:3s;
    animation-iteration-count:infinite;
    animation-timimg-function:ease-in-out;
    img{
    transition: transform 0.3s ease;
    }
    &:hover img {
    transform : scale(1.1);
    cursor:pointer
    }
`
const aboutStyle = {
    'backgroundColor': '#0b1f16',
    'padding':'40px 0'
}
const headingStyle = {
    'display':'flex',
    'justifyContent':'space-between',
    'width':'230px',
    'height':'70px',
    'textTransform': 'capitaliz',
    'fontFamily': 'arial',
    'transform':'translate(850px, 30px)',
    'borderBottom':'solid 5px rgb(136 175 157)',
    'padding':'10px 0'
}
const h1Style = {
    'color':'white',
    'fontSize':'40px',
    'textTransform':'capitalize'
}
const StyleIcon = styled(FontAwesomeIcon)`
    color:#34d399;
    font-size:40px;
    margin-top:25px;
    margin-left:-9px
`
const Icon1 = styled(FontAwesomeIcon)`
    color:#34d399;
`
const Icon2 = styled(FontAwesomeIcon)`
    color:#34d399;
`
const Icon3 = styled(FontAwesomeIcon)`
    color:#34d399;
`
const Icon4 = styled(FontAwesomeIcon)`
    color:#34d399;
`
const Icon5 = styled(FontAwesomeIcon)`
    color:#34d399;
`
const Icon6 = styled(FontAwesomeIcon)`
    color:#34d399;
`
const Icon7 = styled(FontAwesomeIcon)`
    color:#34d399;
`
const aboutContainer = {
    'width':'930px',
    'display':'flex',
    'alignItems':'center',
    'justifyContent':'space-between',
    'marginTop':'100px',
    'marginLeft':'auto',
    'marginRight':'auto'
}
const paragraphContainer = {
    'width':'calc(930px - 350px)',
    'fontSize': '16px',
    'fontFamily': 'Segoe UI',
    'color': 'rgb(155, 184, 168)',
    'lineHeight': '30px',
}
const linksStyle = {
    'width':'580px',
    'display':'flex',
    'gap':'20px',
    'flexWrap':'wrap',
    'marginTop':'20px',
    'marginLeft':'835px'
}
const Anchor = styled.a`
    color:'rgb(155, 184, 168)';
    text-decoration:none
`
const spanStyle = {
    'color':'rgb(155, 184, 168)'
}
const Span = styled.span`
color:rgb(110, 231, 183);
background-color: rgba(16, 185, 129, 0.15);
padding:10px;
cursor:pointer;
transition:0.3s all;
&:hover{
background-color: rgba(56, 59, 58, 0.15);
}
`
function About (){
    return <div style={aboutStyle}>
        <div style={headingStyle}>
            <StyleIcon icon={faUser}/>
            <h1 style={h1Style}>about me</h1>
        </div>
        <div style={aboutContainer}>
        <ImageContainter>
            <Image src="/imgs/anwar.jpg"/>
        </ImageContainter>
        <div style={paragraphContainer}>
            <p>I graduated with an excellent grade from the Faculty of Engineering at Mansoura University, in the Computer and Control Systems Engineering department. Through ICPC, I sharpened my problem-solving and analytical skills.Today, I’m a passionate Node.js developer with strong web development skills.</p>
            <p>I build RESTful APIs and scalable applications using Node.js, NestJS, PostgreSQL, and MongoDB on the backend, and React, TypeScript, and JavaScript on the frontend.</p>
        </div>
        </div>
        <div style={linksStyle}>
            <Span>
                <FontAwesomeIcon icon={faLocationDot}/>
                <span style={spanStyle}>mansoura,egypt</span>
            </Span>
            <Span>
                <Anchor href="mailto:anwartarek719@gmail.com">
                <Icon1 icon={faMessage}/>
                <span style={spanStyle}>anwartarek719@gmail.com</span>
                </Anchor>
            </Span>
            <Span>
                <Anchor href="tel:01212275860">
                    <Icon2 icon={faPhone}/>
                    <span style={spanStyle}>01212275860</span>
                </Anchor>
            </Span>
            <Span>
                <Anchor href="https://linkedin.com/anwar-tarek-699b4824a">
                    <Icon3 icon={faLinkedin}/>
                    <span style={spanStyle}>linkedin</span>
                </Anchor>
            </Span>
            <Span>
                <Anchor href="https://github.com/anwartarekA">
                    <Icon4 icon={faGithub}/>
                    <span style={spanStyle}>github</span>
                </Anchor>
            </Span>
            <Span>
                <Anchor href="https://leetcode.com/u/AnwarTarek/">
                    <Icon5 icon={faCode}/>
                    <span style={spanStyle}>leetcode</span>
                </Anchor>
            </Span>
            <Span>
                <Anchor href="https://codeforces.com/profile/Anwar_Tarek">
                    <Icon6 icon={faTrophy}/>
                    <span style={spanStyle}>codeforce</span>
                </Anchor>
            </Span>
            <Span>
                <Anchor href="https://www.codewars.com/users/Anwar%20Tarek">
                    <Icon7 icon={faChartSimple}/>
                    <span style={spanStyle}>codewars</span>
                </Anchor>
            </Span>
        </div>
    </div>
}

export default About