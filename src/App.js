import React, { useState, useEffect } from "react";
import "./App.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import portrait from "./images/portrait.png";

function App() {
  const [inputCheck, setInputCheck] = useState(false);

  const click = () => {
    setInputCheck(!inputCheck);
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="App">
      <div className="navbar">
        <a href="" className="logo">
          <span>Dev</span>
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
        <div className="menu-wrap">
          <input
            type="checkbox"
            class="toggler"
            checked={inputCheck}
            onClick={click}
          />
          <div class="hamburger">
            <div></div>
          </div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <li>
                    <a onClick={click} href="#home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a onClick={click} href="#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a onClick={click} href="#portfolio">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a onClick={click} href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-area" id="home">
        <div className="header-text">
          <div className="links">
            <a href="https://github.com/BrettMcAdams" target="_blank">
              <GitHubIcon
                style={{ fontSize: 40, color: "rgb(57, 254, 188)" }}
              />
            </a>
            <a href="https://twitter.com/BrettMcAdams6" target="_blank">
              <TwitterIcon
                style={{ fontSize: 40, color: "rgb(57, 254, 188)" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/brett-mcadams-134ba91b5/"
              target="_blank"
            >
              <LinkedInIcon
                style={{ fontSize: 40, color: "rgb(57, 254, 188)" }}
              />
            </a>
            <a href="">
              <InstagramIcon
                style={{ fontSize: 40, color: "rgb(57, 254, 188)" }}
              />
            </a>
          </div>
          <h3>Hi, my name is</h3>
          <h2>Brett McAdams.</h2>
          <h2>Full Stack Web Engineer.</h2>
          <p>
            I'm a software engineer based in Orlando, Fl specializing in
            creating exceptional, high-quality websites and applications.
          </p>

          <div class="arrow bounce">
            <a href="#about">
              <ArrowDownwardIcon style={{ fontSize: 60 }} />
            </a>
          </div>
        </div>
      </div>
      <div className="about-area" id="about">
        <div className="about-text">
          <img data-aos="fade-up" className="me" src={portrait} />
          <p data-aos="fade-up">
            I specialize in creating beautiful, useable, and professional
            websites using best practice accessibility. I have been coding for 2
            years and attended Lambda School in 2020 to further advance my
            technical skills. I enjoy building everything from small business
            websites to rich interactive web applications. I aspire to work for
            a company that will allow me to channel my appreciation for
            beautiful and interactive UI's that create amazing and engaging user
            experiences.
          </p>
        </div>
        <section>
          <div>
            <h2>
              HTML5, CSS, Javascript, React/Redux, Node JS/Express, SQL,
              Firebase, HTML5, CSS, Javascript, React/Redux, Node JS/Express,
              SQL, Firebase, HTML5, CSS, Javascript, React/Redux, Node
              JS/Express, SQL, Firebase, HTML5, CSS, Javascript, React/Redux,
              Node JS/Express, SQL, Firebase, HTML5, CSS, Javascript,
              React/Redux, Node JS/Express, SQL, Firebase
            </h2>
          </div>
          <div>
            <h2>
              HTML5, CSS, Javascript, React/Redux, Node JS/Express, SQL,
              Firebase, HTML5, CSS, Javascript, React/Redux, Node JS/Express,
              SQL, Firebase, HTML5, CSS, Javascript, React/Redux, Node
              JS/Express, SQL, Firebase, HTML5, CSS, Javascript, React/Redux,
              Node JS/Express, SQL, Firebase, HTML5, CSS, Javascript,
              React/Redux, Node JS/Express, SQL, Firebase
            </h2>
          </div>
        </section>
      </div>
      <div className="port-area" id="portfolio">
        <Projects />
        <div></div>
      </div>
      <div className="contact-area" id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
