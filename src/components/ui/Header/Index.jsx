import { h2styles, pBase } from "@/styles/Type";
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Eyebrow = styled.p`
  ${pBase}
`;

const Title = styled.h2`
  ${h2styles}
`;

function Header({ data }) {
  const { eyebrow, title } = data;
  return (
    <HeaderContainer>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Title>{title}</Title>
    </HeaderContainer>
  );
}

export default Header;
