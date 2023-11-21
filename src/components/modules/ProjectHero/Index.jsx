import { h1styles, h2styles } from "@/styles/Type";
import { Container } from "@/styles/Utilities";
import React from "react";
import styled from "styled-components";

const ProjectHeroContainer = styled.div`
  padding: 50px 0;
  /* background: linear-gradient(
    -205deg,
    rgb(0, 0, 0) 0%,
    rgb(0, 0, 0) 75%,
    rgb(189, 23, 22) 100%
  ); */
`;

const ProjectHeroInnerContainer = styled.div`
  ${Container}
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

const ProjectLogo = styled.img``;

function ProjectHero({ data }) {
  const { title } = data;
  return (
    <ProjectHeroContainer>
      <ProjectHeroInnerContainer>
        <ContentContainer>
          {title && <Title>{title}</Title>}
          {/* <ProjectLogo src="/logo/projectLogos/impact_logo.png" /> */}
        </ContentContainer>
        <Bar />
      </ProjectHeroInnerContainer>
    </ProjectHeroContainer>
  );
}

export default ProjectHero;
