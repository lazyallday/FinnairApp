(function ($) {

    var img = $('#header .pic1'),
        img2 = $('#header .pic2'),
        tl = new TimelineMax(),
        loader = new $('#loader'),
        plane = $('.plane_32px'),
        curve = $('.curve');

    tl
        .from(img, 0.6, { autoAlpha: 0, ease: Power1.easeOut })
        .addPause()

        .to(img, 0.4, { autoAlpha: 0, ease: Power1.easeIn })
        .to(loader, 0.3, { opacity: 1, ease: Power1.easeIn } , '-=0.2')
        .to(plane, 3.5, { bezier: { curviness: 2.1, values: [{ x: 100, y: -30 }, { x: 191, y: 21 }] }, scaleX:1.2, scaleY:1.2, ease: Cubic.easeInOut })
        .to(plane, 3.5, {rotation: 95, transformOrigin: '100% 0%', ease:Power2.easeInOut}, '-=3.5') 

        .to(loader, 0.3, { opacity: 0 })
        .from(img2, 0.3, { opacity: 0, ease: Power1.easeOut });


    $('#btnNext').on('click', function () {
        tl.play();
    });

    $('#btnPrev').on('click', function () {
        tl.reverse();
    });
})(jQuery);






