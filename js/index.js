$(document).ready(function () {
    $('a.page-scroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // if (target.length && (target.attr('id') === "home") ) {
            //     $('html,body')
            //         .stop()
            //         .animate({
            //         scrollTop: target.offset().top - 82
            //     }, 900);
            //     return false;
            // } else
            if (target.length) {
                $('html,body')
                    .stop()
                    .animate({
                        scrollTop: target.offset().top - 82
                    }, 900);
                return false;
            }
        }
    });

    $('.aim-block').on("click", function () {
        $('.aim-block').removeClass('active');
        $(this).addClass('active');
    });
});