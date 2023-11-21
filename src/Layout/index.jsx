import React from "react";
import Navigation from "./Navigation/Index";
import Footer from "./Footer/Index";
import StyledComponentsRegistry from "@/lib/registry";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { navData } from "@/data/Index";

function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <Navigation data={navData} />
      <StyledComponentsRegistry>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            exit={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            // initial={{ opacity: 0 }}
            // exit={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={router.asPath}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </StyledComponentsRegistry>
      <Footer />
    </>
  );
}

export default Layout;
