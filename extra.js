(function () {
  var WA = '201515523706';
  var T = {
    ar: ['المزيد', 'اللغة', 'رأيك يهمنا', 'تواصل معنا على واتساب'],
    en: ['More', 'Language', 'Your feedback matters', 'Contact us on WhatsApp'],
    fr: ['Plus', 'Langue', 'Ton avis compte', 'Contacte-nous sur WhatsApp'],
    es: ['Más', 'Idioma', 'Tu opinión importa', 'Escríbenos por WhatsApp'],
    tr: ['Daha fazla', 'Dil', 'Görüşün önemli', 'WhatsApp’tan yaz']
  };
  function L() { return T[document.documentElement.lang] || T.en; }

  var st = document.createElement('style');
  st.textContent =
    ':root{--bg:#050807;--panel:#0d1512;--panel2:#13211b;--ink:#ecfff6;--mute:#8fb3a2;--line:#1f3a2e;--pink:#2EE59D;--good:#2EE59D}' +
    'html{background:#050807}body{background:transparent}' +
    '#bgfx{position:fixed;inset:0;z-index:-1;overflow:hidden}' +
    '#bgfx i{position:absolute;border-radius:50%;filter:blur(60px);opacity:.55;will-change:transform;animation:drift 18s ease-in-out infinite alternate}' +
    '#bgfx i:nth-child(1){width:60vmax;height:60vmax;left:-20vmax;top:-15vmax;background:#0f7a52}' +
    '#bgfx i:nth-child(2){width:50vmax;height:50vmax;right:-18vmax;top:25vh;background:#14b87a;animation-duration:24s;animation-delay:-6s}' +
    '#bgfx i:nth-child(3){width:45vmax;height:45vmax;left:10vw;bottom:-22vmax;background:#064d35;animation-duration:21s;animation-delay:-11s}' +
    '@keyframes drift{from{transform:translate(0,0) scale(1)}to{transform:translate(8vmax,-6vmax) scale(1.15)}}' +
    '.card{background-color:rgba(13,21,18,.62);backdrop-filter:blur(14px);border:1px solid rgba(46,229,157,.12)}' +
    '.chips button,.it{background-color:rgba(13,21,18,.62)}' +
    'nav{background:rgba(5,8,7,.88)}' +
    '.btn{color:#04100b}' +
    '#intro{background:radial-gradient(circle at 50% 30%,#0f3d2b,#050807 70%)!important}' +
    '#fbBtn{display:none!important}' +
    '#moreSheet{position:fixed;inset:0;z-index:12;background:rgba(0,0,0,.7);display:grid;align-items:end}' +
    '#moreSheet>div{max-width:480px;width:100%;margin:auto auto 0;background:#0d1512;border-radius:24px 24px 0 0;padding:22px 18px calc(22px + env(safe-area-inset-bottom,0px))}' +
    '#moreSheet #lang{position:static;width:100%;padding:12px;font-size:16px}' +
    '#moreSheet .btn{margin-top:12px;text-align:center;text-decoration:none}' +
    '@media (prefers-reduced-motion:reduce){#bgfx i{animation:none}}';
  document.head.appendChild(st);

  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = '#050807';
  var fx = document.createElement('div');
  fx.id = 'bgfx';
  fx.innerHTML = '<i></i><i></i><i></i>';
  document.body.prepend(fx);

  var nav = document.querySelector('nav'), sel = document.getElementById('lang'), fb = document.getElementById('fbBtn');
  if (!nav || !sel || !fb) return;

  var nb = document.createElement('button');
  nb.innerHTML = '<svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="19" cy="12" r="1.6" fill="currentColor"/></svg><span></span>';
  nav.appendChild(nb);

  var sh = document.createElement('div');
  sh.id = 'moreSheet'; sh.hidden = true;
  sh.innerHTML = '<div><h2 id="mTitle"></h2><p class="sub" id="mLang"></p><div id="mSel"></div><button class="btn ghost" id="mFb"></button><a class="btn" id="mWa" target="_blank" rel="noopener"></a></div>';
  document.body.appendChild(sh);
  sh.querySelector('#mSel').appendChild(sel);

  nb.onclick = function () { sh.hidden = false; };
  sh.addEventListener('click', function (e) { if (e.target === sh) sh.hidden = true; });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') sh.hidden = true; });
  sh.querySelector('#mFb').onclick = function () { sh.hidden = true; fb.click(); };

  function paint() {
    var t = L();
    nb.querySelector('span').textContent = t[0];
    sh.querySelector('#mTitle').textContent = t[0];
    sh.querySelector('#mLang').textContent = t[1];
    sh.querySelector('#mFb').textContent = t[2];
    var a = sh.querySelector('#mWa');
    a.textContent = t[3];
    a.href = 'https://wa.me/' + WA;
  }
  new MutationObserver(paint).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  paint();
})();
