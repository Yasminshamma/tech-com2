import { useRef, useState } from "react";

export default function LearnSection() {
  const [activePath, setActivePath] = useState(0);
  const tabRefs = useRef([]);

  function handleTabKeyDown(event, index) {
    const rtl = document.documentElement.dir === "rtl";
    let nextIndex = null;

    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      const direction = (event.key === "ArrowRight") !== rtl ? 1 : -1;
      nextIndex = (index + direction + tabRefs.current.length) % tabRefs.current.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabRefs.current.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      setActivePath(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    }
  }

  return (
    <section id="learn" className="scene learn" data-theme="paper" data-stage="learn" aria-labelledby="learn-title">
      <div className="scene__bg"><span className="bgword" data-i18n="word.learn" aria-hidden="true">LEARN</span></div>
      <div className="wrap learn__top">
        <div className="learn__copy">
          <h2 id="learn-title" className="h2 mask" data-i18n="learn.h2">A tech academy for every stage of a career.</h2>
          <p className="lead" data-i18n="learn.p">Northstar Academy teaches programming through projects, with real tools and honest feedback.</p>
        </div>
        <div className="learn__visual" data-scene="learn" dir="ltr" aria-hidden="true">
          <i className="rb" data-rb style={{ left: "50%", top: "0" }} /><i className="rb" data-rb style={{ left: "50%", top: "100%" }} />
        </div>
      </div>
      <div className="wrap">
        <div className="paths" id="paths">
          <div className="paths__tabs" role="tablist" aria-label="Learning paths" data-i18n-attr="aria-label:path.aria">
            <button ref={(element) => { tabRefs.current[0] = element; }} type="button" role="tab" className="ptab ptab--teen" id="tab-teen" aria-controls="path-teen" aria-selected={activePath === 0} tabIndex={activePath === 0 ? 0 : -1} onClick={() => setActivePath(0)} onKeyDown={(event) => handleTabKeyDown(event, 0)} data-i18n="path.teen.s">12–17</button>
            <button ref={(element) => { tabRefs.current[1] = element; }} type="button" role="tab" className="ptab ptab--uni" id="tab-uni" aria-controls="path-uni" aria-selected={activePath === 1} tabIndex={activePath === 1 ? 0 : -1} onClick={() => setActivePath(1)} onKeyDown={(event) => handleTabKeyDown(event, 1)} data-i18n="path.uni.s">University</button>
            <button ref={(element) => { tabRefs.current[2] = element; }} type="button" role="tab" className="ptab ptab--pro" id="tab-pro" aria-controls="path-pro" aria-selected={activePath === 2} tabIndex={activePath === 2 ? 0 : -1} onClick={() => setActivePath(2)} onKeyDown={(event) => handleTabKeyDown(event, 2)} data-i18n="path.pro.s">Professionals</button>
          </div>
          <article className="ppanel ppanel--teen" id="path-teen" role="tabpanel" aria-labelledby="tab-teen" hidden={activePath !== 0}>
            <p className="ppanel__word" aria-hidden="true" data-i18n="path.teen.w">Foundations</p>
            <div className="ppanel__body">
              <h3 data-i18n="path.teen.t">Ages 12–17</h3>
              <p className="ppanel__d" data-i18n="path.teen.d">Programming foundations, creative projects, and computational thinking.</p>
              <ul><li data-i18n="path.teen.b1">Start with the fundamentals of code</li><li data-i18n="path.teen.b2">Make creative projects you can share</li><li data-i18n="path.teen.b3">Practice breaking problems into steps</li></ul>
              <p className="path__out"><span data-i18n="path.out">You'll finish with</span> <b data-i18n="path.teen.o">a small game or website you made yourself</b></p>
              <a className="path__link" href="#contact" data-topic="teen" data-i18n="path.cta">Ask about this path</a>
            </div>
          </article>
          <article className="ppanel ppanel--uni" id="path-uni" role="tabpanel" aria-labelledby="tab-uni" hidden={activePath !== 1}>
            <p className="ppanel__word" aria-hidden="true" data-i18n="path.uni.w">Practice</p>
            <div className="ppanel__body">
              <h3 data-i18n="path.uni.t">University Students</h3>
              <p className="ppanel__d" data-i18n="path.uni.d">Practical skills, portfolio projects, and career preparation.</p>
              <ul><li data-i18n="path.uni.b1">Build portfolio-ready projects</li><li data-i18n="path.uni.b2">Learn the tools teams use in industry</li><li data-i18n="path.uni.b3">Prepare for interviews and first roles</li></ul>
              <p className="path__out"><span data-i18n="path.out">You'll finish with</span> <b data-i18n="path.uni.o">a portfolio project you can show employers</b></p>
              <a className="path__link" href="#contact" data-topic="uni" data-i18n="path.cta">Ask about this path</a>
            </div>
          </article>
          <article className="ppanel ppanel--pro" id="path-pro" role="tabpanel" aria-labelledby="tab-pro" hidden={activePath !== 2}>
            <p className="ppanel__word" aria-hidden="true" data-i18n="path.pro.w">Advanced</p>
            <div className="ppanel__body">
              <h3 data-i18n="path.pro.t">Engineers &amp; Professionals</h3>
              <p className="ppanel__d" data-i18n="path.pro.d">Advanced programming, AI, automation, and professional development.</p>
              <ul><li data-i18n="path.pro.b1">Go deeper in programming and architecture</li><li data-i18n="path.pro.b2">Apply AI and automation in your own work</li><li data-i18n="path.pro.b3">Keep your skills current as the field moves</li></ul>
              <p className="path__out"><span data-i18n="path.out">You'll finish with</span> <b data-i18n="path.pro.o">an AI or automation tool working on a real task of yours</b></p>
              <a className="path__link" href="#contact" data-topic="pro" data-i18n="path.cta">Ask about this path</a>
            </div>
          </article>
        </div>
        <ol className="flow" aria-labelledby="flow-t">
          <li><h3 id="flow-t" data-i18n="flow.1t">Learn the idea</h3><p data-i18n="flow.1d">A short, clear explanation without jargon.</p></li>
          <li><h3 data-i18n="flow.2t">Build it yourself</h3><p data-i18n="flow.2d">Write real code to solve a real problem.</p></li>
          <li><h3 data-i18n="flow.3t">Get honest review</h3><p data-i18n="flow.3d">Specific feedback on what to improve.</p></li>
          <li><h3 data-i18n="flow.4t">Show your work</h3><p data-i18n="flow.4d">Finish with something you can present.</p></li>
        </ol>
        <div className="learn__help">
          <p data-i18n="learn.help">Not sure which path fits?</p>
          <a className="btn btn--primary" href="#contact" data-topic="other" data-i18n="learn.helpcta">Tell us your level and goals</a>
        </div>
      </div>
    </section>
  );
}
