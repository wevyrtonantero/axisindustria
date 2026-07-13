function ContactCTA({ whatsappLink }) {
  return (
    <section className="cta-section">
      <div className="container cta-card" data-reveal>
        <div>
          <span className="section-kicker section-kicker-light">Comercial</span>
          <h2>Vamos conversar sobre sua maquina ou projeto?</h2>
          <p>
            Fale com a Axis Industria para avaliar manutencao, reforma, modernizacao ou
            desenvolvimento de solucoes industriais sob medida.
          </p>
        </div>

        <a className="button button-light" href={whatsappLink} target="_blank" rel="noreferrer">
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}

export default ContactCTA;
