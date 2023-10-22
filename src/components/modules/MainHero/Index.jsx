import { useRef } from "react";
import styled from "styled-components";
import { Container, MediaQueries } from "@/styles/Utilities";
import { motion, useInView } from "framer-motion";
import { h1styles, pBase, pSmall } from "@/styles/Type";

const MainContainer = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    193deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 56%,
    rgba(255, 0, 0, 1) 100%
  );
`;

const InnerContainer = styled.div`
  ${Container};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  /* align-items: center; */
`;

const ImgD = styled(motion.img)`
  height: 200px;
  @media ${MediaQueries.tablet} {
    height: 170px;
  }
  @media ${MediaQueries.mobile} {
    height: 150px;
  }
`;

const ImgC = styled(motion.img)`
  height: 200px;
  @media ${MediaQueries.tablet} {
    height: 170px;
  }
  @media ${MediaQueries.mobile} {
    height: 150px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Eyebrow = styled(motion.p)`
  ${pSmall}
`;

const Name = styled(motion.h1)`
  ${h1styles}
  text-align: center;
`;

const JobTitle = styled(motion.p)`
  ${pBase}
`;

function MainHero({ data }) {
  const { imgD, imgC, eyebrow, name, title } = data;
  const ref = useRef(null);
  const leftVariant = {
    visible: { opacity: 1, x: 0, scale: 1, rotate: 0 },
    hidden: { opacity: 0, x: -500, scale: 0.5, rotate: -360 },
  };

  const rightVariant = {
    visible: { opacity: 1, x: 0, scale: 1, rotate: 0 },
    hidden: { opacity: 0, x: 500, scale: 0.5, rotate: 360 },
  };

  const fadeInVariant = {
    visible: { opacity: 1, scale: 1 }, // Add 'rotate' property
    hidden: { opacity: 0, scale: 0.5 },
  };

  const isInView = useInView(ref, { once: true, margin: "0px 0px 0% 0px" });
  return (
    <MainContainer ref={ref}>
      <InnerContainer>
        <ImgContainer>
          <ImgD
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ ease: "easeInOut", duration: 2, delay: 1 }}
            variants={leftVariant}
            src={imgD.url}
            alt={imgD.alt}
          />
          <ImgC
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ ease: "easeInOut", duration: 2, delay: 1 }}
            variants={rightVariant}
            src={imgC.url}
            alt={imgC.alt}
          />
        </ImgContainer>
        <ContentContainer>
          {/* <Eyebrow
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ ease: "easeInOut", duration: 1 }}
            variants={fadeInVariant}
          >
            {eyebrow}
          </Eyebrow> */}
          <Name
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ ease: "easeInOut", duration: 1.3 }}
            variants={fadeInVariant}
          >
            {name}
          </Name>
          <JobTitle
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ ease: "easeInOut", duration: 1.6 }}
            variants={fadeInVariant}
          >
            {title}
          </JobTitle>
        </ContentContainer>
      </InnerContainer>
    </MainContainer>
  );
}

export default MainHero;
