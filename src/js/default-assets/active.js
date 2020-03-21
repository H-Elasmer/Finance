$(function (){
    'use strict';
    // :: 1.0 Preloader Active Code
    $(window).on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // :: 2.0 Set Height Hero Section Code
    var myHead = $('.single-welcome-slide');
    myHead.height($(window).height());
    $(window).resize(function (){
        myHead.height($(window).height());
    });

    // :: 3.0 ClassyNav Active Code
    if ($.fn.classyNav) {
        $('#finalNav').classyNav();
    }

    // :: 4.0 Welcome Slides Active Code
    if ($.fn.owlCarousel) {
        var welcomeSlider = $('.welcome-slides');
        welcomeSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 2000,
            dots: false
        })
        welcomeSlider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        welcomeSlider.on('translated.owl.carousel', function () {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
    }

    // :: 5.0 Scrollup Active Code
    if ($.fn.scrollUp) {
        $(window).scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"</i>'
        });
    }

    // :: 6.0 Prevent Default 'a' Click
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    // :: 7.0 WOW Active Code
    if ($(window).width() > 767) {
        new WOW().init();
    }
});