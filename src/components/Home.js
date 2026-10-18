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
    'textTransform':'capitalize',
    'fontFamily':'arial'
}
const firstHeadingSpan = {
    'fontSize':'42px',
    'color':'transparent',
    'background':'linear-gradient(to right , #10b981, #6ee7b7)',
    'backgroundClip':'text',
    'textTransform':'capitalize',
    'fontFamily':'arial'
}
const secondHeading = {
    'fontSize':'30px',
    'color':'#ffffff',
    'textTransform':'capitalize',
    'fontFamily':'arial'
}
const paragraph = {
    'fontSize':'16px',
    'fontFamily':'arial',
    'color': '#9bb8a8',
    'lineHeight':'30px'
}
const StyledButton = styled.button`
    width:150px;
    border:1px solid rgb(232, 245, 238);
    padding:10px;
    font-size:20px;
    margin-left:20px;
    cursor:pointer;
    border-radius:15px;
    background-color:transparent;
    color:rgb(232 245 238);
    margin-top:15px;

    &:hover {
    color: rgb(110, 231, 183);
    background-color: rgba(16, 185, 129, 0.15);
    border:none
    }
`
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
    return <StyledButton>{content}</StyledButton>
}
export default Home