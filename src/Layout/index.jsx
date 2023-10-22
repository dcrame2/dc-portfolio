import React from "react";
import Navigation from "./Navigation/Index";
import Footer from "./Footer/Index";
import StyledComponentsRegistry from "@/lib/registry";

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      <Footer />
    </>
  );
}

export default Layout;
