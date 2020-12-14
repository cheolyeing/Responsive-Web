var memeplay = false;
var popup = false;
var popupStart = false;
var reaction = false;
var show_pop = [false, false, false, false, false];
var fitted = false;
var p2_p1_card = false;
var show_card = [false, false, false, false, false, false];
var friday = false;
var show_friday = [false, false, false, false, false, false];
var wait = [false, false];
var mypage = false;
var interlock = false;
var chatting = false;
var videoFinished = false;

detectDevice()

function loadingMotion() {
    var index = 0;
    setInterval(() => {

        for (var i = 1; i < 4; i++) {
            $('#loading_face' + i).css({
                opacity: 0.2,
            })
        }
        var target = index % 3 + 1;
        var loadingFace = document.getElementById('loading_face' + target).style;
        loadingFace.opacity = 1;
        index++;
        if (index > 20) return;
    }, 300)
}

function detectDevice() {
    var filter = "win16|win32|win64|mac|macintel";

    if (navigator.platform) {
        if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
            //mobile
            location.href = "mobile.html";
        } else {
            //pc
            document.onreadystatechange = () => {
                if (document.readyState === 'complete') {
                    console.log("READY")
                }
            };

            window.onload = function () {
                setTimeout(() => {
                    videoFinished = true
                    page1_init();
                }, 15000)
                console.log("ON LOAD")
                init();
            }
        }
    }
}

function setLoading() {
    const len = 64;

    $('loading_face1').css({
        width: getWidth(len, false),
        height: getWidth(len, false),
        left: getLeft(844, false),
        top: getTop(458, false),
    })

    $('loading_face2').css({
        width: getWidth(len, false),
        height: getWidth(len, false),
        left: getLeft(930, false),
        top: getTop(458, false),
    })

    $('loading_face3').css({
        width: getWidth(len, false),
        height: getWidth(len, false),
        right: getLeft(844, false),
        top: getTop(458, false),
    })

    $('loading_detail').css({
        width: getWidth(426, false),
        height: getWidth(94, false),
        left: getLeft(747, false),
        top: getTop(565, false),
    })
}

function loadingFinish() {
    $('#loading').css({
        display: 'none',
    })
}


function linkButton() {
    alert("CLICK")
    location.href = "www.naver.com";
}

function imageWait() {
    return new Promise(function (resolve, reject) {
        $('#page2_meme').css({
            backgroundImage: 'url(../src/p1_p2_meme.png)'
        })
        resolve();
    })
}

function chattingDetailAppear() {
    chatting = true;
    setTimeout(() => {
        $('#chatting_detail').css({
            display: 'block',
        })
    }, 500)
}

function interlockDetailAppear() {
    interlock = true;
    setTimeout(() => {
        $('#interlock_detail').css({
            display: 'block',
        })
    }, 500)
}

function mypageDetailAppear() {
    mypage = true;
    setTimeout(() => {
        $('#mypage_detail1').css({
            display: 'block',
        })
    }, 500)

    setTimeout(() => {
        $('#mypage_detail2').css({
            display: 'block',
        })
    }, 1000)
}

function fridayAppear() {
    friday = true;

    show_friday[0] = true;
    $('#middle1').css({
        display: 'block',
    })

    setTimeout(() => {
        show_friday[1] = true;
        $('#middle2').css({
            display: 'block',
        })
    }, 100)

    setTimeout(() => {
        show_friday[2] = true;
        $('#middle3').css({
            display: 'block',
        })
    }, 200)

    setTimeout(() => {
        show_friday[3] = true;
        $('#middle4').css({
            display: 'block',
        })
    }, 300)

    setTimeout(() => {
        show_friday[4] = true;
        $('#middle5').css({
            display: 'block',
        })
    }, 400)

    setTimeout(() => {
        show_friday[5] = true;
        $('#middle6').css({
            display: 'block',
        })
    }, 500)
}

function cardAppear() {
    //52134
    p2_p1_card = true;

    show_card[0] = true;
    $('#page1_card0').css({
        display: 'block',
    })

    setTimeout(() => {
        show_card[5] = true;
        $('#page1_card5').css({
            display: 'block'
        })
    }, 200)

    setTimeout(() => {
        show_card[2] = true;
        $('#page1_card2').css({
            display: 'block'
        })
    }, 400)

    setTimeout(() => {
        show_card[1] = true;
        $('#page1_card1').css({
            display: 'block'
        })
    }, 600)

    setTimeout(() => {
        show_card[3] = true;
        $('#page1_card3').css({
            display: 'block'
        })
    }, 800)

    setTimeout(() => {
        show_card[4] = true;
        $('#page1_card4').css({
            display: 'block'
        })
    }, 1000)
}

function tileFit() {
    fitted = true;
}

function popupButton() {
    $('html, body').animate({
        scrollTop: window.innerHeight * 22,
    });
    $('body').css({
        overflowY: 'hidden',
    })

    setTimeout(() => {
        $('body').css({
            overflowY: 'auto',
        })
    }, 2000);

    popupStart = true;
    show_pop[1] = true;
    $('#memeplay_detail2').css({
        display: 'block'
    })

    setTimeout(() => {
        show_pop[2] = true;
        $('#memeplay_detail3').css({
            display: 'block'
        })
    }, 500)

    setTimeout(() => {
        show_pop[3] = true;
        $('#memeplay_popup1').css({
            display: 'block'
        })
    }, 1000)

    setTimeout(() => {
        show_pop[4] = true;
        $('#memeplay_popup2').css({
            display: 'block'
        })
        popup = true;
    }, 1500)

}

function reactionButton() {
    $('#page2_image_box').css({
        display: 'none',
    })
    $('html, body').animate({
        scrollTop: window.innerHeight * 18.3,
    }, 1000);

    $('#page2_image_box').css({
        display: 'block',
    })
}

//새로고침 감지
if (window.performance.navigation.type == 1) {

    // $('html, body').animate({
    //     scrollTop: 0,
    // }, 400);
    // init();
    // $("#page2_meme").css({
    //     'display': 'none',
    // });

    // $("#page2_meme_sub").css({
    //     'display': 'none',
    // });
}

function importJQuery() {

    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = '../javascript/jquery.js';
        script.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(script);
        resolve();
    })
}

function init() {
    importJQuery().then(() => {
        loadingMotion();
        setLoading();
        setTimeout(loadingFinish, 5000);
        page1_init();
        page2_init();
        part2_init();

        setInterval(() => {
            interval();
            $('#main_video').css({
                width: getWidth(1920, false),
                height: getHeight(1080, false),
            })
        }, 100);
    })
}

function interval() {
    setSizeInit_PART1();
    setSizeInit_PART2();
    page2_effect();
    bottom_background_effect();
    part2_init();
}

function page1_init() {
    $('#part1_page1').css({
        'display': 'block'
    })

    page1_toNext();
}

function page1_toNext() {

    $('html, body').css({
        'overflow': 'hidden',
    });

    if (!videoFinished) return;
    document.getElementById('page2_people1').addEventListener('click', linkButton);
    document.addEventListener("click", click);

    function click() {
        $('html, body').css({
            'overflow': 'visible',
        });

        $('html, body').animate({
            scrollTop: window.innerHeight,
        }, 400);

        setTimeout(() => {
            $('body').css({
                overflowX: 'hidden',
                overflowY: 'auto',
            })
        }, 500);

        document.removeEventListener("click", click);

        page2_init();
    }
}

function page2_init() {
    page2_toNext();

}

function page2_toNext() {
    $('#part1_page1').css({})
}

function page2_effect() {

    const scrollY = getScrollY();
    console.log("scrollY", scrollY)


    meme_effect(scrollY);
    meme_sub_Effeect(scrollY);
    phone_effect(scrollY);
    MZ_generation_effect(scrollY);
    invite_effect(scrollY);
    mid_background_effect(scrollY);
    phone_focus_effect(scrollY);
}

function meme_effect(scrollY) {
    const START = 100;
    const RANGE = 20;
    const GOAL_SIZE = 36;

    const OPACITY = (scrollY - START) / RANGE;
    const SIZE = Math.max(0, Math.min(((scrollY - START) / RANGE) * GOAL_SIZE, GOAL_SIZE));

    const FINISH = 190;
    const F_RANGE = 10;

    const TOP = 7 - (scrollY - FINISH) + "%";
    const F_OPACITY = 1 - Math.min((scrollY - FINISH) / F_RANGE, 1)

    if (scrollY < START) {
        $("#page2_meme").css({
            "width": "0%",
            'display': 'none',
        });
    } else {
        if (scrollY >= FINISH) {
            $("#page2_meme").css({
                "width": GOAL_SIZE + "%",
                "background-image": "url('../src/p1_p2_meme.png')",
                'display': 'block',
                'top': TOP,
                'opacity': F_OPACITY,
            });
        } else if (SIZE == GOAL_SIZE) {
            $("#page2_meme").css({
                "width": GOAL_SIZE + "%",
                "background-image": "url('../src/p1_p2_meme.png')",
                'display': 'block',
                opacity: OPACITY,
                top: '7%',
            });
        } else {
            $("#page2_meme").css({
                "width": SIZE + "%",
                "background-image": "linear-gradient(to right, transparent, #f3f8ff), url('../src/p1_p2_meme.png')",
                'display': 'block',
                opacity: OPACITY,
                top: '7%',
            });
            $("#page2_meme_sub").css({
                "display": "none",
            });
        }
    }
}

