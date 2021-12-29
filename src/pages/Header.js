import React from "react";
import Buton from "../components/Buton";
import Welcome from "../components/Welcome";
import HeaderImg from "../img/skoda.jpg";
const Header = () => {
  const handleClick = () => {
    alert("Header sayfasının detaylarına yönlendiriliyorsunuz");
  };

  return (
    <div>
      <h1>Header</h1>
      <Welcome name="Header" img={HeaderImg} />
      <Buton
        name="header"
        clickle={handleClick}
        color="white"
        bgColor="black"
      />
    </div>
  );
};

export default Header;
