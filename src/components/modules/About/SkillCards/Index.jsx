import { variables } from "@/styles/Variables";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import { pSmall } from "@/styles/Type";
import { motion, useInView } from "framer-motion";

const CardContainer = styled(motion.div)`
  border: 1px solid ${variables.color1};
  background-color: ${variables.black};
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  justify-content: center;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const SkillTitle = styled.p`
  text-align: center;
  ${pSmall}
`;

function SkillCards({ data }) {
  const { skill, icon } = data;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <CardContainer
      ref={ref}
      initial={{ opacity: 0, rotateX: 180 }}
      animate={isInView ? { rotateX: 0, opacity: 1 } : {}}
      transition={{ duration: `0.5`, ease: "easeInOut" }}
    >
      <Icon src={icon.src} alt={icon.alt}></Icon>
      <SkillTitle>{skill}</SkillTitle>
    </CardContainer>
  );
}

export default SkillCards;
