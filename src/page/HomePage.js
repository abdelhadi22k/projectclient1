import React from "react";
import {  Container, Image} from "react-bootstrap";
import '../styles/homepage.css'

const HomePage = () => {
  return (
    <section className="homePage" id="home">
      {/* <div className="pading"></div> */}
       
    <Container>
    <div className="mainInfoHolder">
      <div  className="colinfo">
        <h1>
        We <span> work </span>togetherfor  a  better future
        </h1>
        <p>
        A professional freelancer specializing 
        in web programming, UI/UX design, and 
        search engine optimization (SEO).
        </p>
        <div className="colLink">
          <span className="colLinkone">Let's work together</span>
          <span className="colLinktow">Show more</span>
        </div>
      </div>

      <div className="colImeg">
        {/* <Image  src="img/mainImge.png" fluid /> */}
      <img
      src='img/mainImge.png'
      alt="mainImge"
      />
      </div>
    </div>
  </Container>
    </section>
  );
};
export default HomePage;
