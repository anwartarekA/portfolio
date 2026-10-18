import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPerson,faLocationDot , faMessage,faPhone , faCode, faTrophy, faChartSimple} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components"
const Image = styled.img`
    width:100px;
    height:100px;
    border-radius:50%;
    border:1px solid  #34d399

`
const Anchor = styled.a``
function About (){
    return <>
        <div>
            <FontAwesomeIcon icon={faPerson}/>
            <h1>about me</h1>
        </div>
        <div>
            <Image src="./../../public/imgs/anwar.jpg"/>
            <p>I graduated with an excellent grade from the Faculty of Engineering at Mansoura University, in the Computer and Control Systems Engineering department. Through ICPC, I sharpened my problem-solving and analytical skills.Today, I’m a passionate Node.js developer with strong web development skills. I build RESTful APIs and scalable applications using Node.js, NestJS, PostgreSQL, and MongoDB on the backend, and React, TypeScript, and JavaScript on the frontend.</p>
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
    </>
}

export default About