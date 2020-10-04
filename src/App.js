import React, {useState} from "react";
import "./App.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Projects from './components/Projects'


function App() {

  const [react, setReact] = useState(false)

  return (
    <div className="App">
      <div className="navbar">
        <a href="#" className="logo">
          <a>B</a>
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
            <a href="#services">Services</a>
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
            creating and designing exceptional, high-quility websites and
            applications.
          </p>
          <div class="arrow bounce">
            <a href="#about"><ArrowDownwardIcon style={{ fontSize: 60 }} /></a>
          </div>
        </div>
      </div>
      <div className="about-area" id="about">
        <div className="about-text">
          <h2>A little bit about me</h2>
          <p>
            Hello! My name is Brett and I'm a software engineer who specializes
            in front end development. I attended Lambda School in 2020 and
            finished their Full Stack Web Development program. I aspire to work
            for a company that will allow me to channel my appreciation for
            beautiful and creative UI's that create amazing and engaging user
            experiences.
          </p>
          <div className="links">
            <a>
              <GitHubIcon style={{fontSize: 40}}/>
            </a>
            <a>
              <TwitterIcon style={{fontSize: 40}} />
            </a>
            <a>
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
              HTML5, CSS, Javascript, React/Redux, Node JS/Express, Python,
              Firebase, HTML5, CSS, Javascript, React/Redux, Node JS/Express,
              Python, Firebase, HTML5, CSS, Javascript, React/Redux, Node
              JS/Express, Python, Firebase
            </h2>
          </div>
          <div>
            <h2>
              HTML5, CSS, Javascript, React/Redux, Node JS/Express, Python,
              Firebase, HTML5, CSS, Javascript, React/Redux, Node JS/Express,
              Python, Firebase, HTML5, CSS, Javascript, React/Redux, Node
              JS/Express, Python, Firebase
            </h2>
          </div>
        </section>
      </div>
      <div className="port-area" id="portfolio">
        <Projects />  
      </div>  
      <div className="service-area" id="services"></div>
      <div className="contact-area" id="contact"></div>
    </div>
  );
}

export default App;
