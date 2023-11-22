import { h1styles, h2styles } from "@/styles/Type";
import { Container, MediaQueries } from "@/styles/Utilities";
import React from "react";
import styled, { keyframes } from "styled-components";
import BuiltWith from "../BuiltWith/Index";
import Link from "next/link";
import { variables } from "@/styles/Variables";

const ProjectHeroContainer = styled.div`
  padding: 40px 0;
  /* background: linear-gradient(
    -205deg,
    rgb(0, 0, 0) 0%,
    rgb(0, 0, 0) 75%,
    rgb(189, 23, 22) 100%
  ); */
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
  gap: 40px;
  @media ${MediaQueries.tablet} {
    gap: 30px;
  }
  @media ${MediaQueries.mobile} {
    gap: 20px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 12px;
  /* justify-content: space-between; */
`;

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

const LinkContainer = styled.div``;

const ExternalLink = styled(Link)``;

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

const ExternalImg = styled.img`
  width: 100px;
  animation: ${wiggle} 1s infinite;
  &:hover {
    .external-link {
      fill: ${variables.color1};
    }
  }
`;

const VerticalLine = styled.p`
  ${h2styles}
  color: ${variables.color1};
`;

const ProjectLogo = styled.img``;

function ProjectHero({ data }) {
  const { title, websiteUrl } = data;
  return (
    <ProjectHeroContainer>
      <ProjectHeroInnerContainer>
        <ContentContainer>
          <Title>{title}</Title>
          <VerticalLine>|</VerticalLine>
          <LinkContainer>
            <ExternalLink target="_blank" href={websiteUrl}>
              <ExternalImg src="/icons/external_link.svg" />
            </ExternalLink>
          </LinkContainer>
        </ContentContainer>
        <Bar />
      </ProjectHeroInnerContainer>
    </ProjectHeroContainer>
  );
}

export default ProjectHero;
