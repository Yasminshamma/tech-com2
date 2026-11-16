/* Northstar — live product demos for the Projects scene.
   Three small working prototypes (booking flow, operations dashboard, lesson with code runner).
   They play themselves while on screen, and hand control to the visitor the moment they touch one. */
(function () {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = function (s, r) { return (r || document).querySelector(s); };
  const $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  const sleep = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
  const esc = function (t) { return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); };
  const IDLE = 9000; // ms without touch before a demo resumes playing itself

  /* Scale each fixed-size prototype to the width of its slot. */
  function fit() {
    $$('.fit').forEach(function (f) {
      const w = parseFloat(getComputedStyle(f).getPropertyValue('--w'));
      f.style.setProperty('--k', (f.clientWidth / w).toFixed(4));
    });
  }

  /* Autoplay: runs `steps` (array of [fn, delayMs]) in a loop while visible and untouched. */
  function autoplay(root, steps) {
    const st = { vis: false, touch: 0 };
    new IntersectionObserver(function (e) { st.vis = e[0].isIntersecting; }, { threshold: 0.35 }).observe(root);
    const touch = function () { st.touch = Date.now(); };
    root.addEventListener('pointerdown', touch); root.addEventListener('keydown', touch);
    const ok = function () { return st.vis && Date.now() - st.touch > IDLE && !document.hidden; };
    (async function loop() {
      for (;;) {
        if (reduced || !ok()) { await sleep(500); continue; }
        for (let i = 0; i < steps.length; i++) { if (!ok()) break; steps[i][0](); await sleep(steps[i][1]); }
      }
    })();
  }

  /* ---------- 1. Clinic booking (phone) ---------- */
  function phone(root) {
    const names = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], letters = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const times = ['09:00', '10:30', '11:15', '14:00', '15:30', '16:45'];
    const busy = [[1], [0, 4], [], [2, 5], [3], [0, 1, 2], [1, 2, 4, 5]];
    let day = 2, time = 1;
    root.innerHTML =
      '<div class="notch"></div><p class="p-hi">Good morning</p><h4>Book a visit</h4>' +
      '<div class="p-days" role="group" aria-label="Choose a day">' + letters.map(function (l, i) { return '<button type="button" data-d="' + i + '"><small>' + l + '</small>' + (10 + i) + '</button>'; }).join('') + '</div>' +
      '<p class="p-lab">Available times</p>' +
      '<div class="p-times" role="group" aria-label="Choose a time">' + times.map(function (t, i) { return '<button type="button" data-t="' + i + '">' + t + '</button>'; }).join('') + '</div>' +
      '<div class="p-card"><span class="p-av"></span><div><b>Dr. Rivera</b><span>General check-up</span></div><em class="p-sum"></em></div>' +
      '<button type="button" class="p-go">Confirm booking</button>' +
      '<div class="p-ok" aria-live="polite"><svg viewBox="0 0 52 52" width="76" height="76"><circle cx="26" cy="26" r="24" fill="none" stroke="#1F4BFF" stroke-width="3"/><path d="M15 27 L23 35 L38 18" fill="none" stroke="#1F4BFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg><b>Booked</b><span class="p-oksum"></span><small>Reminder set for 1 hour before</small><button type="button" class="p-again">Book another</button></div>';
    const dBtns = $$('[data-d]', root), tBtns = $$('[data-t]', root), sum = $('.p-sum', root), ok = $('.p-ok', root);
    function paint() {
      dBtns.forEach(function (b, i) { b.classList.toggle('on', i === day); b.setAttribute('aria-pressed', i === day); });
      tBtns.forEach(function (b, i) { const off = busy[day].indexOf(i) > -1; b.disabled = off; b.classList.toggle('on', i === time && !off); b.setAttribute('aria-pressed', i === time && !off); });
      sum.textContent = names[day] + ' ' + (10 + day) + ', ' + times[time]; $('.p-oksum', root).textContent = sum.textContent;
    }
    function pickDay(i) { day = i; if (busy[day].indexOf(time) > -1) time = times.map(function (_, k) { return k; }).filter(function (k) { return busy[day].indexOf(k) < 0; })[0]; paint(); }
    function pickTime(i) { if (busy[day].indexOf(i) < 0) { time = i; paint(); } }
    function confirm() { ok.classList.add('on'); }
    function reset() { ok.classList.remove('on'); }
    dBtns.forEach(function (b) { b.addEventListener('click', function () { pickDay(+b.dataset.d); }); });
    tBtns.forEach(function (b) { b.addEventListener('click', function () { pickTime(+b.dataset.t); }); });
    $('.p-go', root).addEventListener('click', confirm); $('.p-again', root).addEventListener('click', reset);
    paint();
    autoplay(root.closest('.proj__art'), [[function () { pickDay(3); }, 1100], [function () { pickTime(3); }, 1100], [function () { pickDay(4); }, 1000], [function () { pickTime(4); }, 1100], [confirm, 2800], [function () { reset(); pickDay(2); pickTime(1); }, 1400]]);
  }

  /* ---------- 2. Operations dashboard (laptop) ---------- */
  function dash(root) {
    const S = ['Packing', 'Shipped', 'Delivered'];
    let list = [{ id: 1046, n: 2, s: 0 }, { id: 1045, n: 5, s: 1 }, { id: 1044, n: 1, s: 1 }, { id: 1043, n: 4, s: 2 }, { id: 1042, n: 3, s: 2 }, { id: 1041, n: 2, s: 2 }];
    let filter = 'all', count = 128, bars = [30, 42, 36, 55, 48, 62, 58, 70, 52, 66, 74, 60, 80, 68], team = [78, 52, 64], ontime = 97, pack = 14, nextId = 1047;
    root.innerHTML =
      '<div class="d-side"><b class="d-logo">Flow</b><span class="on">Overview</span><span>Orders</span><span>Team</span><span>Reports</span></div>' +
      '<div class="d-main"><div class="d-top"><h4>Today</h4><div class="d-tabs" role="group" aria-label="Filter orders"><button type="button" data-f="all" class="on">All</button><button type="button" data-f="open">Open</button><button type="button" data-f="done">Done</button></div></div>' +
      '<div class="d-kpis"><div><small>Orders today</small><b class="k-count"></b></div><div><small>On time</small><b class="k-ot"></b></div><div><small>Avg. packing</small><b class="k-pk"></b></div></div>' +
      '<div class="d-body"><div class="d-left"><div class="d-chart"><small>Orders per hour</small><div class="bars">' + bars.map(function () { return '<i></i>'; }).join('') + '</div></div>' +
      '<div class="d-team"><small>Team workload</small>' + ['Packing', 'Dispatch', 'Support'].map(function (n) { return '<div><span>' + n + '</span><u><i></i></u></div>'; }).join('') + '</div></div>' +
      '<ul class="d-list" aria-live="polite"></ul></div></div>';
    const ul = $('.d-list', root), bEls = $$('.bars i', root), tEls = $$('.d-team u i', root), tabs = $$('[data-f]', root);
    function paint(flash) {
      $('.k-count', root).textContent = count; $('.k-ot', root).textContent = ontime + '%'; $('.k-pk', root).textContent = pack + ' min';
      bEls.forEach(function (e, i) { e.style.height = bars[i] + '%'; }); tEls.forEach(function (e, i) { e.style.width = team[i] + '%'; });
      tabs.forEach(function (t) { t.classList.toggle('on', t.dataset.f === filter); });
      const rows = list.filter(function (o) { return filter === 'all' || (filter === 'open' ? o.s < 2 : o.s === 2); }).slice(0, 5);
      ul.innerHTML = rows.map(function (o) {
        return '<li class="' + (flash === o.id ? 'flash' : '') + '"><span><b>#' + o.id + '</b><small>' + o.n + ' items</small></span><button type="button" data-id="' + o.id + '" class="st st' + o.s + '"' + (o.s > 1 ? ' disabled' : '') + ' aria-label="Order ' + o.id + ': ' + S[o.s] + (o.s < 2 ? '. Advance status' : '') + '">' + S[o.s] + '</button></li>';
      }).join('');
    }
    function advance(id) { const o = list.filter(function (x) { return x.id === id; })[0]; if (o && o.s < 2) { o.s++; paint(id); } }
    function tick() {
      const open = list.filter(function (o) { return o.s < 2; });
      if (open.length) advance(open[open.length - 1].id);
      list.unshift({ id: nextId++, n: 1 + Math.floor(Math.random() * 5), s: 0 }); list = list.slice(0, 8); count++;
      bars.shift(); bars.push(40 + Math.floor(Math.random() * 50));
      team = team.map(function (v) { return Math.max(30, Math.min(92, v + Math.floor(Math.random() * 21) - 10)); });
      ontime = 96 + Math.floor(Math.random() * 4); pack = 12 + Math.floor(Math.random() * 5); paint(list[0].id);
    }
    ul.addEventListener('click', function (e) { const b = e.target.closest('[data-id]'); if (b) advance(+b.dataset.id); });
    tabs.forEach(function (t) { t.addEventListener('click', function () { filter = t.dataset.f; paint(); }); });
    paint();
    autoplay(root.closest('.proj__art'), [[tick, 2000]]);
  }

  /* ---------- 3. Learning platform (tablet) ---------- */
  function learn(root) {
    const L = [
      { t: 'Variables', c: 'let name = "Sara";\nconsole.log("Hello, " + name);', o: ['Hello, Sara'] },
      { t: 'Functions', c: 'function area(w, h) {\n  return w * h;\n}\nconsole.log(area(4, 3));', o: ['12'] },
      { t: 'Loops', c: 'for (let i = 1; i <= 3; i++) {\n  console.log("Step " + i);\n}', o: ['Step 1', 'Step 2', 'Step 3'] },
      { t: 'Mini project', c: 'const todos = [];\ntodos.push("Ship it");\nconsole.log(todos.length);', o: ['1'] }
    ];
    let cur = 0, done = [false, false, false, false], typing = 0;
    root.innerHTML =
      '<div class="l-side"><b class="l-logo">Codepath</b><ol>' + L.map(function (l, i) { return '<li><button type="button" data-l="' + i + '"><i></i>' + l.t + '</button></li>'; }).join('') + '</ol></div>' +
      '<div class="l-main"><div class="l-top"><h4></h4><div class="l-prog"><span>Progress</span><u><i></i></u><em></em></div></div>' +
      '<pre class="l-code" aria-label="Code editor"></pre><div class="l-bar"><button type="button" class="l-run">Run code</button><small>Pick a lesson, then run it</small></div>' +
      '<pre class="l-out" aria-live="polite"></pre></div>';
    const code = $('.l-code', root), out = $('.l-out', root), btns = $$('[data-l]', root);
    function hl(src) {
      return esc(src).replace(/("[^"]*")/g, '<s>$1</s>').replace(/\b(let|const|function|return|for)\b/g, '<k>$1</k>').replace(/\b(\d+)\b(?![^<]*>)/g, '<n>$1</n>').replace(/\b(console|log|push)\b/g, '<f>$1</f>');
    }
    function paint() {
      btns.forEach(function (b, i) { b.classList.toggle('on', i === cur); b.classList.toggle('ok', done[i]); b.setAttribute('aria-current', i === cur ? 'true' : 'false'); });
      const n = done.filter(Boolean).length; $('.l-prog i', root).style.width = (n / L.length * 100) + '%'; $('.l-prog em', root).textContent = Math.round(n / L.length * 100) + '%';
      $('h4', root).textContent = L[cur].t;
    }
    function show(i, animate) {
      cur = i; out.textContent = ''; paint(); const token = ++typing, src = L[i].c;
      if (!animate || reduced) { code.innerHTML = hl(src); return; }
      let k = 0; (function step() { if (token !== typing) return; code.innerHTML = hl(src.slice(0, ++k)) + '<span class="caret"></span>'; if (k < src.length) setTimeout(step, 26); else code.innerHTML = hl(src); })();
    }
    function run() {
      typing++; code.innerHTML = hl(L[cur].c); out.textContent = ''; const lines = L[cur].o.slice(), token = typing;
      (function next() { if (token !== typing || !lines.length) { if (!lines.length) { done[cur] = true; paint(); } return; } out.textContent += (out.textContent ? '\n' : '') + '> ' + lines.shift(); setTimeout(next, 280); })();
    }
    btns.forEach(function (b) { b.addEventListener('click', function () { show(+b.dataset.l, false); }); });
    $('.l-run', root).addEventListener('click', run);
    show(0, false);
    autoplay(root.closest('.proj__art'), [[function () { done = [false, false, false, false]; show(0, true); }, 2600], [run, 1600], [function () { show(1, true); }, 3800], [run, 1600], [function () { show(2, true); }, 3800], [run, 2400]]);
  }

  function init() {
    const p = $('#demoPhone'), d = $('#demoDash'), l = $('#demoLearn');
    if (p) phone(p); if (d) dash(d); if (l) learn(l);
    fit(); window.addEventListener('resize', fit);
    if ('ResizeObserver' in window) $$('.fit').forEach(function (f) { new ResizeObserver(fit).observe(f); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
