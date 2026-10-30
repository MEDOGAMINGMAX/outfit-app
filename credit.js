(function () {
  var NAME = 'Ahmed Hossam';
  var st = document.createElement('style');
  st.textContent =
    '#credit{text-align:center;margin:40px 0 8px;font-size:12px;color:var(--mute)}' +
    '#credit i{display:block;width:36px;height:2px;border-radius:2px;background:var(--pink);margin:0 auto 10px}' +
    '#credit b{display:block;margin-top:2px;font-size:15px;font-weight:600;color:var(--ink);letter-spacing:.3px}';
  document.head.appendChild(st);

  var f = document.createElement('div');
  f.id = 'credit';
  var label = document.createElement('span'), nm = document.createElement('b');
  nm.textContent = NAME;
  f.appendChild(document.createElement('i'));
  f.appendChild(label);
  f.appendChild(nm);
  document.querySelector('main').appendChild(f);

  function paint() {
    label.textContent = document.documentElement.lang === 'ar' ? 'تصميم وتطوير' : 'Designed & built by';
  }
  new MutationObserver(paint).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  paint();
})();
