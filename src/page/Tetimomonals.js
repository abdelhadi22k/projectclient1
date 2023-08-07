import React from "react";
import { Container } from "react-bootstrap";
import '../styles/tetimomonals.css'

const Tetimomonals = () => {
  return (
    <section className="tetimomonals " id="tetimomonals">
      <div
        style={{
          backgroundImage: `url(img/tetimomonals.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="aboutPageblir">
          <Container className="aboutPageblirContainer">
            <div className="mainPageinfo">
              <h2>Tetimomonals</h2>
              <h5>What our customers say about us</h5>
              <p>
                The most important of our services are the services related to
                the web field, where we make it easy for you and we do it
                quickly and professionally
              </p>
            </div>

            <div className="customersSayAbout">
              <div className="customersSayAboutBox">
                <div className="sayAboutBox">
                  <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="sayAboutDiscrption">
                  <p>
                    Providing professional digital services for the web field
                    and helping you to improve or own a professional website to
                    help and develop your business
                  </p>
                  <div className="customersThesayAbout">
                    <div>
                      <img src="img/customers.png" alt="customers.png" />
                    </div>
                    <div>
                      <strong>kaba devcos</strong>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="customersSayAboutBox">
                <div className="sayAboutBox">
                  <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="sayAboutDiscrption">
                  <p>
                    Providing professional digital services for the web field
                    and helping you to improve or own a professional website to
                    help and develop your business
                  </p>
                  <div className="customersThesayAbout">
                    <div>
                      <img src="img/customers.png" alt="customers.png" />
                    </div>
                    <div>
                      <strong>catai merage</strong>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="customersSayAboutBox">
                <div className="sayAboutBox">
                  <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="sayAboutDiscrption">
                  <p>
                    Providing professional digital services for the web field
                    and helping you to improve or own a professional website to
                    help and develop your business
                  </p>
                  <div className="customersThesayAbout">
                    <div>
                      <img src="img/customers.png" alt="customers.png" />
                    </div>
                    <div>
                      <strong>nave loca</strong>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ShowMorButton">
                <p>
                The most important of our services are 
                \the services related to the web field, 
                where we make it easy for you and we do 
                it quickly and professionally
                The most important of our services are 
                the services related to the web field, 
                where we make it easy for you and we do 
                it quickly and professionally
                </p>
              <span className="ShowMor">
                <a 
                href="#html"
                >Show Mor
                </a>
                
                </span>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Tetimomonals;
