// Small boot script (external file so the CSP needs no 'unsafe-inline').
(function () {
  'use strict';
  document.addEventListener('contextmenu', function (e) { e.preventDefault(); });
  var host = document.getElementById('embed-html');
  host.addEventListener('mousedown', function (e) { e.preventDefault(); window.focus(); }, false);
  // Tell an embedding page (if any) that the game page has loaded. Parent must check event.origin.
  if (window.parent !== window) {
    window.addEventListener('load', function () {
      window.parent.postMessage({ source: 'piku-jump', type: 'ready' }, '*');
    });
  }
})();
