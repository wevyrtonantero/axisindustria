import aboutHeroImage from "../assets/about-team-uniform-axis-v1.png";

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-media" aria-hidden="true">
        <img
          src={aboutHeroImage}
          alt="Equipe da Figueroa posando para foto com uniforme industrial em ambiente fabril"
        />
        <div className="about-hero-overlay" />
      </div>

      <div className="container about-hero-stage">
        <div className="about-hero-copy">
          <span className="section-kicker section-kicker-light">Sobre a Figueroa</span>
          <h1>Sobre a Figueroa Indústria</h1>
          <p>
            A Figueroa Indústria atua com foco em manutenção, reforma, caldeiraria,
            usinagem e desenvolvimento de soluções industriais sob medida, unindo
            leitura técnica, execução organizada e evolução constante.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
