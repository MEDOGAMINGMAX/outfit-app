(function () {
  var KEY = 'etlalaty-name', name = '';
  try { name = localStorage.getItem(KEY) || ''; } catch (e) {}

  var st = document.createElement('style');
  st.textContent =
    '#intro{position:fixed;inset:0;z-index:20;display:grid;place-items:center;padding:24px;background:radial-gradient(circle at 50% 30%,#2C2750,#17142B 70%);text-align:center}' +
    '#intro>div{max-width:360px;width:100%}' +
    '#intro h1{font-size:52px;margin:0 0 6px;animation:up .8s both}' +
    '#intro p{color:var(--mute);margin-bottom:26px;animation:up .8s .2s both}' +
    '#intro input{width:100%;padding:15px;border-radius:16px;border:1px solid var(--line);background:var(--panel);color:var(--ink);font:inherit;font-size:18px;text-align:center;animation:up .8s .4s both}' +
    '#intro button{animation:up .8s .6s both}' +
    '#hello{font-size:15px;color:var(--mute);margin:6px 0 14px}' +
    '#hello button{background:none;border:0;color:var(--pink);font:inherit;font-size:13px;margin-inline-start:8px;text-decoration:underline}' +
    '@keyframes up{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}' +
    '@media (prefers-reduced-motion:reduce){#intro *{animation:none!important}}';
  document.head.appendChild(st);

  var intro = document.createElement('div');
  intro.id = 'intro';
  intro.innerHTML = '<div><h1>إطلالتي</h1><p>قيّم لبسك، رتّب دولابك، واختار طقمك بالذكاء الاصطناعي.</p><input id="nameIn" maxlength="24" placeholder="اسمك إيه؟" autocomplete="given-name"><button class="btn" id="goName">يلا نبدأ</button></div>';
  document.body.appendChild(intro);
  var nameIn = intro.querySelector('#nameIn');

  function render() {
    var h = document.getElementById('hello');
    if (!h) {
      var t = document.querySelector('#v-rate h1');
      if (!t) return;
      h = document.createElement('p'); h.id = 'hello'; t.after(h);
    }
    h.textContent = name ? 'أهلاً يا ' + name + ' 👋' : '';
    if (name) {
      var b = document.createElement('button');
      b.textContent = 'تغيير الاسم';
      b.onclick = showIntro;
      h.appendChild(b);
    }
    intro.hidden = !!name;
  }
  function showIntro() { intro.hidden = false; nameIn.value = name; nameIn.focus(); }
  function start() {
    var v = nameIn.value.trim().slice(0, 24);
    if (!v) { nameIn.focus(); return; }
    name = v;
    try { localStorage.setItem(KEY, name); } catch (e) {}
    render();
  }
  intro.querySelector('#goName').onclick = start;
  nameIn.addEventListener('keydown', function (e) { if (e.key === 'Enter') start(); });

  var oldPost = window.post;
  window.post = function (p, fd) {
    if (name) {
      fd.append('name', name);
      if (p === '/feedback') fd.set('text', '[' + name + '] ' + (fd.get('text') || ''));
    }
    return oldPost(p, fd);
  };

  render();
})();
