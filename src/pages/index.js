import Head from "next/head";

import MainHero from "@/components/modules/MainHero/Index";
import {
  heroData,
  aboutData,
  historyData,
  projectData,
  contactData,
  personalProjectData,
} from "@/data/Index";
import About from "@/components/modules/About/Index";
import History from "@/components/modules/History/Index";
import Projects from "@/components/modules/Projects/Index";
import Contact from "@/components/modules/Contact/Index";
import ModuleBlender from "@/components/ui/ModuleBlender/Index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dylan Cramer Portfolio</title>
        <meta
          name="description"
          content="Dylan Cramer's portfolio website showing his skills and projects he has built as a Full-Stack Web Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainHero data={heroData} />
        <ModuleBlender />
        <About data={aboutData} />
        <ModuleBlender />
        <History data={historyData} />
        <Projects data={personalProjectData} />
        <Projects data={projectData} />
        <Contact data={contactData} />
      </main>
    </>
  );
}
