"use strict";

window.addEventListener("load", function () {
  var images = document.querySelectorAll('img');
  images.forEach(function (element) {
    element.addEventListener('contextmenu', PrevDef);
    element.addEventListener('mousedown', PrevDef);
  });

  function PrevDef(e) {
    e.preventDefault();
  }
});