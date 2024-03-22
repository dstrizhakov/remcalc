(function (doc, win) {
    const fontSize = 16;
    const bpMobile = 767;
    const bpTablet = 1200;
    const widthDesktop = 1440;
    const widthTablet = 768;
    const widthMobile = 320
    const docEl = doc.documentElement;
    const resizeEvt =
        'orientationchange' in window ? 'orientationchange' : 'resize';
    const recalc = function () {
        const appWidth = window.innerWidth;
        // const { clientWidth: appWidth } = docEl;
        if (!appWidth) {
            return;
        }

        let scaleFactor;
        if (appWidth > bpTablet && appWidth < widthDesktop) {
            scaleFactor = appWidth / widthDesktop;
        } else if (appWidth > bpMobile && appWidth <= bpTablet) {
            scaleFactor = appWidth / widthTablet;
        } else if (appWidth <= bpMobile) {
            scaleFactor = appWidth / widthMobile;
        } else {
            scaleFactor = 1;
        }

        scaleFactor = Math.min(scaleFactor, 1.2);
        docEl.style.fontSize = `${fontSize * scaleFactor}px`;
    };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);