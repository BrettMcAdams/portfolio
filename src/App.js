import React, { useState, useEffect } from "react";
import "./App.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Projects from './components/Projects'
import Contact from './components/Contact'
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {

  const [react, setReact] = useState(false)

  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])

  return (
    <div className="App">
      <div className="navbar">
        <a href="#" className="logo">
          B
        </a>
        <ul className="nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="banner-area" id="home">
        <div className="header-text">
          <h3>Hi, my name is</h3>
          <h2>Brett McAdams.</h2>
          <h2>Full Stack Web Engineer.</h2>
          <p>
            I'm a software engineer based in Orlando, Fl specializing in
            creating exceptional, high-quility websites and
            applications.
          </p>
          <div class="arrow bounce">
            <a href="#about"><ArrowDownwardIcon style={{ fontSize: 60 }} /></a>
          </div>
        </div>
      </div>
      <div className="about-area" id="about">
        <div className="about-text">
          <h2 data-aos='fade-down'>A little bit about me</h2>
          <p data-aos='fade-up'>
            Hello! I'm a software engineer who specializes
            in web development. I have been coding self-taught for 2 years and in 2020 I attended Lambda School where I
            completed their Full Stack Web program. I aspire to work
            for a company that will allow me to channel my appreciation for
            beautiful and interactive UI's that create amazing and engaging users
            experiences.
          </p>
          <div data-aos='fade' className="links">
            <a href='https://github.com/BrettMcAdams' target="_blank">
              <GitHubIcon style={{fontSize: 40}}/>
            </a>
            <a href='https://twitter.com/BrettMcAdams6' target="_blank">
              <TwitterIcon style={{fontSize: 40}} />
            </a>
            <a href='https://www.linkedin.com/in/brett-mcadams-134ba91b5/' target="_blank">
              <LinkedInIcon style={{fontSize: 40}} />
            </a>
            <a>
              <InstagramIcon style={{fontSize: 40}} />
            </a>
          </div>
        </div>
        <section>
          <div>
            <h2>
              HTML5, CSS, Javascript, React/Redux, Node JS/Express, SQL, Python,
              Firebase, HTML5, CSS, Javascript, React/Redux, Node JS/Express, SQL,
              Python, Firebase, HTML5, CSS, Javascript, React/Redux, Node
              JS/Express, SQL, Python, Firebase
            </h2>
          </div>
          <div>
            <h2>
              HTML5, CSS, Javascript, React/Redux, Node JS/Express, SQL, Python,
              Firebase, HTML5, CSS, Javascript, React/Redux, Node JS/Express, SQL,
              Python, Firebase, HTML5, CSS, Javascript, React/Redux, Node
              JS/Express, SQL, Python, Firebase
            </h2>
          </div>
        </section>
      </div>
      <div className="port-area" id="portfolio">
        <Projects />  
      </div>  
      <div className="contact-area" id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
