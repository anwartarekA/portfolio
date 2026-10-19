import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faUser,faLocationDot , faMessage,faPhone , faCode, faTrophy, faChartSimple} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components"
const Image = styled.img`
    width:200px;
    height:200px;
    border-radius:50%;
    border:1px solid  #34d399
`
const aboutStyle = {
    'backgroundColor': '#0b1f16',
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
const aboutContainer = {
    'width':'930px',
    'display':'flex',
    'alignItems':'center',
    'justifyContent':'space-between',
    'backgroundColor':'red',
    'margin':'100px auto'
}
const paragraphContainer = {
    'width':'calc(930px - 350px)',
    'fontSize': '16px',
    'fontFamily': 'arial',
    'color': 'rgb(155, 184, 168)',
    'lineHeight': '30px',
}
const Anchor = styled.a``
function About (){
    return <div style={aboutStyle}>
        <div style={headingStyle}>
            <StyleIcon icon={faUser}/>
            <h1 style={h1Style}>about me</h1>
        </div>
        <div style={aboutContainer}>
        <div>
            <Image src="/imgs/anwar.jpg"/>
        </div>
        <div style={paragraphContainer}>
            <p>I graduated with an excellent grade from the Faculty of Engineering at Mansoura University, in the Computer and Control Systems Engineering department. Through ICPC, I sharpened my problem-solving and analytical skills.Today, I’m a passionate Node.js developer with strong web development skills.</p>
            <p>I build RESTful APIs and scalable applications using Node.js, NestJS, PostgreSQL, and MongoDB on the backend, and React, TypeScript, and JavaScript on the frontend.</p>
        </div>
        </div>
        <div>
            <span>
                <FontAwesomeIcon icon={faLocationDot}/>
                <span>mansoura,egypt</span>
            </span>
            <span>
                <Anchor>
                <FontAwesomeIcon icon={faMessage}/>
                <span>anwartarek719@gmail.com</span>
                </Anchor>
            </span>
            <span>
                <Anchor>
                    <FontAwesomeIcon icon={faPhone}/>
                    <span>01212275860</span>
                </Anchor>
            </span>
            <span>
                <Anchor>
                    <FontAwesomeIcon icon={faLinkedin}/>
                    <span>linkedin</span>
                </Anchor>
            </span>
            <span>
                <Anchor>
                    <FontAwesomeIcon icon={faGithub}/>
                    <span>github</span>
                </Anchor>
            </span>
            <span>
                <Anchor>
                    <FontAwesomeIcon icon={faCode}/>
                    <span>leetcode</span>
                </Anchor>
            </span>
            <span>
                <Anchor>
                    <FontAwesomeIcon icon={faTrophy}/>
                    <span>codeforce</span>
                </Anchor>
            </span>
            <span>
                <Anchor>
                    <FontAwesomeIcon icon={faChartSimple}/>
                    <span>codewars</span>
                </Anchor>
            </span>
        </div>
    </div>
}

export default About