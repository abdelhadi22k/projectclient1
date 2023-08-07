import React from "react";
import { Container } from "react-bootstrap";
import '../styles/workflpw.css'
 
const Workflpwpage = () => {
  return (
    <section className="workflpw" id="workflpw">
      <Container className="workflpwContainer">
        <div className="mainPageinfo">
          <h2 className="mainPageinfoColor">Workflpw</h2>
          <h5>How we work</h5>
          <p>
            This is our workflow to ensure an outstanding partnership experience
            with our clients
          </p>
        </div>

        <div className="workflpwsection">
          
          <div className="workflpwBox">
            <div className="workflpwImg">
              <img src="img/contact.png" alt="contact" />
            </div>
            <div className="workflpwinfo">
              <h6>1- contact</h6>
              <p>
                We meet to discuss work and its requirements and agree on
                working conditions for both parties
              </p>
            </div>
          </div>

       

          <div className="workflpwBox">
            <div className="workflpwImg">
              <img src="img/coding.png" alt="contact" />
            </div>
            <div className="workflpwinfo">
              <h6>2- Work on the project</h6>
              <p>
                We start work and implement the project requirements quickly and
                professionally
              </p>
            </div>
          </div>



          <div className="workflpwBox">
            <div className="workflpwImg">
              <img src="img/Business.png" alt="contact" />
            </div>
            <div className="workflpwinfo">
              <h6>3- communicate</h6>
              <p>
                We deliver the project with a one-week follow-up to ensure that
                there are no defects
              </p>
            </div>
          </div>
        </div>
        <p className="lastp">
        Providing professional digital services for 
        the web field and helping you to improve or 
        own a professional website to help and develop 
        your businessProviding professional digital 
        services for the web field and helping you to 
        improve or own a
        </p>
      </Container>
    </section>
  );
};

export default Workflpwpage;
