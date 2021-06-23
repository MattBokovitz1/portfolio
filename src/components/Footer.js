import React from "react";
import { Bottom, Sailboat } from "../styles/StyledComponents";
import boat from "../assets/boat.jpg";

function Footer() {
  return (
    <>
      <Sailboat src={boat}></Sailboat>
      <Bottom>| Matt Bokovitz - 2021 |</Bottom>
    </>
  );
}

export default Footer;
