import Contact from "../components/Contact";
import ContactCTA from "../components/ContactCTA";
import PageIntro from "../components/PageIntro";
import { WHATSAPP_LINK } from "../siteContent";

function ContactPage() {
  return (
    <>
      <PageIntro
        kicker="Contato"
        title="Fale com a Axis Industria"
        text="Pagina dedicada para contato institucional, com os dados comerciais centralizados e pronta para atualizacao futura com telefone, email e localizacao definitivos."
      />
      <Contact />
      <ContactCTA whatsappLink={WHATSAPP_LINK} />
    </>
  );
}

export default ContactPage;
