import { h2styles, pBase } from "@/styles/Type";
import { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { variables } from "@/styles/Variables";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled(motion.h2)`
  ${h2styles}
  overflow: hidden;
  text-transform: uppercase;
  white-space: nowrap;
  display: flex;
  gap: 10px;
  @media ${variables.mobile} {
    gap: 4px;
  }
`;

const Letter = styled(motion.p)``;

function Header({ data }) {
  const { title } = data;

  const ref = useRef();
  return (
    <HeaderContainer ref={ref}>
      <Title>
        {title.split("").map((letter, index) => {
          return (
            <Letter
              key={index}
              initial={{ opacity: 0, rotateY: -360 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: `0.3`, delay: `${index * 0.15}` }}
            >
              {letter}
            </Letter>
          );
        })}
      </Title>
    </HeaderContainer>
  );
}

export default Header;
