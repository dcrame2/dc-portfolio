import { Container, MediaQueries } from "@/styles/Utilities";
import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Header from "@/components/ui/Header/Index";
import Tab from "./Tab/Index";

const HistoryContainer = styled.div`
  height: 100vh;
  padding: 200px 0;
  background: linear-gradient(
    120deg,
    rgb(189, 23, 22) 0%,
    rgb(0, 0, 0) 30%,
    rgb(0, 0, 0) 100%
  );
`;

const HistoryInnerContainer = styled.div`
  ${Container}
`;

const ParallaxIntroVisual = styled.div`
  background-image: url("/logo/logo_no_bg.png");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  img {
    width: 100%;
    max-width: 500px;
    @media ${MediaQueries.tablet} {
      max-width: 300px;
    }
  }
  .logo-image {
    position: absolute;
    right: 0;
    @media ${MediaQueries.tablet} {
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

function History({ data }) {
  const { header, logo, companies, companiesInfo, id } = data;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);
  const translateY2 = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);
  const translateX2 = useTransform(scrollYProgress, [0, 1], ["-1%", "1%"]);

  const isInView = useInView(ref, {
    once: true,
    margin: `0px 0px 20% 0px`,
  });

  const variants = {
    logoVariant: {
      hidden: { opacity: 0, x: "200px" },
      visible: { opacity: 1, x: "0px" },
    },
  };
  return (
    <HistoryContainer>
      <HistoryInnerContainer>
        <ParallaxIntroVisual ref={ref}>
          <motion.picture
            id={id}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants.logoVariant}
            transition={{ duration: 0.3 }}
            style={{ y: translateY }}
            className="logo-image"
          >
            <source media="(min-width:1100px)" srcSet={logo.src} />
            <source media="(min-width:500px)" srcSet={logo.src} />
            <img src={logo.src} alt={logo.alt} />
          </motion.picture>
        </ParallaxIntroVisual>
        <WorkContainer>
          <Header data={header} />
          <Tab companies={companies} companiesInfo={companiesInfo} />
        </WorkContainer>
      </HistoryInnerContainer>
    </HistoryContainer>
  );
}

export default History;
