import { h2styles } from "@/styles/Type";
import { Container, MediaQueries } from "@/styles/Utilities";
import React from "react";
import styled from "styled-components";

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
