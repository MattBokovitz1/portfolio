import { faGithub, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPencilAlt,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  LinksDiv,
  Links,
  Nav,
  Name,
  NameLink,
  Role,
  Description,
  OutsideLinks,
  Tooltip,
  TooltipIcon,
  TooltipText,
} from "../styles/StyledComponents";
import Icon from "../components/Icon";

function NavBar() {
  const [tooltipIsVisible, setTooltipIsVisible] = useState(false);
  const [tooltipText, setTooltipText] = useState("");

  const showTooltip = (tooltipText) => {
    setTooltipIsVisible(true);
    setTooltipText(tooltipText);
  };

  const hideTooltip = () => {
    setTooltipIsVisible(false);
  };

  return (
    <Nav>
      <Description>
        <NameLink to="/">
          <Name>Matt Bokovitz</Name>
        </NameLink>
        <Role>Software Engineer</Role>
      </Description>
      <LinksDiv>
        <Links
          to="/essays"
          onMouseOver={() => showTooltip("Essays  ")}
          onFocus={() => showTooltip("Essays  ")}
          onMouseLeave={hideTooltip}
          onBlur={hideTooltip}
          aria-label="Matt's Essays"
        >
          <FontAwesomeIcon icon={faPencilAlt} />
        </Links>
        <Links
          to="/books"
          onMouseOver={() => showTooltip("Books  ")}
          onFocus={() => showTooltip("Books  ")}
          onMouseLeave={hideTooltip}
          onBlur={hideTooltip}
          aria-label="Matt's Books"
        >
          <FontAwesomeIcon icon={faBook} />
        </Links>

        <OutsideLinks
          href="https://github.com/MattBokovitz1"
          onMouseOver={() => showTooltip("Github  ")}
          onFocus={() => showTooltip("Github  ")}
          onMouseLeave={hideTooltip}
          onBlur={hideTooltip}
          aria-label="Matt's Github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </OutsideLinks>
        <OutsideLinks
          href="https://twitter.com/matt_bokovitz"
          onMouseOver={() => showTooltip("X  ")}
          onFocus={() => showTooltip("X  ")}
          onMouseLeave={hideTooltip}
          onBlur={hideTooltip}
          aria-label="Matt's X"
        >
          <FontAwesomeIcon icon={faSquareXTwitter} />
        </OutsideLinks>
        <OutsideLinks
          href='mailto:matt.bokovitz1@gmail.com?subject="re: Portfolio'
          onMouseOver={() => showTooltip("Email  ")}
          onFocus={() => showTooltip("Email  ")}
          onMouseLeave={hideTooltip}
          onBlur={hideTooltip}
          aria-label="Matt's email"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </OutsideLinks>
        <Tooltip visible={tooltipIsVisible}>
          <TooltipText>{tooltipText} </TooltipText>
          <TooltipIcon>
            <Icon glyph="arrow" size={32} />
          </TooltipIcon>
        </Tooltip>
      </LinksDiv>
    </Nav>
  );
}

export default NavBar;
