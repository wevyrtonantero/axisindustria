import About from "../components/About";
import ContactCTA from "../components/ContactCTA";
import AboutHero from "../components/AboutHero";
import { WHATSAPP_LINK } from "../siteContent";

function AboutPage() {
  return (
    <>
      <AboutHero />
      <About />
      <ContactCTA whatsappLink={WHATSAPP_LINK} />
    </>
  );
}

export default AboutPage;
