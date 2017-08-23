$(document).ready(function () {
    $(window)
        .on("ready load resize", sizeArticles);

    function sizeArticles() {

        $('.article-link').each(function () {
            var height = $(this).css('width');
            $(this).stop().animate({
                height: height
            }, 333)
        });
    }
});
