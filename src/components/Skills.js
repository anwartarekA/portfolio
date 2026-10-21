import styled  , {keyframes} from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const frontendSkills = [
    'html5',
    'css3',
    'tailwind css',
    'sass',
    'bootstrap',
    'jquery',
    'react',
    'vite',
    'create-react-app',
    'React Context | Redux',
    'next',
    'javascript',
    'typescript',
    'Version Control: Git, GitHub',
    'UI/UX: Figma'
];
const backendSkills = [
    'nodejs',
    'nest',
    'express',
    'mongoose',
    'mongodb',
    'postgresql',
    'mysql',
    'typeorm',
    'prisma',
    'sqlite3',
    'docker',
    'socket.io',
    'validation(zod , yup, joi , express-validator)',
    'jwt',
    'Platforms: VPS(hostinger), AWS, Heroku, Vercel | React Context, Redux',
    'VPS(hostinger), AWS, Heroku, Vercel'
]
const SkillSection = styled.section`
  padding: 5rem 2rem;
  background-color: #05150f;
  background-image:
    linear-gradient(90deg, rgba(16, 185, 129, 0.08) 1px, transparent 1px),
    linear-gradient(0deg, rgba(16, 185, 129, 0.08) 1px, transparent 1px),
    radial-gradient(circle, rgba(52, 211, 153, 0.35) 2px, transparent 3px);
  background-size: 80px 80px, 80px 80px, 80px 80px;
  background-position: 0 0, 0 0, 40px 40px;
`
const headingStyle = {
    'display':'flex',
    'justifyContent':'space-between',
    'width':'150px',
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
const Skillcontainer = styled.div`
    width:calc(55% + 55.2px);
    margin:3rem calc(50% - 27.5%);
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding: 20px;
    gap:40px;
    box-sizing:border-box;
`
const Box = styled.div`
    flex: 1;
    min-width: 0px;
    box-sizing:border-box;
    background-color:rgba(255, 255, 255, 0.06);
    border:2px solid #ffffff;
    border-radius: 10px;
    padding: 20px;
    border: 2px solid rgba(16, 185, 129, 0.25);
    box-shadow: 0px 0px 10px rgba(155, 184, 168, 0.5);
    transition: all 0.3s ease-in-out;
    &:hover {
    scale: 1 1.1;
    cursor: pointer;
    }
`
const animationLine = keyframes`
    0% {transform:translateX(0px);}
    25% {transform:translateX(5px);}
    50% {transform:translateX(0px);}
    75% {transform:translateX(-5px);}
    100% {transform:translateX(0px);}
`
const Frontend = styled(Box)`
    position:relative;
    display:flex;
    flex-direction:row;
    gap:10px;
    flex-wrap:wrap;
    ::after{
        content:'';
        position:absolute;
        width:1px;
        height:100%;
        background-color:rgb(80 114 99);
        left:-22px;
        top:0;
        animation : ${animationLine} 3s infinite ease-in-out;
    }
`;
const Backend = styled(Box)`
    display:flex;
    flex-wrap:wrap;
    gap:10px;
`;
const Spanstyling = styled.span`
    background-color:rgba(16, 185, 129, 0.15);
    color:#6ee7b7;
    padding:5px 10px;
    border-radius:5px;
    text-transform:capitalize;
    font-family:Segoe UI;
`
const BackendSpanStyle = styled(Spanstyling)``
const FrontendSpanStyle = styled(Spanstyling)``
const Paragraph = styled.p`
    text-align:center;
    font-size:1.5rem;
    color:rgba(155, 184, 168, 0.5);
    background-color:rgba(16, 185, 129, 0.15);
    padding:5px 10px;
    border-radius:5px;
    text-transform:capitalize;
    font-family:Segoe UI;
    transition: all 0.3s ease-in-out;
    border: 2px solid rgba(16, 185, 129, 0.25);
    box-shadow: 0px 0px 10px rgba(155, 184, 168, 0.5);
    &:hover {
    scale:1 1.1;
    cursor: pointer;
    }
`
const FrontendParagraph = styled(Paragraph)``
const BackendParagraph = styled(Paragraph)``;
function Skills(){
    return <SkillSection>
                <div style={headingStyle}>  
                    <StyleIcon icon={faCode}/>
                    <h1 style={h1Style}>skills</h1>
                </div>
                <Skillcontainer>
                    <div>
                            <BackendParagraph>backend</BackendParagraph>
                            <Backend>
                                        {backendSkills.map(skill=><BackendSkills skill={skill} key={skill}/>)}
                            </Backend>
                    </div>
                    <div>
                            <FrontendParagraph>frontend</FrontendParagraph>
                            <Frontend>
                                        {frontendSkills.map(skill=><FrontendSkills skill={skill} key={skill}/>)}
                            </Frontend>
                    </div>
                </Skillcontainer>
    </SkillSection>
}
function FrontendSkills({skill}){
    return <FrontendSpanStyle>{skill}</FrontendSpanStyle>
}
function BackendSkills({skill}){
    return <BackendSpanStyle>{skill}</BackendSpanStyle>
}
export default Skills;