function meme_sub_Effeect(scrollY) {

    const START = 120;
    const RANGE = 20;
    const GOAL_HEIGHT = 24;
    const GOAL_TOP = 63;

    const HEIGHT = Math.min(((scrollY - START) / RANGE) * ((scrollY - START) / RANGE) * GOAL_HEIGHT, GOAL_HEIGHT) + "%";
    const TOP = 92 - Math.min(((scrollY - START) / RANGE) * ((scrollY - START) / RANGE) * GOAL_TOP, GOAL_TOP) + "%";
    const OPACITY = (scrollY - START) / RANGE;

    const FINISH = 195;
    const F_RANGE = 10;

    const F_TOP = 26 - (scrollY - FINISH) + "%";
    const F_OPACITY = 1 - Math.min((scrollY - FINISH) / F_RANGE, 1)

    if (scrollY < START) {
        $("#page2_meme_sub").css({
            "display": "none",
        })
    } else {
        if (scrollY >= FINISH) {
            $("#page2_meme_sub").css({
                'top': F_TOP,
                'opacity': F_OPACITY,
            })
        } else if (scrollY >= START) {
            $("#page2_meme_sub").css({
                "display": "block",
                "height": HEIGHT,
                "top": TOP,
                opacity: OPACITY,
            })
        }
    }
}

function phone_effect(scrollY) {
    {
        const START = 140;
        const RANGE = 20;
        const GOAL_TOP = 35;

        const TOP = 68 - Math.min(((scrollY - START) / RANGE) * ((scrollY - START) / RANGE) * GOAL_TOP, GOAL_TOP) + "%";
        const OPACITY = (scrollY - START) / RANGE;

        const FINISH = 200;
        const F_RANGE = 10;

        const F_TOP = 26 - (scrollY - FINISH) + "%";
        const F_OPACITY = 1 - Math.min((scrollY - FINISH) / F_RANGE, 1)

        if (scrollY < START) {
            $("#page2_phone").css({
                "display": "none",
            })
        } else {
            if (scrollY >= FINISH) {
                $("#page2_phone").css({
                    'top': F_TOP,
                    'opacity': F_OPACITY,
                })
            } else if (scrollY >= START) {
                $("#page2_phone").css({
                    "display": "block",
                    "top": TOP,
                    opacity: OPACITY,
                })
            }
        }
    }

    {
        const ID = ["bomb",
            "cool",
            "finger",
            "gummybear",
            "magichat",
            "rainbow",
            "sad",
            "smile",
            "spring1",
            "spring2",
            "star",
            "wow",
            "heart"
        ]
        const START = 140;
        const RANGE = 20;
        // const START = [160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184];
        // const RANGE = 10;
        // const TOP = [-21.6, 27, 8, 8.4, 8.5, -26.2, 2.6, 47.8, 20.7, 7, 61, 51, -2.2, 6.6];

        for (var i = 0; i < 13; i++) {
            if (START <= scrollY) {
                $("#page2_" + ID[i]).css({
                    'display': 'block',
                })
                // var element = document.getElementById("page2_" + ID[i])
                // element.classList.add("bounce");
            } else {
                $("#page2_" + ID[i]).css({
                    'display': 'none',
                })
            }
        }
    }
}

function MZ_generation_effect(scrollY) {
    {
        const START = 180;
        const RANGE = 40;
        const TOP = 10;

        const FINISH = 1000;

        if (scrollY < START) {
            $('#page2_MZ_GENERATION_BOX').css({
                'display': 'none',
            })
        } else {
            if (scrollY >= FINISH) {
                $('#page2_MZ_GENERATION_BOX').css({
                    'display': 'none',
                })
            } else {
                $('#page2_MZ_GENERATION_BOX').css({
                    'display': 'block',
                })
            }
        }
    } {
        const START = 210;
        const RANGE = 40;
        const TOP = 50 - Math.min((scrollY - START), RANGE) + "%";
        const OPACITY = (scrollY - START) / RANGE;

        const FINISH = 320;
        const F_TOP = 10 - (scrollY - FINISH) + "%";
        const F_OPACITY = 1 - (scrollY - FINISH) / 10;

        if (scrollY < START) { // 아무일 없음
            $('#page2_question1').css({
                'display': 'none',
            })
        } else {
            if (scrollY >= FINISH) { // 사라짐
                $('#page2_question1').css({
                    'top': F_TOP,
                    'opacity': F_OPACITY,
                })
            } else { // 나타남
                $('#page2_question1').css({
                    'display': 'block',
                    'top': TOP,
                    'opacity': OPACITY,
                })
            }
        }
    } {
        const START = 325;
        const RANGE = 10;
        const TOP = 20 - Math.min((scrollY - START), RANGE) + "%";
        const OPACITY = (scrollY - START) / RANGE;

        const FINISH = 360;
        const F_TOP = 10 - (scrollY - FINISH) + "%";
        const F_OPACITY = 1 - (scrollY - FINISH) / 10;

        if (scrollY < START) { // 아무일 없음
            $('#page2_question2').css({
                'display': 'none',
            })
        } else {
            if (scrollY >= FINISH) { // 사라짐
                $('#page2_question2').css({
                    'top': F_TOP,
                    'opacity': F_OPACITY,
                })
            } else { // 나타남
                $('#page2_question2').css({
                    'display': 'block',
                    'top': TOP,
                    'opacity': OPACITY,
                })
            }
        }
    } {
        const START = [0, 250, 270, 290];
        const RANGE = 20;
        const FINISH = 370;
        const F_TOP = 10 - (scrollY - FINISH) + "%";
        const F_OPACITY = 1 - (scrollY - FINISH) / 10;

        for (var i = 1; i < 4; i++) {
            const TOP = 40 - Math.min((scrollY - START[i]), RANGE) + "%";
            const OPACITY = (scrollY - START[i]) / RANGE;

            if (scrollY < START[i]) {
                $('#page2_people' + i).css({
                    'display': 'none',
                })
            } else {
                if (scrollY >= FINISH) {
                    $('#page2_people' + i).css({
                        'top': F_TOP,
                        'opacity': F_OPACITY,
                    })
                } else {
                    $('#page2_people' + i).css({
                        'display': 'block',
                        'top': TOP,
                        'opacity': OPACITY,
                    })
                }
            }
        }
    }
}

function invite_effect(scrollY) {
    const START = 390;
    const RANGE = 40;
    const FINISH = 440;

    const F_OPACITY = 1 - (scrollY - FINISH) / RANGE;
    const OPACITY = (scrollY - START) / RANGE;

    if (scrollY < START) {
        $('#page2_INVITE_BOX').css({
            display: 'none',
        })
    } else {
        if (scrollY >= FINISH) {
            $('#page2_INVITE_BOX').css({
                opacity: F_OPACITY,
            })
        } else {
            $('#page2_INVITE_BOX').css({
                display: 'block',
                position: 'fixed',
                opacity: OPACITY,
            })
        }
    }
}

function phone_focus_effect(scrollY) {

}

function mid_background_effect(scrollY) {
    const DIRECTION = [0, 1, -1, 1, -1, 1];
    const RANGE = [80, 80, 80, 80, 80, 80];

    for (var i = 1; i < 6; i++) {
        var pos = DIRECTION[i] * ((scrollY % RANGE[i]) * 2 - RANGE[i]) / RANGE[i] * window.innerWidth + 'px';

        $('#page3_background' + i).css({
            backgroundPositionX: pos,
        })
    }
}

function bottom_background_effect() {
    const DIRECTION = [0, 1, -1, 1];
    const RANGE = [200, 800, 800, 800];

    for (var i = 1; i < 4; i++) {
        var pos = DIRECTION[i] * ((scrollY % RANGE[i]) * 2 - RANGE[i]) / RANGE[i] * window.innerWidth + 'px';

        $('#page3_bottom_background' + i).css({
            backgroundPositionX: pos,
        })
    }
    // var date = new Date();
    // var h = date.getHours();
    // var m = date.getMinutes();
    // var s = date.getSeconds();
    // var ms = date.getMilliseconds();

    // const SPEED_DIVIDER = 5;

    // var pos_to_right = ((ms + 1000 * (s + 60 * m + 3600 * h)) / SPEED_DIVIDER);
    // var pos_to_left = -((ms + 1000 * (s + 60 * m + 3600 * h)) / SPEED_DIVIDER);

    // $("#page3_bottom_background1").css({
    //     "background-position-x": pos_to_left + "px",
    // })

    // $("#page3_bottom_background2").css({
    //     "background-position-x": pos_to_right + "px",
    // })

    // $("#page3_bottom_background3").css({
    //     "background-position-x": pos_to_left + "px",
    // })
}

