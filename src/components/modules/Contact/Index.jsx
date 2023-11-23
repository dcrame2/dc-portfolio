import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Form from "./Form/Index";
import Header from "@/components/ui/Header/Index";
import { Container, MediaQueries } from "@/styles/Utilities";

import { pBase } from "@/styles/Type";

const ContactContainer = styled.div`
  padding: 80px 0;
`;

const ContactInnerContainer = styled.div`
  ${Container}
  display: flex;
  justify-content: space-between;
  gap: 50px;
  flex-direction: column;

  align-items: center;
  @media ${MediaQueries.tablet} {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
  @media ${MediaQueries.mobile} {
    gap: 20px;
    align-items: flex-start;
  }
`;

const ContactContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  @media ${MediaQueries.tablet} {
    gap: 12px;
    align-items: center;
  }
  @media ${MediaQueries.mobile} {
    gap: 12px;
    align-items: flex-start;
  }
`;

const LogoRotate = keyframes`
 
  0% {
    transform: rotateY(0);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }

`;

const Logo = styled.img`
  animation: ${LogoRotate} 3s both infinite;
  width: 150px;
  @media ${MediaQueries.mobile} {
    display: none;
  }
`;

const Description = styled.p`
  ${pBase}
`;

function Contact({ data }) {
  const { header, logo, description, id } = data;
  return (
    <ContactContainer id={id}>
      <ContactInnerContainer>
        <ContactContentContainer>
          <Header data={header} />
          <Description>{description}</Description>
          {/* <Logo src={logo.url} alt={logo.alt} /> */}
        </ContactContentContainer>
        <Form />
      </ContactInnerContainer>
    </ContactContainer>
  );
}

export default Contact;
