import styled from "styled-components"
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
    border:solid 3px #ffffff;
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
`
const Frontend = styled(Box)`
position:relative;
    ::after{
    content:'';
    position:absolute;
    width:2px;
    height:100%;
    background-color:#ffffff;
    left:-22px;
    top:0%
    }
`;
const Backend = styled(Box)`

`;
function Skills(){
    return <SkillSection>
                <div style={headingStyle}>  
                    <StyleIcon icon={faCode}/>
                    <h1 style={h1Style}>skills</h1>
                </div>
                <Skillcontainer>
                    <Backend>
                                {backendSkills.map(skill=><BackendSkills skill={skill} key={skill}/>)}
                    </Backend>
                    <Frontend>
                                {frontendSkills.map(skill=><FrontendSkills skill={skill} key={skill}/>)}
                    </Frontend>
                </Skillcontainer>
    </SkillSection>
}
function FrontendSkills({skill}){
    return <span>{skill}</span>
}
function BackendSkills({skill}){
    return <span>{skill}</span>
}
export default Skills;