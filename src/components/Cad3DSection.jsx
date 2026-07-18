import { Cog, FileText, Layers3, Ruler } from "lucide-react";
import cad3dVisual from "../assets/cad-team-conveyor-planning-v1.png";

const CAD_FEATURES = [
  {
    title: "Estudo 3D",
    text: "Desenvolvimento de modelos tridimensionais para visualização, validação e planejamento técnico.",
    icon: Layers3,
  },
  {
    title: "Detalhamento técnico",
    text: "Elaboração de projetos industriais com foco em detalhamento, funcionalidade e viabilidade construtiva.",
    icon: Ruler,
  },
  {
    title: "Documentação técnica",
    text: "Preparação de documentação técnica para fabricação, montagem, adaptação e execução dos projetos.",
    icon: FileText,
  },
  {
    title: "Projetos do zero",
    text: "Criamos projetos estruturais e projetos de máquinas do zero, de acordo com a necessidade real de cada cliente.",
    icon: Cog,
  },
];

function Cad3DSection() {
  return (
    <section className="section-block cad3d-section" id="cad-3d">
      <div className="container" data-reveal>
        <div className="section-heading cad3d-heading">
          <span className="section-kicker">CAD 3D</span>
          <h2>Projetos em CAD 3D e desenvolvimento sob medida</h2>
          <p>
            Criamos soluções do zero, com desenvolvimento em CAD 3D, documentação
            técnica e projetos industriais sob medida.
          </p>
        </div>

        <div className="cad3d-stage">
          <div className="cad3d-visual-card">
            <img
              src={cad3dVisual}
              alt="Equipe técnica planejando uma esteira transportadora em modelagem 3D e projeto industrial"
            />
          </div>

          <div className="cad3d-copy-panel">
            <p className="cad3d-lead">
              A Figueroa Indústria também atua no desenvolvimento de projetos do zero,
              criando soluções técnicas sob medida para diferentes necessidades
              industriais. Nossa equipe trabalha com desenvolvimento em CAD 3D e
              documentação técnica, garantindo mais precisão, visualização e segurança
              em cada etapa do desenvolvimento das máquinas e conjuntos.
            </p>

            <div className="cad3d-chip-row">
              <span className="visual-chip">Equipe de desenvolvimento</span>
              <span className="visual-chip">Projetos sob medida</span>
              <span className="visual-chip">Projeto técnico</span>
            </div>

            <p className="cad3d-support">
              Desenvolvemos soluções para estruturas, equipamentos, dispositivos e
              máquinas industriais, sempre buscando unir desempenho, segurança,
              eficiência e viabilidade de execução.
            </p>
          </div>
        </div>

        <div className="cad3d-feature-grid">
          {CAD_FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <article className="cad3d-feature-card" key={feature.title}>
                <div className="icon-badge">
                  <Icon size={22} />
                </div>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Cad3DSection;
