export default function AutomateSection() {
  return (
    <section id="automate" className="scene automate" data-theme="navy" data-stage="automate" aria-labelledby="auto-title">
      <div className="scene__bg"><span className="bgword" data-i18n="word.automate" aria-hidden="true">AUTOMATE</span></div>
      <div className="wrap automate__grid">
        <div className="automate__copy">
          <h2 id="auto-title" className="h2 mask" data-i18n="auto.h2">Turn manual work into intelligent systems.</h2>
          <p className="lead" data-i18n="auto.p">Most businesses run on handoffs: spreadsheets, emails, copy and paste. We connect those steps in software, add automation and AI where it helps, and give your team time back for work that needs people.</p>
          <ol className="steps">
            <li><h3 data-i18n="auto.s1.t">Map</h3><p data-i18n="auto.s1.d">We follow the work as it happens and find where time is lost.</p></li>
            <li><h3 data-i18n="auto.s2.t">Connect</h3><p data-i18n="auto.s2.d">Your tools and data are linked so information moves on its own.</p></li>
            <li><h3 data-i18n="auto.s3.t">Automate</h3><p data-i18n="auto.s3.d">Repetitive steps run by themselves, with people approving what matters.</p></li>
            <li><h3 data-i18n="auto.s4.t">Improve</h3><p data-i18n="auto.s4.d">We watch how the system performs and keep refining it.</p></li>
          </ol>
          <a className="btn btn--light" href="#contact" data-topic="automation" data-i18n="auto.cta">Talk to us about automation</a>
        </div>
        <figure className="automate__visual">
          <div className="viz" data-scene="automate" dir="ltr" role="img" aria-label="Illustration of scattered workflow steps organizing into a connected automated system" />
          <i className="rb" data-rb style={{ left: "50%", top: "0" }} /><i className="rb" data-rb style={{ left: "50%", top: "100%" }} />
          <figcaption data-i18n="auto.cap">Illustrative workflow. Scroll to watch scattered steps become a system.</figcaption>
        </figure>
      </div>
    </section>
  );
}
