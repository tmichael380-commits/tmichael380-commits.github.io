(function () {
  "use strict";

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Headshot fallback:
  // If `assets/headshot.png` isn't present in the deployed repo,
  // load `headshot.b64` (text file) and embed it as a data URI.
  var headshotImgs = document.querySelectorAll("img[data-headshot=\"true\"]");
  if (headshotImgs && headshotImgs.length > 0) {
    var loadHeadshot = function () {
      fetch("headshot.b64")
        .then(function (res) {
          return res.ok ? res.text() : Promise.reject(new Error("Missing headshot.b64"));
        })
        .then(function (text) {
          var b64 = String(text || "").trim();
          if (!b64) return;
          var uri = "data:image/png;base64," + b64;
          headshotImgs.forEach(function (img) {
            img.src = uri;
          });
        })
        .catch(function () {
          // Keep the existing `src` if the PNG path works.
        });
    };

    // Run after initial layout; safe and avoids blocking nav/render.
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", loadHeadshot);
    } else {
      loadHeadshot();
    }
  }

  // Mobile navigation
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open");
    });

    // Close menu when a link is clicked
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }
})();
