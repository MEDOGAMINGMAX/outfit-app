(function () {
  var nav = document.querySelector('nav'), main = document.querySelector('main');
  var more = nav && nav.querySelector('button:last-child');
  if (!nav || !main || !more) return;
  var KEY = 'etlalaty-avatar';
  var SKIN = ['#fbdcc2', '#f1c9a5', '#d9a273', '#b07a4f', '#8a5a3a', '#5c3a24'];
  var COL = ['#111111', '#ffffff', '#2EE59D', '#14b87a', '#2b6cb0', '#6b46c1', '#e53e5c', '#f6ad3b', '#7a4a2a', '#9aa5a0'];
  var HAIRC = ['#14100e', '#3b2416', '#7a4a2a', '#c9a24a', '#e55a3c', '#6b46c1'];
  var S = { skin: SKIN[1], hair: 0, hairC: HAIRC[1], top: 0, topC: '#2EE59D', bot: 0, botC: '#2b6cb0', shoe: 0, shoeC: '#ffffff' };
  try { var sv = JSON.parse(localStorage.getItem(KEY) || 'null'); if (sv) S = Object.assign(S, sv); } catch (e) {}

  function r(x, y, w, h, rx, f) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + rx + '" fill="' + f + '"/>'; }
  function e(cx, cy, rx, ry, f) { return '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="' + f + '"/>'; }
  function draw() {
    var s = S, h = '', lg = s.top > 0, end = s.bot === 1 ? 262 : 322, w = s.bot === 2 ? 36 : 28;
    if (s.hair === 1) h += '<path d="M64 82Q62 40 100 40Q138 40 136 82L142 170Q132 176 124 168L124 100L76 100L76 168Q68 176 58 170Z" fill="' + s.hairC + '"/>';
    if (s.bot === 1) h += r(76, 258, 20, 70, 8, s.skin) + r(104, 258, 20, 70, 8, s.skin);
    if (s.shoe === 1) h += r(68, 314, 32, 36, 10, s.shoeC) + r(100, 314, 32, 36, 10, s.shoeC);
    else if (s.shoe === 2) h += r(66, 340, 36, 11, 5, s.shoeC) + r(98, 340, 36, 11, 5, s.shoeC);
    else h += e(86, 342, 23, 10, s.shoeC) + e(114, 342, 23, 10, s.shoeC) + r(64, 346, 44, 4, 2, '#ffffff') + r(92, 346, 44, 4, 2, '#ffffff');
    h += r(100 - w - 2, 210, w, end - 210, 10, s.botC) + r(102, 210, w, end - 210, 10, s.botC) + r(70, 204, 60, 24, 8, s.botC);
    if (lg) h += r(44, 134, 22, 88, 11, s.topC) + r(134, 134, 22, 88, 11, s.topC);
    else h += r(48, 156, 14, 66, 7, s.skin) + r(138, 156, 14, 66, 7, s.skin) + r(44, 134, 22, 40, 11, s.topC) + r(134, 134, 22, 40, 11, s.topC);
    h += e(55, 226, 9, 9, s.skin) + e(145, 226, 9, 9, s.skin);
    h += r(91, 106, 18, 30, 8, s.skin) + r(64, 128, 72, 100, 22, s.topC);
    if (s.top === 0) h += e(100, 131, 15, 8, s.skin);
    if (s.top === 1) h += '<ellipse cx="100" cy="130" rx="27" ry="12" fill="' + s.topC + '" stroke="rgba(0,0,0,.28)" stroke-width="3"/>' + r(88, 176, 24, 22, 8, 'rgba(0,0,0,.14)');
    if (s.top === 2) h += '<line x1="100" y1="134" x2="100" y2="228" stroke="rgba(0,0,0,.4)" stroke-width="3"/>';
    h += e(70, 88, 6, 9, s.skin) + e(130, 88, 6, 9, s.skin) + e(100, 84, 30, 35, s.skin);
    h += e(89, 88, 3.4, 4, '#1a1a1a') + e(111, 88, 3.4, 4, '#1a1a1a') + '<path d="M90 101Q100 109 110 101" stroke="#7a3b2e" stroke-width="2.4" fill="none" stroke-linecap="round"/>';
    if (s.hair === 0 || s.hair === 1) h += '<path d="M68 80Q66 46 100 46Q134 46 132 80Q118 62 100 64Q82 62 68 80Z" fill="' + s.hairC + '"/>';
    if (s.hair === 2) h += '<g fill="' + s.hairC + '"><circle cx="78" cy="58" r="15"/><circle cx="100" cy="48" r="17"/><circle cx="122" cy="58" r="15"/><circle cx="69" cy="78" r="10"/><circle cx="131" cy="78" r="10"/></g>';
    return h;
  }

  var st = document.createElement('style');
  st.textContent =
    '#avBox{display:grid;place-items:center;background:var(--panel);border-radius:28px;padding:14px;margin-bottom:12px}' +
    '#avBox svg{width:min(60vw,230px);height:auto}' +
    '.avRow{margin:12px 0}.avRow b{display:block;font-size:14px;color:var(--mute);margin-bottom:6px;font-weight:400}' +
    '.avOpts{display:flex;flex-wrap:wrap;gap:8px}' +
    '.avOpts button{border:2px solid transparent;background:var(--panel2);color:var(--ink);border-radius:14px;padding:8px 12px;font:inherit;font-size:14px}' +
    '.avOpts button.sw{width:34px;height:34px;padding:0;border-radius:50%;border:2px solid var(--line)}' +
    '.avOpts button.on{border-color:var(--pink);box-shadow:0 0 0 2px rgba(46,229,157,.35)}';
  document.head.appendChild(st);

  var nb = document.createElement('button');
  nb.dataset.v = 'av';
  nb.innerHTML = '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.6"/><path d="M5 20c.6-4 3.4-6 7-6s6.4 2 7 6z"/></svg><span>أفاتار</span>';
  nav.insertBefore(nb, more);
  nb.onclick = function () { show('av'); };

  var sec = document.createElement('section');
  sec.className = 'view'; sec.id = 'v-av'; sec.hidden = true;
  sec.innerHTML = '<h2>أفاتارك</h2><p class="sub">لبّس شخصيتك واحنا نقيّم الطقم.</p><div id="avBox"></div><div id="avCtl"></div><button class="btn" id="avRate">قيّم الأفاتار</button>';
  main.insertBefore(sec, document.getElementById('credit'));
  var box = sec.querySelector('#avBox'), ctl = sec.querySelector('#avCtl');

  function paint() {
    box.innerHTML = '<svg viewBox="0 0 200 380" xmlns="http://www.w3.org/2000/svg">' + draw() + '</svg>';
    Array.prototype.forEach.call(ctl.querySelectorAll('button'), function (b) {
      b.classList.toggle('on', String(S[b.dataset.k]) === b.dataset.v);
    });
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (x) {}
  }
  function btn(label, k, v, sw) {
    var b = document.createElement('button');
    b.textContent = label; b.dataset.k = k; b.dataset.v = String(v);
    if (sw) { b.className = 'sw'; b.style.background = v; b.setAttribute('aria-label', v); }
    b.onclick = function () { S[k] = v; paint(); };
    return b;
  }
  var ROWS = [
    ['skin', 'البشرة', null, SKIN, 'skin'],
    ['hair', 'الشعر', ['قصير', 'طويل', 'كيرلي', 'أصلع'], HAIRC, 'hairC'],
    ['top', 'الأعلى', ['تيشيرت', 'هودي', 'جاكت'], COL, 'topC'],
    ['bot', 'البنطلون', ['طويل', 'شورت', 'واسع'], COL, 'botC'],
    ['shoe', 'الحذاء', ['سنيكرز', 'بوت', 'شبشب'], COL, 'shoeC']
  ];
  ROWS.forEach(function (row) {
    var d = document.createElement('div');
    d.className = 'avRow';
    d.innerHTML = '<b>' + row[1] + '</b><div class="avOpts"></div>';
    var o = d.querySelector('.avOpts');
    if (row[2]) row[2].forEach(function (name, i) { o.appendChild(btn(name, row[0], i, false)); });
    row[3].forEach(function (c) { o.appendChild(btn('', row[4], c, true)); });
    ctl.appendChild(d);
  });

  function toPng() {
    return new Promise(function (res, rej) {
      var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 380" width="600" height="1140"><rect width="200" height="380" fill="#f4f7f5"/>' + draw() + '</svg>';
      var img = new Image();
      img.onload = function () {
        var c = document.createElement('canvas');
        c.width = 600; c.height = 1140;
        c.getContext('2d').drawImage(img, 0, 0);
        c.toBlob(function (b) { b ? res({ blob: b, url: c.toDataURL('image/jpeg', .85) }) : rej(); }, 'image/jpeg', .85);
      };
      img.onerror = rej;
      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    });
  }
  sec.querySelector('#avRate').onclick = async function () {
    busy(true, 'بنحلل الأفاتار…');
    try {
      var p = await toPng(), fd = new FormData();
      fd.append('image', p.blob, 'avatar.jpg');
      var j = await post('/rate', fd);
      show('rate');
      var fr = document.getElementById('frame');
      fr.style.backgroundImage = 'url("' + p.url + '")';
      fr.classList.add('has');
      document.getElementById('frameHint').hidden = true;
      showScore(j);
    } catch (x) { toast(why(x)); }
    busy(false);
  };
  paint();
})();
