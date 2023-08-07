import React, { useState } from "react";
import "../styles/protfolo.css";
import { Container } from "react-bootstrap";
import { project } from "../data/protfolo";
import NavPortfolyo from "../components/protfolo/NavPortfolyo";
import Project from "../components/protfolo/Project";

const ProtfoloPage = () => {
  const allcategory = ["All", ...new Set(project.map((el) => el.category))];

  const [data, sitdata] = useState(project);

  const catgry = (cat) => {
    if (cat === `All`) {
      sitdata(project);
    } else {
      const newAerre = project.filter((elment) => elment.category === cat);
      sitdata(newAerre);
    }
  };

  return (
    <section className="protfoloPage" id="protfolo">
      <Container>
        <div className="mainPageinfo">
          <h2 className="mainPageinfoColor">Protfolo</h2>
          <h5>Let's check out some of our projects</h5>
        </div>
        <div>
          <NavPortfolyo showcatgry={catgry} allCat={allcategory}></NavPortfolyo>
          <div>
            <Project project={data}></Project>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProtfoloPage;
