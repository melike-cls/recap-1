import React from "react";

const Welcome = ({ name, img }) => {
  //   console.log(props);
  return (
    <div>
      <h2>Welcome to {name} pages</h2>
      <img src={img} alt="" />
    </div>
  );
};

export default Welcome;
