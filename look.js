(function () {
  var KEY = 'etlalaty-theme';
  var T = { ar: ['داكن', 'فاتح'], en: ['Dark', 'Light'], fr: ['Sombre', 'Clair'], es: ['Oscuro', 'Claro'], tr: ['Koyu', 'Açık'] };

  var st = document.createElement('style');
  st.textContent =
    'nav{inset:auto 12px calc(10px + env(safe-area-inset-bottom,0px)) 12px!important;max-width:456px;margin:0 auto;border-radius:24px;border:1px solid rgba(46,229,157,.2);box-shadow:0 10px 30px rgba(0,0,0,.45);padding-bottom:0!important}' +
    'nav button{position:relative;padding:12px 0 10px}' +
    'nav svg{width:26px;height:26px;transition:transform .25s,filter .25s}' +
    'nav svg *{fill:currentColor;fill-opacity:.16;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}' +
    'nav button.on svg{transform:translateY(-3px) scale(1.15);filter:drop-shadow(0 0 7px var(--pink))}' +
    'nav button.on svg *{fill-opacity:.38}' +
    'nav button.on::after{content:"";position:absolute;bottom:4px;left:50%;width:18px;height:3px;margin-left:-9px;border-radius:3px;background:var(--pink);box-shadow:0 0 8px var(--pink)}' +
    '.it span{color:#fff}' +
    '#thm{display:flex;gap:8px;margin-top:12px}' +
    '#thm button{flex:1;padding:12px;border-radius:14px;border:1px solid var(--line);background:var(--panel2);color:var(--ink);font:inherit;font-size:15px}' +
    '#thm button.on{border-color:var(--pink);box-shadow:0 0 0 1px var(--pink) inset}' +
    'html[data-theme=light]{--bg:#f2faf6;--panel:#ffffff;--panel2:#e3f3ec;--ink:#0b1a13;--mute:#4f7565;--line:#c9e3d7;--pink:#0b8f5a;--good:#0b8f5a;background:#f2faf6}' +
    'html[data-theme=light] #bgfx i{opacity:.22}' +
    'html[data-theme=light] .card,html[data-theme=light] .chips button,html[data-theme=light] .it{background-color:rgba(255,255,255,.78)}' +
    'html[data-theme=light] nav{background:rgba(255,255,255,.92);box-shadow:0 10px 30px rgba(11,60,40,.18)}' +
    'html[data-theme=light] #moreSheet>div{background:#ffffff}' +
    'html[data-theme=light] .btn{color:#ffffff}' +
    'html[data-theme=light] .btn.ghost{color:var(--ink)}';
  document.head.appendChild(st);

  var ICONS = [
    '<path d="M12 3.2l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.6 9.3l5.8-.8z"/>',
    '<path d="M9 3L3 6.5l2.2 3.6L8 8.7V20h8V8.7l2.8 1.4L21 6.5 15 3c-.4 1.3-1.6 2.2-3 2.2S9.4 4.3 9 3z"/>',
    '<path d="M10 4l1.8 5.2L17 11l-5.2 1.8L10 18l-1.8-5.2L3 11l5.2-1.8z"/><path d="M19 3l.8 2.2L22 6l-2.2.8L19 9l-.8-2.2L16 6l2.2-.8z"/><path d="M19 15l.7 1.8 1.8.7-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7z"/>',
    '<rect x="4" y="4" width="6.5" height="6.5" rx="2"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="2"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="2"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="2"/>'
  ];
  var nav = document.querySelector('nav');
  if (nav) Array.prototype.forEach.call(nav.querySelectorAll('button'), function (b, i) {
    var s = b.querySelector('svg');
    if (s && ICONS[i]) s.innerHTML = ICONS[i];
  });

  var cur = 'dark';
  try { cur = localStorage.getItem(KEY) || 'dark'; } catch (e) {}
  function apply(t) {
    document.documentElement.setAttribute('data-theme', t);
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.content = t === 'light' ? '#f2faf6' : '#050807';
    Array.prototype.forEach.call(document.querySelectorAll('#thm button'), function (b) { b.classList.toggle('on', b.dataset.t === t); });
  }
  var box = document.querySelector('#moreSheet > div');
  if (box) {
    var row = document.createElement('div');
    row.id = 'thm';
    row.innerHTML = '<button data-t="dark"></button><button data-t="light"></button>';
    box.insertBefore(row, box.querySelector('#mFb'));
    row.onclick = function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      cur = b.dataset.t;
      try { localStorage.setItem(KEY, cur); } catch (x) {}
      apply(cur);
    };
  }
  function paint() {
    var t = T[document.documentElement.lang] || T.en, bs = document.querySelectorAll('#thm button');
    if (bs.length) { bs[0].textContent = '🌙 ' + t[0]; bs[1].textContent = '☀️ ' + t[1]; }
  }
  new MutationObserver(paint).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  paint();
  apply(cur);
})();
