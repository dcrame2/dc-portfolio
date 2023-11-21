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

const ComapnyTabContainer = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  max-width: 200px;
  width: 100%;
  position: relative;

  @media ${MediaQueries.tablet} {
    max-width: unset;
    border: 1px solid ${variables.color1};
    overflow: hidden;
    &.active {
      /* display: flex; */
      &::after {
        transform: rotate(180deg);
        transition: transform 0.3s ease-in;
      }
    }
    &::after {
      content: "";
      position: absolute;
      right: 18px;
      width: 30px;
      height: 30px;
      top: 6px;
      background-repeat: no-repeat;
      background-image: url("/icons/caret-down.svg");
      transition: transform 0.3s ease-in;
      transform: rotate(0deg);
    }
  }

  @media ${MediaQueries.mobile} {
    max-height: ${({ $activeDropdown }) =>
      $activeDropdown ? "500px" : "50px"};
    transition: max-height 0.8s ease-in-out;
  }
`;

const ComapnyTab = styled(motion.li)`
  background-color: ${({ active }) =>
    active ? variables.color1 : variables.transparent};
  cursor: pointer;
  padding: 12px 8px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    transition: background-color 0.3s ease-in-out;
    background-color: ${variables.color2};
  }

  @media ${MediaQueries.tablet} {
    display: none;
    &.active {
      display: block;
    }
  }
  @media ${MediaQueries.mobile} {
    &:hover {
      transition: unset;
    }
  }
`;

const CompaniesInfoContainer = styled.div`
  width: 40%;
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
  const [activeDropdown, setActiveDropdown] = useState(false);

  function handleTabClick(index) {
    setActiveTab(index);
  }

  function openDropdownHandler() {
    setActiveDropdown(!activeDropdown);
  }

  return (
    <TabContainer>
      <ComapnyTabContainer
        transition={{ duration: 0.8, ease: "easeInOut" }}
        $activeDropdown={activeDropdown}
        onClick={openDropdownHandler}
        className={activeDropdown ? "active" : ""}
      >
        {companies.map((company, index) => {
          return (
            <ComapnyTab
              className={activeDropdown || index === activeTab ? "active" : ""}
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
