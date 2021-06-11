import React from "react";
import { About, ProfilePicture } from "../styles/StyledComponents";
import matt from "../assets/Matt.png";

function Home() {
  return (
    <>
      <About>About Me</About>
      <ProfilePicture src={matt} alt="Profile Picture" />
    </>
  );
}

export default Home;
