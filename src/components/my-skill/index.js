import "./style.scss";
import { Container, Row, Col } from "react-bootstrap";

export default function MySkill() {
  return (
    <Container>
      <h2 className="title">My Skills</h2>
      <Row className="row-cols-1 row-cols-md-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <Col className="skill-hero">
            <p>
              Web Design <span>80%</span>
            </p>
            <div class="progress" style={{ height: "10px", marginBottom: "1.5rem" }}>
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "80%", backgroundColor: "#F5DF4E" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <button className="download-button">Download CV</button>
      </Row>
    </Container>
  );
}
