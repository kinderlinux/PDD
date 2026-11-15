// Tema: localStorage > sistem tercihi. Sayfa yüklendiğinde head'deki inline script
// ile tema zaten uygulanmış olur; buradaki script yalnızca toggle + menüyü bağlar.
(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var menuBtn = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("pdd-theme", next); } catch (e) {}
    });
  }

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
})();
