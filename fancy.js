(function () {
  var st = document.createElement('style');
  st.textContent =
    '.btn{background:linear-gradient(135deg,#2EE59D,#0fa86d)!important;color:#04100b!important;border-radius:18px;font-weight:700;box-shadow:0 8px 22px rgba(46,229,157,.28),inset 0 1px 0 rgba(255,255,255,.35);transition:transform .15s,box-shadow .15s}' +
    '.btn:active{transform:scale(.96);box-shadow:0 3px 10px rgba(46,229,157,.25)}' +
    '.btn.ghost{background:var(--panel2)!important;color:var(--ink)!important;box-shadow:none;border:1px solid var(--line)}' +
    '.chips button{transition:transform .15s,border-color .2s,box-shadow .2s}' +
    '.chips button:active{transform:scale(.94)}' +
    '.chips button.on{box-shadow:0 0 0 1px var(--pink) inset,0 6px 18px rgba(46,229,157,.25)}' +
    '.frame{box-shadow:0 12px 34px rgba(0,0,0,.35)}' +
    '#confetti{position:fixed;inset:0;z-index:30;pointer-events:none}';
  document.head.appendChild(st);

  function confetti() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var c = document.createElement('canvas');
    c.id = 'confetti'; c.width = innerWidth; c.height = innerHeight;
    document.body.appendChild(c);
    var x = c.getContext('2d'), cols = ['#2EE59D', '#14b87a', '#ecfff6', '#FFB547', '#ffffff'], p = [], i;
    for (i = 0; i < 90; i++) p.push({ x: Math.random() * c.width, y: -20 - Math.random() * c.height * .4, r: 4 + Math.random() * 5, vy: 3 + Math.random() * 4, vx: -2 + Math.random() * 4, rot: Math.random() * 6, c: cols[i % cols.length] });
    var t0 = performance.now();
    (function f(n) {
      x.clearRect(0, 0, c.width, c.height);
      p.forEach(function (q) {
        q.x += q.vx; q.y += q.vy; q.rot += .1;
        x.save(); x.translate(q.x, q.y); x.rotate(q.rot);
        x.fillStyle = q.c; x.fillRect(-q.r, -q.r / 2, q.r * 2, q.r); x.restore();
      });
      if (n - t0 < 2600) requestAnimationFrame(f); else c.remove();
    })(t0);
  }
  var old = window.showScore;
  if (typeof old === 'function') window.showScore = function (j) { old(j); if (Number(j && j.score) >= 8) confetti(); };
})();
