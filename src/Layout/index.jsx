import Navigation from "./Navigation/Index";
import Footer from "./Footer/Index";
import StyledComponentsRegistry from "@/lib/registry";
import { navData, footerData } from "@/data/Index";

function Layout({ children }) {
  return (
    <>
      <Navigation data={navData} />
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      <Footer data={footerData} />
    </>
  );
}

export default Layout;