function getScrollY() {
    var winHeight = window.innerHeight;
    var scrollY = window.scrollY;
    return (scrollY / winHeight) * 100;
}

function setSizeInit_PART1() {

    { // for page2_meme
        const IMAGE_WIDTH = 690;
        const IMAGE_HEIGHT = 179;
        const WIDTH = window.innerWidth;

        $("#page2_meme").css({
            height: WIDTH * 0.36 * IMAGE_HEIGHT / IMAGE_WIDTH + "px",
        })

    }

    { // for page2_phone
        const IMAGE_WIDTH = 1104;
        const IMAGE_HEIGHT = 619;
        var width = document.getElementById("page2_phone").offsetWidth;

        $("#page2_phone").css({
            height: width * IMAGE_HEIGHT / IMAGE_WIDTH + "px",
        })
    }

    { // for page2_phone_icon
        const ID = ["bomb",
            "cool",
            "finger",
            "gummybear",
            "magichat",
            "rainbow",
            "sad",
            "smile",
            "spring1",
            "spring2",
            "star",
            "wow",
            "heart"
        ]
        const WIDTH = [169, 210, 226, 208, 356, 260, 127, 70, 249, 134, 66, 89, 37]
        const HEIGHT = [181, 161, 260, 283, 390, 150, 126, 68, 196, 167, 66, 88, 38]

        for (var i = 0; i < 13; i++) {
            var id = "page2_" + ID[i];
            var width = document.getElementById(id).offsetWidth;
            $("#" + id).css({
                height: width * HEIGHT[i] / WIDTH[i] + "px",
            })
        }
    }

    { // for page2_MZ_GENERATION_BOX
        const WIDTH = window.innerWidth;
        const HEIGHT = window.innerHeight;
        $("#page2_MZ_GENERATION_BOX").css({
            width: WIDTH + 'px',
            height: HEIGHT + 'px',
        })


        var width = document.getElementById("page2_question1").offsetWidth;

        { // question1
            const IMAGE_HEIGHT = 180;
            const IMAGE_WIDTH = 624;
            $('#page2_question1').css({
                height: width * IMAGE_HEIGHT / IMAGE_WIDTH + 'px',
            })
        }

        { // question2
            const IMAGE_WIDTH = 624;
            const IMAGE_HEIGHT = 180;
            $("#page2_question1").css({
                height: width * IMAGE_HEIGHT / IMAGE_WIDTH + "px",
            })
        }

        { // peoples
            const IMAGE_WIDTH = 561 * WIDTH / 1920;
            const IMAGE_HEIGHT = 558 * WIDTH / 1080;

            $('#page2_people1').css({
                width: IMAGE_WIDTH + 'px',
                height: IMAGE_HEIGHT,
                left: (WIDTH / 2 - 1.5 * IMAGE_WIDTH) * 2 / 3 + 75 + 'px',
            })

            $('#page2_people2').css({
                width: IMAGE_WIDTH + 'px',
                height: IMAGE_HEIGHT,
                left: (WIDTH - IMAGE_WIDTH) / 2 + 'px',
            })

            $('#page2_people3').css({
                width: IMAGE_WIDTH + 'px',
                height: IMAGE_HEIGHT,
                right: (WIDTH / 2 - 1.5 * IMAGE_WIDTH) * 2 / 3 + 75 + 'px',
            })
        }
    }

    { // for page2_INVITE_BOX
        const WIDTH = window.innerWidth;
        const HEIGHT = window.innerHeight;
        $('#page2_INVITE_BOX').css({
            width: WIDTH + 'px',
            height: HEIGHT + 'px',
        })

        const ID = ['bear1', 'bear2', 'bomb', 'book', 'cool', 'face', 'finger', 'hat1', 'hat2', 'heart1', 'heart2', 'star1', 'star2']
        const ICON_WIDTH = [83, 88, 87, 96, 94, 74, 71, 90, 102, 70, 62, 71, 67];
        const ICON_HEIGHT = [110, 99, 94, 94, 83, 75, 111, 109, 105, 64, 70, 71, 80];

        const LEFT = [1195, 494, 1516, 291, 1319, 652, 216, 1758, 1279, 80, 1858, 1645, 0];
        const BOTTOM = [867, 231, 460, 946, 1124, 1110, 515, 1201, 193, 1181, 343, 899, 315];

        for (var i = 0; i < 13; i++) {
            var id = "page2_invite_" + ID[i];

            var width = ICON_WIDTH[i] / 1920 * WIDTH;
            var height = width * ICON_HEIGHT[i] / ICON_WIDTH[i] + 'px';
            width = width + 'px';

            var left = LEFT[i] / 1920 * 100 + '%';
            var bottom = (BOTTOM[i] - 175) / 1080 * 100 + '%';

            $("#" + id).css({
                width: width,
                height: height,
                left: left,
                bottom: bottom,
            })
        }
    }

    { // for page3
        const WIDTH = window.innerWidth;
        const HEIGHT = window.innerHeight;

        { // title
            const IMAGE_WIDTH = 2235 / 3
            const IMAGE_HEIGHT = 978 / 3
            const TOP = 207;

            const width = IMAGE_WIDTH * WIDTH / 1920;
            const height = width * IMAGE_HEIGHT / IMAGE_WIDTH;

            const left = (WIDTH - width) / 2;
            const top = TOP * HEIGHT / 1080;

            $('#page3_title').css({
                width: width + 'px',
                height: height + 'px',
                left: left + 'px',
                top: top + 'px',
            })
        }

        // { // title_sub
        //     const IMAGE_WIDTH = 727
        //     const IMAGE_HEIGHT = 212
        //     const TOP = 283;

        //     const width = IMAGE_WIDTH * WIDTH / 1920;
        //     const height = width * IMAGE_HEIGHT / IMAGE_WIDTH;

        //     const left = (WIDTH - width) / 2;
        //     const top = TOP * HEIGHT / 1080;

        //     $('#page3_title_sub').css({
        //         width: width + 'px',
        //         height: height + 'px',
        //         left: left + 'px',
        //         top: top + 'px',
        //     })
        // }

        { // phone
            const IMAGE_WIDTH = 655
            const IMAGE_HEIGHT = 1352
            const TOP = 656;

            const width = IMAGE_WIDTH * WIDTH / 1920;
            const height = width * IMAGE_HEIGHT / IMAGE_WIDTH;

            const left = (WIDTH - width) / 2;
            const top = TOP * HEIGHT / 1080;

            $('#page3_phone').css({
                width: width + 'px',
                height: height + 'px',
                left: left + 'px',
                top: top + 'px',
            })
        }

        { // phone_video
            const IMAGE_WIDTH = 599;
            const IMAGE_HEIGHT = 2550 * 599 / 374;
            const TOP = 673;

            const width = IMAGE_WIDTH * WIDTH / 1920;
            const height = width * IMAGE_HEIGHT / IMAGE_WIDTH;

            const left = (WIDTH - width) / 2;
            const top = TOP * HEIGHT / 1080;

            $('#page3_phone_video').css({
                width: width + 'px',
                height: height + 'px',
                left: left + 'px',
                top: top + 'px',
            })

            $('#page3_gradient').css({
                width: width + 'px',
                height: height * 0.47 + 'px',
                left: left + 'px',
                top: top + height * 0.58 + 'px',
            })
        }

        {
            const IMAGE_WIDTH = [0, 1567, 2683, 2243, 1553, 1983];
            const IMAGE_HEIGHT = [0, 310, 310, 310, 297, 300];
            const TOP = [0, 1005, 1414, 2321, 3397, 4312];

            for (var i = 1; i < 6; i++) {
                const top = TOP[i] * HEIGHT / 1080;
                const url = 'url(\'../src/p1_p3_background' + i + '.png\')';
                $('#page3_background' + i).css({
                    height: IMAGE_HEIGHT[i] * HEIGHT / 1080 + 'px',
                    width: Math.max(IMAGE_WIDTH[i], 1920) * WIDTH / 1920 + 'px',
                    top: top + 'px',
                    backgroundImage: url,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionY: 'center',
                })
            }
        }

        {
            const IMAGE_WIDTH = [0, 912 / 3, 1032 / 3, 1116 / 3, 1041 / 3];
            const IMAGE_HEIGHT = [0, 504 / 3, 693 / 3, 702 / 3, 486 / 3];
            const TOP = [0, 1374, 1793, 2736, 3010];
            const LEFT = [0, 284, 1380, 223, 1380];

            const ARROW_SIZE = 21;
            const ARROW_LEFT = [0, 575, 1324, 575, 1324];
            const ARROW_TOP = [0, 1397, 1815, 2757, 3032];
            const APPEAR = [0, 610, 655, 750, 770];

            for (var i = 1; i < 5; i++) {
                const top = (TOP[i]) * HEIGHT / 1080;
                const left = LEFT[i] * WIDTH / 1920;
                const arrow_top = ARROW_TOP[i] * HEIGHT / 1080;
                const arrow_left = ARROW_LEFT[i] * WIDTH / 1920;
                const opacity = (getScrollY() - APPEAR[i]) / 30;

                $('#page3_detail' + i).css({
                    height: IMAGE_HEIGHT[i] * HEIGHT / 1080 + 'px',
                    width: IMAGE_WIDTH[i] * WIDTH / 1920 + 'px',
                    top: top + 'px',
                    left: left + 'px',
                    opacity: opacity,
                })

                // $('#page3_detail' + i + '_arrow').css({
                //     height: ARROW_SIZE * HEIGHT / 1080 + 'px',
                //     width: ARROW_SIZE * WIDTH / 1920 + 'px',
                //     top: arrow_top + 'px',
                //     left: arrow_left + 'px',
                // })
            }
        }

        {
            const IMAGE_WIDTH = 1920;
            const IMAGE_HEIGHT = 240;
            const TOP = [0, 5072, 5340, 5608];

            for (var i = 1; i < 4; i++) {
                const top = (TOP[i]) * HEIGHT / 1080;
                const url = 'url(\'../src/p1_p3_bottom_background' + i + '.png\''
                $('#page3_bottom_background' + i).css({
                    height: IMAGE_HEIGHT * HEIGHT / 1080 + 'px',
                    width: IMAGE_WIDTH * WIDTH / 1920 + 'px',
                    position: 'absolute',
                    top: top + 'px',
                    zIndex: 4,
                    backgroundImage: url,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'repeat-x',
                    backgroundPositionY: 'center',
                })
            }
        }
    }
}

