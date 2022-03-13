import React from "react";
import { FrontPicture, Arrow } from "../styles/StyledComponents";
import front from "../assets/front.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

export default function HomeDisplay() {
  return (
    <>
      <FrontPicture src={front}></FrontPicture>
      <Arrow>
        <div class="bounce">
          <div class="icon">
            <FontAwesomeIcon icon={faAngleDoubleDown} />
          </div>
        </div>
      </Arrow>
    </>
  );
}
