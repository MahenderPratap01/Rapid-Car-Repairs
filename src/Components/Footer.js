import React from "react";
import "../Styles/Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const logos = [
  { id: 1, name: "BMW", logo: require("../ImagesFolder/Logos/BMW.png") },
  { id: 2, name: "Mercedes", logo: require("../ImagesFolder/Logos/Mercedes.png") },
  { id: 3, name: "Audi", logo: require("../ImagesFolder/Logos/Audi.png") },
  { id: 4, name: "Honda", logo: require("../ImagesFolder/Logos/Honda.png") },
  { id: 5, name: "Hyundai", logo: require("../ImagesFolder/Logos/Hyundai.png") },
  { id: 6, name: "LandRover", logo: require("../ImagesFolder/Logos/LandRover.png") },
  { id: 7, name: "Toyota", logo: require("../ImagesFolder/Logos/Toyota.png") },
  { id: 8, name: "Nissan", logo: require("../ImagesFolder/Logos/Nissan.png") },
  { id: 9, name: "Volkswagen", logo: require("../ImagesFolder/Logos/Volkswagen.png") },
  { id: 10, name: "Skoda", logo: require("../ImagesFolder/Logos/Skoda.png") },
];

const Footer = () => {
  return (
    <>
      <div className="brand-bar">
        <div className="brand-name">
          <h1 id="weserve">Brands We Serve</h1>
        </div>
        <div className="brand-logos">
          <div className="logos-wrapper">
            <div className="logos-grid">
              {logos.concat(logos).map((logo, index) => (
                <div key={index} className="brand-logo">
                  <img src={logo.logo} alt={logo.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>
              Your trusted car repair and service provider. Quality service with
              a personal touch.
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/faqs">FAQs</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: info@RapidCarRepairs.com</p>
            <p>Phone: +1 1234 56 789</p>
            <p>Address: 123 Car Repair Street, AutoCity, AC 12345</p>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Car Repair & Service. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
