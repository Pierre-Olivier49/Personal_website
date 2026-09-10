/**
 * navigation.js
 * Menu mobile, ombre de l'en-tête au défilement et lien actif.
 * Script classique (pas de module) : le site fonctionne aussi ouvert
 * directement depuis le disque.
 */
(function () {
  "use strict";

  var DESKTOP_BREAKPOINT = 900; // doit rester aligné sur layout.css

  var header = document.querySelector("[data-header]");
  var toggle = document.querySelector("[data-nav-toggle]");
  var menu = document.querySelector("[data-mobile-menu]");

  /* ── Menu mobile ───────────────────────────────────────── */

  function setMenu(open) {
    if (!toggle || !menu) return;
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    document.body.classList.toggle("has-menu-open", open);
  }

  function closeMenu() {
    setMenu(false);
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenu(menu.hidden);
    });

    // Un clic sur un lien referme le menu avant le défilement vers l'ancre.
    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !menu.hidden) {
        closeMenu();
        toggle.focus();
      }
    });

    // Passer en paysage peut franchir le point de rupture menu ouvert, ce qui
    // laisserait la page bloquée en défilement derrière un menu invisible.
    window.addEventListener("resize", function () {
      if (window.innerWidth > DESKTOP_BREAKPOINT && !menu.hidden) closeMenu();
    });
  }

  /* ── Ombre de l'en-tête au défilement ──────────────────── */

  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 10);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ── Lien actif selon la section à l'écran ─────────────── */

  var links = Array.prototype.slice.call(
    document.querySelectorAll(".nav-links a[href^='#']")
  );

  if (!("IntersectionObserver" in window) || links.length === 0) return;

  var sections = links
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  var spy = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === "#" + entry.target.id
          );
        });
      });
    },
    // Une bande au milieu de l'écran : la section qui la traverse est celle
    // que le visiteur est en train de lire.
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach(function (section) {
    spy.observe(section);
  });
})();
