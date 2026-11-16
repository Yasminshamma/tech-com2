/* Northstar — the continuous ribbon.
   One SVG path runs through every scene. Anchors ([data-rb]) mark where it enters and leaves each visual;
   scroll position decides how much of it is drawn, and the orange north star rides its head. */
(function () {
  'use strict';
  const $ = function (id) { return document.getElementById(id); };
  const THEME_COLOR = { paper: '#1F4BFF', warm: '#1F4BFF', navy: '#6E94FF', charcoal: '#6E94FF' };
  let svg, main, body, L = 0, ys = [], lens = [], ready = false, reduced = false;

  function build() {
    main = $('main'); svg = $('ribbon'); body = $('rbBody');
    if (!main || !svg) return;
    const mr = main.getBoundingClientRect();
    const W = main.clientWidth, H = main.scrollHeight;
    svg.setAttribute('width', W); svg.setAttribute('height', H); svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    const pts = [];
    main.querySelectorAll('[data-rb]').forEach(function (el) {
      const r = el.getBoundingClientRect();
      pts.push([Math.max(24, Math.min(W - 24, r.left + r.width / 2 - mr.left)), r.top + r.height / 2 - mr.top]);
    });
    pts.sort(function (a, b) { return a[1] - b[1]; });
    if (pts.length < 2) return;
    let d = 'M' + pts[0][0].toFixed(1) + ' ' + pts[0][1].toFixed(1);
    const edge = window.innerWidth < 900 ? (document.documentElement.dir === 'rtl' ? 10 : W - 10) : null;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], b = pts[i], dy = b[1] - a[1];
      if (edge !== null) {
        d += ' C' + a[0].toFixed(1) + ' ' + (a[1] + dy * 0.12).toFixed(1) + ' ' + edge + ' ' + (a[1] + dy * 0.18).toFixed(1) + ' ' + edge + ' ' + (a[1] + dy * 0.28).toFixed(1) +
             ' L' + edge + ' ' + (b[1] - dy * 0.28).toFixed(1) +
             ' C' + edge + ' ' + (b[1] - dy * 0.18).toFixed(1) + ' ' + b[0].toFixed(1) + ' ' + (b[1] - dy * 0.12).toFixed(1) + ' ' + b[0].toFixed(1) + ' ' + b[1].toFixed(1);
        continue;
      }
      d += ' C' + a[0].toFixed(1) + ' ' + (a[1] + dy * 0.5).toFixed(1) + ' ' + b[0].toFixed(1) + ' ' + (b[1] - dy * 0.5).toFixed(1) + ' ' + b[0].toFixed(1) + ' ' + b[1].toFixed(1);
    }
    const narrow = window.innerWidth < 900, w = narrow ? 12 : 22;
    [['rbShadow', w + 2, 'translate(5 8)'], ['rbBody', w, ''], ['rbHi', 3, 'translate(-4 -4)']].forEach(function (c) {
      const el = $(c[0]); el.setAttribute('d', d); el.setAttribute('stroke-width', c[1]); if (c[2]) el.setAttribute('transform', c[2]);
    });
    const dots = $('rbDots'); dots.style.display = narrow ? 'none' : ''; dots.setAttribute('d', d); dots.setAttribute('stroke-width', narrow ? 3 : 4);
    dots.setAttribute('stroke-dasharray', '0.1 ' + (narrow ? 10 : 13)); dots.setAttribute('transform', 'translate(' + (w + 6) + ' 0)');
    const m1 = $('rbMaskPath'), m2 = $('rbMaskDotsPath');
    m1.setAttribute('d', d); m2.setAttribute('d', d); m2.setAttribute('transform', 'translate(' + (w + 6) + ' 0)');
    L = body.getTotalLength();
    [m1, m2].forEach(function (m) { m.setAttribute('stroke-dasharray', L); });
    // sample y -> length table
    ys = []; lens = [];
    const N = 900; let maxY = -1;
    for (let i = 0; i <= N; i++) { const l = L * i / N, p = body.getPointAtLength(l); maxY = Math.max(maxY, p.y); ys.push(maxY); lens.push(l); }
    // colour by section theme
    const grad = $('rbGrad'); grad.setAttribute('y1', 0); grad.setAttribute('y2', H);
    let stops = '';
    main.querySelectorAll('.scene').forEach(function (s) {
      const t = s.getAttribute('data-theme'), top = s.offsetTop, h = s.offsetHeight;
      const c = THEME_COLOR[t] || '#1F4BFF';
      stops += '<stop offset="' + Math.max(0, (top + h * 0.15) / H).toFixed(4) + '" stop-color="' + c + '"/><stop offset="' + Math.min(1, (top + h * 0.85) / H).toFixed(4) + '" stop-color="' + c + '"/>';
    });
    grad.innerHTML = stops;
    ready = true;
  }

  function lengthAtY(y) {
    if (y <= ys[0]) return 0;
    let lo = 0, hi = ys.length - 1;
    if (y >= ys[hi]) return L;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (ys[mid] < y) lo = mid + 1; else hi = mid; }
    return lens[lo];
  }

  function update(scrollY, isReduced) {
    reduced = !!isReduced;
    if (!ready) return;
    const len = reduced ? L : lengthAtY(scrollY + window.innerHeight * 0.72);
    const off = (L - len).toFixed(1);
    $('rbMaskPath').setAttribute('stroke-dashoffset', off);
    $('rbMaskDotsPath').setAttribute('stroke-dashoffset', off);
    const star = $('rbStar');
    if (len <= 1) { star.setAttribute('opacity', 0); return; }
    const p = body.getPointAtLength(Math.min(len, L));
    star.setAttribute('opacity', 1);
    star.setAttribute('transform', 'translate(' + p.x.toFixed(1) + ' ' + p.y.toFixed(1) + ')');
  }

  window.Northstar = window.Northstar || {};
  window.Northstar.ribbon = { build: build, update: update };
})();
