import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";

export default function AboutMe() {
  return (
    <Container id="about-me" style={{ padding: "104px 0px" }}>
      <Row>
        <p
          style={{
            backgroundColor: "#d6ed17",
            width: "max-content",
            margin: "8px auto",
          }}
        >
          About Me
        </p>
      </Row>
      <Row className="text-center">
        <p className="h1" style={{ color: "#212529", marginBottom: "3rem" }}>
          Know Me More
        </p>
      </Row>
      <Row>
        <Col className="d-flex flex-column col-8">
          <p style={{ fontSize: "32px" }}>
            Hi, I'm <b className="name">Callum Smith</b>
          </p>
          <p
            style={{
              fontSize: "21px",
              lineHeight: "1.8",
              marginBottom: "1rem",
            }}
          >
            I'm a designer & developer with a passion for web design. I enjoy
            developing simple, clean and slick websites that provide real value
            to the end user. Thousands of clients have procured exceptional
            results while working with me. Delivering work within time and
            budget which meets client’s requirements is our moto.
          </p>
        </Col>
        <Col className="col-4 d-flex flex-column align-items-center">
          <div className="years-of-experience">
            <div className="circle"></div>
            <div className="number">22</div>
          </div>
          <div>
            <p style={{ fontSize: "28px" }}>
              Years of <b>Experiance</b>
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="col-lg-3 col-md-6">
          <p className="info">Name:</p>
          <b>Xuan Dinh</b>
        </Col>
        <Col className="col-lg-3 col-md-6">
          <p className="info">Name:</p>
          <b>Xuan Dinh</b>
        </Col>
        <Col className="col-lg-3 col-md-6">
          <p className="info">Name:</p>
          <b>Xuan Dinh</b>
        </Col>
        <Col className="col-lg-3 col-md-6">
          <p className="info">Name:</p>
          <b>Xuan Dinh</b>
        </Col>
      </Row>
    </Container>
  );
}
