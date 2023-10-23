import { variables } from "@/styles/Variables";
import React from "react";
import styled from "styled-components";
import { pSmall } from "@/styles/Type";
import { motion } from "framer-motion";

const CardContainer = styled(motion.div)`
  border: 1px solid ${variables.color1};
  background-color: ${variables.black};
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  justify-content: center;
  /* border-radius: 12px; */
`;

const Icon = styled.img`
  width: 50px;
  height: auto;
`;

const SkillTitle = styled.p`
  text-align: center;
  ${pSmall}
`;

function SkillCards({ data }, index) {
  console.log(data);
  const { skill, icon } = data;
  return (
    <CardContainer
      initial={{ scale: 0.8, rotateY: 180 }}
      animate={{ scale: 1, rotateY: 0 }}
      exit={{ scale: 0.8, rotateY: 180 }}
      transition={{ duration: `0.5` }}
    >
      <Icon src={icon.src} alt={icon.alt}></Icon>
      <SkillTitle>{skill}</SkillTitle>
    </CardContainer>
  );
}

export default SkillCards;
