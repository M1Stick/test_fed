$(function() {
    $('.wrapper').addClass('loaded');

    $('.icon-menu').click(function (event) {
        $(this).toggleClass('active');
        $('.menu__body').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 200,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
    });
})



