import { useEffect, useRef, useState } from "react";

const services = [
  { id: "web", layer: "ui", nameKey: "svc.web.n", name: "Web Development", descriptionKey: "svc.web.d", description: "Fast, accessible websites and web apps, from marketing sites to complex platforms.", tags: [["svc.web.t1", "Design systems"], ["svc.web.t2", "Web apps"], ["svc.web.t3", "Performance"]] },
  { id: "mob", layer: "ui", nameKey: "svc.mob.n", name: "Mobile Applications", descriptionKey: "svc.mob.d", description: "Native-feeling iOS and Android apps built for real-world use.", tags: [["svc.mob.t1", "iOS"], ["svc.mob.t2", "Android"], ["svc.mob.t3", "Cross-platform"]] },
  { id: "cus", layer: "code", nameKey: "svc.cus.n", name: "Custom Software", descriptionKey: "svc.cus.d", description: "Internal tools, portals and platforms shaped around your process, not the other way around.", tags: [["svc.cus.t1", "Portals"], ["svc.cus.t2", "Integrations"], ["svc.cus.t3", "APIs"]] },
  { id: "aut", layer: "logic", nameKey: "svc.aut.n", name: "Automation & AI", descriptionKey: "svc.aut.d", description: "Workflows and intelligent assistants that take repetitive work off your team.", tags: [["svc.aut.t1", "Workflows"], ["svc.aut.t2", "AI assistants"], ["svc.aut.t3", "Data pipelines"]] },
  { id: "qa", layer: "qa", nameKey: "svc.qa.n", name: "Quality Assurance & Technical Consulting", descriptionKey: "svc.qa.d", description: "Testing, code review and architecture advice to reduce the risk in what you ship.", tags: [["svc.qa.t1", "Test strategy"], ["svc.qa.t2", "Code review"], ["svc.qa.t3", "Architecture"]] },
];

export default function BuildSection() {
  const [openService, setOpenService] = useState(null);
  const [hoveredLayer, setHoveredLayer] = useState(null);
  const [focusedLayer, setFocusedLayer] = useState(null);
  const stackRef = useRef(null);
  const activeLayer = hoveredLayer || focusedLayer || services.find((service) => service.id === openService)?.layer;

  useEffect(() => {
    stackRef.current?.querySelectorAll(".plate").forEach((plate) => {
      plate.classList.toggle("is-hot", plate.getAttribute("data-layer") === activeLayer);
    });
  }, [activeLayer]);

  return (
    <section id="build" className="scene build" data-theme="paper" data-stage="build" aria-labelledby="build-title">
      <div className="scene__bg"><span className="bgword" data-i18n="word.build" aria-hidden="true">BUILD</span></div>
      <div className="wrap build__grid">
        <i className="rb rb--build" data-rb style={{ top: "5%" }} />
        <i className="rb rb--build" data-rb style={{ top: "95%" }} />
        <div className="build__visual">
          <div className="stack-wrap" aria-hidden="true"><div className="stack" id="stack" dir="ltr" data-scene="stack" ref={stackRef} /></div>
        </div>
        <div className="build__copy">
          <h2 id="build-title" className="h2 mask" data-i18n="build.h2">Software solutions, built to last.</h2>
          <p className="lead" data-i18n="build.p">From first sketch to production, we design and engineer digital products around how your people and customers actually work.</p>
          <ul className="services" id="services">
            {services.map((service) => {
              const isOpen = openService === service.id;
              return (
                <li
                  className={`svc${isOpen ? " is-open" : ""}`}
                  data-layer={service.layer}
                  key={service.id}
                  onMouseEnter={() => setHoveredLayer(service.layer)}
                  onMouseLeave={() => setHoveredLayer(null)}
                  onFocus={() => setFocusedLayer(service.layer)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) setFocusedLayer(null);
                  }}
                >
                  <button
                    className="svc__head"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`svc-${service.id}`}
                    onClick={() => setOpenService(isOpen ? null : service.id)}
                  >
                    <span className="svc__name" data-i18n={service.nameKey}>{service.name}</span>
                    <span className="svc__icon" aria-hidden="true" />
                  </button>
                  <div className="svc__body" id={`svc-${service.id}`} aria-hidden={!isOpen}>
                    <div>
                      <p data-i18n={service.descriptionKey}>{service.description}</p>
                      <ul className="tags">
                        {service.tags.map(([key, label]) => <li data-i18n={key} key={key}>{label}</li>)}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
