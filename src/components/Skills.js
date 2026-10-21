import styled from "styled-components"
const SkillSection = styled.section`
padding: 5rem 2rem;
  background:
    radial-gradient(ellipse at 50% 100%, rgba(16, 185, 129, 0.2), transparent 55%),
    linear-gradient(180deg, #06140f 0%, #0a2419 100%);
`
function Skills(){
    return <SkillSection></SkillSection>
}
export default Skills;