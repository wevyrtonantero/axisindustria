import { Gauge, Handshake, Settings2, ShieldCheck } from "lucide-react";
import { DIFFERENTIALS } from "../siteContent";

const iconMap = {
  handshake: Handshake,
  gauge: Gauge,
  shield: ShieldCheck,
  settings: Settings2,
};

function Differentials() {
  return (
    <section className="section-block">
      <div className="container" data-reveal>
        <div className="section-heading">
          <span className="section-kicker">Diferenciais</span>
          <h2>Por que escolher a Axis?</h2>
        </div>

        <div className="card-grid card-grid-four">
          {DIFFERENTIALS.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <article className="feature-card" key={item.title}>
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Differentials;
