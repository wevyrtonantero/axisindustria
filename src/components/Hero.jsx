import { useEffect, useRef } from "react";
import heroCover from "../assets/hero-user-cover-v2.png";

function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    let frameId = 0;

    const updateParallax = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const progress = Math.min(
        Math.max((viewportHeight - rect.top) / (viewportHeight + rect.height), 0),
        1,
      );

      section.style.setProperty("--hero-kicker-shift", `${progress * -30}px`);
      section.style.setProperty("--hero-title-shift", `${progress * -88}px`);
      section.style.setProperty("--hero-actions-shift", `${progress * -26}px`);
    };

    const requestTick = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        updateParallax();
        frameId = 0;
      });
    };

    updateParallax();
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);

    return () => {
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", requestTick);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section className="hero-section hero-section-cover" id="inicio" ref={sectionRef}>
      <div className="hero-backdrop hero-backdrop-cover" aria-hidden="true">
        <img src={heroCover} alt="" />
      </div>
      <div className="hero-overlay hero-overlay-cover" aria-hidden="true" />

      <div className="container hero-grid hero-grid-cover">
        <div className="hero-copy hero-copy-free">
          <span className="hero-kicker-line hero-parallax-kicker">
            Solda . Caldeiraria . Usinagem
          </span>

          <h1 className="hero-title-clean hero-parallax-title">
            Soluções industriais em manutenção, reforma e desenvolvimento de máquinas.
          </h1>

        </div>
      </div>
    </section>
  );
}

export default Hero;
