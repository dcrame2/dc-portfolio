import { Container } from "@/styles/Utilities";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  padding: 20px 0;
`;

const NavInnerContainer = styled.div`
  ${Container}
`;

const Logo = styled.img`
  width: 80px;
`;

const HomeLink = styled(Link)``;

function Navigation() {
  return (
    <NavContainer>
      <NavInnerContainer>
        {/* Navigation */}
        <HomeLink href="/">
          <Logo src="/logo/logo_no_bg.png" />
        </HomeLink>
      </NavInnerContainer>
    </NavContainer>
  );
}

export default Navigation;
