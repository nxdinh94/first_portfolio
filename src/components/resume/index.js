import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";
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
        <Col className="col col-md-12 col-lg-6 mt-5 px-4">
          <p
            style={{
              fontSize: "28px",
              marginBottom: "24px",
              paddingBottom: "8px",
              fontWeight: "600",
            }}
          >
            My Education
          </p>
          <div className="ps-3 my-edu">
            <div className="my-edu-feature">
              <h5>Master in Computer Engineering</h5>
              <p>Harvard University / 2015 - 2017</p>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the dummy text.
              </p>
            </div>
            <hr />
            <div className="my-edu-feature">
              <h5>Master in Computer Engineering</h5>
              <p>Harvard University / 2015 - 2017</p>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the dummy text.
              </p>
            </div>
            <hr />
            <div className="my-edu-feature">
              <h5>Master in Computer Engineering</h5>
              <p>Harvard University / 2015 - 2017</p>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the dummy text.
              </p>
            </div>
            <hr />
          </div>
        </Col>
        <Col className="col col-md-12 col-lg-6 mt-5 px-4">
          <p
            style={{
              fontSize: "28px",
              marginBottom: "24px",
              paddingBottom: "8px",
              fontWeight: "600",
            }}
          >
            My Experience
          </p>
          <div className="ps-3 my-edu">
            <div className="my-edu-feature">
              <h5>Master in Computer Engineering</h5>
              <p>Harvard University / 2015 - 2017</p>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the dummy text.
              </p>
            </div>
            <hr />
            <div className="my-edu-feature">
              <h5>Master in Computer Engineering</h5>
              <p>Harvard University / 2015 - 2017</p>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the dummy text.
              </p>
            </div>
            <hr />
            <div className="my-edu-feature">
              <h5>Master in Computer Engineering</h5>
              <p>Harvard University / 2015 - 2017</p>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the dummy text.
              </p>
            </div>
            <hr />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
