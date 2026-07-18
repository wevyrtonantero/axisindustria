import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { PROJECTS } from "../siteContent";
import estruturaDobraVideo from "../assets/projects/estrutura-dobra-chapas/capavideo.mp4";
import estruturaDobraFoto01 from "../assets/projects/estrutura-dobra-chapas/foto01-clean.png";
import estruturaDobraFoto02 from "../assets/projects/estrutura-dobra-chapas/foto02-clean.png";
import estruturaDobraFoto03 from "../assets/projects/estrutura-dobra-chapas/foto03-clean.png";
import estruturaDobraFoto04 from "../assets/projects/estrutura-dobra-chapas/foto04-clean.png";
import esteiraPaletsVideo from "../assets/projects/esteira-transportadora-palets/capavideo.mp4";
import esteiraPaletsFoto01 from "../assets/projects/esteira-transportadora-palets/foto01-clean.png";
import esteiraPaletsFoto02 from "../assets/projects/esteira-transportadora-palets/foto02-clean.png";
import esteiraPaletsFoto03 from "../assets/projects/esteira-transportadora-palets/foto03-clean.png";
import esteiraPaletsFoto04 from "../assets/projects/esteira-transportadora-palets/foto04-clean.png";
import pergoladoCapaVideo from "../assets/projects/pergolados-bem-estar/pergoladocapa.mp4";
import pergoladoFoto01 from "../assets/projects/pergolados-bem-estar/pergolado01.jpeg";
import pergoladoFoto02 from "../assets/projects/pergolados-bem-estar/pergolado02.jpeg";
import ninhoUsoRealista from "../assets/projects/pergolados-bem-estar/ninho-uso-realista.png";
import ninhoUsoPiscina from "../assets/projects/pergolados-bem-estar/ninho-uso-piscina.png";
import suporteRedeCampo from "../assets/projects/pergolados-bem-estar/suporte-rede-campo.png";
import suporteRedeCampo02 from "../assets/projects/pergolados-bem-estar/suporte-rede-campo-02.png";

const PROJECT_MEDIA = {
  "estrutura-dobra-chapas": {
    video: estruturaDobraVideo,
    poster: estruturaDobraFoto03,
    sections: [
      {
        title: "Galeria do projeto",
        images: [
          estruturaDobraFoto01,
          estruturaDobraFoto02,
          estruturaDobraFoto03,
          estruturaDobraFoto04,
        ],
      },
    ],
  },
  "esteira-transportadora-palets": {
    video: esteiraPaletsVideo,
    poster: esteiraPaletsFoto04,
    rotation: "cw",
    sections: [
      {
        title: "Galeria do projeto",
        images: [
          esteiraPaletsFoto01,
          esteiraPaletsFoto02,
          esteiraPaletsFoto03,
          esteiraPaletsFoto04,
        ],
      },
    ],
  },
  "pergolados-bem-estar": {
    video: pergoladoCapaVideo,
    poster: pergoladoFoto01,
    sections: [
      {
        title: "Pergolado",
        images: [pergoladoFoto01, pergoladoFoto02],
      },
      {
        title: "Ninho",
        images: [ninhoUsoRealista, ninhoUsoPiscina],
      },
      {
        title: "Suporte de rede",
        images: [suporteRedeCampo, suporteRedeCampo02],
      },
    ],
  },
};

function Projects() {
  const [activeProjectKey, setActiveProjectKey] = useState(null);
  const activeProject = PROJECTS.find((project) => project.key === activeProjectKey);
  const activeMedia = activeProjectKey ? PROJECT_MEDIA[activeProjectKey] : null;

  useEffect(() => {
    if (!activeProjectKey) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProjectKey(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProjectKey]);

  return (
    <>
      <section className="section-block section-muted" id="projetos">
        <div className="container" data-reveal>
          <div className="section-heading">
            <span className="section-kicker">Projetos</span>
            <h2>Projetos e soluções industriais</h2>
            <p>Conheça algumas possibilidades de atuação da Figueroa Indústria.</p>
          </div>

          <div className="card-grid card-grid-three">
            {PROJECTS.map((project) => {
              const media = PROJECT_MEDIA[project.key];
              const visualClassName = media?.rotation
                ? `project-visual project-visual--media project-visual--rotate-${media.rotation}`
                : "project-visual project-visual--media";
              const videoClassName = media?.rotation
                ? `project-visual-video project-visual-video--rotate-${media.rotation}`
                : "project-visual-video";

              return (
                <article className="project-card" key={project.key ?? project.title}>
                  {media ? (
                    <button
                      type="button"
                      className="project-visual-button"
                      onClick={() => setActiveProjectKey(project.key)}
                      aria-label={`Abrir fotos do projeto ${project.title}`}
                    >
                      <div className={visualClassName}>
                        <video
                          className={videoClassName}
                          src={media.video}
                          poster={media.poster}
                          autoPlay
                          muted
                          loop
                          playsInline
                          aria-hidden="true"
                        />
                      </div>
                    </button>
                  ) : (
                    <div className={`project-visual ${project.accent}`} aria-hidden="true" />
                  )}

                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {activeProject && activeMedia ? (
        <div
          className="project-modal-backdrop"
          role="presentation"
          onClick={() => setActiveProjectKey(null)}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="project-modal-header">
              <div>
                <span className="section-kicker">Galeria do projeto</span>
                <h3 id="project-modal-title">{activeProject.title}</h3>
              </div>

              <button
                type="button"
                className="project-modal-close"
                onClick={() => setActiveProjectKey(null)}
                aria-label="Fechar galeria"
              >
                <X size={18} />
              </button>
            </div>

            {activeMedia.sections.map((section) => (
              <section className="project-modal-section" key={section.title}>
                <h4>{section.title}</h4>

                <div className="project-modal-grid">
                  {section.images.map((image, index) => (
                    <figure className="project-modal-figure" key={`${section.title}-${image}`}>
                      <img
                        src={image}
                        alt={`${activeProject.title} - ${section.title} - foto ${index + 1}`}
                      />
                    </figure>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Projects;
