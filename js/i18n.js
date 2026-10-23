/**
 * i18n.js
 * Bascule français / anglais. Les deux versions de chaque texte sont dans
 * la page (<span lang="fr"> / <span lang="en">) et base.css masque celle
 * qui n'est pas active. La langue de départ est choisie par le script en
 * tête de page (choix mémorisé, ?lang=, puis langue du navigateur).
 * Script classique (pas de module) : le site fonctionne aussi ouvert
 * directement depuis le disque.
 */
(function () {
  "use strict";

  var root = document.documentElement;
  var STORAGE_KEY = "lang";

  function setLang(lang, remember) {
    root.lang = lang;
    root.setAttribute("data-lang", lang);

    var title = root.getAttribute("data-title-" + lang);
    if (title) document.title = title;

    // Libellés accessibles traduits : data-aria-fr / data-aria-en.
    Array.prototype.forEach.call(
      document.querySelectorAll("[data-aria-" + lang + "]"),
      function (el) {
        el.setAttribute("aria-label", el.getAttribute("data-aria-" + lang));
      }
    );

    Array.prototype.forEach.call(
      document.querySelectorAll("[data-set-lang]"),
      function (button) {
        button.setAttribute(
          "aria-pressed",
          String(button.getAttribute("data-set-lang") === lang)
        );
      }
    );

    // On ne mémorise que le choix explicite du visiteur : la détection
    // automatique reste libre de jouer à la prochaine visite sinon.
    if (remember) {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch (e) {
        /* stockage indisponible (navigation privée, etc.) : sans effet */
      }
    }

    document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
  }

  document.addEventListener("click", function (event) {
    var button = event.target.closest("[data-set-lang]");
    if (button) setLang(button.getAttribute("data-set-lang"), true);
  });

  setLang(root.getAttribute("data-lang") === "en" ? "en" : "fr", false);
})();
