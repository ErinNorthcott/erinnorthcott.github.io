/* story.js — the case study opens from its pulled line. The lead and the
   credit are always visible; this only reveals the rest of Dani's story. */
(function () {
  const s = document.getElementById('story');
  if (!s) return;
  const btn = s.querySelector('.story__more');
  if (!btn) return;
  const label = btn.querySelector('span');
  const shut = label.textContent;
  btn.addEventListener('click', () => {
    const open = s.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    label.textContent = open ? 'Close' : shut;
  });
})();
