import Hero from "../components/Hero";
import Differentials from "../components/Differentials";
import Cad3DSection from "../components/Cad3DSection";
import StructureSection from "../components/StructureSection";
import ContactCTA from "../components/ContactCTA";
import { WHATSAPP_LINK } from "../siteContent";

function HomePage() {
  return (
    <>
      <Hero />
      <Differentials />
      <Cad3DSection />
      <StructureSection />
      <ContactCTA whatsappLink={WHATSAPP_LINK} />
    </>
  );
}

export default HomePage;
