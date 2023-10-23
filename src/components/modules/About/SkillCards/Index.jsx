import { variables } from "@/styles/Variables";
import React from "react";
import styled from "styled-components";
import { pSmall } from "@/styles/Type";

const CardContainer = styled.div`
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

function SkillCards({ data }) {
  console.log(data);
  const { skill, icon } = data;
  return (
    <CardContainer>
      <Icon src={icon.src} alt={icon.alt}></Icon>
      <SkillTitle>{skill}</SkillTitle>
    </CardContainer>
  );
}

export default SkillCards;
