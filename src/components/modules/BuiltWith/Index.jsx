import { Container, MediaQueries } from "@/styles/Utilities";
import React from "react";
import styled from "styled-components";
import { variables } from "@/styles/Variables";

import { pLarge, pSmall } from "@/styles/Type";

const BuiltWithContainer = styled.div`
  padding-bottom: 80px;
`;

const BuiltWithInnerContainer = styled.div`
  ${Container}
  display: flex;

  justify-content: space-between;
  align-items: center;
  gap: 50px;
  @media ${MediaQueries.tablet} {
    gap: 30px;
    flex-direction: column-reverse;
  }
  @media ${MediaQueries.mobile} {
    gap: 20px;
    flex-direction: column-reverse;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media ${MediaQueries.tablet} {
    width: 100%;

    justify-content: space-between;
    gap: 50px;
  }

  @media ${MediaQueries.mobile} {
    width: 100%;
    flex-direction: column;
    gap: 20px;
  }
`;

const Img = styled.img`
  width: 60%;
  @media ${MediaQueries.tablet} {
    width: 100%;
  }
`;

const Description = styled.div`
  p {
    ${pSmall}
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${MediaQueries.tablet} {
    justify-content: center;
  }
`;

const IndividualCardContainer = styled.div`
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
  ${pSmall}
`;

function BuiltWith({ data }) {
  const { description, builtWith, img } = data;
  return (
    <BuiltWithContainer>
      <BuiltWithInnerContainer>
        <ContentContainer>
          <Description dangerouslySetInnerHTML={{ __html: description }} />
          <CardContainer>
            {builtWith.map((lang, index) => {
              const { skill, icon } = lang;
              return (
                <IndividualCardContainer>
                  <Icon src={icon.src} alt={icon.alt}></Icon>
                  {/* <SkillTitle>{skill}</SkillTitle> */}
                </IndividualCardContainer>
              );
            })}
          </CardContainer>
        </ContentContainer>
        {img && <Img src={img.src} alt={img.alt} />}
      </BuiltWithInnerContainer>
    </BuiltWithContainer>
  );
}

export default BuiltWith;
