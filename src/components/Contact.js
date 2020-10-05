import React, { useEffect } from "react";
import '../contact.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Contact() {

  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])

  return (
    <div data-aos='slide-left' class="background">
      <div class="container">
        <div class="screen">
          <div class="screen-header">
            <div class="screen-header-left">
              <div class="screen-header-button close"></div>
              <div class="screen-header-button maximize"></div>
              <div class="screen-header-button minimize"></div>
            </div>
            <div class="screen-header-right">
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
            </div>
          </div>
          <div class="screen-body">
            <div class="screen-body-item left">
              <div class="app-title">
                <span>CONTACT</span>
                <span>ME</span>
              </div>
              <div class="app-contact">CONTACT INFO:<br/> brettmcadams96@gmail.com |<br/> 407-580-6488</div>
            </div>
            <div class="screen-body-item">
              <div class="app-form">
                <div class="app-form-group">
                  <input
                    class="app-form-control"
                    placeholder="NAME"
                    name='name'
                  />
                </div>
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="EMAIL" />
                </div>
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="CONTACT NO" />
                </div>
                <div class="app-form-group message">
                  <input class="app-form-control" placeholder="MESSAGE" />
                </div>
                <div class="app-form-group buttons">
                    <button class="app-form-button">SEND</button>
                  <button class="app-form-button">CANCEL</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
