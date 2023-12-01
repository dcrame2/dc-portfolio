import "@/styles/globals.css";
// import Layout from '@/layout/Index';
import Layout from "@/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // The handler to smoothly scroll the element into view
  const handExitComplete = () => {
    if (typeof window !== "undefined") {
      // setTimeout duration to match the transition of the motion div creating the animation effect
      setTimeout(() => {
        // hash from the url aka section
        const hashId = window.location.hash;
        if (hashId) {
          // Use the hash to find the first element with that id
          const element = document.querySelector(hashId);
          if (element) {
            // Smooth scroll to that element
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }
        }
      }, 500);
    }
  };

  return (
    <Layout>
      <AnimatePresence mode="wait" onExitComplete={handExitComplete}>
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: "100%" }}
          exit={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.5 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
