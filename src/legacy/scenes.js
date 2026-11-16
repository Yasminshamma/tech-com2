/* Northstar — original scene art, generated in code (SVG + CSS 3D).
   Isometric helpers keep every scene editable: change a number, the scene updates. */
(function () {
  'use strict';
  const C = 0.866, S = 0.5;
  const NAVY = { t: '#22346f', l: '#12204f', r: '#0a1330' };
  const NAVYL = { t: '#3a55b8', l: '#26398a', r: '#1a2a66' };
  const BLUE = { t: '#8aa8ff', l: '#3d68ff', r: '#2148d6' };
  const CREAM = { t: '#fbf7ee', l: '#e6dfcd', r: '#d2c8b0' };
  const ORG = { t: '#ffb184', l: '#ff7a2f', r: '#d65a17' };
  const CHAR = { t: '#555a66', l: '#2b2e35', r: '#1b1d22' };
  const PLATE = { t: '#ece5d4', l: '#cfc6af', r: '#bdb398' };
  const DESK = { t: '#fff3de', l: '#ebcd9f', r: '#d9b685' };
  const NIGHT = { t: '#1d2e6b', l: '#13214f', r: '#0c163a' };

  function rng(seed) { return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

  function iso(ox, oy) {
    const P = (x, y, z) => (ox + (x - y) * C).toFixed(1) + ',' + (oy + (x + y) * S - z).toFixed(1);
    const pt = (x, y, z) => [ox + (x - y) * C, oy + (x + y) * S - z];
    return {
      P, pt,
      box(x, y, z, w, d, h, c) {
        return '<polygon points="' + [P(x, y, z + h), P(x + w, y, z + h), P(x + w, y + d, z + h), P(x, y + d, z + h)].join(' ') + '" fill="' + c.t + '"/>' +
          '<polygon points="' + [P(x, y + d, z + h), P(x + w, y + d, z + h), P(x + w, y + d, z), P(x, y + d, z)].join(' ') + '" fill="' + c.l + '"/>' +
          '<polygon points="' + [P(x + w, y, z + h), P(x + w, y + d, z + h), P(x + w, y + d, z), P(x + w, y, z)].join(' ') + '" fill="' + c.r + '"/>';
      },
      // rectangle on the left-facing plane (y = const), x from x..x+w, z from z..z+h
      fL(x, y, z, w, h, fill, op) {
        return '<polygon points="' + [P(x, y, z + h), P(x + w, y, z + h), P(x + w, y, z), P(x, y, z)].join(' ') + '" fill="' + fill + '"' + (op ? ' opacity="' + op + '"' : '') + '/>';
      },
      // rectangle on the right-facing plane (x = const), y from y..y+d
      fR(x, y, z, d, h, fill, op) {
        return '<polygon points="' + [P(x, y, z + h), P(x, y + d, z + h), P(x, y + d, z), P(x, y, z)].join(' ') + '" fill="' + fill + '"' + (op ? ' opacity="' + op + '"' : '') + '/>';
      },
      // matrix placing flat artwork onto the left plane; origin = top-left corner (x, y, zTop)
      mL(x, y, zTop) { const p = pt(x, y, zTop); return 'matrix(' + C + ' ' + S + ' 0 1 ' + p[0].toFixed(1) + ' ' + p[1].toFixed(1) + ')'; },
      // matrix placing artwork onto the top plane at z; u along +x, v along +y
      mT(x, y, z) { const p = pt(x, y, z); return 'matrix(' + C + ' ' + S + ' ' + (-C) + ' ' + S + ' ' + p[0].toFixed(1) + ' ' + p[1].toFixed(1) + ')'; }
    };
  }

  const CODE_LINES = [
    [['c', '// idea → product']],
    [['k', 'const '], ['p', 'idea = '], ['k', 'await '], ['f', 'imagine'], ['p', '();']],
    [['k', 'const '], ['p', 'plan = '], ['f', 'design'], ['p', '(idea);']],
    [['k', 'export function '], ['f', 'build'], ['p', '() {']],
    [['p', '  return '], ['f', 'ship'], ['p', '(plan, '], ['s', '"north"'], ['p', ');']],
    [['p', '}']]
  ];
  const COL = { k: '#ff9e63', f: '#8fb0ff', s: '#8fe1b4', c: '#6c78a8', p: '#cfd8ff' };
  function codeText(lines, size, lh, x0, y0, nums) {
    let out = '<text font-family="JetBrains Mono,ui-monospace,Menlo,monospace" font-size="' + size + '" style="white-space:pre" xml:space="preserve">';
    lines.forEach(function (ln, i) {
      const y = y0 + i * lh;
      if (nums) out += '<tspan x="' + (x0 - 12) + '" y="' + y + '" fill="#4b5688">' + (i + 1) + '</tspan>';
      out += '<tspan x="' + x0 + '" y="' + y + '">' + ln.map(function (t) { return '<tspan fill="' + COL[t[0]] + '">' + t[1].replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</tspan>'; }).join('') + '</tspan>';
    });
    return out + '</text>';
  }

  /* ---------------- HERO ---------------- */
  function hero() {
    const I = iso(380, 340);
    let g = '';
    // ribbon geometry (shared by back and front copies)
    const rd = 'M -40 70 C 80 10, 200 60, 262 150 S 420 262, 480 196 S 650 120, 650 280 S 520 436, 372 442 S 150 470, 150 560 S 262 600, 262 664';
    function ribbon(id) {
      return '<g id="' + id + '">' +
        '<path d="' + rd + '" transform="translate(5 8)" fill="none" stroke="#0a1330" stroke-opacity=".2" stroke-width="26" stroke-linecap="round"/>' +
        '<path d="' + rd + '" fill="none" stroke="url(#hg)" stroke-width="24" stroke-linecap="round"/>' +
        '<path d="' + rd + '" transform="translate(-5 -5)" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3.5" stroke-linecap="round"/>' +
        '<path d="' + rd + '" transform="translate(28 0)" fill="none" stroke="#1F4BFF" stroke-width="4" stroke-linecap="round" stroke-dasharray="0.1 13"/>' +
        '</g>';
    }
    g += '<defs><linearGradient id="hg" x1="0" y1="0" x2="720" y2="660" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2f5cff"/><stop offset=".55" stop-color="#1F4BFF"/><stop offset="1" stop-color="#6E94FF"/></linearGradient>' +
      '<clipPath id="hfront"><rect x="-60" y="372" width="840" height="320"/><rect x="560" y="150" width="200" height="260"/></clipPath>' +
      '<clipPath id="hscr"><rect x="0" y="0" width="118" height="84" rx="3"/></clipPath></defs>';
    g += ribbon('hrBack');
    // platform + architecture
    g += I.box(-150, -150, 0, 300, 300, 16, PLATE);
    g += I.box(-142, -142, 16, 284, 284, 3, CREAM);
    g += I.box(-130, -130, 19, 64, 64, 170, NAVY);
    for (let i = 0; i < 7; i++) g += I.fL(-122, -66, 36 + i * 22, 48, 7, '#6E94FF', 0.85);
    for (let i = 0; i < 7; i++) g += I.fR(-66, -122, 36 + i * 22, 48, 7, '#2a3f86');
    g += I.box(-50, -140, 19, 52, 52, 112, BLUE);
    for (let i = 0; i < 4; i++) g += I.fL(-42, -88, 32 + i * 24, 36, 8, '#0a1330', 0.55);
    g += I.box(30, -140, 19, 100, 24, 84, CHAR);
    for (let i = 0; i < 3; i++) g += I.fL(42 + i * 30, -116, 29, 14, 56, '#fbf7ee', 0.9);
    for (let i = 0; i < 4; i++) g += I.box(70 + i * 20, -92, 19, 20, 92, 16 * (i + 1), CREAM);
    g += I.box(-142, 24, 19, 52, 74, 10, BLUE);
    g += I.box(100, 40, 19, 34, 34, 34, ORG);
    // laptop
    g += I.box(-70, 30, 19, 130, 84, 7, CHAR);
    g += '<g transform="' + I.mT(-64, 38, 26) + '" fill="#6a6f7d">';
    for (let r = 0; r < 4; r++) for (let c = 0; c < 10; c++) g += '<rect x="' + (c * 11.6) + '" y="' + (r * 11) + '" width="9.4" height="8.6" rx="1.2"/>';
    g += '</g>';
    g += I.box(-70, 24, 26, 130, 6, 98, CHAR);
    g += '<g transform="' + I.mL(-64, 30, 118) + '"><g clip-path="url(#hscr)">' +
      '<rect width="118" height="84" fill="#0b1230"/><rect width="118" height="9" fill="#17214f"/><circle cx="6" cy="4.5" r="1.7" fill="#ff7a2f"/><circle cx="12" cy="4.5" r="1.7" fill="#6E94FF"/><circle cx="18" cy="4.5" r="1.7" fill="#cfd8ff"/>' +
      codeText(CODE_LINES, 6.2, 9.6, 16, 24, true) +
      '<rect x="52" y="63" width="3.6" height="7" fill="#ff7a2f"><animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite"/></rect>' +
      '<rect x="8" y="74" width="102" height="2" fill="#1F4BFF" opacity=".7"/></g></g>';
    // floating interface panels (flat artwork on the left plane)
    function panel(tx, ty, w, h, inner, cls, depth) {
      return '<g class="dp dp' + depth + '"><g class="float ' + cls + '"><g transform="matrix(' + C + ' ' + S + ' 0 1 ' + tx + ' ' + ty + ')">' +
        '<rect x="7" y="9" width="' + w + '" height="' + h + '" rx="7" fill="#0a1330" opacity=".16"/>' +
        '<rect width="' + w + '" height="' + h + '" rx="7" fill="#fbf7ee" stroke="#0a1330" stroke-opacity=".15"/>' + inner + '</g></g></g>';
    }
    const A = '<rect x="10" y="10" width="40" height="5" rx="2.5" fill="#0a1330"/><rect x="10" y="20" width="62" height="3" rx="1.5" fill="#0a1330" opacity=".3"/>' +
      [30, 52, 38, 66, 48, 78].map(function (v, i) { return '<rect x="' + (12 + i * 22) + '" y="' + (112 - v) + '" width="14" height="' + v + '" rx="3" fill="' + (i === 5 ? '#ff7a2f' : '#1F4BFF') + '"/>'; }).join('') + '<rect x="8" y="114" width="136" height="1.5" fill="#0a1330" opacity=".3"/>';
    const B = '<circle cx="24" cy="24" r="11" fill="#1F4BFF"/><rect x="42" y="16" width="52" height="5" rx="2.5" fill="#0a1330"/><rect x="42" y="27" width="34" height="3" rx="1.5" fill="#0a1330" opacity=".3"/>' +
      '<rect x="10" y="48" width="104" height="26" rx="6" fill="#E7E0CF"/><rect x="10" y="82" width="104" height="26" rx="6" fill="#E7E0CF"/><rect x="18" y="57" width="46" height="4" rx="2" fill="#0a1330" opacity=".5"/><rect x="18" y="91" width="58" height="4" rx="2" fill="#0a1330" opacity=".5"/>' +
      '<rect x="10" y="118" width="104" height="24" rx="12" fill="#ff7a2f"/><rect x="40" y="127" width="44" height="5" rx="2.5" fill="#fff"/>';
    const Cc = '<rect width="140" height="14" rx="7" fill="#0a1330"/><circle cx="9" cy="7" r="2.2" fill="#ff7a2f"/><circle cx="16" cy="7" r="2.2" fill="#6E94FF"/>' +
      '<rect x="10" y="26" width="30" height="4" rx="2" fill="#1F4BFF"/><rect x="46" y="26" width="52" height="4" rx="2" fill="#0a1330" opacity=".35"/><rect x="18" y="38" width="64" height="4" rx="2" fill="#0a1330" opacity=".35"/><rect x="18" y="50" width="44" height="4" rx="2" fill="#ff7a2f"/><rect x="10" y="62" width="80" height="4" rx="2" fill="#0a1330" opacity=".35"/>' +
      '<rect x="10" y="76" width="38" height="14" rx="7" fill="#1F4BFF"/>';
    g += panel(470, 38, 152, 124, A, 'f1', 2);
    g += panel(574, 214, 124, 150, B, 'f2', 3);
    g += panel(38, 120, 140, 98, Cc, 'f3', 1);
    // front pass of the ribbon (over the platform and the right panel) — it threads the scene
    g += '<g clip-path="url(#hfront)">' + ribbon('hrFront').replace(/id="hrFront"/, '') + '</g>';
    // north star on the tallest tower
    const sp = I.pt(-98, -98, 214);
    g += '<g class="float f2"><path transform="translate(' + sp[0].toFixed(1) + ' ' + (sp[1] - 4).toFixed(1) + ')" d="M-1.5 -34 H1.5 V6 H-1.5 Z M1.5 -34 L22 -25 L1.5 -16 Z" fill="#ff7a2f"/></g>';
    g += '<rect data-rb x="261" y="663" width="2" height="2" fill="none"/>';
    return '<svg viewBox="0 0 720 660" xmlns="http://www.w3.org/2000/svg">' + g + '</svg>';
  }

  /* ---------------- BUILD (CSS 3D stack) ---------------- */
  function stack() {
    const hot = '';
    const logic = '<svg viewBox="0 0 300 140" preserveAspectRatio="none"><g stroke="#fff" stroke-width="2" fill="none" opacity=".85"><path d="M30 70 H90 L110 30 H170 L190 70 H270"/><path d="M110 110 H170 L190 70"/><path d="M30 70 L50 110 H110"/></g><g fill="#fff"><rect x="18" y="58" width="26" height="24" rx="5"/><rect x="98" y="18" width="26" height="24" rx="5"/><rect x="158" y="18" width="26" height="24" rx="5"/><rect x="258" y="58" width="26" height="24" rx="5"/><rect x="98" y="98" width="26" height="24" rx="5"/></g><rect x="168" y="58" width="26" height="24" rx="5" fill="#ff7a2f"/></svg>';
    const qa = '<svg viewBox="0 0 300 140" preserveAspectRatio="none"><g>' + (function () { let s = ''; const r = rng(9); for (let i = 0; i < 4; i++) for (let j = 0; j < 8; j++) { const ok = r() > 0.12; s += '<rect x="' + (14 + j * 35) + '" y="' + (16 + i * 31) + '" width="28" height="22" rx="4" fill="' + (ok ? '#33405f' : '#5c2a17') + '"/><path d="' + (ok ? 'M' + (21 + j * 35) + ' ' + (28 + i * 31) + ' l5 5 l9 -10' : 'M' + (23 + j * 35) + ' ' + (22 + i * 31) + ' l12 12 m0 -12 l-12 12') + '" stroke="' + (ok ? '#7ee0a6' : '#ff7a2f') + '" stroke-width="2.4" fill="none" stroke-linecap="round"/>'; } return s; })() + '</g></svg>';
    const codeA = '<pre class="code" aria-hidden="true"><span class="c">// ui/Booking.tsx</span>\n<span class="k">export function</span> <span class="f">Booking</span>() {\n  <span class="k">const</span> slots = <span class="f">useSlots</span>();\n  <span class="k">return</span> (\n    &lt;<span class="f">Calendar</span> slots={slots}\n      onPick={<span class="f">reserve</span>} /&gt;\n  );\n}</pre>';
    const codeB = '<pre class="code" aria-hidden="true"><span class="c">src/</span>\n  api/       <span class="s">orders.ts</span>\n  core/      <span class="s">pricing.ts</span>\n  jobs/      <span class="s">notify.ts</span>\n  <span class="k">tests</span>/     <span class="s">all green</span></pre>';
    const ui = '<div class="ui"><b class="nav-b"><i></i><i style="background:#6E94FF"></i></b><b class="side"></b><div class="main"><b></b><b></b><b></b></div></div>';
    return '<div class="plate plate--qa" data-layer="qa">' + qa + '<span class="plate__tag" data-i18n="stack.qa">Quality</span></div>' +
      '<div class="plate plate--logic" data-layer="logic">' + logic + '<span class="plate__tag" data-i18n="stack.logic">Logic</span></div>' +
      '<div class="plate plate--code" data-layer="code">' + codeB + '<span class="plate__tag" data-i18n="stack.code">Code</span></div>' +
      '<div class="plate plate--ui" data-layer="ui">' + ui + '<div class="code-wrap">' + codeA.replace('class="code"', 'class="code" style="position:absolute;inset:0;background:#0a1330;opacity:calc(1.35 - var(--p,0)*1.3)"') + '</div><span class="scanline"></span><span class="plate__tag" data-i18n="stack.ui">Interface</span></div>';
  }

  /* ---------------- AUTOMATE (runtime) ---------------- */
  const AUTO = { nodes: [], edges: [], papers: [], t: 0, built: false };
  function automate(host) {
    const labels = ['Intake', 'Validate', 'AI review', 'Route', 'Approve', 'Notify', 'Sync', 'Report'];
    const order = [[90, 190], [250, 190], [410, 190], [570, 190], [90, 400], [250, 400], [410, 400], [570, 400]];
    const chaos = [[130, 110], [440, 60], [540, 250], [300, 290], [80, 360], [470, 480], [200, 490], [330, 150]];
    const rot = [-9, 7, -5, 11, 8, -10, 6, -7];
    const r = rng(21);
    let s = '<svg viewBox="0 0 640 560" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ag" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1F4BFF"/><stop offset="1" stop-color="#6E94FF"/></linearGradient></defs>';
    // loose papers (the manual mess)
    s += '<g id="aPapers">';
    for (let i = 0; i < 9; i++) s += '<g data-i="' + i + '"><rect x="-22" y="-28" width="44" height="56" rx="4" fill="#EEEBE1" opacity=".16"/><rect x="-14" y="-18" width="28" height="3" rx="1.5" fill="#EEEBE1" opacity=".3"/><rect x="-14" y="-10" width="20" height="3" rx="1.5" fill="#EEEBE1" opacity=".3"/><rect x="-14" y="-2" width="24" height="3" rx="1.5" fill="#EEEBE1" opacity=".3"/></g>';
    s += '</g><g id="aEdges" fill="none" stroke-linecap="round">';
    for (let i = 0; i < 7; i++) s += '<path data-e="' + i + '" stroke="#6E94FF" stroke-width="2.4" stroke-opacity=".9"/>';
    s += '</g><g id="aPackets">';
    for (let i = 0; i < 7; i++) s += '<circle data-k="' + i + '" r="4.5" fill="#ff7a2f"/>';
    s += '</g><g id="aNodes">';
    labels.forEach(function (l, i) {
      s += '<g data-n="' + i + '"><rect x="-62" y="-24" width="124" height="48" rx="10" fill="#14214f" stroke="#6E94FF" stroke-opacity=".55" stroke-width="1.5"/>' +
        '<circle cx="-44" cy="0" r="5" data-dot/>' +
        '<text x="-30" y="5" fill="#EEEBE1" font-family="Hanken Grotesk,system-ui,sans-serif" font-size="15" font-weight="700">' + l + '</text>' +
        (i === 2 ? '<circle cx="47" cy="0" r="4.5" fill="#ff7a2f"/>' : '') + '</g>';
    });
    s += '</g></svg>';
    host.innerHTML = s;
    const svg = host.firstChild;
    AUTO.nodes = Array.prototype.map.call(svg.querySelectorAll('[data-n]'), function (el, i) { return { el: el, dot: el.querySelector('[data-dot]'), o: order[i], c: chaos[i], rot: rot[i] }; });
    AUTO.edges = Array.prototype.map.call(svg.querySelectorAll('[data-e]'), function (el, i) {
      const a = i, b = i + 1, rowBreak = i === 3;
      return { el: el, a: a, b: b, rowBreak: rowBreak, v1: [(r() - .5) * 260, (r() - .5) * 260], v2: [(r() - .5) * 260, (r() - .5) * 260] };
    });
    AUTO.packets = Array.prototype.slice.call(svg.querySelectorAll('[data-k]'));
    AUTO.papers = Array.prototype.map.call(svg.querySelectorAll('#aPapers g'), function (el, i) { return { el: el, x: 40 + r() * 560, y: 40 + r() * 480, a: (r() - .5) * 70, drift: r() * 6.28 }; });
    AUTO.built = true;
    automateUpdate(0, 0);
  }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function automateUpdate(p, t) {
    if (!AUTO.built) return;
    const e = p * p * (3 - 2 * p); // smoothstep
    const pos = AUTO.nodes.map(function (n) {
      const x = lerp(n.c[0], n.o[0], e), y = lerp(n.c[1], n.o[1], e);
      n.el.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ') rotate(' + (n.rot * (1 - e)).toFixed(1) + ')');
      n.dot.setAttribute('fill', e > 0.6 ? '#6E94FF' : '#ff7a2f');
      return [x, y];
    });
    AUTO.edges.forEach(function (ed) {
      const A = pos[ed.a], B = pos[ed.b];
      const k = 70;
      const od1 = ed.rowBreak ? [0, k] : [k, 0], od2 = ed.rowBreak ? [0, -k] : [-k, 0];
      const c1 = [A[0] + lerp(ed.v1[0], od1[0], e), A[1] + lerp(ed.v1[1], od1[1], e)];
      const c2 = [B[0] + lerp(ed.v2[0], od2[0], e), B[1] + lerp(ed.v2[1], od2[1], e)];
      ed.el.setAttribute('d', 'M' + A[0].toFixed(1) + ' ' + A[1].toFixed(1) + ' C' + c1[0].toFixed(1) + ' ' + c1[1].toFixed(1) + ' ' + c2[0].toFixed(1) + ' ' + c2[1].toFixed(1) + ' ' + B[0].toFixed(1) + ' ' + B[1].toFixed(1));
      ed.el.setAttribute('stroke-dasharray', e > 0.85 ? 'none' : '5 7');
      ed.el.setAttribute('stroke-opacity', (0.35 + e * 0.6).toFixed(2));
      ed.len = ed.el.getTotalLength();
    });
    AUTO.packets.forEach(function (c, i) {
      const ed = AUTO.edges[i];
      const f = ((t * 0.00022 + i * 0.173) % 1);
      const pt = ed.el.getPointAtLength(ed.len * f);
      c.setAttribute('cx', pt.x.toFixed(1)); c.setAttribute('cy', pt.y.toFixed(1));
      c.setAttribute('opacity', Math.max(0, Math.min(1, (e - 0.55) * 3)).toFixed(2));
    });
    AUTO.papers.forEach(function (pp) {
      const dx = Math.sin(t * 0.0004 + pp.drift) * 8 * (1 - e), dy = Math.cos(t * 0.0003 + pp.drift) * 8 * (1 - e);
      pp.el.setAttribute('transform', 'translate(' + (pp.x + dx).toFixed(1) + ' ' + (pp.y + dy).toFixed(1) + ') rotate(' + (pp.a * (1 - e)).toFixed(1) + ')');
      pp.el.setAttribute('opacity', (1 - e).toFixed(2));
    });
  }

  /* ---------------- LEARN (iso learning environment) ---------------- */
  function learn() {
    const I = iso(320, 262);
    let g = '';
    g += I.box(-190, -120, 0, 380, 240, 14, DESK);
    // bookshelf wall (back-left)
    g += I.box(-190, -120, 14, 12, 240, 150, CREAM);
    for (let i = 0; i < 4; i++) g += I.fR(-178, -112, 34 + i * 34, 224, 3, '#cdb48a');
    const bc = [ORG.l, '#1F4BFF', '#0A1330', '#6E94FF', '#ff7a2f'];
    const r = rng(5);
    for (let row = 0; row < 3; row++) { let y = -108; for (let k = 0; k < 9 && y < 90; k++) { const w = 10 + r() * 10, h = 18 + r() * 12; g += I.box(-176, y, 37 + row * 34, 8, w, h, { t: bc[k % 5], l: bc[(k + 1) % 5], r: bc[k % 5] }); y += w + 3; } }
    // monitor with code
    g += I.box(-110, -50, 14, 10, 10, 22, CHAR);
    g += I.box(-150, -60, 36, 100, 8, 70, CHAR);
    g += '<g transform="' + I.mL(-146, -52, 100) + '"><rect width="92" height="62" rx="3" fill="#0b1230"/>' + codeText(CODE_LINES.slice(1, 6), 5.4, 9, 12, 14, true) + '<rect x="8" y="55" width="76" height="2" fill="#1F4BFF"/></g>';
    // second monitor: robot controls
    g += I.box(0, -80, 14, 10, 10, 22, CHAR);
    g += I.box(-30, -90, 36, 100, 8, 70, CHAR);
    g += '<g transform="' + I.mL(-26, -82, 100) + '"><rect width="92" height="62" rx="3" fill="#FBF8F0"/><rect x="6" y="6" width="80" height="8" rx="3" fill="#0a1330"/><rect x="6" y="20" width="36" height="34" rx="4" fill="#1F4BFF"/><rect x="48" y="20" width="38" height="14" rx="3" fill="#ff7a2f"/><rect x="48" y="40" width="38" height="14" rx="3" fill="#E7E0CF"/></g>';
    // laptop in front
    g += I.box(-110, 20, 14, 86, 58, 5, CHAR);
    g += I.box(-110, 16, 19, 86, 5, 50, CHAR);
    g += '<g transform="' + I.mL(-106, 21, 65) + '"><rect width="78" height="40" rx="2" fill="#1b2a63"/><rect x="6" y="6" width="30" height="3" rx="1.5" fill="#6E94FF"/><rect x="6" y="14" width="46" height="3" rx="1.5" fill="#fff" opacity=".6"/><rect x="6" y="22" width="22" height="3" rx="1.5" fill="#ff7a2f"/></g>';
    // books on the desk
    g += I.box(-20, 40, 14, 64, 44, 9, NAVY) + I.box(-16, 42, 23, 60, 40, 9, ORG) + I.box(-22, 40, 32, 56, 42, 8, BLUE);
    // robot
    g += I.box(92, 10, 14, 44, 44, 8, CHAR);
    g += I.box(98, 16, 22, 32, 32, 44, BLUE);
    g += I.fL(106, 48, 36, 16, 5, '#fff', 0.9) + I.fL(106, 48, 46, 16, 5, '#ff7a2f');
    g += I.box(102, 20, 66, 24, 24, 20, CREAM);
    g += I.fL(106, 44, 72, 5, 5, '#0a1330') + I.fL(116, 44, 72, 5, 5, '#0a1330');
    g += I.box(112, 30, 86, 3, 3, 12, CHAR) + I.box(110, 28, 98, 8, 8, 8, ORG);
    g += I.box(90, 24, 34, 8, 12, 24, NAVY) + I.box(142, 24, 34, 8, 12, 24, NAVY);
    // robotic arm
    g += I.box(120, -80, 14, 40, 40, 10, CHAR) + I.box(132, -68, 24, 14, 14, 56, ORG) + I.box(132, -68, 74, 64, 14, 14, ORG) + I.box(188, -70, 60, 12, 18, 32, CHAR);
    // floating learning objects
    function cube(x, y, z, s, c, cls) { return '<g class="float ' + cls + '">' + I.box(x, y, z, s, s, s, c) + '</g>'; }
    g += cube(-70, -20, 150, 22, BLUE, 'f1') + cube(40, -20, 168, 16, ORG, 'f2') + cube(150, 40, 118, 20, NAVY, 'f3');
    g += '<g class="float f2 chip" transform="translate(470 60)"><rect width="94" height="58" rx="8" fill="#fff" stroke="#0a1330" stroke-opacity=".15"/><text x="14" y="38" font-family="JetBrains Mono,monospace" font-size="24" font-weight="700" fill="#1F4BFF">{ }</text><rect x="58" y="22" width="24" height="5" rx="2.5" fill="#ff7a2f"/><rect x="58" y="32" width="16" height="5" rx="2.5" fill="#0a1330" opacity=".3"/></g>';
    g += '<g class="float f3 chip" transform="translate(40 52)"><rect width="84" height="52" rx="8" fill="#0a1330"/><text x="12" y="34" font-family="JetBrains Mono,monospace" font-size="20" font-weight="700" fill="#8fe1b4">&lt;/&gt;</text></g>';
    return '<svg viewBox="0 0 640 470" xmlns="http://www.w3.org/2000/svg">' + g + '</svg>';
  }

  /* ---------------- LEARNING PATH ICONS ---------------- */
  function pathTeen() {
    const I = iso(150, 120);
    return '<svg viewBox="0 0 300 200">' + I.box(-70, -20, 0, 60, 60, 40, CREAM) + I.box(-10, -30, 0, 60, 60, 40, NAVY) + I.box(-40, -25, 40, 50, 50, 36, { t: '#fff', l: '#ffd2b5', r: '#f5b48c' }) +
      '<rect x="-11" y="-11" width="22" height="22" transform="translate(228 54) rotate(45)" fill="#2A1305"/><circle cx="256" cy="150" r="9" fill="#fff"/><path d="M30 164 q18 -22 36 0 t36 0" fill="none" stroke="#2A1305" stroke-width="5" stroke-linecap="round"/></svg>';
  }
  function pathUni() {
    return '<svg viewBox="0 0 300 200"><rect x="30" y="18" width="240" height="160" rx="10" fill="#fff" opacity=".96"/><rect x="30" y="18" width="240" height="26" rx="10" fill="#0A1330"/><circle cx="48" cy="31" r="4" fill="#ff7a2f"/><circle cx="62" cy="31" r="4" fill="#6E94FF"/>' +
      '<rect x="46" y="58" width="104" height="64" rx="6" fill="#1F4BFF"/><rect x="160" y="58" width="94" height="30" rx="6" fill="#ff7a2f"/><rect x="160" y="94" width="94" height="28" rx="6" fill="#E7E0CF"/>' +
      '<rect x="46" y="132" width="60" height="8" rx="4" fill="#0A1330"/><rect x="46" y="148" width="130" height="6" rx="3" fill="#0A1330" opacity=".3"/><rect x="200" y="136" width="54" height="22" rx="11" fill="#1F4BFF"/></svg>';
  }
  function pathPro() {
    const pts = [[60, 140], [110, 70], [170, 120], [220, 50], [250, 130]];
    let s = '<svg viewBox="0 0 300 200"><g stroke="#6E94FF" stroke-width="2.5" fill="none" stroke-linecap="round"><path d="M60 140 L110 70 L170 120 L220 50 M170 120 L250 130 M110 70 L220 50"/></g>';
    pts.forEach(function (p, i) { s += '<rect x="' + (p[0] - 11) + '" y="' + (p[1] - 11) + '" width="22" height="22" rx="5" fill="' + (i === 2 ? '#ff7a2f' : '#EEEBE1') + '"/>'; });
    return s + '<path d="M18 176 H282" stroke="#EEEBE1" stroke-opacity=".3"/></svg>';
  }

  /* ---------------- PROJECT MOCKUPS (illustrative demos) ---------------- */
  const F = 'font-family="Hanken Grotesk,system-ui,sans-serif"';
  function projPhone() {
    let s = '<svg viewBox="0 0 300 580" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="580" rx="46" fill="#0A1330"/><rect x="12" y="12" width="276" height="556" rx="36" fill="#F5F1E6"/><rect x="108" y="22" width="84" height="22" rx="11" fill="#0A1330"/>';
    s += '<text x="32" y="86" ' + F + ' font-size="13" fill="#4A5062">Good morning</text><text x="32" y="112" ' + F + ' font-size="24" font-weight="800" fill="#0A1330">Book a visit</text>';
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    days.forEach(function (d, i) { const x = 36 + i * 38, on = i === 2; s += '<rect x="' + (x - 14) + '" y="136" width="32" height="52" rx="16" fill="' + (on ? '#1F4BFF' : '#E7E0CF') + '"/><text x="' + (x + 2) + '" y="156" text-anchor="middle" ' + F + ' font-size="11" fill="' + (on ? '#fff' : '#4A5062') + '">' + d + '</text><text x="' + (x + 2) + '" y="177" text-anchor="middle" ' + F + ' font-size="14" font-weight="700" fill="' + (on ? '#fff' : '#0A1330') + '">' + (10 + i) + '</text>'; });
    s += '<text x="32" y="222" ' + F + ' font-size="14" font-weight="800" fill="#0A1330">Available times</text>';
    ['09:00', '10:30', '11:15', '14:00', '15:30', '16:45'].forEach(function (t, i) { const x = 32 + (i % 3) * 84, y = 236 + Math.floor(i / 3) * 46, on = i === 1; s += '<rect x="' + x + '" y="' + y + '" width="74" height="36" rx="10" fill="' + (on ? '#FF7A2F' : '#fff') + '" stroke="#0A1330" stroke-opacity="' + (on ? 0 : .15) + '"/><text x="' + (x + 37) + '" y="' + (y + 23) + '" text-anchor="middle" ' + F + ' font-size="13" font-weight="700" fill="' + (on ? '#fff' : '#0A1330') + '">' + t + '</text>'; });
    s += '<rect x="32" y="344" width="236" height="96" rx="18" fill="#0A1330"/><circle cx="64" cy="378" r="18" fill="#6E94FF"/><text x="94" y="372" ' + F + ' font-size="14" font-weight="800" fill="#fff">Dr. Rivera</text><text x="94" y="392" ' + F + ' font-size="12" fill="#cfd8ff">General check-up</text><rect x="48" y="406" width="204" height="22" rx="11" fill="#1F4BFF"/><text x="150" y="421" text-anchor="middle" ' + F + ' font-size="12" font-weight="700" fill="#fff">Wed 12, 10:30</text>';
    s += '<rect x="32" y="458" width="236" height="46" rx="23" fill="#1F4BFF"/><text x="150" y="486" text-anchor="middle" ' + F + ' font-size="15" font-weight="800" fill="#fff">Confirm booking</text>';
    s += '<rect x="110" y="548" width="80" height="5" rx="2.5" fill="#0A1330" opacity=".7"/></svg>';
    return s;
  }
  function projLaptop() {
    let s = '<svg viewBox="0 0 900 560" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1F4BFF" stop-opacity=".35"/><stop offset="1" stop-color="#1F4BFF" stop-opacity="0"/></linearGradient></defs>';
    s += '<rect x="90" y="10" width="720" height="440" rx="22" fill="#16181D"/><rect x="104" y="24" width="692" height="412" rx="10" fill="#F5F1E6"/>';
    s += '<path d="M30 462 H870 L840 500 Q836 510 824 510 H76 Q64 510 60 500 Z" fill="#cfc6af"/><rect x="380" y="462" width="140" height="10" rx="5" fill="#b3a98f"/>';
    s += '<rect x="104" y="24" width="150" height="412" fill="#0A1330"/><rect x="104" y="24" width="150" height="412" rx="0" fill="#0A1330"/>';
    s += '<text x="128" y="62" ' + F + ' font-size="18" font-weight="800" fill="#fff">Ops</text><path d="M200 50 l4 -9 l4 9 l9 4 l-9 4 l-4 9 l-4 -9 l-9 -4 Z" fill="#FF7A2F" transform="translate(-4 -3)"/>';
    ['Overview', 'Orders', 'Team', 'Reports', 'Settings'].forEach(function (t, i) { s += (i === 0 ? '<rect x="116" y="' + (90 + i * 40) + '" width="126" height="32" rx="8" fill="#1F4BFF"/>' : '') + '<text x="132" y="' + (111 + i * 40) + '" ' + F + ' font-size="14" font-weight="700" fill="' + (i === 0 ? '#fff' : '#9fb0e8') + '">' + t + '</text>'; });
    s += '<text x="282" y="62" ' + F + ' font-size="22" font-weight="800" fill="#0A1330">Today at a glance</text>';
    [['Open orders', '128'], ['In progress', '46'], ['Late', '7']].forEach(function (k, i) { const x = 282 + i * 166; s += '<rect x="' + x + '" y="82" width="154" height="78" rx="12" fill="#fff" stroke="#0A1330" stroke-opacity=".12"/><text x="' + (x + 16) + '" y="108" ' + F + ' font-size="12" fill="#4A5062">' + k[0] + '</text><text x="' + (x + 16) + '" y="144" ' + F + ' font-size="30" font-weight="800" fill="' + (i === 2 ? '#D65A17' : '#0A1330') + '">' + k[1] + '</text>'; });
    s += '<rect x="282" y="176" width="498" height="150" rx="12" fill="#fff" stroke="#0A1330" stroke-opacity=".12"/>';
    s += '<path d="M296 300 L350 262 L404 280 L458 226 L512 246 L566 204 L620 222 L674 196 L728 212 L766 190 L766 316 L296 316 Z" fill="url(#lg)"/><path d="M296 300 L350 262 L404 280 L458 226 L512 246 L566 204 L620 222 L674 196 L728 212 L766 190" fill="none" stroke="#1F4BFF" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"/><circle cx="766" cy="190" r="6" fill="#FF7A2F"/>';
    ['#8a93ad', '#8a93ad', '#8a93ad'].forEach(function (c, i) { s += '<rect x="298" y="' + (344 + i * 28) + '" width="' + (200 - i * 30) + '" height="8" rx="4" fill="#0A1330" opacity=".6"/><rect x="560" y="' + (344 + i * 28) + '" width="70" height="8" rx="4" fill="#0A1330" opacity=".2"/><rect x="700" y="' + (340 + i * 28) + '" width="60" height="16" rx="8" fill="' + (i === 1 ? '#FF7A2F' : '#1F4BFF') + '" opacity=".9"/>'; });
    return s + '</svg>';
  }
  function projTablet() {
    let s = '<svg viewBox="0 0 760 560" xmlns="http://www.w3.org/2000/svg"><rect width="760" height="560" rx="40" fill="#0A1330"/><rect x="16" y="16" width="728" height="528" rx="28" fill="#F5F1E6"/>';
    s += '<rect x="16" y="16" width="220" height="528" rx="28" fill="#FBF8F0"/><text x="44" y="64" ' + F + ' font-size="18" font-weight="800" fill="#0A1330">Lessons</text>';
    ['Variables', 'Loops', 'Functions', 'Build a game', 'Quiz'].forEach(function (t, i) { const on = i === 2; s += '<rect x="32" y="' + (86 + i * 62) + '" width="188" height="50" rx="12" fill="' + (on ? '#FF7A2F' : '#E7E0CF') + '"/><circle cx="58" cy="' + (111 + i * 62) + '" r="11" fill="' + (i < 2 ? '#1F4BFF' : on ? '#fff' : '#fff') + '"/>' + (i < 2 ? '<path d="M52 ' + (111 + i * 62) + ' l5 5 l8 -9" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/>' : '') + '<text x="80" y="' + (116 + i * 62) + '" ' + F + ' font-size="15" font-weight="700" fill="#0A1330">' + t + '</text>'; });
    s += '<text x="268" y="64" ' + F + ' font-size="24" font-weight="800" fill="#0A1330">Lesson 3: Functions</text>';
    s += '<rect x="268" y="86" width="452" height="214" rx="14" fill="#0A1330"/>' + '<g transform="translate(0 0)">' + codeText([[['k', 'function '], ['f', 'greet'], ['p', '(name) {']], [['p', '  return '], ['s', '"Hello, "'], ['p', ' + name;']], [['p', '}']], [['p', '']], [['f', 'greet'], ['p', '('], ['s', '"Northstar"'], ['p', ');']]], 15, 30, 296, 126, true) + '</g>';
    s += '<rect x="268" y="316" width="452" height="64" rx="14" fill="#fff" stroke="#0A1330" stroke-opacity=".12"/><text x="288" y="344" ' + F + ' font-size="13" fill="#4A5062">Output</text><text x="288" y="368" font-family="JetBrains Mono,monospace" font-size="16" fill="#1F4BFF">Hello, Northstar</text>';
    s += '<rect x="268" y="396" width="452" height="14" rx="7" fill="#E7E0CF"/><rect x="268" y="396" width="290" height="14" rx="7" fill="#1F4BFF"/><text x="268" y="440" ' + F + ' font-size="14" fill="#4A5062">64% of this module complete</text>';
    s += '<rect x="560" y="458" width="160" height="52" rx="26" fill="#1F4BFF"/><text x="640" y="490" text-anchor="middle" ' + F + ' font-size="16" font-weight="800" fill="#fff">Run code</text>';
    return s + '</svg>';
  }

  /* ---------------- CAMPUS (closing scene) ---------------- */
  function campus() {
    const I = iso(560, 330);
    const r = rng(13);
    let g = '';
    g += I.box(-250, -200, 0, 500, 400, 22, NIGHT);
    g += I.box(-236, -186, 22, 472, 372, 4, { t: '#26397f', l: '#1b2b66', r: '#13214f' });
    function tower(x, y, w, d, h, c, win) {
      let t = I.box(x, y, 26, w, d, h, c);
      for (let i = 0; i < Math.floor(h / 26); i++) for (let j = 0; j < Math.floor(w / 22); j++) if (r() > 0.35) t += I.fL(x + 6 + j * 22, y + d, 34 + i * 26, 12, 10, r() > 0.7 ? '#ff9a5c' : '#9fb8ff', 0.95);
      for (let i = 0; i < Math.floor(h / 26); i++) for (let j = 0; j < Math.floor(d / 22); j++) if (r() > 0.5) t += I.fR(x + w, y + 6 + j * 22, 34 + i * 26, 12, 10, '#9fb8ff', 0.6);
      return t;
    }
    g += tower(-210, -170, 80, 70, 210, NAVYL);
    g += tower(-90, -180, 70, 70, 130, NAVYL);
    g += tower(150, -170, 80, 80, 170, NAVYL);
    g += tower(40, -120, 60, 60, 90, { t: '#fbf7ee', l: '#cfc6af', r: '#b3a98f' });
    g += I.box(-130, -30, 26, 120, 40, 14, { t: '#6E94FF', l: '#3d68ff', r: '#2148d6' });
    g += tower(-60, -150, 110, 110, 330, { t: '#4a68d0', l: '#2d47a3', r: '#1d3077' });
    // doorway at the base of the main tower
    g += I.fL(-20, -40, 26, 30, 44, '#ff9a5c', 1);
    g += I.fL(-14, -40, 26, 18, 38, '#0a1330', 1);
    const tp = I.pt(-5, -40, 356);
    g += '<g class="float f1"><path transform="translate(' + tp[0].toFixed(1) + ' ' + (tp[1] - 24).toFixed(1) + ')" d="M-1.5 -34 H1.5 V6 H-1.5 Z M1.5 -34 L22 -25 L1.5 -16 Z" fill="#ff7a2f"/></g>';
    g += I.box(60, 40, 26, 36, 36, 36, ORG);
    const door = I.pt(-12, -40, 28);
    g += '<rect data-rb x="' + (door[0] - 1).toFixed(0) + '" y="' + (door[1] - 1).toFixed(0) + '" width="2" height="2" fill="none"/>';
    return '<svg viewBox="0 0 1120 700" xmlns="http://www.w3.org/2000/svg">' + g + '</svg>';
  }

  const MAP = {
    hero: hero, stack: stack, learn: learn, 'path-teen': pathTeen, 'path-uni': pathUni, 'path-pro': pathPro,
    'proj-phone': projPhone, 'proj-laptop': projLaptop, 'proj-tablet': projTablet, campus: campus
  };
  function mount(root) {
    (root || document).querySelectorAll('[data-scene]').forEach(function (el) {
      const k = el.getAttribute('data-scene');
      if (k === 'automate') automate(el);
      else if (MAP[k]) el.innerHTML = MAP[k]();
    });
  }
  window.Northstar = window.Northstar || {};
  window.Northstar.scenes = { mount: mount, automateUpdate: automateUpdate };
})();
