import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const experiences = [
    {
        jobTitle: 'Backend Developer',
        company: 'Gawla Hora',
        description: 'I am a Backend Developer at Gawla Hora, where I have designed, developed, and maintained robust backend applications. I have experience building scalable, production-ready APIs and microservices, handling multiple business modules, and ensuring high performance and reliability in real-world projects.',
    },
    {
        jobTitle: ' Fullstack Developer',
        company: 'Poland Team',
        description: 'Developed strong experience in team collaboration and communication, effectively working with teammates, clients, stakeholders, and cross-functional teams to deliver high-quality solutions.',
    },
    {
        jobTitle: 'Backend Engineering Trainee,',
        company: 'NTI - Remote',
        description:
            'Successfully completed a backend-focused internship at NTI, where I gained hands-on experience with technologies like Node.js, Express, Mongoose, MongoDB, Docker, GraphQL, Socket.io and REST APIs. Throughout the program, I worked on multiple projects starting from building the NodeFarm app to developing the Natours API, and ultimately delivering a complete full-stack tour booking platform.',
    },
    {
        jobTitle: 'Leader, Volunteer Team',
        company: 'Bionic',
        description: 'Initially contributed as a Backend Developer with Node.js for two years in my college team. Afterward, transitioned to the Frontend Circle, where I have been actively involved for the past year and am still contributing.',
    },
    {
        jobTitle: 'Frontend Engineering Trainee (Intern)',
        company: '(Intern), CodeAlpha (Software Company) - Remote',
        description:
            'Finished an in-depth frontend development internship, gaining expertise in HTML, CSS, JavaScript, React, Tailwind CSS, Sass, and Git. Developed 7 unique projects from the ground up, including apps like QR Code Generator, acme rocket Website, Hangman Game, Acme Rocket, and Memory Game, simple calculator, with a focus on modern UI/UX design, responsiveness, and interactive features.',
    },
];

const ExperiencesSection = styled.section`
    padding: 5rem 2rem;
    background: radial-gradient(circle at 12% 8%, rgba(16, 185, 129, 0.12), transparent 40%), radial-gradient(circle at 88% 92%, rgba(52, 211, 153, 0.08), transparent 45%), rgb(7 19 14);
    color: #a7c4b5;
    padding: 6rem 1.5rem;
`;
const StyleIcon = styled(FontAwesomeIcon)`
    color: #34d399;
    font-size: 40px;
    margin-top: 25px;
    margin-left: -9px;
`;
const h1Style = {
    color: 'white',
    fontSize: '40px',
    textTransform: 'capitalize',
};
const headingStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '280px',
    height: '70px',
    textTransform: 'capitaliz',
    fontFamily: 'arial',
    transform: 'translate(850px, 30px)',
    borderBottom: 'solid 5px rgb(136 175 157)',
    padding: '10px 0',
};
function Experiences() {
    return (
        <ExperiencesSection>
            <div style={headingStyle}>
                <StyleIcon icon={faBriefcase} />
                <h1 style={h1Style}>experiences</h1>
            </div>
            {experiences.map((experience) => (
                <ExperienceCard key={experience.jobTitle} jobTitle={experience.jobTitle} company={experience.company} description={experience.description} />
            ))}
        </ExperiencesSection>
    );
}
function ExperienceCard({ jobTitle, company, description }) {
    return (
        <div>
            <h3>{jobTitle}</h3>
            <h4>{company}</h4>
            <p>{description}</p>
        </div>
    );
}
export default Experiences;
