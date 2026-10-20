import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
const projects = [
    {
        title:'ERP-system',
        description:'Developed a comprehensive ERP backend system to manage products, stock,inventory, users, sales representatives, purchase orders, sales orders, and stocktransfers within a centralized platform. The system ensures accurate stock tracking,streamlined purchasing and sales workflows, controlled inventory movement, andclear role-based access for users and representatives. It helps businesses reduceoperational errors, improve data consistency, and gain better visibility over dailyoperations and decision-making. Built using Node.js, Express.js, MongoDB, withJWT-based authentication, role-based authorization, and a scalable, maintainablebackend architecture.',
        link:'https://github.com/anwartarekA/ERP'
    },
    // {
    //     title:'E-commerce',
    //     description:"This is the backend API for managing an online store, built using Node.js and Express.js supports functionalities such as managing orders, order items,products, users, authentication, and role-based authorization.Includes powerfulfiltering, pagination, and data retrieval features to efficiently manage largedatasets.Built with MongoDB for the database, JWT for secure authentication, anddesigned with scalability and maintainability in mind.",
    //     link:"https://github.com/anwartarekA/e-shop"
    // },
    // {
    //     title:'Estethmarat_API',
    //     description:'software tools: Node.js, Express, MongoDB, REST API, Socket.io, Docker, Vercel, gitCreated the Estethmarat website as my graduation project, working as a backenddeveloper. Built a platform to connect investors with companies, startups, andcharitable organizations. Developed RESTful APIs using Node.js, Express, andMongoDB for investment tracking and donation management.',
    //     link:"https://github.com/Omar-Fetooh/Estethmarat"
    // },
    // {
    //     title:'Natour_API',
    //     description:' software tools: Node.js, Express, Mongoose, MongoDB, Stripe, Vercel, Authentication, nodemailer, Git This api for booking tours by users and also can implement more than 23 routes contains three collection tours, users, reviews in this api you can do any thing for booking tour by any user and also the user can review the booking tour. ',
    //     link:"https://github.com/anwartarekA/Natours_API"
    // },
    // {
    //     title:'movie_watchlist',
    //     description:'Developed a Movie Watchlist API that allows users to manage their personal watchlists, similar to a real-world watchlist application. Implemented user authentication and authorization using Express-JWT, and request validation using Zod for secure and reliable data handling. Built with Node.js, Express.js, Prisma, and PostgreSQL, ensuring efficient data management and performance. Deployed on Hostinger VPS, with a clean RESTful architecture designed for scalability and maintainability. ',
    //     link:"https://github.com/anwartarekA/movie_watchlist_api"
    // },
    // {
    //     title:'shopping_list',
    //     description:'A React-based Shopping List application that allows users to browse products, add them to a menu of brochures, view product details, and manage their selections interactively.Features include a product catalog with detailed information, add/ remove products to/from the menu, searchable product list, and detailed product view.Built using React.js with React Hooks (useState, useEffect) for state management, and styled with CSS/Tailwind for a responsive and interactive user interface. ',
    //     link:"https://github.com/anwartarekA/shopping-list?tab=readme-ov-file"
    // },
    // {
    //     title:'Eat_split',
    //     description:'Eat & Split Bill is a simple and interactive React application designed to make splitting expenses with friends effortless. Users can add friends, share bills, and enter total amounts, and the app automatically calculates each person’s share. It allows selecting who paid the bill and instantly determines who owes money, with real-time balance updates for clear tracking. Built entirely with React, providing a dynamic and responsive user interface for seamless interaction. ',
    //     link:"https://github.com/anwartarekA/eat-n-split-application?tab=readme-ov-file"
    // },
    // {
    //     title:'React_pizza_menu',
    //     description:' Software Tools: React, ReactDOM, useState, JSX, HTML, CSS Developed a Pizza Menu app using React components and state hooks, allowing customers to view and purchase available pizzas. The app also shows whether the restaurant is open or closed. If closed, it provides a hint for the next available time. ',
    //     link:"https://github.com/anwartarekA/pizza_menu"
    // },
    // {
    //     title:'Far_away',
    //     description:'Faraway is a modern, responsive React application designed to help users plan and organize their trips. Users can add travel needs, pack items from their list, and track remaining items with percentages. The app also allows sorting needs using three selectable inputs and provides the ability to clear the list after packing all items. Built entirely with React, offering a dynamic and interactive interface for seamless trip preparation. ',
    //     link:"https://github.com/anwartarekA/far_away"
    // },
    // {
    //     title:'Hangman_game',
    //     description:' software tools: HTML, CSS, Javascript This is a fun Hangman game where a random word is selected, and you must guess the letters to complete the word. Each wrong guess disables the letter and adds to the hangman drawing. The game ends when the hangman is fully drawn, and you lose. ',
    //     link:"https://github.com/anwartarekA/HangMan-Game"
    // },
    // {
    //     title:'Game_memory',
    //     description:'Memory Game is an interactive game where players flip cards to find matching pairs.The goal is to match two identical cards if the player selects correctly, their score increases.The game includes a timer that counts the time taken to complete the game, adding a challenge for speed and accuracy. Built with a dynamic interface that updates the game state in real-time, making it engaging and fun for users. ',
    //     link:"https://github.com/anwartarekA/Game-Memory-With-Javascript"
    // },
    // {
    //     title:'Contact_list',
    //     description:' Technologies: HTML, CSS, JavaScript by this project you can create some important notes about the important things and you can also modify them, and delete anything you need and this app you can also search for the wroten notes and filter them as you need. ',
    //     link:"https://anwartareka.github.io/TO-DO-APP/"
    // },
    // {
    //     title:'Fetch_app',
    //     description:"software tools : HTML, CSS, JavaScript This app allows users to fetch and view all their GitHub repositories by entering their username. It sends requests to GitHub's server and displays the repos without needing to access the platform directly.",
    //     link:"https://github.com/anwartarekA/Fetch-Application"
    // },
    // {
    //     title:'Gallery_team',
    //     description:' software tools: HTML, CSS, Javascript This application for my team memories so i made this application to store my and their memories and also this application filter the members based on thier fields. ',
    //     link:"https://github.com/anwartarekA/galleryTeam"
    // }
]
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
const ProjectsSection = styled.section`
    background:
    radial-gradient(ellipse at 50% 0%, rgba(16, 185, 129, 0.18), transparent 55%),
    linear-gradient(180deg, #0b2a1f 0%, #06140f 100%);
`
function Projects ()
{
    return <ProjectsSection>
        <div style={headingStyle}>  
            <StyleIcon icon={faCode}/>
            <h1 style={h1Style}>projects</h1>
        </div>
        <ul>
            {projects.map(project=> <Project project={project} key={project.title}/>)}
        </ul>
    </ProjectsSection>
    
}
function Project ({project}){
    return <li>
        <span>{project.title}</span>
        <span>{project.description}</span>
        <a href={project.link}>
            <span>{project.link}</span>
        </a>
    </li>
}
export default Projects;