import React from "react";
import "../styles/about.css";
import { Container, Image } from "react-bootstrap";

const AboutUs = () => {
  return (
    <section className="aboutPage " id="about">
      <div 
        style={{
          backgroundImage: `url(img/about.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="aboutPageblir"> 
          <Container className="aboutContainer">

            <div className="mainPageinfo">
              <h2>About Us</h2>
              <h5>Some Stuff About Us</h5>
              <p>
                Freelancer specializing in web development, I will help you to
                own or develop your own websites
              </p>
            </div>
            
            <div className="infoAboutUs">

              <div className="ourinfo">
                <div className="aboutInfo">
                  <h6>who are we</h6>
                  <p>
                    Providing professional digital services for the web field
                    and helping you to improve or own a professional website to
                    help and develop your businessProviding professional digital
                    services for the web field and helping you to improve or own
                    a
                  </p>
                </div>

                <div className="imgexplin">
                  <Image className="ourinfoimg" src="img/expline.png" fluid />
                </div>
              </div>

              <div className="ourExpereans">



 
                <div className="aboutExpereans">
                  <div className="titleExpereans">
                <div  >1</div>
                <h6>35 - Complete Project</h6>
                  </div>
                  <p>Providing professional digital services for the web 
                    field and helping you to improve or own a professional 
                    website to help and develop your business
                    </p>
                </div>


                <div className="aboutExpereans">
                  <div className="titleExpereans">
                <div  >2</div>
                <h6>2+ Years of Exprience  </h6>
                  </div>
                  <p>Providing professional digital services for the web 
                    field and helping you to improve or own a professional 
                    website to help and develop your business
                    </p>
                </div>


                <div className="aboutExpereans">
                  <div className="titleExpereans">
                <div  >3</div>
                <h6>Obtained several certificates  </h6>
                  </div>
                  <p>Providing professional digital services for the web 
                    field and helping you to improve or own a professional 
                    website to help and develop your business
                    </p>
                </div>



              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
