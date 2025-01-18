import { useEffect, useState, useRef } from "react";
import "./assets/font.scss";
import "./App.scss";
import MyNav from "./components/nav";
import MyBanner from "./components/banner";
import AboutMe from "./components/about_me";

function App() {
  let refScroll = useRef(0);
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    refScroll.current = window.addEventListener("scroll", () => {
      setOffsetY(window.scrollY);
    });
    return () => refScroll.current.window.removeEventListener("scroll");
  }, []);

  return (
    <div className="App">
      <MyNav offset={offsetY} />
      <MyBanner />
      <AboutMe  />
    </div>
  );
}

export default App;
