import { h4styles, h3styles, pLarge, pSmall } from "@/styles/Type";
import { variables } from "@/styles/Variables";
import { useRef } from "react";
import { MediaQueries } from "@/styles/Utilities";
import Link from "next/link";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";

const CardContainer = styled(motion(Link))`
  padding: 30px;
  background-color: ${variables.color2};
  text-align: left;
  position: relative;
  border: 2px solid ${variables.color2};
  background: linear-gradient(
    135deg,
    rgb(0, 0, 0) 0%,
    rgb(0, 0, 0) 75%,
    rgb(189, 23, 22) 100%
  );
  display: flex;
  flex-direction: column;
  gap: 12px;
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
  width: 100%;
  max-height: 200px;
`;

const ProjectImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ProjectTitle = styled.p`
  ${h4styles}
`;

const ProjectDesc = styled.p`
  ${pSmall}
`;

const DetailsButton = styled.p`
  background-color: ${variables.color1};
  padding: 10px 44px 10px 24px;
  max-width: 200px;
  width: fit-content;
  text-align: center;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    transform: rotate(-90deg);
    background-image: url("/icons/caret-down.svg");
  }

  img {
    @media ${MediaQueries.mobile} {
      width: 25px;
      height: 25px;
    }
  }
`;

function ProjectCard({ data, index }) {
  const { img, projectTitle, desc, href } = data;

  return (
    <CardContainer
      href={href ? href : "/"}
      initial={{ opacity: 0, y: 100, scale: 0.2 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.85 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 50,
      }}
      // scroll={false}
    >
      <ProjectImageContainer>
        <ProjectImage src={img.src} alt={img.alt} />
      </ProjectImageContainer>
      <ProjectTitle>{projectTitle}</ProjectTitle>
      <DetailsButton>See Details</DetailsButton>
    </CardContainer>
  );
}

export default ProjectCard;
