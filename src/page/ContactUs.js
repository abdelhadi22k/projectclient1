import React from "react";
import { Container } from "react-bootstrap";
import '../styles/contactUs.css'
const ContactUs = () => {
  return (
    <section className="contactUsPage" id="contactUs">
      <div
        style={{
          backgroundImage: `url(img/contuct.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "60vh",
        }}
      >
        <div className="contactsection">
          <Container>
            <div className="mainPageinfo">
              <h2> contact Us</h2>
              <h5>Got A Projecti Let’s talk</h5>
              <p>
              The most important of our services are the services 
              related to the web field, where we make it easy for 
              you and we do it quickly and professionally
              </p>
            </div>
            <div className="contactsHolder">

              <div className="contactBox">
                <h6>Freelance platforms</h6>

                <div className="contactIconHolder">

                  <div className="iconandtitle">
                    <img
                    src='img/Upwork.png'
                    alt='Upwork'
                    />
                    <p>Upwork</p>
                  </div>
                  <div className="iconandtitle">
                    <img
                    src='img/Upwork.png'
                    alt='Upwork'
                    />
                    <p>Upwork</p>
                  </div>
                  <div className="iconandtitle">
                    <img
                    src='img/Upwork.png'
                    alt='Upwork'
                    />
                    <p>Upwork</p>
                  </div>
                  <div className="iconandtitle">
                    <img
                    src='img/Upwork.png'
                    alt='Upwork'
                    />
                    <p>Upwork</p>
                  </div>

                </div>

              </div>
              <div className="contactBox">
                <h6>Freelance platforms</h6>

                <div className="contactIconHolder">

                  <div className="iconandtitle">
                    <img
                    src='img/Upwork.png'
                    alt='Upwork'
                    />
                    <p>Upwork</p>
                  </div>
                  <div className="iconandtitle">
                    <img
                    src='img/Upwork.png'
                    alt='Upwork'
                    />
                    <p>Upwork</p>
                  </div>
                  <div className="iconandtitle">
                    <img
                    src='img/Upwork.png'
                    alt='Upwork'
                    />
                    <p>Upwork</p>
                  </div>
                  <div className="iconandtitle">
                    <img
                    src='img/Upwork.png'
                    alt='Upwork'
                    />
                    <p>Upwork</p>
                  </div>

                </div>

              </div>
              <div className="contactBox">
                <h6>Freelance platforms</h6>

                <div className="contactIconHolder">

                  <div className="iconandtitle">
                    <img
                    src='img/Upwork.png'
                    alt='Upwork'
                    />
                    <p>Upwork</p>
                  </div>
                  <div className="iconandtitle">
                    <img
                    src='img/Upwork.png'
                    alt='Upwork'
                    />
                    <p>Upwork</p>
                  </div>
                  <div className="iconandtitle">
                    <img
                    src='img/Upwork.png'
                    alt='Upwork'
                    />
                    <p>Upwork</p>
                  </div>
                  <div className="iconandtitle">
                    <img
                    src='img/Upwork.png'
                    alt='Upwork'
                    />
                    <p>Upwork</p>
                  </div>

                </div>

              </div>

            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
