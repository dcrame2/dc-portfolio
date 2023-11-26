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
  gap: 40px;
  @media ${MediaQueries.tablet} {
    gap: 30px;
  }
  @media ${MediaQueries.mobile} {
    gap: 20px;
  }
`;

const ContentContainer = styled.div`
  /* display: flex;
  gap: 12px;
  @media ${MediaQueries.tablet} {
    gap: unset;
  } */
  /* @media ${MediaQueries.mobile} {
    width: 70px;
  } */
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
  /* border-right: 1px solid white;
  border-left: 1px solid white;
  border-bottom: 1px solid white; */
  border-radius: 0px 0px 12px 12px;
  background-color: ${variables.color1};
  top: 300px;
  transform: rotate(-90deg);
  left: -58px;
  display: flex;
  gap: 4px;
  transition: all 0.3s ease-in;
  &:hover {
    /* border-right: 1px solid ${variables.color1};
    border-left: 1px solid ${variables.color1};
    border-bottom: 1px solid ${variables.color1}; */
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

const ExternalImg = styled.img`
  width: 55px;
  animation: ${wiggle} 1s infinite;
  /* position: fixed; */
  background-color: ${variables.color1};
  border-radius: 12px;
  @media ${MediaQueries.tablet} {
    width: 70px;
  }
  @media ${MediaQueries.mobile} {
    width: 70px;
  }
  &:hover {
    .external-link {
      fill: ${variables.color1};
    }
  }
`;

const VerticalLine = styled.p`
  ${h2styles}
  color: ${variables.color1};
  @media ${MediaQueries.tablet} {
    width: 70px;
  }
  @media ${MediaQueries.mobile} {
    display: none;
  }
`;

const ProjectLogo = styled.img``;

function ProjectHero({ data }) {
  const { title, websiteUrl } = data;
  return (
    <ProjectHeroContainer>
      {/* <LinkContainer> */}
      <ExternalLink target="_blank" href={websiteUrl}>
        Visit Project
        {/* <ExternalImg src="/icons/external_link.svg" /> */}
      </ExternalLink>
      {/* </LinkContainer> */}
      <ProjectHeroInnerContainer>
        <ContentContainer>
          <Title>{title}</Title>
          {/* <VerticalLine>|</VerticalLine> */}
        </ContentContainer>
        <Bar />
      </ProjectHeroInnerContainer>
    </ProjectHeroContainer>
  );
}

export default ProjectHero;
