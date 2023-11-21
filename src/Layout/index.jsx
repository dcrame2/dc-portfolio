import React from "react";
import Navigation from "./Navigation/Index";
import Footer from "./Footer/Index";
import StyledComponentsRegistry from "@/lib/registry";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <Navigation />
      <StyledComponentsRegistry>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            exit={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
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
