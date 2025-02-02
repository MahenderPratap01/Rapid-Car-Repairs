import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 
import "../Styles/Home.css";
import Car1 from "../ImagesFolder/Citron-Car.jpg";
import Car2 from "../ImagesFolder/Home_Bg1.jpg";
import Car3 from "../ImagesFolder/Home_Bg2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Services from "../Components/Services"
import Diagnostics1 from "../ImagesFolder/Diagnostics01.jpeg";
import Diagnostics2 from "../ImagesFolder/Diagnostics02.jpeg";
import Diagnostics3 from "../ImagesFolder/Diagnostics03.jpeg";
import Diagnostics4 from "../ImagesFolder/Diagnostics04.jpeg";
import Diagnostics5 from "../ImagesFolder/Diagnostics05.jpeg";

function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slidesData = [
    {
      image: Car1,
      content: (
        <>
          <h1>Welcome to Rapid Car Repairs</h1>
          <p>
            We offer the best car repair services to keep your vehicle running
            smoothly.
          </p>
          <button
            className="contact-button"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </>
      ),
    },
    {
      image: Car2,
      content: (
        <>
          <h1>Professional Car Repair Services</h1>
          <p>
            Our team of experts is dedicated to providing top-notch service for
            all makes and models.
          </p>
          <button
            className="contact-button"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </>
      ),
    },
    {
      image: Car3,
      content: (
        <>
          <h1>Your Trusted Auto Service Center</h1>
          <p>
            We are committed to excellence and ensuring your satisfaction with
            every visit.
          </p>
          <button
            className="contact-button"
            onClick={() => navigate("/contact")} 
          >
            Contact Us
          </button>
        </>
      ),
    },
  ];

  return (
    <>
      <Container fluid className="home-container px-0">
        <div
          className="Home-img p-0 m-0"
          style={{ backgroundImage: `url(${slidesData[currentSlide].image})` }}
        >
          <div className="welcome-content">
            {slidesData[currentSlide].content}
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <Services/>
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

export default Homepage;
