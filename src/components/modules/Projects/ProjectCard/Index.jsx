import { h4styles, h3styles, pLarge, pSmall } from "@/styles/Type";
import { variables } from "@/styles/Variables";
import { useRef } from "react";
import { MediaQueries } from "@/styles/Utilities";
import Link from "next/link";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";

const CardContainer = styled(motion.div)`
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
  /* transition: all 0.3s ease-in-out; */
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
`;

function ProjectCard({ data, index }) {
  const { img, projectTitle, desc, href } = data;

  return (
    <CardContainer
      initial={{ opacity: 0, y: 100, scale: 0.3 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.85 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 80,
      }}
    >
      <Link href={href ? href : "/"}>
        <ProjectImageContainer>
          <ProjectImage src={img.src} alt={img.alt} />
        </ProjectImageContainer>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        {/* <ProjectDesc>{desc}</ProjectDesc> */}
        <DetailsButton>See Details</DetailsButton>
      </Link>
    </CardContainer>
  );
}

export default ProjectCard;
