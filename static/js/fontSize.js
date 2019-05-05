
(function (doc, win) {
  const docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      const clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth === 1920) {
        docEl.style.fontSize = '192px';
      } else {
        docEl.style.fontSize = `${192 * (clientWidth / 1920)}px`;
      }
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
}(document, window));
