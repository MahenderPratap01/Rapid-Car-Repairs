import React, { useState } from "react";
import "../Styles/Contact.css";
// import { app } from "../Firebase";
import emailjs from "@emailjs/browser";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const emailParams = {
      from_name: formData.name,
      subject: formData.subject,
      message: formData.message, // Param: Message from the user
    };
    emailjs
      .send("service_8a02j4s", "template_w6az7eb", emailParams, {
        publicKey: "97zp7fWFgMa_a-yMc",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Your message has been sent successfully!");
          // Reset the form
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    // app
    //   .database()
    //   .ref("contacts")
    //   .push(formData)
    //   .then(() => {
    //     alert("Your message has been sent successfully!");
    //     setFormData({
    //       name: "",
    //       email: "",
    //       subject: "",
    //       message: "",
    //     });
    //   })
    //   .catch((error) => {
    //     console.error("Error sending message:", error);
    //   });
  };

  return (
    <>
      <div className="Faq-bg">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-page-container">
        <div className="contact-form-section">
          <h2>Contact Us</h2>
          <p>Get in touch with us 24/7</p>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write Your Message*"
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info-section">
          <div>
          <FaLocationDot style={{color: "red", fontSize: "50"}}/>
            <p>
              <strong>Address:</strong>
            </p>
            <p>123 Car Repair Street, AutoCity, AC 12345</p>
          </div>
          <div>
          <FaPhoneAlt style={{color: "red", fontSize: "50"}}/>
            <p>
              <strong>Phone:</strong>
            </p>
            <p>+1 1234 56 789</p>
            <p>+1 1234 56 780</p>
          </div>
          <div>
          <MdEmail style={{color: "red", fontSize: "50"}}/>
            <p>
              <strong>Email:</strong>
            </p>
            <p>info@RapidCarRepairs.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
