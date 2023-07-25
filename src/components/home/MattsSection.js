import React from "react";
import {
  SmallProfile,
  ProfilePicture,
  Bio,
  MattSection,
  Matt,
} from "../../styles/StyledComponents";

import matt from "../../assets/Matt.png";
import smallprofile from "../../assets/SmallProfile.png";

export default function MattsSection() {
  return (
    <>
      <Matt>Matt Bokovitz</Matt>
      <MattSection>
        <ProfilePicture src={matt} alt="Profile Picture" />
        <SmallProfile src={smallprofile} alt="Profile Picture" />
        <Bio>
          I'm passionate about innovation and driven to help others.
          <br></br>I am a Web Developer in Milwaukee, Wisconsin working for
          Northwestern Mutual. My current tech stack includes React.js and
          Node.js. My passions are technology, philosophy, history, science, and
          psychology.
          <br></br>
          Also, a large reason for creating this site was to provide a space to
          share my writing. I plan on writing about ideas and bits of life that
          have shaped how I view the world in an appreciative manner.
        </Bio>
      </MattSection>
    </>
  );
}
