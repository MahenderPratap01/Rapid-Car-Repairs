import React from "react";
import { Image } from "react-bootstrap";
import "../Styles/About.css";
import Customer from "../ImagesFolder/About-us.jpg"
import Photo1 from "../ImagesFolder/c-1.jpg";
import Photo2 from "../ImagesFolder/c-2.jpg";
import Photo3 from "../ImagesFolder/c-3.jpg";
import Photo4 from "../ImagesFolder/c-4.jpg";
import Photo5 from "../ImagesFolder/c-5.jpg";

function About (){
    return(
       <>
        <div className="about-page">
            <h1>About us</h1>
        </div>
        <div className="about-content">
            <div className="left">
                <h1>Our Mission</h1>
                <p>
                At Rapid Car Repairs, our mission is to provide the highest level of automotive service with a focus on speed, reliability, and customer satisfaction. We strive to be your go-to choice for all your car repair and maintenance needs, ensuring your vehicle is always ready to hit the road.
                </p>
            </div>
            <div className="right">
                <Image src={Customer} fluid></Image>
            </div>
        </div>
        <div className="gallery-container">
        <h1>Gallery</h1>
        <div className="about-gallery">
          <Image src={Photo1} className="about-gallery-item" />
          <Image src={Photo2} className="about-gallery-item" />
          <Image src={Photo3} className="about-gallery-item" />
          <Image src={Photo4} className="about-gallery-item" />
          <Image src={Photo5} className="about-gallery-item" />
        </div>
      </div>
       </>
    );
}

export default About;