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
`;

const Icon = styled.img`
  width: 50px;
  height: auto;
`;

const SkillTitle = styled.p`
  text-align: center;
  ${pSmall}
`;

function SkillCards({ data, index }) {
  //   console.log(data);
  //   console.log(index);
  const { skill, icon } = data;

  return (
    <CardContainer
      initial={{ opacity: 0, rotateX: 180 }}
      whileInView={{ rotateX: 0, opacity: 1 }}
      transition={{ duration: `0.3`, delay: `${index * 0.15}` }}
    >
      <Icon src={icon.src} alt={icon.alt}></Icon>
      <SkillTitle>{skill}</SkillTitle>
    </CardContainer>
  );
}

export default SkillCards;
