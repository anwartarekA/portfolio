function Home(){
    return <div>
        <header>
            <h1>Hi, i'm anwar tarek</h1>
            <h2>software engineer , (mern | pern) stack</h2>
        </header>
        <p>i'm graduated from faculty of engineering mansoura university from computer and control system department , have experience of building restful api and scalable websites with modern technique also iam pathoined for solving problems solving at leetcode, codeforce and codewars</p>
        <Button content={'my cv'}/>
        <Button content={'contact me'}/>
    </div>
}

function Button({content}){
    return <button>{content}</button>
}
export default Home