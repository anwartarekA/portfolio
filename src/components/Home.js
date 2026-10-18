import styled from "styled-components"
const HomeSection = styled.div`
    width:600px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50% , -50%);
    text-align:center
`
const firstHeading = {
    'fontSize':'42px',
    'color':'#ffffff',
    'text-transform':'capitalize',
    'font-family':'arial'
}
const firstHeadingSpan = {
    'fontSize':'42px',
    'color':'transparent',
    'background':'linear-gradient(to right , #10b981, #6ee7b7)',
    'background-clip':'text',
    'text-transform':'capitalize',
    'font-family':'arial'
}
const secondHeading = {
    'fontSize':'30px',
    'color':'#ffffff',
    'text-transform':'capitalize',
    'font-family':'arial'
}
const paragraph = {
    'fontSize':'16px',
    'font-family':'arial',
    'color': '#9bb8a8',
    'lineHeight':'30px'
}
function Home(){
    return <HomeSection>
        <header>
            <h1 style={firstHeading}>Hi, <span style={firstHeadingSpan}>i'm anwar tarek</span></h1>
            <h2 style={secondHeading}>software engineer , (mern | pern) stack</h2>
        </header>
        <p style={paragraph}>i'm graduated from faculty of engineering mansoura university from computer and control system department , have experience of building restful api and scalable websites with modern technique also iam pathoined for solving problems solving at leetcode, codeforce and codewars</p>
        <Button content={'my cv'}/>
        <Button content={'contact me'}/>
    </HomeSection>
}

function Button({content}){
    return <button>{content}</button>
}
export default Home