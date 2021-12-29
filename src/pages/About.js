import React from "react";
import Buton from "../components/Buton";
import Welcome from "../components/Welcome";
import AboutImg from "../img/mazda.jpg";

const About = () => {
  const handleClick = () => {
    alert("About sayfasına yönlendiriliyorsunuz");
  };
  return (
    <div>
      <h1>About</h1>
      <Welcome name="About" img={AboutImg} />
      <Buton name="about" clickle={handleClick} color="white" bgColor="red" />
    </div>
  );
};

export default About;
