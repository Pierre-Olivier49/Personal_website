/**
 * main.js
 * Apparition des blocs au défilement + petites retouches globales.
 * Script classique (pas de module) : le site fonctionne aussi ouvert
 * directement depuis le disque.
 */
(function () {
  "use strict";

  /* ── Année du copyright, sans retouche annuelle ────────── */

  var year = document.querySelector("[data-current-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ── Apparition au défilement ──────────────────────────
     Amélioration progressive : sans JS, ou avec « réduire les
     animations », le contenu est simplement visible d'emblée
     (voir base.css). */

  var targets = document.querySelectorAll("[data-reveal]");
  if (targets.length === 0) return;

  function showAll() {
    Array.prototype.forEach.call(targets, function (el) {
      el.classList.add("is-visible");
    });
  }

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    showAll();
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // une seule apparition par élément
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );

  Array.prototype.forEach.call(targets, function (el) {
    observer.observe(el);
  });
})();
