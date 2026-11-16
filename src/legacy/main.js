/* Northstar — legacy controller for language, scroll effects, and the contact form. */
(function () {
  'use strict';

  /* ---- Configurable placeholders: edit these, nothing else needs to change ---- */
  const CONFIG = {
    email: 'hello@northstar.example',
    phone: '+000 000 000 000',
    address: 'Your address here',
    social: { linkedin: '', instagram: '', x: '', youtube: '' }, // full URLs; empty = inactive placeholder
    formEndpoint: ''                                              // optional: POST JSON here instead of opening the email app
  };

  const NS = window.Northstar;
  const $ = function (s, r) { return (r || document).querySelector(s); };
  const $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  const clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) document.documentElement.classList.add('reduced');

  /* ---- Contact placeholders ---- */
  $('#cEmail').textContent = CONFIG.email; $('#cEmail').href = 'mailto:' + CONFIG.email;
  $('#cPhone').textContent = CONFIG.phone; $('#cPhone').href = 'tel:' + CONFIG.phone.replace(/[^+\d]/g, '');
  $('#cAddr').textContent = CONFIG.address;
  $$('[data-social]').forEach(function (a) {
    const url = CONFIG.social[a.getAttribute('data-social')];
    if (url) { a.href = url; a.target = '_blank'; a.rel = 'noopener'; }
    else a.addEventListener('click', function (e) { e.preventDefault(); });
  });
  $('#year').textContent = new Date().getFullYear();

  /* ---- Scenes ---- */
  NS.scenes.mount();

  /* ---- Language ---- */
  const langBtn = $('#langBtn'), langLabel = $('#langLabel');
  function setLang(l) {
    NS.i18n.apply(l);
    langLabel.textContent = l === 'ar' ? 'EN' : 'العربية';
    langBtn.setAttribute('aria-label', l === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    try { localStorage.setItem('ns-lang', l); } catch (e) {}
    requestAnimationFrame(function () { setTimeout(rebuildRibbon, 80); });
  }
  langBtn.addEventListener('click', function () { setLang(NS.i18n.lang === 'ar' ? 'en' : 'ar'); });
  let saved = null; try { saved = localStorage.getItem('ns-lang'); } catch (e) {}
  const urlLang = new URLSearchParams(location.search).get('lang');
  const startLang = urlLang || saved;
  if (startLang === 'ar') setLang('ar');

  const nav = $('#nav');

  /* ---- Topic links prefill the form ---- */
  $$('a[data-topic]').forEach(function (a) { a.addEventListener('click', function () { $('#topic').value = a.getAttribute('data-topic'); }); });

  /* ---- Form ---- */
  const form = $('#inquiry'), status = $('#formStatus');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const d = new FormData(form), name = (d.get('name') || '').trim(), email = (d.get('email') || '').trim(), msg = (d.get('message') || '').trim();
    const ok = { name: !!name, email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), message: !!msg };
    ['name', 'email', 'message'].forEach(function (k) { form.elements[k].classList.toggle('is-bad', !ok[k]); form.elements[k].setAttribute('aria-invalid', String(!ok[k])); });
    if (!(ok.name && ok.email && ok.message)) { status.className = 'form__status err'; status.textContent = NS.i18n.t('status.err'); return; }
    const topicLabel = form.elements.topic.options[form.elements.topic.selectedIndex].textContent;
    if (CONFIG.formEndpoint) {
      fetch(CONFIG.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: name, email: email, topic: d.get('topic'), message: msg }) })
        .then(function (r) { if (!r.ok) throw new Error(); status.className = 'form__status'; status.textContent = NS.i18n.t('status.sent'); form.reset(); })
        .catch(function () { status.className = 'form__status err'; status.textContent = NS.i18n.t('status.fail'); });
    } else {
      status.className = 'form__status'; status.textContent = NS.i18n.t('status.ok');
      const body = msg + '\n\n' + name + '\n' + email;
      location.href = 'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent('Northstar inquiry: ' + topicLabel) + '&body=' + encodeURIComponent(body);
    }
  });

  /* ---- Reveals (used sparingly: headlines wipe in once, project previews open once) ---- */
  const hero = $('.hero');
  requestAnimationFrame(function () { requestAnimationFrame(function () { hero.classList.add('is-in'); }); });
  const reveals = $$('.mask,.proj__art,.about__title,.contact__title');
  function checkReveals(vh) {
    for (let i = reveals.length - 1; i >= 0; i--) {
      const el = reveals[i], r = el.getBoundingClientRect();
      if (r.top < vh * 0.9 && r.bottom > 0) { el.classList.add(el.matches('.about__title,.contact__title') ? 'is-in' : 'in'); reveals.splice(i, 1); }
    }
  }

  /* ---- Hero pointer depth ---- */
  const hv = $('.hero__visual');
  if (!reduced && matchMedia('(pointer:fine)').matches) {
    hero.addEventListener('pointermove', function (e) {
      const r = hero.getBoundingClientRect();
      hv.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
      hv.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
    });
  }

  /* ---- Ribbon ---- */
  let rbTimer;
  function rebuildRibbon() { NS.ribbon.build(); lastY = -1; }
  window.addEventListener('load', function () { rebuildRibbon(); setTimeout(rebuildRibbon, 1800); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { setTimeout(rebuildRibbon, 100); });
  if ('ResizeObserver' in window) new ResizeObserver(function () { clearTimeout(rbTimer); rbTimer = setTimeout(rebuildRibbon, 140); }).observe($('#main'));

  /* ---- Scroll engine ---- */
  const scenes = $$('.scene'), railItems = $$('.rail li'), navLinks = $$('.nav__links a[href^="#"]:not(.nav__cta)');
  const streamTrack = $('#streamTrack'), stack = $('#stack'), build = $('#build'), autoSec = $('#automate'), viz = $('.viz'), star = $('.about__star'), parallax = $$('[data-speed]');
  let lastY = -1, autoVisible = false, lastStage = '', lastNav = '', buildP = 0;
  if ('IntersectionObserver' in window) new IntersectionObserver(function (en) { autoVisible = en[0].isIntersecting; }, { rootMargin: '100px' }).observe(autoSec);

  function frame(t) {
    const y = window.scrollY, vh = window.innerHeight, rtl = document.documentElement.dir === 'rtl';
    if (y !== lastY) {
      lastY = y;
      checkReveals(vh);
      nav.classList.toggle('is-scrolled', y > 24);
      // current scene
      let cur = scenes[0];
      scenes.forEach(function (s) { const r = s.getBoundingClientRect(); if (r.top <= vh * 0.4 && r.bottom > vh * 0.4) cur = s; });
      const th = cur.getAttribute('data-theme');
      const navTheme = th === 'navy' || th === 'charcoal' ? 'dark' : th === 'warm' ? 'warm' : 'paper';
      if (navTheme !== lastNav) { document.body.setAttribute('data-nav', navTheme); lastNav = navTheme; }
      // build assembly progress
      const br = build.getBoundingClientRect();
      buildP = reduced ? 1 : clamp((vh * 0.5 - br.top) / (br.height * 0.55), 0, 1);
      stack.style.setProperty('--p', buildP.toFixed(3));
      // stage rail: code -> build happens inside the build scene as the layers assemble
      let stage = cur.getAttribute('data-stage');
      if (cur === build) stage = buildP < 0.5 ? 'code' : 'build';
      if (stage !== lastStage) { lastStage = stage; railItems.forEach(function (li) { li.classList.toggle('is-on', li.getAttribute('data-stage') === stage); }); }
      navLinks.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + cur.id); });
      // big background words drift as each scene passes
      scenes.forEach(function (s) {
        const w = s.querySelector('.bgword'); if (!w) return;
        const r = s.getBoundingClientRect(), q = clamp((vh - r.top) / (vh + r.height), 0, 1);
        if (r.bottom < -200 || r.top > vh + 200) return;
        w.style.setProperty('--wx', ((0.5 - q) * 0.3 * innerWidth * (rtl ? -1 : 1)).toFixed(1) + 'px');
        w.style.setProperty('--ws', (1 + q * 0.08).toFixed(3));
      });
      if (star) { const r = $('#about').getBoundingClientRect(); star.style.setProperty('--rot', (clamp((vh - r.top) / (vh + r.height), 0, 1) * 70).toFixed(1) + 'deg'); }
      if (!reduced && innerWidth > 900) parallax.forEach(function (el) {
        const r = el.getBoundingClientRect(); if (r.bottom < 0 || r.top > vh) return;
        el.style.transform = 'translate3d(0,' + (((r.top + r.height / 2 - vh / 2) * -parseFloat(el.getAttribute('data-speed'))).toFixed(1)) + 'px,0)';
      });
      if (streamTrack && !reduced) { const half = streamTrack.scrollWidth / 2; if (half) streamTrack.style.transform = 'translate3d(' + (-((y * 0.45) % half)).toFixed(1) + 'px,0,0)'; }
      NS.ribbon.update(y, reduced);
    }
    // automation system: scroll decides how organised it is, time moves the data packets
    if (autoVisible || lastY === y) {
      const vr = viz.getBoundingClientRect();
      const p = reduced ? 1 : clamp((vh * 0.95 - (vr.top + vr.height / 2)) / (vh * 0.5), 0, 1);
      if (autoVisible) NS.scenes.automateUpdate(p, reduced ? 0 : t);
    }
    requestAnimationFrame(frame);
  }
  NS.scenes.automateUpdate(reduced ? 1 : 0, 0);
  requestAnimationFrame(frame);
})();
