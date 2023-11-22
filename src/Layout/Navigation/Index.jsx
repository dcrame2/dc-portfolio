import { pSmall } from "@/styles/Type";
import { Container, MediaQueries } from "@/styles/Utilities";
import { variables } from "@/styles/Variables";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  padding: 20px 0;
`;

const NavInnerContainer = styled.div`
  ${Container}
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 80px;
  @media ${MediaQueries.mobile} {
    width: 50px;
  }
`;

// const NavItemsContainer = styled.div`
//   display: flex;
//   gap: 48px;
//   @media ${MediaQueries.mobile} {
//     display: none;
//   }
// `;

const NavLinks = styled(Link)`
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

const HomeLink = styled(Link)``;

const HamburgerContainer = styled.div`
  transition: all ease-in-out 0.3s;
  border: ${({ $openNav }) =>
    $openNav ? `2px solid ${variables.color1}` : "none"};
  position: absolute;
  z-index: 2;
  right: 20px;
  top: 20px;
  background-color: #000;
  @media ${MediaQueries.mobile} {
    right: 6px;
  }
  .nav-icon-1 {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    right: 0;
    transition: 0.1s;
    margin: 10px 10px;
    cursor: pointer;
    display: inline-block;
    span {
      width: 5px;
      height: 5px;
      background-color: ${variables.color1};
      display: block;
      border-radius: 50%;
      position: absolute;
      &:nth-child(1) {
        left: 0;
        top: 0;
      }
      &:nth-child(2) {
        left: 12px;
        top: 0;
      }
      &:nth-child(3) {
        right: 0;
        top: 0;
      }
      &:nth-child(4) {
        left: 0;
        top: 12px;
      }
      &:nth-child(5) {
        position: absolute;
        left: 12px;
        top: 12px;
      }
      &:nth-child(6) {
        right: 0px;
        top: 12px;
      }
      &:nth-child(7) {
        left: 0px;
        bottom: 0px;
      }
      &:nth-child(8) {
        position: absolute;
        left: 12px;
        bottom: 0px;
      }
      &:nth-child(9) {
        right: 0px;
        bottom: 0px;
      }
    }
    &:hover span {
      transform: scale(1.2);
      transition: 350ms cubic-bezier(0.8, 0.5, 0.2, 1.4);
    }

    &.open {
      transform: rotate(180deg);
      cursor: pointer;
      transition: 0.2s cubic-bezier(0.8, 0.5, 0.2, 1.4);
      span {
        border-radius: 50%;
        transition-delay: 200ms;
        transition: 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
        &:nth-child(2) {
          left: 6px;
          top: 6px;
        }
        &:nth-child(4) {
          left: 6px;
          top: 18px;
        }
        &:nth-child(6) {
          right: 6px;
          top: 6px;
        }
        &:nth-child(8) {
          left: 18px;
          bottom: 6px;
        }
      }
    }
  }
`;

const MobileNavContainer = styled.div`
  display: ${({ $openNav }) => ($openNav ? "flex" : "none")};
  flex-direction: column;
  padding: 48px 28px 28px 28px;
  gap: 24px;
  align-items: flex-start;
`;

function Navigation({ data }) {
  const { logo, homeLink, navLinks } = data;
  const [openNav, isOpenNav] = useState(false);

  function openNavHandler() {
    isOpenNav(!openNav);
  }
  return (
    <NavContainer>
      <NavInnerContainer>
        <HomeLink href={homeLink}>
          <Logo src={logo.url} alt={logo.alt} />
        </HomeLink>
        <HamburgerContainer
          className="icon"
          $openNav={openNav}
          onClick={openNavHandler}
        >
          <div className={`nav-icon-1  ${openNav ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <MobileNavContainer $openNav={openNav}>
            {navLinks.map((navLink, index) => {
              const { text, url } = navLink;
              return (
                <NavLinks key={index} href={url ? url : "/"}>
                  {text}
                </NavLinks>
              );
            })}
          </MobileNavContainer>
        </HamburgerContainer>
      </NavInnerContainer>
    </NavContainer>
  );
}

export default Navigation;
