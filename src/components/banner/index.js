import "./style.scss";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container } from "react-bootstrap";
export default function MyBanner({}) {
  return (
    <Container fluid className="banner">
      <div className="banner-content">
        <h1 className="mb-0 text-white">Hi, I'm a Developer</h1>
        <p className="brand cursor my-4">Xuan Dinh</p>
        <span className="address">Hoa Quy, Ngu Hanh Son</span>
        <a className="btn btn-warning btn-lg fw-600 rounded-0 smooth-scroll mt-3 ">
          View My Works
        </a>
      </div>
      <div className="scroll-down">
        <a href="#about-me">
          <FontAwesomeIcon
            icon={faArrowDown}
            size="xl"
            color="white"
          />
        </a>
      </div>
    </Container>
  );
}
