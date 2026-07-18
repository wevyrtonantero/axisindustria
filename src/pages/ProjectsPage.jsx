import Projects from "../components/Projects";
import ContactCTA from "../components/ContactCTA";
import PageIntro from "../components/PageIntro";
import { WHATSAPP_LINK } from "../siteContent";
import projectsHeroImage from "../assets/about-hero-bg-v2.png";

function ProjectsPage() {
  return (
    <>
      <PageIntro
        kicker="Projetos"
        title="Projetos e soluções aplicadas ao ambiente industrial"
        text=""
        variant="projects"
        backgroundImage={projectsHeroImage}
      />
      <Projects />
      <ContactCTA whatsappLink={WHATSAPP_LINK} />
    </>
  );
}

export default ProjectsPage;
