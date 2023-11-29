import { useEffect } from "react";
import Navigation from "./Navigation/Index";
import Footer from "./Footer/Index";
import StyledComponentsRegistry from "@/lib/registry";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { navData, footerData } from "@/data/Index";

function Layout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    console.log(hash);
    if (hash.length > 0) {
      // window.location.hash = "";
      window.location.hash = hash;
    }
  });
  return (
    <>
      <Navigation data={navData} />
      <StyledComponentsRegistry>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            exit={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.5 }}
            key={router.asPath}
          >
            <AnimatePresence mode="wait" initial={true}>
              {children}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </StyledComponentsRegistry>
      <Footer data={footerData} />
    </>
  );
}

export default Layout;