function setSizeInit_PART2() {
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;

    const scrollY = getScrollY();

    const STANDARD_WIDTH = 1920;
    const STANDARD_HEIGHT = 1080;

    function getWidth(width) {
        return width * WIDTH / STANDARD_WIDTH;
    }

    function getHeight(height) {
        return height * HEIGHT / STANDARD_HEIGHT;
    }

    function getTop(top) {
        return top * HEIGHT / STANDARD_HEIGHT;
    }

    function getLeft(left) {
        return left * WIDTH / STANDARD_WIDTH;
    }

    function getPixel(num) {
        return num + 'px';
    }

    { // page1
        { // BOX
            const width = 1920;
            const height = 5000;
            $('#part2_page1').css({
                width: getWidth(width, false),
                height: getHeight(height, false),
            })
        }

        {
            const width = 1920;
            const height = 9000;
            $('#part2_page2').css({
                width: getWidth(width, false),
                height: getHeight(height, false),
                zIndex: 2,
            })
        }

        {
            const width = 1920;
            const height = 8700; // 8100
            $('#part2_page3').css({
                width: getWidth(width, false),
                height: getHeight(height, false)
            })
        }

        {
            const width = 1920;
            const height = 4300;
            $('#part2_page4').css({
                width: getWidth(width, false),
                height: getHeight(height, false)
            })
        }

        {
            const width = 1920;
            const height = 446;
            $('#footer').css({
                width: getWidth(width, false),
                height: getHeight(height, false)
            })
        }

        {
            const width = 1920;
            const height = 258;
            $('#footer_top').css({
                width: getWidth(width, false),
                height: getHeight(height, false)
            })
        }

        {
            const width = 1920;
            const height = 188;
            const top = 258;
            $('#footer_bot').css({
                width: getWidth(width, false),
                height: getHeight(height, false),
                top: getTop(top, false),
            })
        }
    }
}

function part2_init() {
    const scrollY = getScrollY();
    part2_page1_effect(scrollY);
    part2_page2_effect(scrollY);
    part2_page3_effect(scrollY);
    part2_page4_effect(scrollY);
    part2_page2_init(scrollY);
}

function part2_page1_effect(scrollY) {
    const START = 1070;
    const RANGE = 40;
    const GOAL_TOP = 22;
    const GOAL_LEFT = 49.8;

    const TOP = 44 - Math.min(((scrollY - START) / RANGE) * ((scrollY - START) / RANGE) * GOAL_TOP, GOAL_TOP);
    const OPACITY = (scrollY - START) / RANGE;

    const FINISH = 1120;

    const PHONE_WIDTH = 46.66;
    const PHONE_HEIGHT = 96.33;

    const PHONE_GOAL_WIDTH = 22.55;
    const PHONE_GOAL_HEIGHT = 82.77;

    const PHONE_GOAL_TOP = 11;
    const PHONE_GOAL_LEFT = 61.8;

    const phone_width = PHONE_WIDTH - Math.min(1, (scrollY - FINISH) / 100) * (PHONE_WIDTH - PHONE_GOAL_WIDTH);
    const phone_height = phone_width * window.innerWidth * 5552 / 2688 + 'px';
    const phone_top = GOAL_TOP - Math.max(0, Math.min(1, (scrollY - FINISH) / 100)) * (GOAL_TOP - PHONE_GOAL_TOP);
    const phone_left = GOAL_LEFT - Math.min(1, (scrollY - FINISH) / 100) * (GOAL_LEFT - PHONE_GOAL_LEFT);
    const left_gap = 35.5 - 22.5 * Math.min(1, (scrollY - FINISH) / 50);
    const left_video = 1920 * phone_left / 100 + left_gap;
    const width_gap = 71 - 48 * Math.min(1, (scrollY - FINISH) / 50);
    const width_video = 1920 * phone_width / 100 - width_gap;

    const top_gap = 29 - 13 * Math.min(1, (scrollY - FINISH) / 50);
    const height_video = width_video * 3074 / 1412 - top_gap * 2;
    const top_video = 1080 * phone_top / 100 + top_gap;

    const F_TOP = 22 - (scrollY - FINISH);
    // if (scrollY >= 1240) {
    //     $('#livequest_phone_video1').css({
    //         display: 'none',
    //     })
    //     $('#livequest_phone_video2').css({
    //         display: 'block',
    //     })
    // } else {
    //     $('#livequest_phone_video2').css({
    //         display: 'none',
    //     })
    //     $('#livequest_phone_video1').css({
    //         display: 'block',
    //     })
    // }
    if (scrollY < START) { // x < 1070
        $("#page1_livequest1").css({
            display: "none",
        })
        // $("#page1_title1").css({
        //     display: "none",
        // })
        $('#page1_phone').css({
            display: "none",
        })
        $('#livequest_phone_video').css({
            display: "none",
        })
    } else {
        if (scrollY >= FINISH) { // x > 1120
            $("#page1_livequest1").css({
                top: F_TOP + "%",
            })
            // $("#page1_title1").css({
            //     top: F_TOP + 4.8 + "%",
            // })

            $('#page1_phone').css({
                width: phone_width + '%',
                height: phone_height,
                top: phone_top + "%",
                left: phone_left + "%",
                position: 'fixed',
                backgroundImage: 'url(\'../src/p2_p1_phone.png\')',
                backgroundSize: 'contain',
                display: "block",
                opacity: 1,
                zIndex: show_card[5] && scrollY <= 1580 ? 1 : 0,
            })
            $('#livequest_phone_video').css({
                width: getWidth(width_video, false),
                height: getHeight(height_video, false),
                top: getTop(top_video, false),
                left: getLeft(left_video, false),
                position: 'fixed',
                backgroundSize: 'contain',
                display: "block",
                opacity: 1,
                zIndex: show_card[5] && scrollY <= 1580 ? 1 : 0,
            })
            $('#livequest_phone_video1').css({
                width: getWidth(width_video, false),
                height: getHeight(height_video, false),
                top: getTop(top_video, false),
                left: getLeft(left_video, false),
                position: 'fixed',
                backgroundSize: 'contain',
                display: 'block',
                opacity: scrollY >= 1240 ? 0 : 1,
            })
            $('#livequest_phone_video2').css({
                width: getWidth(width_video, false),
                height: getHeight(height_video, false),
                top: getTop(top_video, false),
                left: getLeft(left_video, false),
                position: 'fixed',
                backgroundSize: 'contain',
                display: 'block',
                opacity: scrollY >= 1240 ? 1 : 0,
            })

        } else if (scrollY >= START) { // 1070<x<1120
            $("#page1_livequest1").css({
                position: 'fixed',
                display: "block",
                top: TOP + "%",
                opacity: OPACITY,
            })

            // $("#page1_title1").css({
            //     position: 'fixed',
            //     display: "block",
            //     top: TOP + 4.8 + "%",
            //     opacity: OPACITY,
            // })

            $('#page1_phone').css({
                width: 46.66 + '%',
                height: 96.33 + '%',
                position: 'fixed',
                display: "block",
                backgroundSize: 'cover',
                left: getLeft(956, false),
                top: TOP + "%",
                opacity: OPACITY,
            })
            $('#livequest_phone_video').css({
                display: "block",
                width: getWidth(825, false),
                height: getHeight(1796, false),
                position: 'fixed',
                display: "block",
                backgroundSize: 'contain',
                left: getLeft(991.5, false),
                top: TOP + 2.68 + "%",
                opacity: OPACITY,
            })
            $('#livequest_phone_video1').css({
                position: 'fixed',
                width: getWidth(825, false),
                height: getHeight(1796, false),
                left: getLeft(991.5, false),
                top: TOP + 2.68 + "%",
                display: "block",
            })
            $('#livequest_phone_video2').css({
                position: 'fixed',
                width: getWidth(825, false),
                height: getHeight(1796, false),
                left: getLeft(991.5, false),
                top: TOP + 2.68 + "%",
                display: "none",
            })
        }
    }

    const STOP = 1240;

    if (scrollY < STOP) {
        const top = 1500;
        $('#page1_livequest2').css({
            position: 'absolute',
            width: 619 * window.innerWidth / 1920 + 'px',
            height: 311 * window.innerHeight / 1080 + 'px',
            top: top * window.innerHeight / 1080 + 'px',
        })

        const width = 631;
        const height = 237;

        // $('#page1_title2').css({
        //     position: 'absolute',
        //     width: width * window.innerWidth / 1920 + 'px',
        //     height: height * window.innerHeight / 1080 + 'px',
        //     top: (top + 52) * window.innerHeight / 1080 + 'px',
        // })
    } else {
        // $('#page1_title2').css({
        //     position: 'fixed',
        //     top: '15.55%',
        //     left: '6.5%',
        // })
        $('#page1_livequest2').css({
            position: 'fixed',
            top: '10.74%',
            left: '6.5%',
        })
    }

    const APPEAR = [1240, 1330, 1300, 1360, 1390, 1270]
    const DISAPPEAR = 1600;
    const width = [351, 345, 261, 280, 313, 351];
    const height = [94, 195, 187, 160, 198, 208];
    const left = [793, 43, 363, 550, 814, 1548];
    const top = [311, 637, 820, 623, 799, 530];
    const range = 30;

    for (var i = 0; i < 6; i++) {
        $('#page1_card' + i).css({
            display: scrollY < 1240 ? 'none' : show_card[i] ? 'block' : 'none',
            position: 'fixed',
            width: getWidth(width[i], true),
            height: getHeight(height[i], true),
            left: getLeft(left[i], true),
            top: getTop(top[i], true),
        })
        // const OPACITY = (scrollY - APPEAR[i]) / range;
        // if (scrollY < APPEAR[i]) {
        //     $('#page1_card' + i).css({
        //         display: 'none',
        //     })
        // } else {
        //     if (scrollY >= DISAPPEAR) {
        //         $('#page1_card' + i).css({
        //             display: 'block',
        //             position: 'fixed',
        //         })
        //     } else {
        //         $('#page1_card' + i).css({
        //             display: 'block',
        //             position: 'fixed',
        //             width: getWidth(width[i], true),
        //             height: getHeight(height[i], true),
        //             left: getLeft(left[i], true),
        //             top: getTop(top[i], true),
        //         })
        //     }
        // }
    }
}

