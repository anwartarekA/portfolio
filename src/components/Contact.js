import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
const Section = styled.section`
    background: radial-gradient(ellipse at 50% 0%, rgba(16, 185, 129, 0.18), transparent 55%), linear-gradient(180deg, rgb(7 19 14) 0%, rgb(10 28 20) 100%);
    color: #a7c4b5;
    padding: 3rem 2rem;
    min-height: 100vh;
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
    width: '260px',
    height: '70px',
    textTransform: 'capitaliz',
    fontFamily: 'arial',
    transform: 'translate(795px, 30px)',
    borderBottom: 'solid 5px rgb(136 175 157)',
    padding: '10px 0',
    marginBottom: '70px',
};

const Links = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    width: 100%;
    max-width: 500px;
    margin: 2.5rem auto 0;
`;

const Anchor = styled.a`
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    color: #34d399;
    background: rgba(16, 185, 129, 0.08);
    border: 1px solid rgba(16, 185, 129, 0.25);
    border-radius: 50%;
    text-decoration: none;
    transition:
        transform 0.25s,
        background 0.25s,
        color 0.25s,
        box-shadow 0.25s;

    &:hover {
        transform: translateY(-6px);
        background: #10b981;
        color: #04110b;
        box-shadow: 0 10px 28px rgba(16, 185, 129, 0.35);
    }

    &:focus-visible {
        outline: 2px solid #34d399;
        outline-offset: 3px;
    }

    @media (max-width: 480px) {
        width: 48px;
        height: 48px;
        font-size: 1.2rem;
    }
`;
const Name = styled.span`
    color: #34d399;
    font-weight: 600;
`;
const fadeUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(16px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Paragraph = styled.p`
    position: relative;
    max-width: 640px;
    margin: 1.5rem auto 0;
    padding: 1.25rem 1.5rem;
    text-align: center;
    text-wrap: balance;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.85;
    letter-spacing: 0.01em;
    color: #a7c4b5;
    background: rgba(12, 31, 23, 0.6);
    border: 1px solid rgba(16, 185, 129, 0.15);
    border-radius: 14px;
    animation: ${fadeUp} 0.8s ease both;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 60px;
        height: 3px;
        transform: translateX(-50%);
        background: linear-gradient(90deg, transparent, #10b981, transparent);
        border-radius: 2px;
    }

    strong {
        color: #34d399;
        font-weight: 600;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
        line-height: 1.75;
        padding: 1rem;
    }
`;
const year = '2026';
function Contact() {
    return (
        <Section id="contact">
            <div style={{ marginTop: '260px' }}>
                <div style={headingStyle}>
                    <StyleIcon icon={faEnvelope} />
                    <h1 style={h1Style}>contact me</h1>
                </div>
                <Links>
                    <Anchor href="tel:+01212275860" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faPhone} />
                    </Anchor>
                    <Anchor href="https://wa.me/01212275860" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </Anchor>
                    <Anchor href="mailto:anwartarek719@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Anchor>
                    <Anchor href="https://github.com/anwartarekA" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </Anchor>
                    <Anchor href="https://linkedin.com/anwartarekA" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Anchor>
                </Links>
                <Paragraph>
                    &copy; {year} <Name>Anwar Tarek</Name>. All rights reserved.
                </Paragraph>
            </div>
        </Section>
    );
}
export default Contact;
