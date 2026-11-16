export default function HeroSection() {
  return (
    <>
      <section id="top" className="scene hero" data-theme="paper" data-stage="idea" aria-labelledby="hero-title">
        <div className="scene__bg"><div className="gridlines" /></div>
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="hero__tag" data-i18n="hero.tag">Imagine what's next</p>
            <h1 id="hero-title" className="hero__title">
              <span className="ln"><span data-i18n="hero.l1">Technology for</span></span>
              <span className="ln"><span data-i18n="hero.l2">a Smarter</span></span>
              <span className="ln"><span data-i18n="hero.l3">Tomorrow</span></span>
            </h1>
            <p className="hero__sub" data-i18n="hero.sub">We build digital solutions and empower the next generation of technology creators.</p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="#build" data-i18n="hero.cta1">Explore Our Services</a>
              <a className="btn btn--ghost" href="#learn" data-i18n="hero.cta2">Discover Our Academy</a>
            </div>
          </div>
          <div className="hero__visual" data-scene="hero" dir="ltr" aria-hidden="true" />
        </div>
        <a className="scrollcue" href="#build" aria-label="Scroll"><span data-i18n="hero.scroll">Scroll</span><i /></a>
      </section>
      <div className="stream-wrap">
        <div className="stream" aria-hidden="true" dir="ltr">
          <div className="stream__track" id="streamTrack">
            {Array.from({ length: 6 }, (_, index) => (
              <span key={index}><b>idea</b><em>.</em>design()<em>.</em>build()<em>.</em>test()<em>.</em>ship()<em>.</em>automate()<em>.</em>teach()<i>;</i> <em>//</em> repeat</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
