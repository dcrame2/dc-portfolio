import React from "react";
import styled from "styled-components";
import { Container, MediaQueries } from "@/styles/Utilities";
import { variables } from "@/styles/Variables";
import { pLarge, pSmall, h3styles } from "@/styles/Type";
import Link from "next/link";

const CTAContainer = styled.div`
  background-color: ${variables.color1};
  padding: 48px 0;
  background: linear-gradient(
    300deg,
    rgb(0, 0, 0) 0%,
    rgb(0, 0, 0) 10%,
    rgb(189, 23, 22) 100%
  );
  @media ${MediaQueries.tablet} {
    padding: 24px 0;
  }
`;

const CTAInnerContainer = styled.div`
  ${Container}
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Header = styled.p`
  ${pLarge}
`;

const Description = styled.p`
  ${pSmall}
  text-align: center;
`;

// TODO: Make this Details button a reusable
const DetailsButton = styled(Link)`
  background-color: white;
  padding: 10px 24px 10px 24px;
  max-width: 200px;
  width: 100%;
  text-align: center;
  position: relative;
  color: black;
  transition: background-color ease-in-out 0.3s;
  &:hover {
    transition: background-color ease-in-out 0.3s;
    background-color: ${variables.color2};
  }
  @media ${MediaQueries.mobile} {
    max-width: unset;
  }

  img {
    @media ${MediaQueries.mobile} {
      width: 25px;
      height: 25px;
    }
  }
`;

function ContactCTA({ data }) {
  const { description, header, href } = data;
  return (
    <CTAContainer>
      <CTAInnerContainer>
        <Header>{header}</Header>
        <Description>{description}</Description>
        <DetailsButton href={href}>Contact</DetailsButton>
      </CTAInnerContainer>
    </CTAContainer>
  );
}

export default ContactCTA;
