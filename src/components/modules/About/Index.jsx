import { useState, useRef } from "react";
import styled from "styled-components";
import { Container, MediaQueries } from "@/styles/Utilities";
import Header from "@/components/ui/Header/Index";
import { pBase } from "@/styles/Type";
import SkillCards from "./SkillCards/Index";
import { motion } from "framer-motion";

const AboutContainer = styled.div`
  background: rgb(0, 0, 0);
  /* background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 40%,
    #bd1716 100%
  ); */
  background: linear-gradient(
    135deg,
    rgb(189, 23, 22) 0%,
    rgb(0, 0, 0) 100%,
    rgb(0, 0, 0) 100%
  );
  padding: 200px 0;
`;

const InnerContainer = styled.div`
  ${Container}
  display: flex;
  flex-direction: row;
  gap: 50px;
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

const AboutParagraph = styled(motion.p)`
  ${pBase}
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* gap: 10px; */
  @media ${MediaQueries.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${MediaQueries.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function About({ data }) {
  const { header, aboutParagraph, cards } = data;
  const ref = useRef(null);

  return (
    <AboutContainer ref={ref}>
      <InnerContainer>
        <TextContainer>
          <Header data={header} />
          <AboutParagraph
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: `2` }}
          >
            {aboutParagraph}
          </AboutParagraph>
        </TextContainer>
        <SkillsContainer>
          {cards.map((card, index) => {
            return (
              <SkillCards index={index} key={`${card.skill}`} data={card} />
            );
          })}
        </SkillsContainer>
      </InnerContainer>
    </AboutContainer>
  );
}

export default About;