function part2_page2_effect(scrollY) {
    { // REACTION
        const width = 1269; //193;
        const height = 163; //47;
        const left = 325.5;
        const top = 64;
        const OPACITY = 1 - Math.max((scrollY - 1576) / 20, 0);
        const gap = Math.min(Math.max(0, scrollY - 1576) * 10, 90);

        $('#reaction_title').css({
            width: getWidth(width, false),
            height: getHeight(height, false),
            left: getLeft(left, false),
            top: getTop(top + gap, false),
            opacity: OPACITY,
        })
    }

    { // 재밌는 밈에 리액션을 보내볼까요?
        const width = 1265;
        const height = 142;
        const left = 326;
        const top = 102;
        const OPACITY = 1 - Math.max((scrollY - 1576) / 20, 0);
        const gap = Math.min(Math.max(0, scrollY - 1576) * 10, 90);

        $('#reaction_subtitle').css({
            width: getWidth(width, false),
            height: getHeight(height, false),
            left: getLeft(left, false),
            top: getTop(top + gap, false),
            opacity: OPACITY,
            zIndex: 1,
        })
    }

    { // 핸드폰 목업
        const START = 1597;
        const FINISH = 1730;
        const width = 1920;
        const height = 894;
        const left = 0;
        const position = ['fixed', 'absolute'];
        const top = [93, 308, 1750];
        if (scrollY >= FINISH) {
            $('#reaction_phone').css({
                position: position[1],
                width: getWidth(width, false),
                height: getHeight(height, false),
                left: getLeft(left, false),
                top: getTop(top[2], false),
                zIndex: 2,
            })
        } else {
            $('#reaction_phone').css({
                position: scrollY >= START ? position[0] : position[1],
                width: getWidth(width, false),
                height: getHeight(height, false),
                left: getLeft(left, false),
                top: getTop(scrollY >= START ? top[0] : top[1], false),
                zIndex: 2,
            })
        }
        $('#reaction_phone_video').css({
            width: getWidth(width, false),
            height: getHeight(height, false),
            zIndex: 1,
        })
    }

    { // REACTION_SCROLL
        if (!reaction && scrollY >= 1740) {
            reaction = true;
            reactionButton();
        }
    }

    { // POPUP_SCROLL
        if (scrollY >= 2200 && !popup && !popupStart) {
            popupButton();
        }
    }

    { // TILE_SCROLL
        if (scrollY >= 2450 && !fitted) {
            tileFit();
        }
    }

    { // CARD_SCROLL
        if (scrollY >= 1240 && !p2_p1_card) {
            cardAppear();
        }
    }

    { // FRIDAY MIDDLE SCROLL
        if (scrollY >= 2650 && !friday) {
            fridayAppear();
        }
    }

    { // MYPAGE_SCROLL
        if (scrollY >= 2930 && !mypage) {
            mypageDetailAppear();
        }
    }

    { // INTERLOCK_SCROLL
        if (scrollY >= 3070 && !interlock) {
            interlockDetailAppear();
        }
    }

    { // CHATTING_SCROLL
        if (scrollY >= 2810 && !chatting) {
            chattingDetailAppear();
        }
    }

    { // REACTION_DETAIL
        const FINISH = 1730;
        const APPEAR = [0, 1610, 1640, 1700];
        const DISAPPEAR = 1670;
        const width = [0, 324, 288, 300];
        const height = [0, 133, 98, 150];
        const left = [0, 374, 1217, 1217];
        const top = [0, 782, 878, 836];
        const position = ['fixed', 'absolute'];
        const GAP = 1658;

        var opacity1 = (scrollY - APPEAR[1]) / 30;
        $('#reaction_detail1').css({
            display: scrollY >= APPEAR[1] ? 'block' : 'none',
            width: getWidth(width[1], false),
            height: getHeight(height[1], false),

            position: scrollY >= FINISH ? position[1] : position[0],
            left: getLeft(left[1], false),
            top: getTop(scrollY >= FINISH ? top[1] + GAP : top[1], false),
            opacity: opacity1,
            zIndex: 2,
        })

        var opacity2_1 = (scrollY - APPEAR[2]) / 30;
        var opacity2_2 = 1 - (scrollY - DISAPPEAR) / 30;

        $('#reaction_detail2').css({
            display: scrollY >= APPEAR[2] ? 'block' : 'none',
            width: getWidth(width[2], false),
            height: getHeight(height[2], false),

            position: 'fixed',
            left: getLeft(left[2], false),
            top: getTop(top[2], false),
            opacity: scrollY >= DISAPPEAR ? opacity2_2 : opacity2_1,
            zIndex: 2,
        })

        var opacity3 = (scrollY - APPEAR[3]) / 30;
        $('#reaction_detail3').css({
            display: scrollY >= APPEAR[3] ? 'block' : 'none',
            width: getWidth(width[3], false),
            height: getHeight(height[3], false),

            position: scrollY >= FINISH ? position[1] : position[0],
            left: getLeft(left[3], false),
            top: getTop(scrollY >= FINISH ? top[3] + GAP : top[3], false),
            opacity: opacity3,
            zIndex: 2,
        })
    }

    {
        $('#page2_image_box').css({
            top: getTop(2737, false),
        })

        $('#page2_moving_box').css({
            top: getTop(2737 + 1080, false),
        })
    }

    { // MOVING_BOX 핸드폰 목업
        const START = 1950;
        const FINISH = 2300;
        const width = 433;
        const height = 894;
        const left = 741;
        const position = ['fixed', 'absolute'];
        const top = 308;
        $('#moving_phone').css({
            position: 'absolute',
            width: getWidth(width, false),
            height: getHeight(height, false),
            left: getLeft(left, false),
            top: getTop(top, false),
            zIndex: 2,
        })

        $('#moving_phone_video_box').css({
            position: 'absolute',
            width: getWidth(width, false),
            height: getHeight(height, false),
            left: getLeft(left, false),
            top: getTop(top, false),
            zIndex: 1,
        })
    }

    { // MOVING_BOX MP4
        const width = 433 - 4;
        const height = 862;
        const left = 2;
        const top = 15;
        $('#moving_phone_video').css({
            position: 'absolute',
            width: getWidth(width, false),
            height: getHeight(height, false),
            left: getLeft(left, false),
            top: getTop(top, false),
        })
        $('#memeplay_phone_video').css({
            position: 'absolute',
            width: getWidth(width, false),
            height: getHeight(height + 8, false),
            left: getLeft(left, false),
            top: getTop(top, false),
            zIndex: 2,
        })
        $('#memeplay_phone_video2').css({
            position: 'absolute',
            width: getWidth(width, false),
            height: getHeight(height + 8, false),
            left: getLeft(left, false),
            top: getTop(top, false),
            zIndex: scrollY < 2200 ? 1 : 3,
        })
    }
    // 1576 -> 2071
    // 2071-1576 = 495

    { // MEMEPLAY
        const width = 1005; //220;
        const height = 163; //47;
        const left = 457.5; //861;
        const top = 1080 * 5;
        const OPACITY = 1 - Math.max((scrollY - 2071) / 20, 0);
        const gap = Math.min(Math.max(0, scrollY - 2071) * 10, 90);

        $('#memeplay_title').css({
            width: getWidth(width, false),
            height: getHeight(height, false),
            left: getLeft(left, false),
            top: getTop(top + gap, false),
            opacity: OPACITY,
        })
    }

    // { // 이제 직접 밈을 만들어봐요!
    //     const width = 1005;
    //     const height = 142;
    //     const left = 458;
    //     const top = 1080 * 5 + 38;
    //     const OPACITY = 1 - Math.max((scrollY - 2071) / 20, 0);
    //     const gap = Math.min(Math.max(0, scrollY - 2071) * 10, 90);

    //     $('#memeplay_subtitle').css({
    //         width: getWidth(width, false),
    //         height: getHeight(height, false),
    //         left: getLeft(left, false),
    //         top: getTop(top + gap, false),
    //         opacity: OPACITY,
    //         zIndex: 1,
    //     })
    // }

    { // MEMEPLAY 핸드폰 목업
        const START = 1597 + 495;
        const FINISH = 2300;
        const width = 433;
        const height = 894;
        const left = 741;
        const position = ['fixed', 'absolute'];
        const top = [93, 308 + 5336, 1750 + 5336 + 810];

        const memeLeft = 1016;
        const memeTop = 803;

        const tossLeft = 1095;
        const tossTop = 145;
        const OPACITY = scrollY >= FINISH ? 1 - (scrollY - FINISH) / 35 : 1;

        $('#memeplay_phone').css({
            position: scrollY >= START ? position[0] : position[1],
            width: getWidth(width, false),
            height: getHeight(height, false),
            left: getLeft(left, false),
            top: getTop(scrollY >= START ? top[0] : top[1], false),
            zIndex: 3,
            opacity: OPACITY,
        })
        $('#memeplay_phone_video_box').css({
            display: scrollY >= 2300 ? 'none' : 'block',
            position: scrollY >= START ? position[0] : position[1],
            width: getWidth(width, false),
            height: getHeight(height + 8, false),
            left: getLeft(left, false),
            top: getTop(scrollY >= START ? top[0] : top[1], false),
            zIndex: scrollY >= 2250 ? 1 : memeplay ? 1 : 2,
            opacity: OPACITY,
        })
        $('#memeplay_phone_inside').css({
            backgroundImage: 'url(\'../src/p2_p2_agree_phone_inside' + '.png\')',
            position: scrollY >= START ? position[0] : position[1],
            width: getWidth(width - 31, false),
            height: getHeight(height - 33, false),
            left: getLeft(left + 15.5, false),
            top: getTop(scrollY >= START ? top[0] + 19 : top[1] + 19, false),
            zIndex: scrollY >= 2250 ? 2 : memeplay ? 2 : 1,
            opacity: OPACITY,
        })
    }

    { // MEMEPLAY_DETAIL & POPUP
        const FINISH = 2150;
        const APPEAR = [0, 2100, 2200, 2200];
        const width = [0, 282, 270, 337, 405, 426];
        const height = [0, 90, 92, 196, 405, 461];
        const left = [0, 1219, 430, 1219, 198, 1292];
        const top = [0, 848, 148 + 73, 141 + 53, 301 + 73, 423 + 73];
        const position = ['fixed', 'absolute'];
        const GAP = 7000 + 810;
        const OPACITY = scrollY >= FINISH ? 1 - (scrollY - FINISH) / 35 : 1;

        var opacity1 = (scrollY - APPEAR[1]) / 30;
        var opacity23 = (scrollY - APPEAR[2]) / 30;
        // var opacity_popup = 1 - (scrollY - 2225) / 25;
        var opacity_popup = (scrollY - 2300) / 30;

        $('#memeplay_detail1').css({
            display: scrollY >= 2200 || memeplay ? 'none' : 'block',
            width: getWidth(width[1], false),
            height: getHeight(height[1], false),

            position: position[0],
            left: getLeft(left[1], false),
            top: getTop(top[1], false),
            opacity: scrollY >= FINISH ? OPACITY : opacity1,
        })

        $('#memeplay_detail2').css({
            display: scrollY < 2200 || scrollY >= 2250 ? 'none' : show_pop[1] ? 'block' : 'none',
            width: getWidth(width[2], false),
            height: getHeight(height[2], false),

            position: position[0],
            left: getLeft(left[2], false),
            top: getTop(top[2], false),

        })

        $('#memeplay_detail3').css({
            display: scrollY < 2200 || scrollY >= 2250 ? 'none' : show_pop[2] ? 'block' : 'none',
            width: getWidth(width[3], false),
            height: getHeight(height[3], false),

            position: position[0],
            left: getLeft(left[3], false),
            top: getTop(top[3], false),

        })

        $('#memeplay_popup1').css({
            display: scrollY < 2200 || scrollY >= 2250 ? 'none' : show_pop[3] ? 'block' : 'none',
            width: getWidth(width[4], false),
            height: getHeight(height[4], false),

            position: position[0],
            left: getLeft(left[4], false),
            top: getTop(top[4], false),

        })

        $('#memeplay_popup2').css({
            display: scrollY < 2200 || scrollY >= 2250 ? 'none' : show_pop[4] ? 'block' : 'none',
            width: getWidth(width[5], false),
            height: getHeight(height[5], false),

            position: position[0],
            left: getLeft(left[5], false),
            top: getTop(top[5], false),

        })
    }

    { // BOTTOM
        const START = 2300;
        const FINISH = 2450;
        const length = 470;
        const left = [230, 725, 1220];
        const top = [467, 305, 154];
        const gap = 7710;
        const small = 144;
        const smallLeft = 887;

        if (scrollY >= START) {
            var TOP = 203 + Math.min(1, (scrollY - START) / 150) * 102;
            var LEN = 144 + Math.min(1, (scrollY - START) / 150) * 326;
            var LEFT = (1920 - LEN) / 2;
            var DIST1 = Math.min(1, (scrollY - START) / 100) * 143;
            var DIST3 = Math.min(1, (scrollY - START) / 100) * 154;

            // $('#bottom1').css({
            //     display: 'block',
            //     position: 'fixed',
            //     width: getWidth(LEN, false),
            //     height: getHeight(LEN, false),
            //     left: getLeft(230, false),
            //     bottom: getTop(DIST1, false),
            // })

            $('#bottom2').css({
                display: 'block',
                position: scrollY >= 2450 ? 'absolute' : 'fixed',
                width: getWidth(LEN, false),
                height: getHeight(LEN, false),
                left: getLeft(LEFT, false),
                top: getTop(TOP, false),
                zIndex: 1,
            })

            // $('#bottom3').css({
            //     display: 'block',
            //     position: 'fixed',
            //     width: getWidth(LEN, false),
            //     height: getHeight(LEN, false),
            //     right: getLeft(230, false),
            //     top: getTop(DIST3, false),
            // })
        } else {
            $('#bottom1').css({
                display: 'none',
            })
            $('#bottom2').css({
                display: 'none',
            })
            $('#bottom3').css({
                display: 'none',
            })
        }

    }

    { // AGREE BOX
        const START = 2250;
        const FINISH = 2300;
        const ID = ["angry1", "smile", "coolgreen", "star1", "star2", "coolpink", "wow", "angry2"];
        const width = [50, 51, 68, 53, 49, 70, 54, 51];
        const height = [50, 50, 59, 50, 51, 63, 53, 51];
        const left = [152, 392, 94, 367, 1358, 1714, 1677, 1435];
        const top = [145, 347, 567, 903, 265, 177, 567, 846];
        const GAP = 8143 - 1080 + 810 - 100;

        {
            const width = 360;
            const height = 132;
            const left = 340;
            const top = 560;
            const OPACITY = 1 - (scrollY - FINISH) / 35;
            if (scrollY >= START) {
                $('#agree_detail').css({
                    display: 'block',
                    position: 'fixed',
                    width: getWidth(width, false),
                    height: getHeight(height, false),
                    left: getLeft(left, false),
                    top: getTop(top, false),
                    opacity: scrollY >= FINISH ? OPACITY : 1,
                })
            } else {
                $('#agree_detail').css({
                    display: 'none',
                })
            }
        }

        for (var i = 0; i < 8; i++) {

            var OPACITY1 = (scrollY - START) / 35;
            var OPACITY2 = 1 - (scrollY - FINISH) / 35;
            $('#agree_' + ID[i]).css({
                position: 'fixed',
                backgroundImage: 'url(\'../src/p2_p2_agree_' + ID[i] + '.png\')',
                width: getWidth(width[i], false),
                height: getHeight(height[i], false),
                left: getLeft(left[i], false),
                top: getTop(top[i], false),
                opacity: scrollY >= FINISH ? OPACITY2 : OPACITY1,
            })
        }
    }
}

