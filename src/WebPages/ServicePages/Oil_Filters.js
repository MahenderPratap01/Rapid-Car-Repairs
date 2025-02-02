import React from "react";
import { Image, Button } from "react-bootstrap";
import "../../Styles/Diagnostics.css";
import Oil from "../../ImagesFolder/Oil&Filter.jpg";
import Diagnostics1 from "../../ImagesFolder/Diagnostics01.jpeg";
import Diagnostics2 from "../../ImagesFolder/Diagnostics02.jpeg";
import Diagnostics3 from "../../ImagesFolder/Diagnostics03.jpeg";
import Diagnostics4 from "../../ImagesFolder/Diagnostics04.jpeg";
import Diagnostics5 from "../../ImagesFolder/Diagnostics05.jpeg";

function About() {
  return (
    <>
      <div className="service-page">
        <h1>Oil/ Lube/ Filters</h1>
      </div>
      <div className="service-content">
        <div className="left">
          <h1>Oil/ Lube/ Filters</h1>
          <p>
            At Rapid Car Repairs, our mission is to provide the highest level of
            automotive service with a focus on speed, reliability, and customer
            satisfaction. We strive to be your go-to choice for all your car
            repair and maintenance needs, ensuring your vehicle is always ready
            to hit the road.
          </p>
          <Button
            style={{
              marginRight: "20px",
              backgroundColor: "red",
              border: "1px solid black",
            }}
            href="/appointment"
          >
            BOOK A SERVICE
          </Button>
        </div>
        <div className="right">
          <Image src={Oil} fluid />
        </div>
      </div>
      <div className="gallery">
        <h1>Gallery</h1>
        <div className="gallery-grid">
          <Image src={Diagnostics1} className="gallery-item" />
          <Image src={Diagnostics2} className="gallery-item" />
          <Image src={Diagnostics3} className="gallery-item" />
          <Image src={Diagnostics4} className="gallery-item" />
          <Image src={Diagnostics5} className="gallery-item" />
        </div>
      </div>
    </>
  );
}

export default About;
