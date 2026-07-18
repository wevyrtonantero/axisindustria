import { MapPin, PhoneCall } from "lucide-react";
import { CONTACT_DETAILS, WHATSAPP_LINK } from "../siteContent";

const iconMap = {
  phone: PhoneCall,
  map: MapPin,
};

function Contact() {
  return (
    <section className="section-block" id="contato">
      <div className="container contact-grid" data-reveal>
        <div className="contact-copy">
          <span className="section-kicker">Contato</span>
          <h2>Fale com a Figueroa Indústria</h2>
          <p>
            Entre em contato com a Figueroa Indústria para solicitar orçamentos,
            alinhar demandas de projeto e falar direto com o comercial.
          </p>

          <a className="button button-primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            Chamar no WhatsApp
          </a>
        </div>

        <div className="contact-card-list">
          {CONTACT_DETAILS.map((item) => {
            const Icon = iconMap[item.type];

            return (
              <a className="contact-card" key={item.label} href={item.href}>
                <div className="icon-badge icon-badge-soft">
                  <Icon size={22} />
                </div>
                <div>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