function part2_page3_effect(scrollY) {
    { // TILE BOX

        const WIDTH = window.innerWidth;
        const HEIGHT = window.innerHeight;
        const length = Math.min(470 * WIDTH / 1920, 470 * HEIGHT / 1080);
        const GAP = 15;
        const TOP_GAP = 235.5;
        const LEFT = WIDTH / 2 - length * 1.5 - GAP;
        const CENTER = WIDTH / 2 - length / 2;
        const RIGHT = WIDTH / 2 + length / 2 + GAP;
        const TOP = TOP_GAP;
        const MID = TOP_GAP + length + GAP;
        const BOTTOM = TOP_GAP + 2 * length + 2 * GAP;
        const left = [0, LEFT, CENTER, RIGHT, LEFT, CENTER, RIGHT, LEFT, CENTER, RIGHT];
        const top = [0, TOP, TOP, TOP, MID, MID, MID, BOTTOM, BOTTOM, BOTTOM];

        $('#p2_p3_friday5').css({
            display: scrollY >= 2450 ? 'block' : 'none',
            backgroundImage: 'url(\'../src/p2_p3_friday' + 5 + '.png\')',
            width: length + 'px',
            height: length + 'px',
            left: left[5] + 'px',
            top: top[5] + 'px',
        })
        for (var i = 1; i < 10; i++) {
            if (i == 5) continue;
            $('#p2_p3_friday' + i).css({
                display: fitted ? 'block' : 'none',
                backgroundImage: 'url(\'../src/p2_p3_friday' + i + '.png\')',
                width: length + 'px',
                height: length + 'px',
                left: left[i] + 'px',
                top: top[i] + 'px',
            })
        }
    }

    { // SEARCHING BOX
        const ID = ["title", "detail", "bar", "result"];
        const width = [821 /*335*/ , 800, 1185, 1090];
        const height = [294 /*47*/ , 237, 157, 318];
        const left = [549.5 /*794*/ , 561, 367, 415];
        const top = [51, 101, 382, 594];
        const gap = 1963;

        $('#searching_video').css({
            width: getWidth(width[2], false),
            height: getHeight(height[2], false),
            left: getLeft(left[2], false),
            top: getTop(top[2] + gap, false),
        })

        for (var i = 0; i < 4; i++) {
            if (i == 1) continue;
            $('#searching_' + ID[i]).css({
                backgroundImage: i != 2 ? 'url(\'../src/p2_p3_searching_' + ID[i] + '.png\')' : 'none',
                width: getWidth(width[i], false),
                height: getHeight(height[i], false),
                left: getLeft(left[i], false),
                top: getTop(top[i] + gap, false),
            })
        }
    }

    const AFTER_MIDDLE_GAP = 210;

    { // MIDDLE BOX
        const ID = ['1', '2', '3', '4', '5', '6'];
        const width = 270;
        const height = 271.8;
        const left = [103 + 15, 392 + 10, 681 + 5, 970 - 5, 1259 - 10, 1548 - 15];
        const top = [614.7, 563, 614.7, 667, 605, 563];
        const gap = 2993;

        for (var i = 0; i < 6; i++) {
            $('#middle' + ID[i]).css({
                position: 'absolute',
                backgroundImage: 'url(\'../src/p2_p3_middle' + ID[i] + '.png\')',
                width: getWidth(width, false),
                height: getHeight(height, false),
                left: getLeft(left[i], false),
                top: getTop(top[i] - AFTER_MIDDLE_GAP + gap, false),
            })
        }
    }

    { // CHATTING BOX
        const gap = 4429;

        { // title
            const whlt = [511, 291, 126, 117];
            $('#chatting_title').css({
                width: getWidth(whlt[0], false),
                height: getWidth(whlt[1], false),
                left: getWidth(whlt[2], false),
                top: getWidth(whlt[3] - AFTER_MIDDLE_GAP + gap, false),
            })
        }
        // { // sub
        //     const whlt = [511, 237, 120, 171];
        //     $('#chatting_sub').css({
        //         width: getWidth(whlt[0], false),
        //         height: getWidth(whlt[1], false),
        //         left: getWidth(whlt[2], false),
        //         top: getWidth(whlt[3] + gap, false),
        //     })
        // }
        { // phone1
            const whlt = [433, 894, 902, 120];
            $('#chatting_phone1').css({
                width: getWidth(whlt[0], false),
                height: getWidth(whlt[1], false),
                left: getWidth(whlt[2], false),
                top: getWidth(whlt[3] - AFTER_MIDDLE_GAP + gap, false),
            })
        } { // phone2
            const whlt = [433, 894, 1364, 120];
            $('#chatting_phone2').css({
                width: getWidth(whlt[0], false),
                height: getWidth(whlt[1], false),
                left: getWidth(whlt[2], false),
                top: getWidth(whlt[3] - AFTER_MIDDLE_GAP + gap, false),
            })
        } { // detail
            const whlt = [384, 100, 475, 786];
            $('#chatting_detail').css({
                width: getWidth(whlt[0], false),
                height: getWidth(whlt[1], false),
                left: getWidth(whlt[2], false),
                top: getWidth(whlt[3] - AFTER_MIDDLE_GAP + gap, false),
            })
        } { // phone_inside1
            const whlt = [397.6, 861, 920, 136];
            $('#chatting_phone_inside1').css({
                width: getWidth(whlt[0], false),
                height: getWidth(whlt[1], false),
                left: getWidth(whlt[2], false),
                top: getWidth(whlt[3] - AFTER_MIDDLE_GAP + gap, false),
            })
        } { // phone_inside2
            const whlt = [398.9, 860.8, 1382, 136];
            $('#chatting_phone_inside2').css({
                width: getWidth(whlt[0], false),
                height: getWidth(whlt[1], false),
                left: getWidth(whlt[2], false),
                top: getWidth(whlt[3] - AFTER_MIDDLE_GAP + gap, false),
            })
        }
    }

    { // MYPAGE_BOX
        const gap = 5509;

        { // title
            const whlt = [698, 289, 611, 288];
            $('#mypage_title').css({
                width: getWidth(whlt[0], false),
                height: getWidth(whlt[1], false),
                left: getWidth(whlt[2], false),
                top: getWidth(whlt[3] - AFTER_MIDDLE_GAP + gap, false),
            })
        }
        // { // sub
        //     const whlt = [698, 237, 611, 340];
        //     $('#mypage_sub').css({
        //         width: getWidth(whlt[0], false),
        //         height: getWidth(whlt[1], false),
        //         left: getWidth(whlt[2], false),
        //         top: getWidth(whlt[3] + gap, false),
        //     })
        // } 
        { // phone
            const whlt = [433, 894, 743, 642];
            $('#mypage_phone').css({
                width: getWidth(whlt[0], false),
                height: getWidth(whlt[1], false),
                left: getWidth(whlt[2], false),
                top: getWidth(whlt[3] - AFTER_MIDDLE_GAP + gap, false),
            })
        } { // phone_inside
            const whlt = [397, 866, 759, 656];
            $('#mypage_phone_video').css({
                width: getWidth(whlt[0], false),
                height: getWidth(whlt[1], false),
                left: getWidth(whlt[2], false),
                top: getWidth(whlt[3] - AFTER_MIDDLE_GAP + gap, false),
            })
        } { // detail1
            const whlt = [331, 100, 369, 976];
            $('#mypage_detail1').css({
                width: getWidth(whlt[0], false),
                height: getWidth(whlt[1], false),
                left: getWidth(whlt[2], false),
                top: getWidth(whlt[3] - AFTER_MIDDLE_GAP + gap, false),
            })
        } { // detail2
            const whlt = [351, 82, 1219, 781];
            $('#mypage_detail2').css({
                width: getWidth(whlt[0], false),
                height: getWidth(whlt[1], false),
                left: getWidth(whlt[2], false),
                top: getWidth(whlt[3] - AFTER_MIDDLE_GAP + gap, false),
            })
        }
    }

    { // INTERLOCK BOX
        const gap = 7224;

        { // title
            const whlt = [789, 287, 120, 253];
            $('#interlock_title').css({
                width: getWidth(whlt[0], false),
                height: getWidth(whlt[1], false),
                right: getWidth(whlt[2], false),
                top: getWidth(whlt[3] + gap - AFTER_MIDDLE_GAP, false),
            })
        } { // sub
            const whlt = [782, 237, 1018, 303];
            $('#interlock_sub').css({
                width: getWidth(whlt[0], false),
                height: getWidth(whlt[1], false),
                left: getWidth(whlt[2], false),
                top: getWidth(whlt[3] + gap - AFTER_MIDDLE_GAP, false),
            })
        } { // phone
            const whlt = [433, 894, 211, 93];
            $('#interlock_phone').css({
                width: getWidth(whlt[0], false),
                height: getWidth(whlt[1], false),
                left: getWidth(whlt[2], false),
                top: getWidth(whlt[3] + gap - AFTER_MIDDLE_GAP, false),
                zIndex: 2,
            })
        } { // phone inside
            const whlt = [396, 858, 229, 108];
            $('#interlock_phone_video').css({
                width: getWidth(whlt[0], false),
                height: getWidth(whlt[1], false),
                left: getWidth(whlt[2], false),
                top: getWidth(whlt[3] + gap - AFTER_MIDDLE_GAP, false),
            })
        } { // detail
            const whlt = [412, 87, 687, 811];
            $('#interlock_detail').css({
                width: getWidth(whlt[0], false),
                height: getWidth(whlt[1], false),
                left: getWidth(whlt[2], false),
                top: getWidth(whlt[3] + gap - AFTER_MIDDLE_GAP, false),
            })
        }
    }
}

