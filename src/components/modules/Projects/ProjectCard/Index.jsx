import { h3styles, pLarge, pSmall } from "@/styles/Type";
import { variables } from "@/styles/Variables";
import React from "react";

import styled from "styled-components";

const CardContainer = styled.button`
  padding: 30px;
  background-color: ${variables.color2};
  border-radius: 12px;
  border: 2px solid ${variables.color2};
  text-align: left;
  /* cursor: pointer; */
  &:hover {
    border: 2px solid ${variables.color1};
  }
`;

const ProjectImageContainer = styled.div`
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
`;

const ProjectTitle = styled.p`
  ${pLarge}
`;

const ProjectDesc = styled.p`
  ${pSmall}
`;

const DetailsButton = styled.button``;

function ProjectCard({ data }) {
  console.log(data);
  const { img, projectTitle, desc } = data;
  return (
    <CardContainer>
      <ProjectImageContainer>
        <ProjectImage src={img.src} alt={img.alt} />
      </ProjectImageContainer>
      <ProjectTitle>{projectTitle}</ProjectTitle>
      <ProjectDesc>{desc}</ProjectDesc>
      <DetailsButton>See Details</DetailsButton>
    </CardContainer>
  );
}

export default ProjectCard;
