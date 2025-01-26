import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import "./App.css"; // Nous allons créer ce fichier pour les styles personnalisés

const firstName = "Tidjane"; // Changez ceci pour votre prénom ou laissez vide

const App = () => {
  return (
    <div className="app-background">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="product-card shadow-lg">
              <Card.Body>
                <Row>
                  <Col md={5}>
                    <div className="image-container">
                      <Image />
                    </div>
                  </Col>
                  <Col md={7}>
                    <div className="product-details">
                      <Name />
                      <Price />
                      <Description />
                      <button className="btn btn-primary mt-3">
                        Acheter maintenant
                      </button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <div className="text-center mt-5 greeting-section">
              <h3 className="greeting">
                {firstName ? `Bonjour, ${firstName}!` : "Bonjour !"}
              </h3>
              {firstName && (
                <img
                  src="https://placeholder.com/150"
                  alt="Profile"
                  className="profile-image mt-3"
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
