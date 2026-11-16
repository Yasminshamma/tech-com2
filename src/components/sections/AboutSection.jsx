export default function AboutSection() {
  return (
    <section id="about" className="scene about" data-theme="charcoal" data-stage="innovate" aria-labelledby="about-title">
      <div className="scene__bg"><svg className="about__star" viewBox="0 0 100 100" aria-hidden="true"><path d="M14 90 V10 H30 L70 55 V10 H86 V90 H70 L30 45 V90 Z" fill="none" stroke="currentColor" strokeWidth=".35" /></svg></div>
      <div className="wrap about__grid">
        <i className="rb rb--about" data-rb style={{ top: "4%" }} /><i className="rb rb--about" data-rb style={{ top: "96%" }} />
        <h2 id="about-title" className="about__title">
          <span className="ln"><span data-i18n="about.w1">Innovation.</span></span>
          <span className="ln"><span data-i18n="about.w2">Education.</span></span>
          <span className="ln"><span data-i18n="about.w3">Practical impact.</span></span>
        </h2>
        <div className="about__text">
          <p className="lead" data-i18n="about.p1">Northstar combines software engineering with technology education. Building real products keeps our teaching current. Teaching keeps our engineering clear and well explained.</p>
          <dl className="pillars">
            <div><dt data-i18n="about.c1.t">Innovation</dt><dd data-i18n="about.c1.d">We explore new tools and ideas, then keep what works.</dd></div>
            <div><dt data-i18n="about.c2.t">Education</dt><dd data-i18n="about.c2.d">We teach with real projects, at every stage of a career.</dd></div>
            <div><dt data-i18n="about.c3.t">Practical impact</dt><dd data-i18n="about.c3.d">Everything we make or teach has to be useful on Monday morning.</dd></div>
          </dl>
          <div className="loop">
            <div><h3 data-i18n="loop.a.t">The studio</h3><p data-i18n="loop.a.d">Real product problems become teaching material.</p></div>
            <svg viewBox="0 0 60 24" aria-hidden="true"><path d="M4 8h48m0 0-7-6m7 6-7 6M56 16H8m0 0 7-6m-7 6 7 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <div><h3 data-i18n="loop.b.t">The academy</h3><p data-i18n="loop.b.d">Classroom questions sharpen how we document and explain our work.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
