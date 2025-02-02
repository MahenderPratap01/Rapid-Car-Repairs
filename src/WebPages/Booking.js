import React, { useState } from "react";
import "../Styles/Booking.css";
import { Container } from "react-bootstrap";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    serviceType: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const phoneRegex = /^\d{10}$/;

    if (!formData.name.trim()) {
      errors.name = "Full Name is required.";
    }

    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email.";
    }

    if (!formData.phone) {
      errors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits.";
    }

    if (!formData.date) {
      errors.date = "Date is required.";
    } else {
      const selectedDate = new Date(formData.date).setHours(0, 0, 0, 0);
      const currentDate = new Date().setHours(0, 0, 0, 0);
      if (selectedDate < currentDate) {
        errors.date = "Date cannot be in the past.";
      }
    }

    if (!formData.time) {
      errors.time = "Time is required.";
    }

    if (!formData.serviceType) {
      errors.serviceType = "Please select a service type.";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "ServiceBooking"), {
        ...formData,
        createdAt: new Date(),
      });

      console.log("Document written with ID: ", docRef.id);
      alert("Your Service is booked!");
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        serviceType: "",
        additionalInfo: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("There was an error booking your service. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <Container className="Booking-bg" fluid>
      <form className="Booking-form" onSubmit={handleSubmit}>
        <h2>Book a Service</h2>

        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <span className="error-message">{errors.name}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error-message">{errors.email}</span>}

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <span className="error-message">{errors.phone}</span>}

        <label htmlFor="date">Preferred Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        {errors.date && <span className="error-message">{errors.date}</span>}

        <label htmlFor="time">Preferred Time</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        {errors.time && <span className="error-message">{errors.time}</span>}

        <label htmlFor="serviceType">Service Type</label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          required
        >
          <option value="">Select a Service</option>
          <option value="oilChange">Oil Change</option>
          <option value="tireChange">Tire Change</option>
          <option value="brakeRepair">Brake Repair</option>
          <option value="engineRepair">Engine Repair</option>
          <option value="fullService">Full Service</option>
        </select>
        {errors.serviceType && (
          <span className="error-message">{errors.serviceType}</span>
        )}

        <label htmlFor="additionalInfo">Additional Information</label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          rows="4"
        ></textarea>

        <button type="submit">Book a Service</button>
      </form>
    </Container>
  );
};

export default AppointmentForm;