function part2_page4_effect(scrollY) {
    const from = 595;

    { // PAGE4_DETAIL & PART4_LOGO
        const width = [1037, 518];
        const height = [416, 199];
        const left = [442, 701];
        const top = [332, 440];
        const START = [2595 + from, 2695 + from];
        const FINISH = [2645 + from, 2745 + from];
        const RANGE = 30;
        const OPACITY = [scrollY < START[0] ? 0 : scrollY < FINISH[0] ? (scrollY - START[0]) / RANGE : 1 - (scrollY - FINISH[0]) / RANGE, scrollY < START[1] ? 0 : scrollY < FINISH[1] ? (scrollY - START[1]) / RANGE : 1];
        const ID = ['detail', 'logo'];


        if (scrollY >= FINISH[1]) {
            $('#p2_p4_logo').css({
                position: 'absolute',
                top: getTop(1750, false),
            })
        } else {
            for (var i = 0; i < 2; i++) {
                $('#p2_p4_' + ID[i]).css({
                    position: 'fixed',
                    width: getWidth(width[i], false),
                    height: getHeight(height[i], false),
                    left: getLeft(left[i], false),
                    top: getTop(top[i], false),
                    opacity: OPACITY[i],
                })
            }
        }
    }

    { // PAGE4_ 3 PEOPLE
        const GAP = 2765;
        const ID = ['LJY', 'BJH', 'CMH'];
        const width = [521, 566, 566];
        const height = [486, 524, 524];
        const left = [190, 628, 1225];
        const top = [489, 72, 396];
        const APPEAR = [2851 + from, 2901 - 50 + from, 2951 - 100 + from];
        const RANGE = 40;

        for (var i = 0; i < 3; i++) {
            const OPACITY = (scrollY - APPEAR[i]) / RANGE;
            if (scrollY >= 3500) {
                $('#' + ID[i]).css({
                    position: 'absolute',
                    top: getTop(top[i] - 220 + 2765 + 583.2, false),
                })
            } else {
                $('#' + ID[i]).css({
                    position: 'fixed',
                    width: getWidth(width[i], false),
                    height: getHeight(height[i], false),
                    left: getLeft(left[i], false),
                    top: getTop(top[i], false),
                    zIndex: 2,
                    opacity: OPACITY,
                })
            }
        }
    }

    { // PAGE4 IMAGES
        const START = 2851 + from;
        const GAP = 2765;
        const ID = ['star', 'sad', 'wow', 'smile', 'greencool', 'pinkcool', 'thankyou'];
        const width = [53, 51, 54, 51, 68, 70, 896];
        const height = [50, 51, 53, 50, 53.2, 63, 425];
        const left = [420, 107, 1069, 1541, 1276, 1747, 711];
        const top = [156, 418, 827, 946, 76, 287, 327];
        const foot_gap = 583.2;

        for (var i = 0; i < 7; i++) {
            if (scrollY >= 3500) {
                $('#p2_p4_' + ID[i]).css({
                    position: 'absolute',
                    top: getTop(top[i] + GAP + foot_gap - 220, false),
                })
            } else if (scrollY >= START + 28) {
                $('#p2_p4_' + ID[i]).css({
                    position: 'fixed',
                    top: getTop(top[i], false),
                })
            } else {
                $('#p2_p4_' + ID[i]).css({
                    position: 'absolute',
                    width: getWidth(width[i], false),
                    height: getHeight(height[i], false),
                    left: getLeft(left[i], false),
                    top: getTop(top[i] + GAP, false),
                    backgroundImage: 'url(\'../src/p2_p4_' + ID[i] + '.png\')',
                })
            }
        }
    }
}

