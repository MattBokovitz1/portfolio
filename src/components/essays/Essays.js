import React from "react";
import { EssaySection, EssayTitle } from "../../styles/StyledComponents";
import EssayTitleAndBody from "./EssayBody";

function Essays() {
  return (
    <>
      <EssaySection>
        <EssayTitle>Essays</EssayTitle>
      </EssaySection>
      <EssayTitleAndBody />
    </>
  );
}

export default Essays;
