import React, { useState } from "react";
import styled from "@emotion/styled";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "../assets/img/Group 97 (1).svg";
import ExpandedMore from "../assets/img/Group 96.svg";
import Fade from "@mui/material/Fade";

const AccordionContainer = styled("div")`
  width: 812px;
  display: flex;
  flex-direction: column;
  padding: 26px 0 33px 77px;
  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    padding: 0;
  }
`;

export default function AccordionTransition({ arrow }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (id) => (event, isExpanded) => {
    setExpanded(isExpanded ? id : false);
  };

  return (
    <AccordionContainer>
      {arrow.map((elem) => (
        <Accordion
          key={elem.id}
          expanded={expanded === elem.id}
          onChange={handleChange(elem.id)}
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 400 }}
        >
          <AccordionSummary
            expandIcon={
              expanded === elem.id ? (
                <img src={ExpandedMore} alt="Collapse icon" />
              ) : (
                <img src={ExpandMoreIcon} alt="Expand icon" />
              )
            }
            aria-controls={`panel${elem.id}-content`}
            id={`panel${elem.id}-header`}
          >
            <Typography>
              {elem?.img && (
                <img
                  src={elem?.img}
                  alt={`${elem.title} icon`}
                  style={{ width: 24, height: 24, marginRight: 8 }}
                />
              )}
              {elem.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{elem.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </AccordionContainer>
  );
}
