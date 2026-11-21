// HoneyBook booking modal (2026-11-20): opens #hb-modal over the page when a
// .js-hb-trigger link is clicked, instead of navigating away to Acuity. If
// this file fails to load for any reason, the triggers keep their real
// Acuity href/target as a fallback, so nothing breaks silently.
(function () {
  var modal = document.getElementById('hb-modal');
  if (!modal) return;
  var triggers = document.querySelectorAll('.js-hb-trigger');
  var closers = modal.querySelectorAll('[data-hb-close]');

  function open(e) {
    e.preventDefault();
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  triggers.forEach(function (t) { t.addEventListener('click', open); });
  closers.forEach(function (c) { c.addEventListener('click', close); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) close();
  });
})();
