$(function () {

    'use strict'


    //acordeon imgen
    function acordeon() {

        $('.acordeon .acordeon_item').on('click', function () {
            const timeAnim = 400;
            $('.acordeon .acordeon_item').removeClass("active").css({ 'pointer-events': 'auto' });
            $(this).addClass("active").css({ 'pointer-events': 'none' });
            $('.acordeon .acorden_header').next().slideUp(timeAnim);
            $(this).find('.acorden_header').next().slideDown(timeAnim);

            $('.acord_img').removeClass('active');
            let id = $(this).data('id');
            $('#' + id + '-img').addClass('active');
        });
    }

    acordeon();




});