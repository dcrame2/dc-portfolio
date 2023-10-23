import React from "react";
import styled from "styled-components";
import { Container, MediaQueries } from "@/styles/Utilities";
import Header from "@/components/ui/Header/Index";
import { pBase } from "@/styles/Type";
import SkillCards from "./SkillCards/Index";

const AboutContainer = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 40%,
    rgba(255, 0, 0, 1) 100%
  );
  padding: 200px 0;
`;

const InnerContainer = styled.div`
  ${Container}
  display: flex;
  flex-direction: row;
  @media ${MediaQueries.tablet} {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media ${MediaQueries.tablet} {
    width: 100%;
  }
`;

const AboutParagraph = styled.p`
  ${pBase}
`;

const SkillsContainer = styled.div``;

function About({ data }) {
  const { header, aboutParagraph } = data;
  return (
    <AboutContainer>
      <InnerContainer>
        <TextContainer>
          <Header data={header} />
          <AboutParagraph>{aboutParagraph}</AboutParagraph>
        </TextContainer>
        <SkillsContainer>
          <SkillCards />
        </SkillsContainer>
      </InnerContainer>
    </AboutContainer>
  );
}

export default About;
