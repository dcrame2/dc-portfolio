import { useRef } from "react";
import ProjectCard from "./ProjectCard/Index";
import Header from "@/components/ui/Header/Index";
import styled from "styled-components";
import { Container, MediaQueries } from "@/styles/Utilities";
import { AnimatePresence } from "framer-motion";

const ProjectContainer = styled.div`
  padding: 200px 0;
`;

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
  const { header, projects, id } = data;

  return (
    <ProjectContainer id={id}>
      <ProjectInnerContainer>
        <Header data={header} />
        <ProjectsGrid>
          {/* <AnimatePresence initial={true}> */}
          {projects.map((project, index) => {
            return <ProjectCard key={index} data={project} />;
          })}
          {/* </AnimatePresence> */}
        </ProjectsGrid>
      </ProjectInnerContainer>
    </ProjectContainer>
  );
}

export default Projects;
