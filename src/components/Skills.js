import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

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
function Skills(){
    return <SkillSection>
                <div style={headingStyle}>  
                    <StyleIcon icon={faCode}/>
                    <h1 style={h1Style}>skills</h1>
                </div>
    </SkillSection>
}
export default Skills;