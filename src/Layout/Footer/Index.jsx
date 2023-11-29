import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Container, MediaQueries } from "@/styles/Utilities";
import Link from "next/link";
import { variables } from "@/styles/Variables";
import { pSmall, pXSmall } from "@/styles/Type";

const FooterContainer = styled.footer`
  padding-top: 50px;
`;

const FooterInnerContainer = styled.div`
  ${Container}
  display: flex;
  gap: 36px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 80px;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  @media ${MediaQueries.mobile} {
    flex-direction: column;
  }
`;

const FooterLinks = styled.a`
  ${pSmall}
  &::after {
    content: "";
    background-color: ${variables.color1};
    width: 0%;
    height: 3px;
    margin-top: 5px;
    transition: width 0.3s ease-in;
    display: block;
  }
  &:hover {
    &::after {
      content: "";
      width: 100%;
      transition: width 0.3s ease-in;
    }
  }
`;

const Icon = styled.img`
  width: 48px;
  background-color: ${variables.color2};
  padding: 10px;
  transition: all ease-in 0.2s;
  &:hover {
    transition: all ease-in 0.2s;
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

const FooterSocialContainer = styled.div`
  gap: 12px;
  display: flex;
`;

const CopyrightLine = styled.div`
  margin-top: 40px;
  border-top: 2px solid ${variables.color1};
  text-align: center;
  padding: 8px 0;
  ${pXSmall}
`;

function Footer({ data }) {
  const { logo, homeLink, footerLinks, socialIcons, copyright } = data;

  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <Link href={homeLink}>
          <Logo src={logo.url} alt={logo.alt} />
        </Link>

        <FooterLinksContainer>
          {footerLinks.map((footerLink, index) => {
            const { text, url } = footerLink;
            return (
              <FooterLinks key={`${text}-${index}`} href={url}>
                {text}
              </FooterLinks>
            );
          })}
        </FooterLinksContainer>
        <FooterSocialContainer>
          {socialIcons.map((socialIcon, index) => {
            const { url, icon } = socialIcon;
            return (
              <Link key={`socialIcons-${index}`} href={url}>
                <Icon src={icon.url} alt={icon.alt} />
              </Link>
            );
          })}
        </FooterSocialContainer>
      </FooterInnerContainer>
      <CopyrightLine>
        © {year}
        {copyright}
      </CopyrightLine>
    </FooterContainer>
  );
}

export default Footer;
