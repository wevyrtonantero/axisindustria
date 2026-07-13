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
    title: "Industria jovem, estrutura preparada",
    text: "Fundada em 2025, a Axis Industria nasceu com uma proposta clara: unir organizacao operacional, capacidade tecnica e consistencia para crescer com base solida.",
    icon: TrendingUp,
  },
  {
    title: "Reforma, fabricacao e desenvolvimento",
    text: "Atuamos em manutencao industrial, recuperacao mecanica, caldeiraria, solda, usinagem e desenvolvimento de projetos sob medida.",
    icon: Wrench,
  },
  {
    title: "Compromisso tecnico e evolucao continua",
    text: "Cada etapa e pensada para entregar solucao real, seguranca de execucao e melhoria continua na forma de trabalhar.",
    icon: ShieldCheck,
  },
];

const PRINCIPLES = [
  {
    title: "Missao",
    text: "Desenvolver, reformar e fabricar solucoes industriais com qualidade tecnica, leitura pratica da necessidade e compromisso com resultado.",
    icon: Target,
  },
  {
    title: "Visao",
    text: "Consolidar a Axis Industria como referencia em manutencao, reforma e desenvolvimento de maquinas e conjuntos industriais.",
    icon: TrendingUp,
  },
  {
    title: "Valores",
    text: "Seriedade, criterio tecnico, organizacao operacional, proximidade com o cliente e evolucao constante.",
    icon: BadgeCheck,
  },
];

function About() {
  return (
    <>
      <section className="section-block section-muted" id="sobre">
        <div className="container about-grid" data-reveal>
          <div className="about-copy">
            <span className="section-kicker">Sobre a AXIS</span>
            <h2>Sobre nos</h2>
            <p>
              A Axis Industria e uma industria jovem, preparada para executar com
              qualidade e crescer com consistencia. Desde o inicio, a proposta da empresa
              foi construir uma operacao capaz de atender manutencao, reforma e
              desenvolvimento industrial com leitura tecnica, organizacao e compromisso
              com resultado.
            </p>
            <p>
              Trabalhamos com uma visao pratica da necessidade do cliente, atuando desde
              a recuperacao de maquinas e conjuntos ate o desenvolvimento de projetos em
              CAD 3D, sempre buscando unir desempenho, seguranca e viabilidade de
              execucao.
            </p>
          </div>

          <div className="about-visual">
            <div className="about-photo-card">
              <img
                src={aboutImage}
                alt="Equipe tecnica da Axis em ambiente industrial analisando equipamentos e estrutura de trabalho"
              />
              <div className="about-photo-caption">
                <div className="panel-icon">
                  <Factory size={28} />
                </div>
                <div>
                  <strong>Base tecnica para executar, reformar e desenvolver</strong>
                  <span>Uma operacao pensada para crescer com criterio tecnico e constancia.</span>
                </div>
              </div>
            </div>

            <div className="about-metrics">
              <div>
                <strong>Comeco recente, direcao definida</strong>
                <span>Empresa nova no tempo, mas com estrutura e posicionamento claros.</span>
              </div>
              <div>
                <strong>Capacidade de evolucao</strong>
                <span>Processos preparados para ampliar entrega, controle e confianca tecnica.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container" data-reveal>
          <div className="section-heading">
            <span className="section-kicker">Nossa base</span>
            <h2>Comecamos recentes, mas com direcao definida.</h2>
            <p>
              A juventude da Axis Industria e acompanhada por uma forma de trabalhar
              madura, focada em organizacao, leitura tecnica e evolucao continua.
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
            <h2>Nova no tempo, madura na forma de trabalhar.</h2>
            <p>
              A juventude da Axis e uma vantagem: permite construir processos com olhar
              atual, mais atencao aos detalhes e foco total na qualidade da execucao.
            </p>
            <p>
              Nosso objetivo e crescer com consistencia, fortalecendo uma operacao
              industrial que entregue manutencao confiavel, reforma bem executada e
              desenvolvimento tecnico com evolucao continua.
            </p>
          </div>

          <div className="about-positioning-panel">
            <div>
              <strong>Leitura tecnica real</strong>
              <span>Avaliacao pratica da maquina, do conjunto e da necessidade operacional.</span>
            </div>
            <div>
              <strong>Execucao com criterio</strong>
              <span>Organizacao, metodo e responsabilidade em cada etapa do servico.</span>
            </div>
            <div>
              <strong>Visao de longo prazo</strong>
              <span>Construimos a empresa para crescer com constancia e confianca.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container" data-reveal>
          <div className="section-heading">
            <span className="section-kicker">Principios</span>
            <h2>Missao, visao e valores.</h2>
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
