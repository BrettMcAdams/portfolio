import React from "react";
import "../projects.css";

function Projects() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="imgbx">
            <img src="design.png" />
            <h3>Design</h3>
          </div>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="imgbx">
            <img src="code.png" />
            <h3>Code</h3>
          </div>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="imgbx">
            <img src="launch.png" />
            <h3>Launch</h3>
          </div>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
