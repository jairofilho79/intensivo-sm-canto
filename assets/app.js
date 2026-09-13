/* Intensivo SM — timer dos blocos e checklists persistidos.
   Tudo aqui é opcional: a página funciona sem JS. */
(function () {
  'use strict';

  var pageKey = 'ism:' + (document.body.dataset.lesson || location.pathname);

  /* ---------- armazenamento seguro (Safari privado pode lançar) ---------- */
  function load() {
    try { return JSON.parse(localStorage.getItem(pageKey) || '{}'); } catch (e) { return {}; }
  }
  function save(state) {
    try { localStorage.setItem(pageKey, JSON.stringify(state)); } catch (e) { /* sem persistência, tudo bem */ }
  }

  /* ---------- checklists ---------- */
  var state = load();
  var boxes = document.querySelectorAll('input[type=checkbox][data-key]');
  Array.prototype.forEach.call(boxes, function (box) {
    if (state[box.dataset.key]) box.checked = true;
    box.addEventListener('change', function () {
      state[box.dataset.key] = box.checked;
      save(state);
    });
  });

  /* ---------- timers ---------- */
  var audioCtx = null;
  function beep() {
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      var t = audioCtx.currentTime;
      [0, 0.25, 0.5].forEach(function (off) {
        var o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.type = 'sine'; o.frequency.value = 880;
        g.gain.setValueAtTime(0.0001, t + off);
        g.gain.exponentialRampToValueAtTime(0.3, t + off + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t + off + 0.18);
        o.connect(g).connect(audioCtx.destination);
        o.start(t + off); o.stop(t + off + 0.2);
      });
    } catch (e) { /* sem som, tudo bem */ }
    try { if (navigator.vibrate) navigator.vibrate([200, 100, 200]); } catch (e) {}
  }

  var wakeLock = null;
  function keepAwake(on) {
    try {
      if (on && !wakeLock && navigator.wakeLock) {
        navigator.wakeLock.request('screen').then(function (l) { wakeLock = l; }).catch(function () {});
      } else if (!on && wakeLock) { wakeLock.release(); wakeLock = null; }
    } catch (e) {}
  }

  function fmt(s) {
    var m = Math.floor(s / 60), r = s % 60;
    return m + ':' + (r < 10 ? '0' : '') + r;
  }

  var running = 0;
  Array.prototype.forEach.call(document.querySelectorAll('.timer'), function (el) {
    var total = parseInt(el.dataset.seconds, 10) || 60;
    var left = total, tick = null, endAt = 0;
    var out = el.querySelector('output');
    var btn = el.querySelector('button.primary');
    var reset = el.querySelector('button.reset');
    out.textContent = fmt(left);

    function render() { out.textContent = fmt(left); }
    function stop(done) {
      if (tick) { clearInterval(tick); tick = null; running = Math.max(0, running - 1); }
      el.classList.remove('running');
      btn.textContent = left === 0 ? 'De novo' : (left === total ? 'Iniciar' : 'Continuar');
      if (done) { el.classList.add('done'); beep(); }
      if (!running) keepAwake(false);
    }
    function start() {
      if (left === 0) { left = total; el.classList.remove('done'); }
      // usa relógio real: intervalos no celular podem atrasar em segundo plano
      endAt = Date.now() + left * 1000;
      el.classList.add('running'); el.classList.remove('done');
      btn.textContent = 'Pausar';
      running += 1; keepAwake(true);
      // toca um "nada" para desbloquear o áudio no iOS dentro do gesto do usuário
      try { audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)(); if (audioCtx.state === 'suspended') audioCtx.resume(); } catch (e) {}
      tick = setInterval(function () {
        left = Math.max(0, Math.round((endAt - Date.now()) / 1000));
        render();
        if (left === 0) stop(true);
      }, 250);
    }
    btn.addEventListener('click', function () { tick ? stop(false) : start(); });
    if (reset) reset.addEventListener('click', function () { stop(false); left = total; el.classList.remove('done'); btn.textContent = 'Iniciar'; render(); });
  });
})();
