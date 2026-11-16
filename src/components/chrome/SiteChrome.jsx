import { useEffect, useRef, useState } from "react";

export function SkipLink() {
  return <a className="skip" href="#main" data-i18n="nav.skip">Skip to content</a>;
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinksRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleMenuKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        burgerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;
      const links = navLinksRef.current?.querySelectorAll("a[href]");
      if (!links?.length) return;

      const firstLink = links[0];
      const lastLink = links[links.length - 1];
      if (event.shiftKey && document.activeElement === firstLink) {
        event.preventDefault();
        lastLink.focus();
      } else if (!event.shiftKey && document.activeElement === lastLink) {
        event.preventDefault();
        firstLink.focus();
      }
    };
    const closeOnWideScreen = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };

    navLinksRef.current?.querySelector("a[href]")?.focus();
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleMenuKeyDown);
    window.addEventListener("resize", closeOnWideScreen);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleMenuKeyDown);
      window.removeEventListener("resize", closeOnWideScreen);
    };
  }, [menuOpen]);

  return (
    <header className={`nav${menuOpen ? " menu-open" : ""}`} id="nav">
      <a className="brand" href="#top" aria-label="Northstar">
        <svg className="brand__mark" viewBox="0 0 32 32" aria-hidden="true"><path d="M5 28 V4 H10 L22 18 V4 H27 V28 H22 L10 14 V28 Z" fill="currentColor" /></svg>
        <span className="brand__name">Northstar</span>
      </a>
      <nav
        ref={navLinksRef}
        className={`nav__links${menuOpen ? " is-open" : ""}`}
        id="navLinks"
        aria-label="Main"
        onClick={() => {
          if (menuOpen) burgerRef.current?.focus();
          setMenuOpen(false);
        }}
      >
        <a href="#build" data-i18n="nav.build">Software</a>
        <a href="#automate" data-i18n="nav.automate">Automation</a>
        <a href="#learn" data-i18n="nav.learn">Academy</a>
        <a href="#create" data-i18n="nav.create">Projects</a>
        <a href="#about" data-i18n="nav.about">About</a>
        <a className="nav__cta" href="#contact" data-i18n="nav.cta">Start a project</a>
      </nav>
      <button className="lang" id="langBtn" type="button" aria-label="Switch language"><span id="langLabel">العربية</span></button>
      <button ref={burgerRef} className="burger" id="burger" type="button" aria-expanded={menuOpen} aria-controls="navLinks" data-i18n-attr="aria-label:nav.menu" aria-label="Menu" onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
    </header>
  );
}

export function ProgressRail() {
  return (
    <aside className="rail" id="rail" aria-hidden="true">
      <ol>
        <li data-stage="idea"><i /><span data-i18n="rail.idea">Idea</span></li>
        <li data-stage="code"><i /><span data-i18n="rail.code">Code</span></li>
        <li data-stage="build"><i /><span data-i18n="rail.build">Build</span></li>
        <li data-stage="automate"><i /><span data-i18n="rail.automate">Automate</span></li>
        <li data-stage="learn"><i /><span data-i18n="rail.learn">Learn</span></li>
        <li data-stage="innovate"><i /><span data-i18n="rail.innovate">Innovate</span></li>
      </ol>
    </aside>
  );
}
