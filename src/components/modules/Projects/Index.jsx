import React from "react";
import ProjectCard from "./ProjectCard/Index";
import Header from "@/components/ui/Header/Index";
import styled from "styled-components";
import { Container, MediaQueries } from "@/styles/Utilities";

const ProjectContainer = styled.div``;

const ProjectInnerContainer = styled.div`
  ${Container}
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media ${MediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  @media ${MediaQueries.mobile} {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
`;

function Projects({ data }) {
  const { header, projects } = data;
  return (
    <ProjectContainer>
      <ProjectInnerContainer>
        <Header data={header} />
        <ProjectsGrid>
          {projects.map((project, index) => {
            return <ProjectCard key={index} data={project} />;
          })}
        </ProjectsGrid>
      </ProjectInnerContainer>
    </ProjectContainer>
  );
}

export default Projects;
