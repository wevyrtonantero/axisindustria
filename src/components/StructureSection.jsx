import { Drill, Factory, Layers2, Sparkles, Wrench } from "lucide-react";
import structureVisual from "../assets/structure-factory-team-v1.png";
import latheOperatorImage from "../assets/structure-lathe-operator-v1.png";
import grinderOperatorImage from "../assets/structure-grinder-operator-v1.png";
import weldingOperatorImage from "../assets/structure-welding-operator-v1.png";

const EQUIPMENT_GROUPS = [
  {
    title: "Tornos e usinagem",
    text: "Equipamentos para operações de usinagem, desenvolvimento técnico e manutenção de máquinas com precisão e versatilidade.",
    icon: Drill,
    items: ["Torno CNC", "Torno convencional", "Torno revólver", "Torno automático"],
    image: latheOperatorImage,
    alt: "Operador trabalhando em um torno convencional no chão de fábrica",
  },
  {
    title: "Retífica e acabamento",
    text: "Recursos para apoio fabril, preparação de componentes e acabamento técnico de acordo com a necessidade de cada projeto.",
    icon: Layers2,
    items: ["Laminadora", "Retífica"],
    image: grinderOperatorImage,
    alt: "Operador trabalhando em uma retífica no chão de fábrica",
  },
  {
    title: "Solda e fabricação",
    text: "Processos para atender desde manutenções técnicas até o desenvolvimento de novos conjuntos industriais sob medida.",
    icon: Sparkles,
    items: ["Solda", "Desenvolvimento de conjuntos", "Projetos de máquinas", "Soluções sob medida"],
    image: weldingOperatorImage,
    alt: "Operador soldando em área de fabricação industrial",
  },
];

const RESOURCE_TAGS = [
  "Torno CNC",
  "Torno convencional",
  "Solda",
  "Laminadora",
  "Retífica",
  "Torno revólver",
  "Torno automático",
];

function StructureSection() {
  return (
    <section className="section-block section-muted structure-section" id="estrutura">
      <div className="container" data-reveal>
        <div className="section-heading structure-heading">
          <span className="section-kicker">Estrutura</span>
          <h2>Nossa estrutura e recursos</h2>
          <p>
            Contamos com equipamentos e processos que nos permitem desenvolver a melhor
            manutenção e o melhor projeto de máquinas possível para cada demanda.
          </p>
        </div>

        <div className="structure-stage">
          <div className="structure-stage-copy">
            <p className="structure-lead">
              A Figueroa Indústria possui estrutura técnica para atuar em manutenção,
              desenvolvimento de projetos e fabricação de conjuntos, reunindo
              equipamentos que apoiam desde a análise e modelagem até a execução
              industrial.
            </p>

            <div className="structure-tag-row">
              {RESOURCE_TAGS.map((item) => (
                <span className="tag structure-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="structure-summary">
              <div className="icon-badge">
                <Factory size={22} />
              </div>
              <p>
                Com essa estrutura, conseguimos atender desde serviços específicos até
                projetos mais completos, sempre com foco em qualidade, precisão e
                entrega técnica.
              </p>
            </div>
          </div>

          <div className="structure-visual-card">
            <img
              src={structureVisual}
              alt="Equipe da Figueroa trabalhando no chão de fábrica com máquinas e estrutura industrial"
            />
          </div>
        </div>

        <div className="structure-card-grid">
          {EQUIPMENT_GROUPS.map((group) => {
            const Icon = group.icon;

            return (
              <article className="structure-card" key={group.title}>
                <div className="structure-card-media">
                  <img src={group.image} alt={group.alt} />
                </div>
                <div className="icon-badge">
                  <Icon size={22} />
                </div>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
                <ul className="structure-list">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Wrench size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StructureSection;
