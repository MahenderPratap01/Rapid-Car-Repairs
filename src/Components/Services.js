import React from "react";
import { Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Diagnostics from "../ImagesFolder/car-diagnostic.svg";
import Dent from "../ImagesFolder/car-Dent_Paint.svg";
import Oil from "../ImagesFolder/Car-Oil_Lube.svg";
import Brakes from "../ImagesFolder/Car-Brake.svg";
import Suspension from "../ImagesFolder/car-suspension.svg";
import Detailing from "../ImagesFolder/Car_-_Detailing.svg";
import Wash from "../ImagesFolder/Wash-clean.svg";
import Alignment from "../ImagesFolder/Alignment.svg";
import "../Styles/Services.css";

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>Our Services</h1>
      </div>
      <Container className="Services-container">
        <Card
          onClick={() => navigate("/diagnostics")}
          style={{ cursor: "pointer" }}
        >
          <Card.Img variant="top" alt="diagnostic" src={Diagnostics} />
          <Card.Body>
            <Card.Title>Diagnostics</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          onClick={() => navigate("/dent&paint")}
          style={{ cursor: "pointer" }}
        >
          <Card.Img variant="top" src={Dent} />
          <Card.Body>
            <Card.Title>Dent & Paint</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          onClick={() => navigate("/oil-filters")}
          style={{ cursor: "pointer" }}
        >
          <Card.Img variant="top" src={Oil} />
          <Card.Body>
            <Card.Title>Oil/ Lube/ Filters</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card onClick={() => navigate("/brakes")} style={{ cursor: "pointer" }}>
          <Card.Img variant="top" src={Brakes} />
          <Card.Body>
            <Card.Title>Brakes</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          onClick={() => navigate("/detailing")}
          style={{ cursor: "pointer" }}
        >
          <Card.Img variant="top" src={Detailing} />
          <Card.Body>
            <Card.Title>Detailing</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          onClick={() => navigate("/suspension")}
          style={{ cursor: "pointer" }}
        >
          <Card.Img variant="top" src={Suspension} />
          <Card.Body>
            <Card.Title>Suspension</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card onClick={() => navigate("/Wash")} style={{ cursor: "pointer" }}>
          <Card.Img variant="top" src={Wash} />
          <Card.Body>
            <Card.Title>Wash and Clean</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          onClick={() => navigate("/alignment")}
          style={{ cursor: "pointer" }}
        >
          <Card.Img variant="top" src={Alignment} />
          <Card.Body>
            <Card.Title>Alignment</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ServicesPage;
