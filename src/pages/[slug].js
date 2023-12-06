import { projectPagesData } from "@/data/Index";
import ProjectHero from "@/components/modules/ProjectHero/Index";
import BuiltWith from "@/components/modules/BuiltWith/Index";
import { contactCTAData } from "@/data/Index";
import ContactCTA from "@/components/modules/ContactCTA/Index";

export async function getStaticPaths() {
  const paths = projectPagesData.map((page) => {
    return page.slug;
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const currentPage = context.params.slug;
  let data = {};
  projectPagesData.forEach((page) => {
    if (page.slug === `/${currentPage}`) {
      data = page.pageData;
    }
    return;
  });

  return { props: { data } };
}

export default function Page({ data }) {
  return (
    <>
      <ProjectHero data={data} />
      <BuiltWith data={data} />
      {/* <ContactCTA data={contactCTAData} /> */}
    </>
  );
}
