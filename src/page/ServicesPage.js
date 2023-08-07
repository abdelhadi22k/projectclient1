import React from "react";
import { Container } from "react-bootstrap";
import "../styles/servicesPage.css";

const ServicesPage = () => {
  return (
    <section className="servicesPage" id="servces">
      <Container className='Containerservices'>
        <div className="mainPageinfo">
          <h2 className="mainPageinfoColor">Services</h2>
          <h5>Exortise Service: Let’s Check It Out</h5>
          <p>
            A freelance professional who combines user interface (UI/UX) and web
            development skills, as well as experience in search engine
            optimization (SEO) and has more than two years of experience
          </p>
        </div>
 
        <div className="serviceInfo">
          <div className="serviceBox">
            <div className="iconserviceBox">
              <i className="fa-brands fa-figma iconeservice"></i>
            </div>
            <div className="infoserviceBox">
              <h6>UI/UX design</h6>
              <p>
                User Interface: Designing the visual and interactive aspects of
                an application or website
              </p>
            </div>
          </div>

          <div className="serviceBox">
            <div className="iconserviceBox">
              <i className="fa-brands fa-node"></i>
            </div>
            <div className="infoserviceBox">
              <h6>Full stack Developer</h6>
              <p>
                Multi-domain developer proficient in front-end, back-end and
                databases
              </p>
            </div>
          </div>

          <div className="serviceBox">
            <div className="iconserviceBox">
              <i className="fa-solid fa-people-group"></i>
            </div>
            <div className="infoserviceBox">
              <h6>SEO </h6>
              <p>
                Increase visibility: enhance the presence of the site on the
                search engine results pages.
              </p>
            </div>
          </div>
        </div>
        <p className='lastp'>
        Business improvement is done by improving website performance and user 
        experience with search engine optimization (SEO), designing a unique user interface (UI/UX) and powerful web development.
        </p>
      </Container>
    </section>
  );
};

export default ServicesPage;
