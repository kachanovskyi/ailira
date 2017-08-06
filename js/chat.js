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

        var navHeight = 82,
            genericScrollValue;

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

            // var chatId = sessionStorage.getItem("toyotaCRchatID");
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
                            // .click(sendName)
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

                // if (/webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                //     // if ($w.width() < 500) {
                //     $('body')
                //         .animate({
                //             scrollTop: 0
                //         }, 0)
                //         .css('overflow-y', 'scroll')
                //         .css('max-height', chatTop)
                //         .wrapInner('<div id="overflowWrapper" />');
                //     $('#overflowWrapper').css('overflow-y', 'hidden').css('height', chatTop);
                // } else if (/Android/i.test(navigator.userAgent)) {
                //     $('body')
                //         .scrollTop(0)
                //         .css('overflow', 'hidden')
                //         .css('height', '100vh');
                // }
            }

            function setResponse(val) {

                var typing = $('.message-container').find($('#wave'));

                if (typing) {
                    typing.parent().parent().remove();
                }

                var sendBtn = $('.send-message');
                var container = $('<div class="message-outer bot">');
                var message = $('<div class="chat-message bot">');
                var btnWidth,
                    scrCont,
                    scrContWidth = 0;

                // sendBtn.addClass('disabled');

                if (val.sender_action) {
                    console.log('TYPING');
                    var wave = $('<div id="wave">')
                        .append($('<span class="dot">'))
                        .append($('<span class="dot">'))
                        .append($('<span class="dot">'));
                    container.append(
                        $('<div class="message-row">')
                            .append(wave)
                    );
                }

                if (val.message !== null) {
                    if (val.message.text !== undefined) {
                        message.text(val.message.text);
                    } else if (val.message.attachment !== undefined) {
                        message.text(val.message.attachment.payload.text);
                    }


                    setTimeout(function () {

                        if (message.text().length && message.text().trim()) {
                            $('<div class="message-row">')
                                .append(
                                    message
                                )
                                .appendTo(container);
                        }

                        if (val.message.quick_replies) {
                            scrCont = $('<div>')
                                .addClass('scrolling-container')
                                .addClass('quick')
                                .append(
                                    $('<span class="arrow">')
                                        .text('<')
                                        .click(
                                            function () {
                                                var navwidth = scrCont.find('ul');
                                                navwidth.scrollLeft(navwidth.scrollLeft() - 200);
                                            }
                                        )
                                )
                                .append(
                                    $('<span class="arrow">')
                                        .text('>')
                                        .click(
                                            function () {
                                                var navwidth = scrCont.find('ul');
                                                navwidth.scrollLeft(navwidth.scrollLeft() + 200);
                                            }
                                        )
                                )
                                .append(
                                    $('<ul>')
                                )
                                .appendTo(container);

                            val.message.quick_replies.forEach(function (item) {
                                $('<li>')
                                    .text(item.title)
                                    .attr('payload', item.payload)
                                    .click(function () {
                                        send("btn", $(this))
                                    })
                                    .appendTo(scrCont.find('ul'));
                            });

                            scrCont.find('ul').find('li').each(function () {
                                scrContWidth += parseInt($(this).css('width'), 10) + 10;
                            });

                            if (scrContWidth > parseInt(scrCont.css('width'), 10)) {
                                scrCont.addClass('scrollable');
                                console.log(scrContWidth > parseInt(scrCont.css('width'), 10));
                                console.log(parseInt(scrCont.css('width'), 10));

                            }
                        }

                        if (val.message.attachment && val.message.attachment.payload.elements) {
                            scrCont = $('<div>')
                                .addClass('scrolling-container')
                                .append(
                                    $('<span class="arrow">')
                                        .text('<')
                                        .click(
                                            function () {
                                                var navwidth = scrCont.find('ul');
                                                navwidth.scrollLeft(navwidth.scrollLeft() - 200);
                                            }
                                        )
                                )
                                .append(
                                    $('<span class="arrow">')
                                        .text('>')
                                        .click(
                                            function () {
                                                var navwidth = scrCont.find('ul');
                                                navwidth.scrollLeft(navwidth.scrollLeft() + 200);
                                            }
                                        )
                                )
                                .append(
                                    $('<ul>')
                                );

                            if (val.message.attachment.payload.template_type === "list") {
                                scrCont.addClass('list');
                            }

                            scrCont.appendTo(container);


                            val.message.attachment.payload.elements.forEach(function (item) {
                                var generic = $('<li>').addClass('generic');

                                if (item.image_url) {
                                    generic.append(
                                        $('<div>')
                                            .addClass('generic-img')
                                            .append(
                                                $('<div>')
                                                    .addClass('inner')
                                                    .css('background-image', 'url("' + item.image_url + '")')
                                            )
                                    )
                                }

                                if (item.title || item.subtitle) {
                                    var info = $('<div>')
                                        .addClass('generic-info')
                                        .appendTo(generic)
                                }

                                if (item.title) {
                                    $('<p>')
                                        .addClass('title')
                                        .text(item.title)
                                        .appendTo(info)
                                }
                                if (item.subtitle) {
                                    $('<p>')
                                        .addClass('subtitle')
                                        .text(item.subtitle)
                                        .appendTo(info)
                                }

                                if (item.buttons) {

                                    item.buttons.forEach(function (entry) {
                                        var btn = $('<a>')
                                            .addClass('generic-btn')
                                            .text(entry.title);

                                        if (entry.type === "postback") {
                                            btn
                                                .attr('payload', entry.payload)
                                                .click(function () {
                                                    send("btn", $(this));
                                                });
                                        } else if (entry.type === "web_url") {
                                            btn
                                                .attr('href', entry.url)
                                                .attr('target', '_blank')
                                        }

                                        btn.appendTo(generic);

                                    })

                                }

                                generic.appendTo(scrCont.find('ul'));
                            });

                            scrCont.find('ul').find('li').each(function () {
                                scrContWidth += parseInt($(this).css('width'), 10) + 10;
                            });

                            if (scrContWidth > parseInt(scrCont.css('width'), 10)) {
                                scrCont.addClass('scrollable');
                            }
                            setGenericWidth();

                        }

                        if (val.message.attachment && val.message.attachment.payload.buttons) {
                            message.css('border-radius', '10px 10px 0 0');
                            btnWidth = message.outerWidth();

                            val.message.attachment.payload.buttons.forEach(function (entry) {

                                var btn = $('<a class="chat-message button">').text(entry.title);
                                if (btnWidth !== 0) {
                                    btn.css('width', btnWidth);

                                } else if ($('.scrolling-container.list') && !btnWidth) {
                                    btnWidth = parseInt($('.scrolling-container.list').css('width'), 10);
                                    btn
                                        .css('max-width', '100%')
                                        .css('margin', '0')
                                        .css('width', btnWidth - 10);
                                } else {
                                    btn.css('display', 'inline-block');
                                }
                                if (entry.type === "postback") {
                                    btn
                                        .attr('payload', entry.payload)
                                        .click(function () {
                                            send("btn", $(this));
                                        });
                                } else if (entry.type === "web_url") {
                                    btn
                                        .attr('href', entry.url)
                                        .attr('target', '_blank')
                                }

                                btn.appendTo(container)

                            });
                        }

                        // sendBtn.removeClass('disabled');
                    }, 333);
                }

                container.prependTo($('#chat-window').find('.message-container'));
                chatScrollBottom();

            }


            var stompClient = null;
            var chatId = null;

            function connect() {
                // var socket = new SockJS('https://010e8e35.ngrok.io/ailira');
                var socket = new SockJS('https://pavlenko.botscrew.com/ailira/web');
                stompClient = Stomp.over(socket);
                stompClient.connect({}, function (frame) {
                    // setConnected(true);
                    console.log('Connected: ' + frame);
                    stompClient.subscribe('/topic/greetings/' + chatId, function (greeting) {
                        showGreeting(JSON.parse(greeting.body));
                    });
                    sendName("hi");
                });
            }

            function disconnect() {
                if (stompClient != null) {
                    stompClient.disconnect();
                }
                // setConnected(false);
                console.log("Disconnected");
            }

            function sendName(message) {
                var data = {
                    object: "page",
                    entry: [
                        {
                            id: "555",
                            time: 1458692752478,
                            messaging: [
                                {
                                    sender: {
                                        id: chatId
                                    },
                                    recipient: {
                                        id: "567"
                                    },
                                    message: {
                                        text: message
                                    }
                                }

                            ]
                        }
                    ]
                };

                stompClient.send("/app/hello", {}, JSON.stringify(data));
            }

            function showGreeting(message) {
                // console.log('message: ' + message);
                setResponse(message);
            }


            function chatInit() {

                // var data = {
                //     chatId: {
                //         id: chatId
                //     },
                //     button: {
                //         payload: "GET_STARTED"
                //     }
                // };

                $.ajax({
                    // type: "POST",
                    type: "GET",            //mocked up version, should be post with data: !!!
                    url: 'https://pavlenko.botscrew.com/ailira/web/getStarted',
                    // url: './data/response2.json',
                    // contentType: "application/json; charset=utf-8",
                    // dataType: "json",
                    // data: JSON.stringify(data),

                    success: function (id) {
                        // chatId = data.chatId.id;
                        // sessionStorage.setItem("toyotaCRchatID", chatId);
                        // setResponse(id);
                        chatId = id;
                        connect();

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
                        console.log(text);
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
                        sendName(text);
                        console.log(text);
                        // $.ajax({
                        //     // type: "POST",
                        //     type: "GET",            //mocked up version, should be post with data: !!!
                        //     // url: baseUrl + "query?v=20150910",
                        //     url: './data/response2.json',
                        //     contentType: "application/json; charset=utf-8",
                        //     dataType: "json",
                        //     // data: JSON.stringify(data),
                        //
                        //     success: function (data) {
                        //         setResponse(data);
                        //     },
                        //     error: function () {
                        //         console.log("Internal Server Error");
                        //     }
                        // });

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
                if ($el.length) {
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

            function setGenericWidth() {

                genericScrollValue = parseInt($('.chat-container').css('width'), 10);
                var genInfo = $('.generic-info');
                if (genInfo && !genInfo.parent().parent().parent().hasClass('list')) {
                    var scrContWidth = genInfo.parent().parent().css('width');
                    var scrCont = genInfo.parent().parent();
                    scrCont.find('.generic-info').each(function () {
                        $(this).css('width', scrContWidth);
                        var genImg = $(this).parent().find('.generic-img');

                        if (genImg) {
                            var genImgWidth = parseInt($(this).parent().find('.generic-img').find('.inner').css('width'), 10);
                            genImg.find('.inner').css('height', genImgWidth / 2);
                        }
                    });

                    scrCont.parent().find('.arrow').first().click(
                        function () {
                            var navwidth = scrCont.find('ul');
                            navwidth.scrollLeft(navwidth.scrollLeft() - parseInt(scrContWidth, 10));
                        }
                    );
                    scrCont.parent().find('.arrow').last().click(
                        function () {
                            var navwidth = scrCont.find('ul');
                            navwidth.scrollLeft(navwidth.scrollLeft() + parseInt(scrContWidth, 10));
                        }
                    );

                }
            }

            // $(window).unload(function () {
            //     disconnect();
            // });

            $(window)
                .on('scroll resize', function () {
                    getVisible($('.slide-1'));
                    setChatSize();
                })
                .on('resize', function () {
                    setGenericWidth();
                });

            $.fn.isolatedScroll = function () {
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

});
