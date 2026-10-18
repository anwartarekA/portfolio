import { useEffect } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Home from "./Home";
const Bg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: radial-gradient(ellipse at bottom, #10301f 0%, #07140f 60%, #030906 100%);
`;
const hrStyle = {
    height: '0.5px', 
    background:'linear-gradient(to right ,#10b981, #6ee7b7)',
    border: 'none'
}
function ParticlesBg() {
  useEffect(() => {
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: { enable: true, speed: 3, out_mode: "out" },
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 1 } },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });
  }, []);

  return <>
  <Bg id="particles-js" />
  <Nav/>
  <hr style={hrStyle}/>
  <Home/>
  </>
}

export default ParticlesBg;