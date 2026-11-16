export default function CreateSection() {
  return (
    <section id="create" className="scene create" data-theme="paper" data-stage="innovate" aria-labelledby="create-title">
      <div className="scene__bg"><span className="bgword" data-i18n="word.create" aria-hidden="true">CREATE</span></div>
      <div className="wrap">
        <i className="rb" data-rb style={{ left: "92%", top: "2%" }} /><i className="rb" data-rb style={{ left: "27%", top: "24%" }} /><i className="rb" data-rb style={{ left: "52%", top: "52%" }} /><i className="rb" data-rb style={{ left: "68%", top: "80%" }} /><i className="rb" data-rb style={{ left: "50%", top: "99%" }} />
        <div className="create__head">
          <h2 id="create-title" className="h2 mask" data-i18n="create.h2">Ideas, shaped into products.</h2>
          <p className="lead" data-i18n="create.p">Three product concepts you can try right here. Pick a time, move an order, run a lesson.</p>
        </div>
        <div className="work">
          <article className="proj proj--phone">
            <div className="proj__art" data-speed="0.06" role="group" aria-label="Interactive demo: clinic booking app"><div className="fit" dir="ltr" style={{ "--w": 330, "--h": 680 }}><div className="dev dev--phone" id="demoPhone" /></div></div>
            <div className="proj__text"><span className="badge" data-i18n="create.badge">Interactive demo</span><h3 data-i18n="proj.1.t">Clinic booking app</h3><p data-i18n="proj.1.d">A mobile concept for booking appointments and getting reminders.</p></div>
          </article>
          <article className="proj proj--laptop">
            <div className="proj__art" data-speed="0.04" role="group" aria-label="Interactive demo: operations dashboard"><div className="fit" dir="ltr" style={{ "--w": 800, "--h": 530 }}><div className="dev dev--laptop" id="demoDash" /></div></div>
            <div className="proj__text"><span className="badge" data-i18n="create.badge">Interactive demo</span><h3 data-i18n="proj.2.t">Operations dashboard</h3><p data-i18n="proj.2.d">A web concept for tracking orders and team workload in one place.</p></div>
          </article>
          <article className="proj proj--tablet">
            <div className="proj__art" data-speed="0.05" role="group" aria-label="Interactive demo: learning platform"><div className="fit" dir="ltr" style={{ "--w": 760, "--h": 540 }}><div className="dev dev--tablet" id="demoLearn" /></div></div>
            <div className="proj__text"><span className="badge" data-i18n="create.badge">Interactive demo</span><h3 data-i18n="proj.3.t">Learning platform</h3><p data-i18n="proj.3.d">A tablet concept for lessons, exercises and progress tracking.</p></div>
          </article>
        </div>
      </div>
    </section>
  );
}
