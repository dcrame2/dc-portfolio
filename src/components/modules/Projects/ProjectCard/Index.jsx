import { h4styles, h3styles, pLarge, pSmall } from "@/styles/Type";
import { variables } from "@/styles/Variables";
import React from "react";
import { MediaQueries } from "@/styles/Utilities";
import Link from "next/link";
import styled from "styled-components";

const CardContainer = styled(Link)`
  padding: 30px;
  background-color: ${variables.color2};
  /* border-radius: 12px; */
  border: 2px solid ${variables.color2};
  text-align: left;
  position: relative;
  /* cursor: pointer; */
  background: linear-gradient(
    135deg,
    rgb(0, 0, 0) 0%,
    rgb(0, 0, 0) 75%,
    rgb(189, 23, 22) 100%
  );
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 2px solid ${variables.color1};
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
  }
  @media ${MediaQueries.tablet} {
    padding: 20px;
  }
  @media ${MediaQueries.tablet} {
    padding: 14px;
  }
`;

const ProjectImageContainer = styled.div`
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  /* max-width: 450px;
  height: 150px; */

  /* transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  } */
`;

const ProjectTitle = styled.p`
  ${h4styles}
`;

const ProjectDesc = styled.p`
  ${pSmall}
`;

const DetailsButton = styled.p`
  background-color: ${variables.color1};
  padding: 10px 24px;
  max-width: 200px;
  width: fit-content;
  text-align: center;
  /* position: absolute;
  right: 8px;
  bottom: 8px; */
  img {
    @media ${MediaQueries.mobile} {
      width: 25px;
      height: 25px;
    }
  }
  /* transform: rotate(-40deg); */
`;

function ProjectCard({ data }) {
  // console.log(data);
  const { img, projectTitle, desc, href } = data;
  return (
    <CardContainer href={href ? href : "/"}>
      <ProjectImageContainer>
        <ProjectImage src={img.src} alt={img.alt} />
      </ProjectImageContainer>
      <ProjectTitle>{projectTitle}</ProjectTitle>
      {/* <ProjectDesc>{desc}</ProjectDesc> */}
      <DetailsButton>See Details</DetailsButton>
    </CardContainer>
  );
}

export default ProjectCard;
