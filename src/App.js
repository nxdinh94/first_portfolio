import { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";
import "./App.scss";
import MyNav from "./components/nav";
import MyBanner from "./components/banner";

function App() {
  let refScroll = useRef(0);
  const [offsetY, setOffsetY] = useState(0);
  // useEffect(() => {
  //   refScroll.current = window.addEventListener("scroll", () => {
  //     setOffsetY(window.scrollY);
  //   });
  //   return () => refScroll.current.window.removeEventListener("scroll");
  // }, []);

  return (
    <div className="App">
      <MyNav offset={offsetY} />
      <MyBanner />
      <Container fluid className="p-0">
        <img
          className="image"
          src="https://i.pinimg.com/1200x/81/3f/69/813f691337e47b75429e49cddf5916cd.jpg"
          alt="background-image"
        />
      </Container>
    </div>
  );
}

export default App;
