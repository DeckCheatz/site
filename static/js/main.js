(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var toggles = document.querySelectorAll("[data-toggle]");
  var line = document.getElementById("hud-line");
  var message = "4 cheats active — proton compat layer OK";

  function activateToggles() {
    toggles.forEach(function (t, i) {
      var delay = reduceMotion ? 0 : parseInt(t.getAttribute("data-delay"), 10) || 0;
      setTimeout(function () {
        if (i < toggles.length - 1) t.classList.add("is-on");
      }, delay);
    });
  }

  function typeLine() {
    if (!line) return;
    if (reduceMotion) {
      line.textContent = message;
      return;
    }
    var i = 0;
    var start = 900;
    setTimeout(function tick() {
      line.textContent = message.slice(0, i);
      i++;
      if (i <= message.length) setTimeout(tick, 22);
    }, start);
  }

  activateToggles();
  typeLine();
})();
