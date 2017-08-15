(function($){
    $.fn.visible = function(partial,hidden,direction,container){

        if (this.length < 1)
            return;

        var $t          = this.length > 1 ? this.eq(0) : this,
            isContained = typeof container !== 'undefined' && container !== null,
            $w				  = isContained ? $(container) : $(window),
            wPosition        = isContained ? $w.position() : 0,
            t           = $t.get(0),
            vpWidth     = $w.outerWidth(),
            vpHeight    = $w.outerHeight(),
            direction   = (direction) ? direction : 'both',
            clientSize  = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === 'function'){

            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(),
                tViz = isContained ?
                    rec.top - wPosition.top >= 0 && rec.top < vpHeight + wPosition.top :
                    rec.top >= 0 && rec.top < vpHeight,
                bViz = isContained ?
                    rec.bottom - wPosition.top > 0 && rec.bottom <= vpHeight + wPosition.top :
                    rec.bottom > 0 && rec.bottom <= vpHeight,
                lViz = isContained ?
                    rec.left - wPosition.left >= 0 && rec.left < vpWidth + wPosition.left :
                    rec.left >= 0 && rec.left <  vpWidth,
                rViz = isContained ?
                    rec.right - wPosition.left > 0  && rec.right < vpWidth + wPosition.left  :
                    rec.right > 0 && rec.right <= vpWidth,
                vVisible   = partial ? tViz || bViz : tViz && bViz,
                hVisible   = partial ? lViz || rViz : lViz && rViz;

            if(direction === 'both')
                return clientSize && vVisible && hVisible;
            else if(direction === 'vertical')
                return clientSize && vVisible;
            else if(direction === 'horizontal')
                return clientSize && hVisible;
        } else {

            var viewTop 				= isContained ? 0 : wPosition,
                viewBottom      = viewTop + vpHeight,
                viewLeft        = $w.scrollLeft(),
                viewRight       = viewLeft + vpWidth,
                position          = $t.position(),
                _top            = position.top,
                _bottom         = _top + $t.height(),
                _left           = position.left,
                _right          = _left + $t.width(),
                compareTop      = partial === true ? _bottom : _top,
                compareBottom   = partial === true ? _top : _bottom,
                compareLeft     = partial === true ? _right : _left,
                compareRight    = partial === true ? _left : _right;

            if(direction === 'both')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            else if(direction === 'vertical')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
            else if(direction === 'horizontal')
                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        }
    };

})(jQuery);

$(document).ready(function () {

    $('a[data-toggle=dropdown]').on('click', function(e){

        e.stopPropagation();
        e.preventDefault();
        $(this).parent().siblings().removeClass('open');
        $(this).parent().toggleClass('open');

        if($(window).width() > 767){

            if($(this).parent('li').hasClass('open')){

                if(!$(this).next('ul').visible()){

                    $(this).next('ul').addClass('rev');

                }

            }else{
                $(this).next('ul').removeClass('rev');
            }

        }

    });

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