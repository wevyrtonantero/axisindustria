import aboutHeroImage from "../assets/about-team-uniform-axis-v1.png";

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-media" aria-hidden="true">
        <img
          src={aboutHeroImage}
          alt="Equipe da Axis posando para foto com uniforme industrial em ambiente fabril"
        />
        <div className="about-hero-overlay" />
      </div>

      <div className="container about-hero-stage">
        <div className="about-hero-copy">
          <span className="section-kicker section-kicker-light">Sobre a Axis</span>
          <h1>Sobre a Axis Industria</h1>
          <p>
            A Axis Industria atua com foco em manutencao, reforma, caldeiraria,
            usinagem e desenvolvimento de solucoes industriais sob medida, unindo
            leitura tecnica, execucao organizada e evolucao constante.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
