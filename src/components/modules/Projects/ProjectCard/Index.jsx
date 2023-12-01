import { h4styles, pSmall } from "@/styles/Type";
import { variables } from "@/styles/Variables";
import { MediaQueries } from "@/styles/Utilities";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

const CardContainer = styled(motion(Link))`
  padding: 30px;
  background-color: ${variables.color2};
  text-align: left;
  position: relative;
  border: 3px solid ${variables.color2};
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
    transition: transform 0.3s ease-in;
    .details-text {
      transition: transform 0.3s ease-in;
      &::after {
        content: "";
        color: ${variables.color1} !important;
        transform: translateX(6px) rotate(-90deg);
        transition: transform 0.3s ease-in;
      }
    }
    .image {
      transition: transform 0.3s ease-in;
      transform: scale(1.1);
    }
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
  max-height: 175px;
`;

const ProjectImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease-in;
`;

const ProjectTitle = styled.p`
  ${h4styles}
`;

const DetailsButton = styled.p`
  color: ${variables.color4} !important;
  ${pSmall}
  max-width: 200px;
  width: fit-content;
  text-align: center;
  position: relative;
  transition: transform 0.3s ease-in;
  &::after {
    content: "";
    transition: transform 0.3s ease-in;
    position: absolute;
    top: 3px;
    width: 17px;
    height: 17px;
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

function ProjectCard({ data }) {
  const { img, projectTitle, href } = data;

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
      whileHover={{
        border: `3px solid ${variables.color1}`,
        borderRadius: "12px",
        transition: { duration: 0.3 },
      }}
    >
      <ProjectImageContainer>
        <ProjectImage
          width={0}
          height={0}
          className="image"
          src={img.src}
          alt={img.alt}
          quality={100}
          unoptimized
        />
      </ProjectImageContainer>
      <ProjectTitle>{projectTitle}</ProjectTitle>
      <DetailsButton className="details-text">See Details</DetailsButton>
    </CardContainer>
  );
}

export default ProjectCard;
