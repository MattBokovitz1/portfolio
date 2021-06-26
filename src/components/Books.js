import React from "react";
import {
  BlogTitle,
  MattSection,
  ProfilePicture,
  Bio,
} from "../styles/StyledComponents";
import matt from "../assets/Matt.png";

function Book() {
  return (
    <>
      <BlogTitle>A few of my favorite books!</BlogTitle>
      <MattSection>
        <ProfilePicture src={matt} alt="Profile Picture" />
        <Bio>
          I'm passionate about innovation and driven by impact. <br></br>
          <br></br>I am a Web Developer in Philadelphia, PA. My current tech
          stack includes React.js and Node.js. I enjoy making websites with
          clean and easily navigable designs.
          <br></br>
          <br></br>
          Also, a large reason for creating this site was to provide a space to
          share my writing. I plan on writing about ideas and bits of life that
          have shaped how I view the world in an appreciative manner.
        </Bio>
      </MattSection>
    </>
  );
}

export default Book;
