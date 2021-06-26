import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
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
        <Role>Web Developer</Role>
      </Description>
      <LinksDiv>
        <Links
          to="/blog"
          onMouseOver={() => showTooltip("Blog  ")}
          onFocus={() => showTooltip("Blog  ")}
          onMouseLeave={hideTooltip}
          onBlur={hideTooltip}
          aria-label="Matt's Blog"
        >
          <FontAwesomeIcon icon={faPencilAlt} />
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
          onMouseOver={() => showTooltip("Twitter  ")}
          onFocus={() => showTooltip("Twitter  ")}
          onMouseLeave={hideTooltip}
          onBlur={hideTooltip}
          aria-label="Matt's Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} />
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
