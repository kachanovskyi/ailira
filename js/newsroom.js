$(document).ready(function () {

    var createGroupedArray = function(arr, chunkSize) {
        var groups = [], i;
        for (i = 0; i < arr.length; i += chunkSize) {
            groups.push(arr.slice(i, i + chunkSize));
        }
        return groups;
    };

    var showPagePosts = function () {
        var posts = createGroupedArray($('.article-link'), pagePosts)[activePage - 1];
        $('.article-link').each(function () {
            $(this).addClass('hidden')
        });
        posts.each(function () {
            $(this).removeClass('hidden');
            setPostsHeight();
        })
    };

    var activePage = 1;
    var pages = $('.pagination li:not(.prev, .next)');
    var pagePosts = 6;
    var location = '';

    // if(window.location.href.includes('newsroom')) {
    //     location = 'newsroom';
    // } else if (window.location.href.includes('blog')) {
    //     location = 'blog';
    // }

    pages.on("click", function () {
        if( !$(this).is('.active') ) {

            $('.pagination li').removeClass('active');
            $(this).addClass('active');
            console.log(typeof +$(this).find('a')[0].innerHTML);
            activePage = +$(this).find('a')[0].innerHTML;
            showPagePosts();
        }
    });

    $('.pagination .prev').on("click", function (e) {
        e.preventDefault();

        if(activePage > 1) {
            activePage--;
            var active = $('.pagination .active').prev();
            $('.pagination li').removeClass('active');
            active.addClass('active');
            showPagePosts();
        }
    });

    $('.pagination .next').on("click", function (e) {
        e.preventDefault();

        if(activePage < pages.length) {
            activePage++;
            var active = $('.pagination .active').next();
            $('.pagination li').removeClass('active');
            active.addClass('active');
            showPagePosts();
        }
    });

    var setPostsHeight = function () {
        $('.article-link').each(function () {
            var height = $(this).css('width');
            $(this).css('height', height);
        });
    };

});