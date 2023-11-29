import { h1styles, h2styles } from "@/styles/Type";
import { Container, MediaQueries } from "@/styles/Utilities";
import React from "react";
import styled, { keyframes } from "styled-components";
import BuiltWith from "../BuiltWith/Index";
import Link from "next/link";
import { variables } from "@/styles/Variables";

const ProjectHeroContainer = styled.div`
  padding: 40px 0;
  position: relative;
  @media ${MediaQueries.tablet} {
    padding: 30px 0;
  }
  @media ${MediaQueries.mobile} {
    padding: 20px 0;
  }
`;

const ProjectHeroInnerContainer = styled.div`
  ${Container}
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 40px;
  @media ${MediaQueries.tablet} {
    gap: 30px;
  }
  @media ${MediaQueries.mobile} {
    gap: 20px;
  }
`;

const ContentContainer = styled.div``;

const Title = styled.h1`
  ${h2styles}
`;

const Bar = styled.div`
  height: 30px;
  background: linear-gradient(
    300deg,
    rgb(0, 0, 0) 0%,
    rgb(0, 0, 0) 10%,
    rgb(189, 23, 22) 100%
  );
`;

const LinkContainer = styled.div`
  position: sticky;
`;
const wiggle = keyframes`
   0% {
      transform: rotate(0deg);
    }
    80% {
      transform: rotate(0deg);
    }
    85% {
      transform: rotate(10deg);
    }
    95% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  
`;

const ExternalLink = styled(Link)`
  position: fixed;
  padding: 10px 20px;
  z-index: 1;
  border-radius: 0px 0px 12px 12px;
  background-color: ${variables.color1};
  top: 300px;
  transform: rotate(-90deg);
  left: -58px;
  display: flex;
  gap: 4px;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: transparent;
    transition: all 0.3s ease-in;
    &::after {
      animation: ${wiggle} 0.7s infinite;
    }
  }
  &::after {
    width: 20px;
    height: 20px;
    background-size: cover;
    background-repeat: no-repeat;
    content: "";
    display: block;
    background-image: url("/icons/external_link.svg");
  }
  @media ${MediaQueries.mobile} {
    padding: 3px 8px;
    top: 375px;
  }
`;

function ProjectHero({ data }) {
  const { title } = data;
  return (
    <ProjectHeroContainer>
      <ProjectHeroInnerContainer>
        <ContentContainer>
          <Title>{title}</Title>
        </ContentContainer>
        <Bar />
      </ProjectHeroInnerContainer>
    </ProjectHeroContainer>
  );
}

export default ProjectHero;
