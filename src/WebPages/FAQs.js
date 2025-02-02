import React from "react";
import { Container, Row } from "react-bootstrap";
import "../Styles/Faq.css";

function Faqs() {
  return (
    <>
      <div className="Faq-bg">
        <h1>Frequently Asked Questions</h1>
      </div>
      <h1>FAQs</h1>
      <Container className="faq-container">
        <Row>
          <h3>What is Rapid Car Repairs?</h3>
          <p>
            Rapid Car Repairs is a mobile car repair service that comes to you. We offer a wide range of services, including oil changes, tire rotations, brake repairs, and more, all at your convenience.
          </p>
        </Row>
        <Row>
          <h3>How do I book a service?</h3>
          <p>
            You can book a service online through our website or via our mobile app. Simply select the service you need, choose a convenient time, and provide your location. We’ll take care of the rest!
          </p>
        </Row>
        <Row>
          <h3>What areas do you serve?</h3>
          <p>
            We currently serve a wide area including [Your Service Area]. Please check our service area map on our website to see if we operate in your location.
          </p>
        </Row>
        <Row>
          <h3>What types of vehicles do you service?</h3>
          <p>
            We service a wide range of vehicles, including cars, SUVs, trucks, and vans. Whether you have a domestic or foreign vehicle, our certified mechanics can handle it.
          </p>
        </Row>
        <Row>
          <h3>Are your mechanics certified?</h3>
          <p>
            Yes, all of our mechanics are certified professionals with years of experience in the automotive repair industry. We ensure that they are equipped with the latest tools and technology to provide the best service.
          </p>
        </Row>
        <Row>
          <h3>Do you offer emergency services?</h3>
          <p>
            Yes, we offer emergency repair services for situations where immediate attention is needed. You can contact us directly through our emergency hotline for urgent repairs.
          </p>
        </Row>
        <Row>
          <h3>What is your pricing structure?</h3>
          <p>
            Our pricing is transparent and competitive. You can view detailed pricing for each service on our website or get a customized quote based on your specific needs.
          </p>
        </Row>
        <Row>
          <h3>How do I make a payment?</h3>
          <p>
            We accept various payment methods including credit/debit cards, online bank transfers, and mobile payment options. You can pay directly through our website or mobile app.
          </p>
        </Row>
        <Row>
          <h3>Is there a warranty on your services?</h3>
          <p>
            Yes, we offer a warranty on all our services to ensure your peace of mind. If you experience any issues with the service provided, we will address it promptly.
          </p>
        </Row>
        <Row>
          <h3>Can I reschedule or cancel a booking?</h3>
          <p>
            Yes, you can reschedule or cancel a booking through our website or mobile app. We ask that you provide at least 24 hours' notice for cancellations or rescheduling.
          </p>
        </Row>
      </Container>
    </>
  );
}

export default Faqs;
