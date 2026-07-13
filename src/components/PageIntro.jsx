function PageIntro({ kicker, title, text, variant = "default", backgroundImage }) {
  return (
    <section
      className={`page-intro page-intro--${variant}${backgroundImage ? " page-intro--with-image" : ""}`}
    >
      {backgroundImage ? (
        <div className="page-intro-media" aria-hidden="true">
          <img src={backgroundImage} alt="" />
          <div className="page-intro-overlay" />
        </div>
      ) : null}

      <div className="container page-intro-card">
        <span className={`section-kicker${backgroundImage ? " section-kicker-light" : ""}`}>
          {kicker}
        </span>
        <h1>{title}</h1>
        {text ? <p>{text}</p> : null}
      </div>
    </section>
  );
}

export default PageIntro;
