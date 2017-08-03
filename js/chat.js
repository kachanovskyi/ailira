//© All rights reserved. BotsCrew 2017
$(document).ready(function () {

    (function () {
        //Load Stylesheet
        var root = './';
        // var root = 'https://rawgit.com/kachanovskyi/toyotacr-widget/master/';

        // var head = document.getElementsByTagName('head')[0];
        //
        // var stylesheet = document.createElement('link');
        // stylesheet.type = 'text/css';
        // stylesheet.rel = 'stylesheet';
        // stylesheet.href = root + 'css/chat.css';
        // head.appendChild(stylesheet);

        // var icons = document.createElement('link');
        // icons.type = 'text/css';
        // icons.rel = 'stylesheet';
        // icons.href = 'https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css';
        // head.appendChild(icons);

        var brandingLink = 'https://www.holaedna.com/edna-ai',
            navHeight = 82;

        // setTimeout(function () {
        //     (window.jQuery && init()) || loadScript("https://code.jquery.com/jquery-1.12.4.min.js", init);           //instead of init func should be isValidTime, so that widget would work only on certain hours
        // }, 1000);
        //
        // function loadScript(url, callback) {
        //     var script = document.createElement("script");
        //     script.type = "text/javascript";
        //
        //     if (script.readyState) { //IE
        //         script.onreadystatechange = function () {
        //             if (script.readyState == "loaded" || script.readyState == "complete") {
        //                 script.onreadystatechange = null;
        //                 callback();
        //             }
        //         };
        //     } else { //Others
        //         script.onload = function () {
        //             callback();
        //         };
        //     }
        //
        //     script.src = url;
        //     document.getElementsByTagName("head")[0].appendChild(script);
        // }

        function init() {
            var $ = window.jQuery;

            var chatId = sessionStorage.getItem("toyotaCRchatID");
            // settings = {},
            // script = $('#anychat-script');

            var anchor = $('#chat-container');
            // var anchor = $('<div>')
            // .attr('id', 'chat-container')
            // .appendTo($('body'));

            // var chatbot = $('<div>')
            //     .addClass('chatbot')
            //     .appendTo(anchor);

            // var launcher = $('<div>')
            //     .addClass('widget-launcher')
            //     .addClass('widget-effect')
            //     .append('<i class="zmdi zmdi-comment-text"></i>')
            //     // .css('background-image', 'url(data:image/svg+xml,' + escape(btnBg) + ')')
            //     // .css('background-color', settings.color)
            //     .appendTo(anchor);

            var ua = navigator.userAgent;
            var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
            var Android = !!ua.match(/Android/i);
            var Mobile = !!ua.match(/Mobi/i);
            var Mac = !!ua.match(/Macintosh/i);

            var $w = $(window);

            // var launcherCont = {};
            // var chatTop = 480,
            //     chatBottom = 50,
            //     chatWidth = 333;
            // launcherCont.bottom = 3;
            // launcherCont.right = 16;
            // launcherCont.width = 333;
            // launcherCont.height = 20;

            // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // // if ($w.width() < 500) {
            //     chatTop = $w.height();
            //     chatWidth = $w.width();
            //     launcherCont.width = chatWidth;
            //     launcherCont.right = 0;
            // }

            // launcher.click(function () {

            // var chatHeight = chatTop;

            var messageContainer = $('<div class="message-container">')
                .attr('id', 'messageContainer')
                .css('width', '100%')
                .css('height', '100%')
                .css('background-size', '100%')
                .appendTo($('#chat-window'))

            // if ($('#chat-window').length === 0) {

            // var chatWindow = $('#chat-window')
            // .css('height', chatHeight)
            // .css('top', -chatHeight - 16)
            // .css('width', launcherCont.width)
            // .css('position', 'absolute')
            // .css('right', launcherCont.right)
            // .css('display', 'none')
            // .css('z-index', '10001')
            // .append(messageContainer)
            // .append(
            //     $('<div class="chat-top">')
            //         .css('top', 0)
            //         // .append(
            //         //     $('<p class="branding">')
            //         //         .text('Powered by ')
            //         //         .append(
            //         //             $('<a class="powered-link">')
            //         //                 .attr('href', brandingLink)
            //         //                 .attr('target', '_blank')
            //         //                 .text('Edna')
            //         //         )
            //         // )
            //         // .append(
            //         //     $('<div class="close-btn">')
            //         // )
            // )
            // .append(
            //     $('<div class="chat-bottom">')
            //         .css('width', '100%')
            //         .css('height', '58px')
            //         .append(
            //             $('<div class="input-container">')
            //                 .append(
            //                     $('<input type="text" placeholder="Escribir mensaje ...">')
            //                         .attr('id', 'chatInput')
            //                         .addClass('black-placeholder')
            //                         .keypress(function (event) {
            //                             if (event.which === 13) {
            //                                 event.preventDefault();
            //                                 send();
            //                             }
            //                         })
            //                         .css('width', 'calc(100% - 80px)')
            //                 )
            //                 .append(
            //                     $('<a class="send-message">').text('Enviar')
            //                         .css('float', 'right')
            //                         .css('border-bottom', 'none')
            //                         .click(send)
            //                 )
            //         )
            // );

            $('<div class="chat-bottom">')
                .css('height', '58px')
                .append(
                    $('<div class="input-container">')
                        .append(
                            $('<input type="text" placeholder="Type your message ...">')
                                .attr('id', 'chatInput')
                                .addClass('black-placeholder')
                                .keypress(function (event) {
                                    if (event.which === 13) {
                                        event.preventDefault();
                                        send();
                                    }
                                })
                                .css('width', 'calc(100% - 88px)')
                        )
                        .append(
                            $('<a class="send-message">').text('Send')
                                .css('float', 'right')
                                .css('border-bottom', 'none')
                                .click(send)
                        )
                )
                .appendTo($('#chat-window'));


            // $('.close-btn').on("click", chatWindowClose);

            $('<div class="message-outer bot">')
                .css('visibility', 'hidden')
                .css('margin-bottom', '0')
                .append(
                    $('<div class="chat-message bot purple">').text("I'm hidden:)")
                )
                .prependTo($('#chat-window').find('.message-container'));

            // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // // if ($w.width() < 500) {
            //     chatWindow.css('top', -chatHeight);
            // }
            // }


            // if (sessionStorage.getItem("toyotaCRchatID") === null) {
            //     messageContainer
            //         .append(
            //             $('<div class="start-screen">')
            //                 .append(
            //                     $('<img class="start-img"/>').attr('src', root + 'img/toyota-yaris.jpg')
            //                 )
            //                 .append(
            //                     $('<img class="start-logo"/>').attr('src', root + 'img/toyota-logo-red.png')
            //                 )
            //                 .append(
            //                     $('<div class="start-text">').text("Hola, Soy el Purdy Bot. Si tiene alguna duda, estoy aquí para ayudarle!")
            //                 )
            //                 .append(
            //                     $('<a class="start-btn">').text("Iniciar Chat")
            //                         .on("click", chatInit)
            //                 )
            //         )
            // } else if ($($('.message-container')[0]).children().length < 2) {
            //     chatInit();
            // }

            chatInit();
            chatWindowShow();

            // });

            function chatWindowShow() {
                $('#chat-window').show().addClass('expanded no-border');
                $("#chatInput").val('');

                if (/webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    // if ($w.width() < 500) {
                    $('body')
                        .animate({
                            scrollTop: 0
                        }, 0)
                        .css('overflow-y', 'scroll')
                        .css('max-height', chatTop)
                        .wrapInner('<div id="overflowWrapper" />');
                    $('#overflowWrapper').css('overflow-y', 'hidden').css('height', chatTop);
                } else if (/Android/i.test(navigator.userAgent)) {
                    $('body')
                        .scrollTop(0)
                        .css('overflow', 'hidden')
                        .css('height', '100vh');
                }
            }

            function chatWindowClose() {
                $('#chat-window').hide().removeClass('expanded no-border');
                $('.chat-close').hide();

                if (/webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    // if ($w.width() < 500) {
                    $("#overflowWrapper").contents().unwrap();
                    $('body')
                        .css('overflow-y', 'auto')
                        .css('max-height', 'none');
                } else if (/Android/i.test(navigator.userAgent)) {
                    $('body')
                        .css('overflow-y', 'auto')
                        .css('height', 'auto');
                }
            }

            function setResponse(val) {

                var sendBtn = $('.send-message');

                sendBtn.addClass('disabled');

                if (sessionStorage.getItem("toyotaCRchatID") === null) {
                    sessionStorage.setItem("toyotaCRchatID", val.chatId.id);
                }

                var container = $('<div class="message-outer bot">');
                var message = $('<div class="chat-message bot">');

                var wave = $('<div id="wave">')
                    .append($('<span class="dot">'))
                    .append($('<span class="dot">'))
                    .append($('<span class="dot">'));

                var counter = 0;

                if (val.messages !== null) {

                    var botImage = root + 'img/toyota-logo.png';
                    var message = $('<div class="chat-message bot">').text(val.messages[0].text);

                    container.append(
                        $('<div class="message-row">')
                            .append(wave)
                    );

                    var printInterval = setInterval(function () {

                        var btnWidth;

                        if ((counter < val.messages.length) && (val.messages[counter].text !== null)) {

                            message = $('<div class="chat-message bot">').text(val.messages[counter].text);

                            container.find($('#wave')).remove();

                            $('<div class="message-row">')
                                // .prepend(
                                //     $('<div class="bot-icon">')
                                //         .append(
                                //             $('<img/>').attr('src', botImage)
                                //         )
                                // )
                                .append(
                                    message
                                )
                                .appendTo(container);

                            container
                                .append(
                                    $('<div class="message-row">')
                                        .append(wave)
                                );

                            counter++;
                            btnWidth = message.outerWidth();
                        }

                        if (counter === val.messages.length) {

                            if (val.buttons !== null) {
                                message.css('border-radius', '4px 4px 0 0');


                                val.buttons.forEach(function (entry) {

                                    container
                                        .append(
                                            $('<div class="chat-message button">')
                                                .text(entry.title)
                                                .attr('payload', entry.payload)
                                                .css('width', btnWidth)
                                                .click(function () {
                                                    send("btn", $(this));
                                                })
                                        );

                                });
                            }

                            container.find($('#wave')).remove();
                            sendBtn.removeClass('disabled');
                            clearInterval(printInterval);
                        }

                    }, 1333);

                    container.prependTo($('#chat-window').find('.message-container'));

                }

                chatScrollBottom();
            }

            function chatInit() {

                var data = {
                    chatId: {
                        id: chatId
                    },
                    button: {
                        payload: "GET_STARTED"
                    }
                };

                $.ajax({
                    // type: "POST",
                    type: "GET",            //mocked up version, should be post with data: !!!
                    url: './data/response.json',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    // data: JSON.stringify(data),

                    success: function (data) {
                        chatId = data.chatId.id;
                        sessionStorage.setItem("toyotaCRchatID", chatId);
                        setResponse(data);

                        $('.start-screen').fadeOut("fast");
                    },
                    error: function () {
                        console.log("Internal Server Error. Not possible to get chat id.");
                    }
                });

            }

            function send(param, elem) {

                if (!$('.send-message').is('.disabled')) {

                    var text = $("#chatInput").val();
                    var data = {
                        chatId: {
                            id: chatId
                        }
                    };

                    if (param === "btn") {
                        text = elem.text();
                        data.button = {
                            payload: elem.attr('payload')
                        }
                    } else {
                        data.message = {
                            text: text
                        };
                    }

                    if (text.length && text.trim()) {

                        $("#chatInput").val('');
                        $.ajax({
                            // type: "POST",
                            type: "GET",            //mocked up version, should be post with data: !!!
                            // url: baseUrl + "query?v=20150910",
                            url: './data/response2.json',
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            // data: JSON.stringify(data),

                            success: function (data) {
                                setResponse(data);
                            },
                            error: function () {
                                console.log("Internal Server Error");
                            }
                        });

                        var message = $('<div class="chat-message user">');

                        $('<div class="message-outer user">')
                            .prependTo($('#chat-window')
                                .find('.message-container'));

                        message
                            .text(text)
                            .appendTo(
                                $('#chat-window').find('.message-container').find('.message-outer.user')[0]
                            );

                    } else {
                        $("#chatInput").val('').focus();
                    }
                    chatScrollBottom();

                }

            }

            function chatScrollBottom() {
                $(".message-container").animate({scrollTop: $('.message-container').prop("scrollHeight")}, 0);
            }

            function getVisible($el, param) {
                if($el.length) {
                    var scrollTop = $(this).scrollTop() + navHeight;

                    if (param) {
                        scrollTop = $(this).scrollTop();
                    }

                    var scrollBot = scrollTop + $(this).height(),
                        elTop = $el.offset().top,
                        elBottom = elTop + $el.outerHeight(),
                        visibleTop = elTop < scrollTop ? scrollTop : elTop,
                        visibleBottom = elBottom > scrollBot ? scrollBot : elBottom;
                    return visibleBottom - visibleTop;
                }
                return;
            }

            function setChatSize() {
                var slideVisible = getVisible($('.slide-1')) > 0 ? getVisible($('.slide-1')) : 0;
                var footerVisible = getVisible($('#footer'), 1) > 0 ? getVisible($('#footer'), 1) : 0;
                var chatHeight = $(window).height() - navHeight - footerVisible - slideVisible,
                    chatWidth = $('.chat-container').css('width');

                $('#chat-window')
                    .stop()
                    .css('height', chatHeight)
                    .css('bottom', footerVisible)
                    .animate({
                        'width': chatWidth
                    }, 300);
            }

            $(window).on('scroll resize', function () {
                getVisible($('.slide-1'));
                setChatSize();
            });

            $.fn.isolatedScroll = function() {
                this.bind('mousewheel DOMMouseScroll', function (e) {
                    var delta = e.wheelDelta || (e.originalEvent && e.originalEvent.wheelDelta) || -e.detail,
                        bottomOverflow = this.scrollTop + $(this).outerHeight() - this.scrollHeight >= 0,
                        topOverflow = this.scrollTop <= 0;

                    if ((delta < 0 && bottomOverflow) || (delta > 0 && topOverflow)) {
                        e.preventDefault();
                    }
                });
                return this;
            };

            $('.message-container').isolatedScroll();

            setChatSize();

            window.initializeShopchat = init;
            return true;
        }

        init();
    })();

})
