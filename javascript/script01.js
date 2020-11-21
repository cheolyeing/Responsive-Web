init();

//새로고침 감지
if (window.performance.navigation.type == 1) {

    $('html, body').animate({
        scrollTop: 0,
    }, 400);
    init();
    $("#page2_meme").css({
        'display': 'none',
    });

    $("#page2_meme_sub").css({
        'display': 'none',
    });
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
        page1_init();
        setInterval(() => {
            interval();
        }, 100);
    })
}

function interval() {
    setSizeInit_PART1();
    setSizeInit_PART2();
    page2_effect();
    bottom_background_effect();
    phone_zoom_effect(getScrollY());
}

function page1_init() {
    $('#part1_page1').css({
        'display': 'block'
    })
    page1_following();
    page1_toNext();
}

function page1_effect() {
    page1_following();
    page1_toNext();
}

function page1_following() {
    document.addEventListener("mousemove", function (e) {
        var x = e.clientX
        var y = e.clientY
        $("#following").css({
            "left": x + "px",
            "top": y + "px",
        })
    })
}

function page1_toNext() {
    $('html, body').css({
        'overflow': 'hidden',
    });

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

        const TOP = 75 - Math.min(((scrollY - START) / RANGE) * ((scrollY - START) / RANGE) * GOAL_TOP, GOAL_TOP) + "%";
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
        console.log(i, pos)
        $('#page3_background' + i).css({
            backgroundPositionX: pos,
        })
    }
}

function bottom_background_effect() {
    const DIRECTION = [0, 1, -1, 1];
    const RANGE = [400, 400, 400, 400];

    for (var i = 1; i < 4; i++) {
        var pos = DIRECTION[i] * ((scrollY % RANGE[i]) * 2 - RANGE[i]) / RANGE[i] * window.innerWidth + 'px';
        console.log(i, pos)
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

function phone_zoom_effect(scrollY) {

    var MAX_SIZE = 896;
    var MIN_SIZE = 433;

    $('#page1_phone').css({

    })
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
                left: (WIDTH / 2 - 1.5 * IMAGE_WIDTH) * 2 / 3 + 'px',
            })

            $('#page2_people2').css({
                width: IMAGE_WIDTH + 'px',
                height: IMAGE_HEIGHT,
                left: (WIDTH - IMAGE_WIDTH) / 2 + 'px',
            })

            $('#page2_people3').css({
                width: IMAGE_WIDTH + 'px',
                height: IMAGE_HEIGHT,
                right: (WIDTH / 2 - 1.5 * IMAGE_WIDTH) * 2 / 3 + 'px',
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
            const IMAGE_WIDTH = 202
            const IMAGE_HEIGHT = 28
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

        { // title_sub
            const IMAGE_WIDTH = 727
            const IMAGE_HEIGHT = 212
            const TOP = 283;

            const width = IMAGE_WIDTH * WIDTH / 1920;
            const height = width * IMAGE_HEIGHT / IMAGE_WIDTH;

            const left = (WIDTH - width) / 2;
            const top = TOP * HEIGHT / 1080;

            $('#page3_title_sub').css({
                width: width + 'px',
                height: height + 'px',
                left: left + 'px',
                top: top + 'px',
            })
        }

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
            const IMAGE_WIDTH = [0, 256, 298, 317, 298];
            const IMAGE_HEIGHT = [0, 195, 260, 260, 195];
            const TOP = [0, 1374, 1793, 2736, 3010];
            const LEFT = [0, 284, 1380, 223, 1380];

            const ARROW_SIZE = 21;
            const ARROW_LEFT = [0, 575, 1324, 575, 1324];
            const ARROW_TOP = [0, 1397, 1815, 2757, 3032];

            for (var i = 1; i < 5; i++) {
                const top = TOP[i] * HEIGHT / 1080;
                const left = LEFT[i] * WIDTH / 1920;
                const arrow_top = ARROW_TOP[i] * HEIGHT / 1080;
                const arrow_left = ARROW_LEFT[i] * WIDTH / 1920;

                $('#page3_detail' + i).css({
                    height: IMAGE_HEIGHT[i] * HEIGHT / 1080 + 'px',
                    width: IMAGE_WIDTH[i] * WIDTH / 1920 + 'px',
                    top: top + 'px',
                    left: left + 'px',
                })

                $('#page3_detail' + i + '_arrow').css({
                    height: ARROW_SIZE * HEIGHT / 1080 + 'px',
                    width: ARROW_SIZE * WIDTH / 1920 + 'px',
                    top: arrow_top + 'px',
                    left: arrow_left + 'px',
                })
            }
        }

        {
            const IMAGE_WIDTH = 1920;
            const IMAGE_HEIGHT = 240;
            const TOP = [0, 5072, 5340, 5608];

            for (var i = 1; i < 4; i++) {
                const top = (TOP[i] - (TOP[1] - 4824)) * HEIGHT / 1080;
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
            const height = 2628;
            $('#part2_page1').css({
                width: getPixel(getWidth(width)),
                height: getPixel(getHeight(height)),
            })
        }

        { // red line
            const width = 156;
            const height = 1080;
            const top = [0, 0, 1308];

            for (var i = 1; i < 3; i++) {
                $('#page1_redline' + i).css({
                    width: getPixel(getWidth(width)),
                    height: getPixel(getHeight(height)),
                    top: getPixel(getTop(top[i])),
                })
            }
        }

        {
            const width = 221;
            const height = 47;
            const top = [0, 239, 1424];
            const left = 125;

            for (var i = 1; i < 3; i++) {
                $('#page1_livequest' + i).css({
                    width: getPixel(getWidth(width)),
                    height: getPixel(getHeight(height)),
                    top: getPixel(getTop(top[i])),
                    left: getPixel(getLeft(left)),
                })
            }
        }

        {
            const width = 631;
            const height = 237;
            const top = [0, 291, 1476];
            const left = 120;

            for (var i = 1; i < 3; i++) {
                $('#page1_title' + i).css({
                    backgroundImage: 'url(\'../src/p2_p1_title' + i + '.png\')',
                    width: getPixel(getWidth(width)),
                    height: getPixel(getHeight(height)),
                    top: getPixel(getTop(top[i])),
                    left: getPixel(getLeft(left)),
                })
            }
        }
    }
}