function part2_page2_init(scrollY) {

    $('#page2_image_box').css({
        width: getWidth(1920, false),
        height: getHeight(1080, false),
    })

    $('#page2_moving_box').css({
        width: getWidth(1920, false),
        height: getHeight(1080, false),
    })

    const ID = ['reaction', 'finger', 'spring', 'star1', 'star2', 'bomb', 'rainbow', 'cool', 'smile', 'sad', 'wow', 'star3', 'gummybear', ];
    const WIDTH = [975, 423, 146, 46, 100, 121, 336, 108, 173, 68, 184, 77, 226];
    const HEIGHT = [156, 643, 159, 45, 98, 197, 180, 82, 174, 68, 180, 81, 246];
    const LEFT = [472, 743, 433, 632, 616, 680, 1035, 1277, 1378, 474, 618, 1089, 1183];
    const TOP = [447, 208, 340, 351, 404, 224, 266, 204, 321, 592, 612, 575, 573];
    const ZINDEX = [3, 2, 2, 1, 1, 1, 2, 2, 2, 2, 4, 4];

    const MOVING_START = 1830;
    const MOVING_FINISH = 1950;
    const MOVING_WIDTH = [0, 0, 83, 66, 66, 78, 92, 88, 59, 66, 64, 0, 89];
    const MOVING_HEIGHT = [0, 0, 90, 62, 69, 66, 74, 69, 59, 65, 63, 0, 96];
    const MOVING_LEFT = [0, 0, 192, 589, 1666, 362, 1404, 1273, 1732, 148, 485, 0, 1359];
    const MOVING_TOP = [0, 0, 333, 462, 709, 128, 488, 167, 300, 664, 794, 0, 833];

    for (var i = 0; i < 13; i++) {
        if (scrollY >= MOVING_FINISH && movingIcon(i)) {
            $('#image_' + ID[i]).css({
                position: 'absolute',
                width: getWidth(MOVING_WIDTH[i], false),
                height: getWidth(MOVING_HEIGHT[i], false),
                left: getWidth(MOVING_LEFT[i], false),
                top: getWidth(MOVING_TOP[i] + 1.20 * 1080, false),
            })
        } else {
            $('#image_' + ID[i]).css({
                position: movingIcon(i) ? 'fixed' : 'absolute',
                backgroundImage: 'url(\'../src/p2_p2_images_' + ID[i] + '.png\')',
                width: getWidth(movingIcon(i) ? movingValue(WIDTH[i], MOVING_WIDTH[i]) : WIDTH[i], false),
                height: getHeight(movingIcon(i) ? movingValue(HEIGHT[i], MOVING_HEIGHT[i]) : HEIGHT[i], false),
                left: getLeft(movingIcon(i) ? movingValue(LEFT[i], MOVING_LEFT[i]) : LEFT[i], false),
                top: getTop(movingIcon(i) ? movingValue(TOP[i], MOVING_TOP[i]) : TOP[i], false),
                zIndex: ZINDEX[i],
                opacity: movingIcon(i) ? 1 - Math.min((scrollY - MOVING_START) / 100, 0.6) : 1,
            })
        }
    }

    function movingValue(a, b) {
        return a + (b - a) * Math.min(scrollY - MOVING_START, 120) / 120;
    }

    function movingIcon(n) {
        return scrollY >= MOVING_START && n != 0 && n != 1 && n != 11;
    }
}

function getWidth(width, percent) {
    if (percent) {
        return width * 100 / 1920 + '%';
    } else {
        return width * window.innerWidth / 1920 + 'px';
    }
}

function getHeight(height, percent) {
    if (percent) {
        return height * 100 / 1080 + '%';
    } else {
        return height * window.innerHeight / 1080 + 'px';
    }
}

function getLeft(left, percent) {
    if (percent) {
        return left * 100 / 1920 + '%';
    } else {
        return left * window.innerWidth / 1920 + 'px';
    }
}

function getTop(top, percent) {
    if (percent) {
        return top * 100 / 1080 + '%';
    } else {
        return top * window.innerHeight / 1080 + 'px';
    }
}