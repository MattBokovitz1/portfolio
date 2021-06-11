import React from "react";
import {
  About,
  ProfilePicture,
  Bio,
  MattSection,
} from "../styles/StyledComponents";
import matt from "../assets/Matt.png";

function Home() {
  return (
    <>
      <About>About Me</About>
      <MattSection>
        <ProfilePicture src={matt} alt="Profile Picture" />
        <Bio>
          I am a Web Developer in Philadelphia, PA. My current tech stack
          includes React.js and Node.js. I enjoy making websites with clean and
          navigable designs. <br></br>
          <br></br>
          Also, a large reason for creating this site was to provide a space to
          share my writings. My thoughts on what to write about are derived from
          my interests whether physical, intellectual, social, or mental. I will
          write about ideas which help me live a positive life.
        </Bio>
      </MattSection>
    </>
  );
}

export default Home;
