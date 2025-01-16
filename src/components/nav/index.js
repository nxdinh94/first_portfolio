import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

export default function MyNavbar({ offset }) {
  // Function to open the sidenav
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
  };

  // Function to close the sidenav
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0px";
  };

  return (
    <>
      <div id="mySidenav" className="sidenav">
        <span className="closebtn" onClick={closeNav}>
          &times;
        </span>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <div
        className="myNavbar"
        style={{
          backgroundColor:
            offset > 0
              ? "var(--bg-navbar-dark)"
              : "var(--bg-navbar-transparent)",
        }}
      >
        <p className="brand">Nguyen Xuan Dinh</p>
        <div className="right-items">
          <FontAwesomeIcon icon={faPhone} size="lg" color="white" />
          <p className="phone">0384566800</p>
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            color="white"
            className="menu-icon"
            onClick={openNav}
          />
        </div>
      </div>
    </>
  );
}
