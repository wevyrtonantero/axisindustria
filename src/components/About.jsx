import {
  BadgeCheck,
  Factory,
  ShieldCheck,
  Target,
  TrendingUp,
  Wrench,
} from "lucide-react";
import aboutImage from "../assets/about-industrial.jpg";

const BASE_PILLARS = [
  {
    title: "Estrutura preparada para atender",
    text: "A Figueroa Indústria atua com organização operacional, capacidade técnica e consistência para entregar soluções industriais com alto padrão de execução.",
    icon: TrendingUp,
  },
  {
    title: "Reforma, fabricação e desenvolvimento",
    text: "Atuamos em manutenção industrial, recuperação mecânica, caldeiraria, solda, usinagem e desenvolvimento de projetos sob medida.",
    icon: Wrench,
  },
  {
    title: "Compromisso técnico e evolução contínua",
    text: "Cada etapa é pensada para entregar solução real, segurança de execução e melhoria contínua na forma de trabalhar.",
    icon: ShieldCheck,
  },
];

const PRINCIPLES = [
  {
    title: "Missão",
    text: "Desenvolver, reformar e fabricar soluções industriais com qualidade técnica, leitura prática da necessidade e compromisso com resultado.",
    icon: Target,
  },
  {
    title: "Visão",
    text: "Consolidar a Figueroa Indústria como referência em manutenção, reforma e desenvolvimento de máquinas e conjuntos industriais.",
    icon: TrendingUp,
  },
  {
    title: "Valores",
    text: "Seriedade, critério técnico, organização operacional, proximidade com o cliente e evolução constante.",
    icon: BadgeCheck,
  },
];

function About() {
  return (
    <>
      <section className="section-block section-muted" id="sobre">
        <div className="container about-grid" data-reveal>
          <div className="about-copy">
            <span className="section-kicker">Sobre a FIGUEROA</span>
            <h2>Sobre nós</h2>
            <p>
              A Figueroa Indústria atua no setor industrial com foco em manutenção,
              reforma e desenvolvimento de soluções sob medida, reunindo leitura técnica,
              organização operacional e compromisso com resultado.
            </p>
            <p>
              Trabalhamos com uma visão prática da necessidade do cliente, atuando desde
              a recuperação de máquinas e conjuntos até o desenvolvimento de projetos em
              CAD 3D, sempre buscando unir desempenho, segurança e viabilidade de
              execução.
            </p>
          </div>

          <div className="about-visual">
            <div className="about-photo-card">
              <img
                src={aboutImage}
                alt="Equipe técnica da Figueroa em ambiente industrial analisando equipamentos e estrutura de trabalho"
              />
              <div className="about-photo-caption">
                <div className="panel-icon">
                  <Factory size={28} />
                </div>
                <div>
                  <strong>Base técnica para executar, reformar e desenvolver</strong>
                  <span>Uma operação pensada para entregar com critério técnico e constância.</span>
                </div>
              </div>
            </div>

            <div className="about-metrics">
              <div>
                <strong>Atuação com direção clara</strong>
                <span>Estrutura, posicionamento e foco técnico alinhados à realidade industrial.</span>
              </div>
              <div>
                <strong>Capacidade de evolução</strong>
                <span>Processos preparados para ampliar entrega, controle e confiança técnica.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container" data-reveal>
          <div className="section-heading">
            <span className="section-kicker">Nossa base</span>
            <h2>Estrutura sólida para atender com qualidade.</h2>
            <p>
              A Figueroa Indústria trabalha com foco em organização, leitura técnica e
              evolução contínua para entregar soluções industriais confiáveis.
            </p>
          </div>

          <div className="card-grid card-grid-three">
            {BASE_PILLARS.map((item) => {
              const Icon = item.icon;

              return (
                <article className="content-card" key={item.title}>
                  <div className="icon-badge">
                    <Icon size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block section-muted">
        <div className="container about-positioning" data-reveal>
          <div className="about-positioning-copy">
            <span className="section-kicker">Posicionamento</span>
            <h2>Compromisso industrial com execução responsável.</h2>
            <p>
              Nosso trabalho é guiado por atenção aos detalhes, foco total na qualidade
              da execução e responsabilidade técnica em cada etapa.
            </p>
            <p>
              A Figueroa Indústria busca fortalecer uma operação industrial que entregue
              manutenção confiável, reforma bem executada e desenvolvimento técnico com
              consistência.
            </p>
          </div>

          <div className="about-positioning-panel">
            <div>
              <strong>Leitura técnica real</strong>
              <span>Avaliação prática da máquina, do conjunto e da necessidade operacional.</span>
            </div>
            <div>
              <strong>Execução com critério</strong>
              <span>Organização, método e responsabilidade em cada etapa do serviço.</span>
            </div>
            <div>
              <strong>Visão de longo prazo</strong>
              <span>Atuação estruturada para entregar confiança, estabilidade e evolução contínua.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container" data-reveal>
          <div className="section-heading">
            <span className="section-kicker">Princípios</span>
            <h2>Missão, visão e valores.</h2>
          </div>

          <div className="card-grid card-grid-three">
            {PRINCIPLES.map((item) => {
              const Icon = item.icon;

              return (
                <article className="content-card" key={item.title}>
                  <div className="icon-badge">
                    <Icon size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
