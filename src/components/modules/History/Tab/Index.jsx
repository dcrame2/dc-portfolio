import React, { useState } from "react";
import styled from "styled-components";
import { variables } from "@/styles/Variables";
import { motion } from "framer-motion";
import { MediaQueries } from "@/styles/Utilities";

const TabContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  @media ${MediaQueries.tablet} {
    flex-direction: column;
  }
`;

const ComapnyTabContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  max-width: 200px;
  width: 100%;
`;

const ComapnyTab = styled.li`
  background-color: ${({ active }) =>
    active ? variables.color1 : variables.transparent};
  cursor: pointer;
  padding: 12px 8px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    transition: background-color 0.3s ease-in-out;
    background-color: ${variables.color2};
  }
  @media ${MediaQueries.mobile} {
    &:hover {
      transition: unset;
      /* background-color: unset; */
    }
  }
`;

const CompaniesInfoContainer = styled.div`
  width: 50%;
  @media ${MediaQueries.tablet} {
    flex-direction: column;
    width: 100%;
  }
`;

const CompaniesInfo = styled(motion.div)`
  display: ${({ active }) => (active ? "block" : "none")};
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 8px;
  @media ${MediaQueries.tablet} {
    flex-direction: column;
  }
`;

const Title = styled.h2``;

const Company = styled.h2`
  color: ${variables.color1};
`;

const DescContainer = styled.ul`
  list-style-type: none;
`;

const DescList = styled.li`
  &::before {
    content: "•";
    color: ${variables.color1};
    padding-right: 5px;
    font-size: 30px;
  }
`;

function Tab({ companies, companiesInfo }) {
  const [activeTab, setActiveTab] = useState(0);
  console.log(activeTab);

  function handleTabClick(index) {
    setActiveTab(index);
  }

  return (
    <TabContainer>
      <ComapnyTabContainer>
        {companies.map((company, index) => {
          return (
            <ComapnyTab
              key={index}
              active={index === activeTab}
              onClick={() => handleTabClick(index)}
            >
              {company}
            </ComapnyTab>
          );
        })}
      </ComapnyTabContainer>
      <CompaniesInfoContainer>
        {companiesInfo.map((info, index) => {
          const { title, company, timePeriod, jobDesc } = info;
          return (
            <CompaniesInfo
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: `0.3` }}
              key={index}
              active={index === activeTab}
            >
              <TitleContainer>
                <Title>{title} @ </Title>
                <Company>{company}</Company>
              </TitleContainer>
              <p>{timePeriod}</p>
              <DescContainer>
                {jobDesc.map((desc, index) => {
                  return <DescList key={index}>{desc}</DescList>;
                })}
              </DescContainer>
            </CompaniesInfo>
          );
        })}
      </CompaniesInfoContainer>
    </TabContainer>
  );
}

export default Tab;
