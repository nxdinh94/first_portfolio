import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
export default function WhatIDo() {
  return (
    <Container fluid style={{ backgroundColor: "#F8F9FA" }}>
      <Container id="what-i-do" style={{ padding: "104px 0px" }}>
        <Row>
          <p
            style={{
              backgroundColor: "#d6ed17",
              width: "max-content",
              margin: "8px auto",
            }}
          >
            What I Do
          </p>
        </Row>
        <Row className="text-center">
          <p className="h1" style={{ color: "#212529", marginBottom: "3rem" }}>
            How I can help your next project
          </p>
        </Row>
        <Row className="featured-row">
          <Col className="col col-md-6 col-lg-4 featured-col">
            <div className="featured-box">
              <FontAwesomeIcon
                icon={faPalette}
                size="4x"
                color="#F5DF4E"
                style={{ marginBottom: "0.8rem" }}
              />
              <b style={{ fontSize: "24px", marginBottom: "16px" }}>
                Graphic Design
              </b>
              <span style={{ color: "#6C757D" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text.
              </span>
            </div>
          </Col>
          <Col className="col col-md-6 col-lg-4 featured-col">
            <div className="featured-box">
              <FontAwesomeIcon
                icon={faPalette}
                size="4x"
                color="#F5DF4E"
                style={{ marginBottom: "0.8rem" }}
              />
              <b style={{ fontSize: "24px", marginBottom: "16px" }}>
                Graphic Design
              </b>
              <span style={{ color: "#6C757D" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text.
              </span>
            </div>
          </Col>
          <Col className="col col-md-6 col-lg-4 featured-col">
            <div className="featured-box">
              <FontAwesomeIcon
                icon={faPalette}
                size="4x"
                color="#F5DF4E"
                style={{ marginBottom: "0.8rem" }}
              />
              <b style={{ fontSize: "24px", marginBottom: "16px" }}>
                Graphic Design
              </b>
              <span style={{ color: "#6C757D" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text.
              </span>
            </div>
          </Col>
          <Col className="col col-md-6 col-lg-4 featured-col">
            <div className="featured-box">
              <FontAwesomeIcon
                icon={faPalette}
                size="4x"
                color="#F5DF4E"
                style={{ marginBottom: "0.8rem" }}
              />
              <b style={{ fontSize: "24px", marginBottom: "16px" }}>
                Graphic Design
              </b>
              <span style={{ color: "#6C757D" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text.
              </span>
            </div>
          </Col>
          <Col className="col col-md-6 col-lg-4 featured-col">
            <div className="featured-box">
              <FontAwesomeIcon
                icon={faPalette}
                size="4x"
                color="#F5DF4E"
                style={{ marginBottom: "0.8rem" }}
              />
              <b style={{ fontSize: "24px", marginBottom: "16px" }}>
                Graphic Design
              </b>
              <span style={{ color: "#6C757D" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text.
              </span>
            </div>
          </Col>
          <Col className="col col-md-6 col-lg-4 featured-col">
            <div className="featured-box">
              <FontAwesomeIcon
                icon={faPalette}
                size="4x"
                color="#F5DF4E"
                style={{ marginBottom: "0.8rem" }}
              />
              <b style={{ fontSize: "24px", marginBottom: "16px" }}>
                Graphic Design
              </b>
              <span style={{ color: "#6C757D" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text.
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
