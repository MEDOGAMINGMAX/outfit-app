(function () {
  var R = [
    ['إطلالتي', 'My Look', 'Ma tenue', 'Mi look', 'Tarzım'],
    ['صوّر لبسك وشوف تقييمه في ثواني.', 'Snap your outfit and get rated in seconds.', 'Prends ta tenue en photo et reçois une note en quelques secondes.', 'Haz una foto de tu outfit y recibe tu nota en segundos.', 'Kombinini çek, saniyeler içinde puanını gör.'],
    ['صوّر إطلالتك', 'Snap your outfit', 'Photographie ta tenue', 'Fotografía tu outfit', 'Kombinini çek'],
    ['أو اختار صورة من المعرض', 'or pick a photo from your gallery', 'ou choisis une photo dans ta galerie', 'o elige una foto de tu galería', 'veya galeriden bir fotoğraf seç'],
    ['التقييم', 'Rating', 'Note', 'Nota', 'Puan'],
    ['دولابي', 'Wardrobe', 'Garde-robe', 'Armario', 'Dolabım'],
    ['طقم', 'Outfit', 'Tenue', 'Conjunto', 'Kombin'],
    ['ضيف أول قطعة من لبسك، وإحنا نحللها.', 'Add your first piece and we will analyze it.', 'Ajoute ton premier vêtement, on s’occupe de l’analyser.', 'Añade tu primera prenda y nosotros la analizamos.', 'İlk parçanı ekle, biz analiz edelim.'],
    ['هتروح فين؟', 'Where are you going?', 'Où vas-tu ?', '¿A dónde vas?', 'Nereye gidiyorsun?'],
    ['اختار المناسبة وهنجمع لك طقم من دولابك.', 'Pick the occasion and we will build an outfit from your wardrobe.', 'Choisis l’occasion et on compose une tenue avec ta garde-robe.', 'Elige la ocasión y armamos un conjunto con tu armario.', 'Durumu seç, dolabından bir kombin oluşturalım.'],
    ['محتاج قطعتين على الأقل في دولابك عشان نجمع طقم.', 'You need at least two pieces in your wardrobe to build an outfit.', 'Il faut au moins deux vêtements dans ta garde-robe pour composer une tenue.', 'Necesitas al menos dos prendas en tu armario para armar un conjunto.', 'Kombin oluşturmak için dolabında en az iki parça olmalı.'],
    ['ضيف قطع', 'Add pieces', 'Ajouter des vêtements', 'Añadir prendas', 'Parça ekle'],
    ['اختار لي طقم', 'Pick an outfit for me', 'Choisis-moi une tenue', 'Elígeme un conjunto', 'Bana kombin seç'],
    ['ضيف قطعة', 'Add piece', 'Ajouter', 'Añadir', 'Parça ekle'],
    ['قطعة', 'piece', 'pièce', 'prenda', 'parça'],
    ['فرح', 'Wedding', 'Mariage', 'Boda', 'Düğün'],
    ['شغل', 'Work', 'Travail', 'Trabajo', 'İş'],
    ['دراسة', 'Study', 'Études', 'Estudio', 'Okul'],
    ['خروجة', 'Night out', 'Sortie', 'Salida', 'Gezme'],
    ['رياضة', 'Sport', 'Sport', 'Deporte', 'Spor'],
    ['مقابلة', 'Interview', 'Entretien', 'Entrevista', 'Mülakat'],
    ['بنحلل القطعة…', 'Analyzing the piece…', 'Analyse du vêtement…', 'Analizando la prenda…', 'Parça analiz ediliyor…'],
    ['بنختار الطقم…', 'Picking your outfit…', 'Choix de la tenue…', 'Eligiendo tu conjunto…', 'Kombin seçiliyor…'],
    ['الموديل مشغول دلوقتي. جرّب تاني بعد ثواني.', 'The model is busy right now. Try again in a few seconds.', 'Le modèle est occupé. Réessaie dans quelques secondes.', 'El modelo está ocupado. Inténtalo de nuevo en unos segundos.', 'Model şu an meşgul. Birkaç saniye sonra tekrar dene.'],
    ['الرد اتأخر. جرّب تاني.', 'The response took too long. Try again.', 'La réponse a pris trop de temps. Réessaie.', 'La respuesta tardó demasiado. Inténtalo de nuevo.', 'Yanıt gecikti. Tekrar dene.'],
    ['مقدرناش نوصل للسيرفر. اتأكد من النت وجرّب تاني.', 'Couldn’t reach the server. Check your connection and try again.', 'Impossible de joindre le serveur. Vérifie ta connexion et réessaie.', 'No pudimos conectar con el servidor. Revisa tu conexión e inténtalo de nuevo.', 'Sunucuya ulaşılamadı. Bağlantını kontrol edip tekrar dene.'],
    ['الصورة دي مش مدعومة. جرّب صورة تانية.', 'This image isn’t supported. Try another one.', 'Cette image n’est pas prise en charge. Essaie-en une autre.', 'Esta imagen no es compatible. Prueba con otra.', 'Bu görsel desteklenmiyor. Başka birini dene.'],
    ['المساحة امتلت. احذف قطع قديمة.', 'Storage is full. Delete some old pieces.', 'Stockage plein. Supprime d’anciens vêtements.', 'Almacenamiento lleno. Elimina prendas antiguas.', 'Alan doldu. Eski parçaları sil.'],
    ['مقدرناش نجمع طقم. جرّب مناسبة تانية.', 'We couldn’t build an outfit. Try another occasion.', 'Impossible de composer une tenue. Essaie une autre occasion.', 'No pudimos armar un conjunto. Prueba otra ocasión.', 'Kombin oluşturamadık. Başka bir durum dene.'],
    ['رأيك يهمنا', 'Your feedback matters', 'Ton avis compte', 'Tu opinión importa', 'Görüşün önemli'],
    ['اكتب ملاحظاتك (اختياري)', 'Write your comments (optional)', 'Écris tes remarques (facultatif)', 'Escribe tus comentarios (opcional)', 'Yorumunu yaz (isteğe bağlı)'],
    ['إرسال', 'Send', 'Envoyer', 'Enviar', 'Gönder'],
    ['شكراً! وصلنا رأيك.', 'Thank you! We got your feedback.', 'Merci ! Ton avis nous est bien parvenu.', '¡Gracias! Recibimos tu opinión.', 'Teşekkürler! Görüşün bize ulaştı.'],
    ['مقدرناش نبعت الرأي. جرّب تاني.', 'Couldn’t send your feedback. Try again.', 'Impossible d’envoyer ton avis. Réessaie.', 'No pudimos enviar tu opinión. Inténtalo de nuevo.', 'Görüşün gönderilemedi. Tekrar dene.']
  ];
  var COL = { ar: 0, en: 1, fr: 2, es: 3, tr: 4 };
  var MAP = new Map(R.map(function (r) { return [r[0], r]; }));
  var LANGS = [['ar', 'العربية'], ['en', 'English'], ['fr', 'Français'], ['es', 'Español'], ['tr', 'Türkçe'], ['de', 'Deutsch'], ['it', 'Italiano'], ['pt', 'Português'], ['ru', 'Русский'], ['hi', 'हिन्दी'], ['ur', 'اردو'], ['fa', 'فارسی'], ['id', 'Bahasa Indonesia'], ['zh', '中文'], ['ja', '日本語'], ['ko', '한국어']];
  var RTL = ['ar', 'ur', 'fa'], KEY = 'etlalaty-lang', cur = '';
  try { cur = localStorage.getItem(KEY) || ''; } catch (e) {}
  function known(c) { return LANGS.some(function (l) { return l[0] === c; }); }
  if (!known(cur)) { cur = (navigator.language || 'ar').slice(0, 2).toLowerCase(); if (!known(cur)) cur = 'ar'; }

  function tx(s) {
    if (cur === 'ar' || typeof s !== 'string') return s;
    var r = MAP.get(s);
    if (r) return r[COL[cur] !== undefined ? COL[cur] : 1];
    var m = s.match(/^(\d+) قطعة$/);
    return m ? m[1] + ' ' + tx('قطعة') : s;
  }

  var orig = new WeakMap();
  function fix(n) {
    var p = n.parentNode;
    if (!p || /^(SCRIPT|STYLE)$/.test(p.nodeName)) return;
    var src = orig.has(n) ? orig.get(n) : n.nodeValue, key = src.trim();
    if (!key) return;
    var out = tx(key);
    if (out === key && !orig.has(n)) return;
    orig.set(n, src);
    n.nodeValue = src.replace(key, out);
  }
  function walk(root) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), a = [], n;
    while ((n = w.nextNode())) a.push(n);
    a.forEach(fix);
  }
  new MutationObserver(function (ms) {
    ms.forEach(function (m) {
      m.addedNodes.forEach(function (n) { if (n.nodeType === 3) fix(n); else if (n.nodeType === 1) walk(n); });
    });
  }).observe(document.body, { childList: true, subtree: true });

  var oldToast = window.toast, oldBusy = window.busy, oldPost = window.post;
  window.toast = function (t) { return oldToast(tx(t)); };
  window.busy = function (o, t) { return oldBusy(o, tx(t)); };
  window.post = function (p, fd) { fd.append('lang', cur); return oldPost(p, fd); };

  var st = document.createElement('style');
  st.textContent =
    '#lang{position:fixed;top:12px;inset-inline-end:14px;z-index:6;background:var(--panel2);color:var(--ink);border:1px solid var(--line);border-radius:12px;padding:6px 8px;font:inherit;font-size:13px}' +
    '#fbBtn{position:fixed;bottom:84px;inset-inline-start:14px;z-index:6;width:46px;height:46px;border-radius:50%;border:0;background:var(--pink);color:#17142B;font-size:22px;box-shadow:0 6px 18px rgba(0,0,0,.4)}' +
    '#fbSheet{position:fixed;inset:0;z-index:9;background:rgba(10,8,22,.7);display:grid;align-items:end}' +
    '#fbSheet>div{max-width:480px;width:100%;margin:auto auto 0;background:var(--panel);border-radius:24px 24px 0 0;padding:22px 18px calc(22px + env(safe-area-inset-bottom,0px))}' +
    '#fbSheet textarea{width:100%;min-height:90px;border-radius:14px;border:1px solid var(--line);background:var(--panel2);color:var(--ink);font:inherit;padding:12px;margin-top:12px;resize:vertical}' +
    '#stars{display:flex;gap:6px;justify-content:center;margin-top:12px}' +
    '#stars button{background:none;border:0;font-size:32px;opacity:.35}#stars button.on{opacity:1}';
  document.head.appendChild(st);

  var sel = document.createElement('select');
  sel.id = 'lang'; sel.setAttribute('aria-label', 'Language');
  LANGS.forEach(function (l) { var o = document.createElement('option'); o.value = l[0]; o.textContent = l[1]; sel.appendChild(o); });
  document.body.appendChild(sel);

  var fbBtn = document.createElement('button');
  fbBtn.id = 'fbBtn'; fbBtn.textContent = '💬';
  document.body.appendChild(fbBtn);

  var sheet = document.createElement('div');
  sheet.id = 'fbSheet'; sheet.hidden = true;
  sheet.innerHTML = '<div><h2>رأيك يهمنا</h2><div id="stars"></div><textarea id="fbTxt" maxlength="800"></textarea><button class="btn" id="fbSend">إرسال</button><button class="btn ghost" id="fbClose">×</button></div>';
  document.body.appendChild(sheet);

  var fbTxt = sheet.querySelector('#fbTxt'), stars = sheet.querySelector('#stars'), score = 0;
  function paint() { Array.prototype.forEach.call(stars.children, function (b, i) { b.classList.toggle('on', i < score); }); }
  for (var i = 1; i <= 5; i++) {
    (function (k) {
      var b = document.createElement('button'); b.textContent = '⭐';
      b.onclick = function () { score = k; paint(); };
      stars.appendChild(b);
    })(i);
  }
  fbBtn.onclick = function () { sheet.hidden = false; };
  sheet.querySelector('#fbClose').onclick = function () { sheet.hidden = true; };
  sheet.addEventListener('click', function (e) { if (e.target === sheet) sheet.hidden = true; });
  sheet.querySelector('#fbSend').onclick = async function () {
    var fd = new FormData();
    fd.append('rating', score); fd.append('text', fbTxt.value);
    try {
      await window.post('/feedback', fd);
      window.toast('شكراً! وصلنا رأيك.');
      sheet.hidden = true; fbTxt.value = ''; score = 0; paint();
    } catch (e) { window.toast('مقدرناش نبعت الرأي. جرّب تاني.'); }
  };

  function apply() {
    document.documentElement.lang = cur;
    document.documentElement.dir = RTL.indexOf(cur) > -1 ? 'rtl' : 'ltr';
    document.title = tx('إطلالتي');
    sel.value = cur;
    fbTxt.placeholder = tx('اكتب ملاحظاتك (اختياري)');
    fbBtn.title = tx('رأيك يهمنا');
    walk(document.body);
  }
  sel.onchange = function () { cur = sel.value; try { localStorage.setItem(KEY, cur); } catch (e) {} apply(); };
  apply();
})();
