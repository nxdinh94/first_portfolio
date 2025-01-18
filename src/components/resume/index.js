import { Container, Row, Col } from "react-bootstrap";

export default function Resume() {
  return (
    <Container style={{ padding: "104px 0px" }}>
      <Row>
        <p
          style={{
            backgroundColor: "#d6ed17",
            width: "max-content",
            margin: "8px auto",
          }}
        >
          Resume
        </p>
      </Row>
      <Row className="text-center">
        <p className="h1" style={{ color: "#212529", marginBottom: "3rem" }}>
          A summary of My Resume
        </p>
      </Row>
      <Row>
        <Col className="col col-md-1 col-lg-2">
          <p style={{fontSize: "28px", marginBottom: "24px", paddingBottom : "8px", fontWeight : "600"}}>My Education</p>
          <div className="ps-3 border-left border-warning ">
            <p className="h5">BSc in Computer Science</p>
            <p className="h6">University of Lagos</p>
            <p className="h6">2018 - 2022</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
