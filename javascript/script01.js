init();

window.onload = function () {
    document.getElementById('reaction_button').addEventListener('click', reactionButton);
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
        page2_init();
        part2_init();

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
    part2_init();
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
            const height = 8000;
            $('#part2_page2').css({
                width: getWidth(width, false),
                height: getHeight(height, false),
            })
        }

        {
            const width = 1920;
            const height = 3000;
            $('#part2_page3').css({
                width: getWidth(width, false),
                height: getHeight(height, false)
            })
        }

        {
            const width = 1920;
            const height = 5355;
            $('#part2_page4').css({
                width: getWidth(width, false),
                height: getHeight(height, false)
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
    const phone_top = GOAL_TOP - Math.min(1, (scrollY - FINISH) / 100) * (GOAL_TOP - PHONE_GOAL_TOP);
    const phone_left = GOAL_LEFT - Math.min(1, (scrollY - FINISH) / 100) * (GOAL_LEFT - PHONE_GOAL_LEFT);

    const F_TOP = 22 - (scrollY - FINISH);
    if (scrollY < START) {
        $("#page1_livequest1").css({
            display: "none",
        })
        $("#page1_title1").css({
            display: "none",
        })
        $('#page1_phone').css({
            display: "none",
        })
    } else {
        if (scrollY >= FINISH) {
            $("#page1_livequest1").css({
                top: F_TOP + "%",
            })
            $("#page1_title1").css({
                top: F_TOP + 4.8 + "%",
            })

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
            })

        } else if (scrollY >= START) {
            $("#page1_livequest1").css({
                position: 'fixed',
                display: "block",
                top: TOP + "%",
                opacity: OPACITY,
            })

            $("#page1_title1").css({
                position: 'fixed',
                display: "block",
                top: TOP + 4.8 + "%",
                opacity: OPACITY,
            })

            $('#page1_phone').css({
                width: 46.66 + '%',
                height: 96.33 + '%',
                position: 'fixed',
                display: "block",
                backgroundSize: 'cover',
                top: TOP + "%",
                opacity: OPACITY,
            })
        }
    }

    const STOP = 1240;

    if (scrollY < STOP) {
        const top = 1500;
        $('#page1_livequest2').css({
            position: 'absolute',
            width: 221 * window.innerWidth / 1920 + 'px',
            height: 47 * window.innerHeight / 1080 + 'px',
            top: top * window.innerHeight / 1080 + 'px',
        })

        const width = 631;
        const height = 237;

        $('#page1_title2').css({
            position: 'absolute',
            width: width * window.innerWidth / 1920 + 'px',
            height: height * window.innerHeight / 1080 + 'px',
            top: (top + 52) * window.innerHeight / 1080 + 'px',
        })
    } else {
        $('#page1_title2').css({
            position: 'fixed',
            top: '15.55%',
            left: '6.5%',
        })
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

        const OPACITY = (scrollY - APPEAR[i]) / range;
        if (scrollY < APPEAR[i]) {
            $('#page1_card' + i).css({
                display: 'none',
            })
        } else {
            if (scrollY >= DISAPPEAR) {
                $('#page1_card' + i).css({
                    display: 'block',
                    position: 'fixed',
                    opacity: 1,
                })
            } else {
                $('#page1_card' + i).css({
                    display: 'block',
                    position: 'fixed',
                    width: getWidth(width[i], true),
                    height: getHeight(height[i], true),
                    left: getLeft(left[i], true),
                    top: getTop(top[i], true),
                    opacity: OPACITY,
                })
            }
        }
    }
}

function part2_page2_effect(scrollY) {
    { // REACTION
        const width = 193;
        const height = 47;
        const left = 861;
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
        const width = 433;
        const height = 894;
        const left = 741;
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
    }

    { // REACTION 버튼
        const START = 1597;
        const width = 60;
        const height = 60;
        const left = 1100;
        const position = ['fixed', 'absolute'];
        const top = [890, 1105, 2547];
        if (scrollY >= 1730) {
            $('#reaction_button').css({
                position: position[1],
                width: getWidth(width, false),
                height: getHeight(height, false),
                left: getLeft(left, false),
                top: getTop(top[2], false),
                zIndex: 3,
            })
        } else {
            $('#reaction_button').css({
                position: scrollY >= START ? position[0] : position[1],
                width: getWidth(width, false),
                height: getHeight(height, false),
                left: getLeft(left, false),
                top: getTop(scrollY >= START ? top[0] : top[1], false),
                zIndex: 3,
            })
        }
    }

    { // REACTION_DETAIL
        const FINISH = 1730;
        const APPEAR = [0, 1610, 1640, 1700];
        const DISAPPEAR = 1670;
        const width = [0, 324, 288, 377];
        const height = [0, 133, 98, 94];
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
        })
    }
    // 1576 -> 2071
    // 2071-1576 = 495

    { // MEMEPLAY
        const width = 220;
        const height = 47;
        const left = 861;
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

    { // 이제 직접 밈을 만들어봐요!
        const width = 1005;
        const height = 142;
        const left = 458;
        const top = 1080 * 5 + 38;
        const OPACITY = 1 - Math.max((scrollY - 2071) / 20, 0);
        const gap = Math.min(Math.max(0, scrollY - 2071) * 10, 90);

        $('#memeplay_subtitle').css({
            width: getWidth(width, false),
            height: getHeight(height, false),
            left: getLeft(left, false),
            top: getTop(top + gap, false),
            opacity: OPACITY,
            zIndex: 1,
        })
    }

    { // MEMEPLAY 핸드폰 목업
        const START = 1597 + 495;
        const FINISH = 1730 + 495;
        const width = 433;
        const height = 894;
        const left = 741;
        const position = ['fixed', 'absolute'];
        const top = [93, 308 + 5336, 1750 + 5336];
        if (scrollY >= FINISH) {
            $('#memeplay_phone').css({
                position: position[1],
                width: getWidth(width, false),
                height: getHeight(height, false),
                left: getLeft(left, false),
                top: getTop(top[2], false),
                zIndex: 2,
            })
        } else {
            $('#memeplay_phone').css({
                position: scrollY >= START ? position[0] : position[1],
                width: getWidth(width, false),
                height: getHeight(height, false),
                left: getLeft(left, false),
                top: getTop(scrollY >= START ? top[0] : top[1], false),
                zIndex: 2,
            })
        }
    }

    { // MEMEPLAY_DETAIL
        const FINISH = 3000;
        const APPEAR = [0, 1610, 1640, 1700];
        const DISAPPEAR = 1670;
        const width = [0, 394, 270, 299];
        const height = [0, 90, 92, 190];
        const left = [0, 1219, 430, 1216];
        const top = [0, 782, 878, 836];
        const position = ['fixed', 'absolute'];
        const GAP = 1658;

        var opacity1 = (scrollY - APPEAR[1]) / 30;
        $('#memeplay_detail1').css({
            // display: scrollY >= APPEAR[1] ? 'block' : 'none',
            width: getWidth(width[1], false),
            height: getHeight(height[1], false),

            position: scrollY >= FINISH ? position[1] : position[0],
            left: getLeft(left[1], false),
            top: getTop(scrollY >= FINISH ? top[1] + GAP : top[1], false),
            opacity: opacity1,
        })

        var opacity2_1 = (scrollY - APPEAR[2]) / 30;
        var opacity2_2 = 1 - (scrollY - DISAPPEAR) / 30;

        $('#memeplay_detail2').css({
            display: scrollY >= APPEAR[2] ? 'block' : 'none',
            width: getWidth(width[2], false),
            height: getHeight(height[2], false),

            position: 'fixed',
            left: getLeft(left[2], false),
            top: getTop(top[2], false),
            opacity: scrollY >= DISAPPEAR ? opacity2_2 : opacity2_1,
        })

        var opacity3 = (scrollY - APPEAR[3]) / 30;
        $('#memeplay_detail3').css({
            display: scrollY >= APPEAR[3] ? 'block' : 'none',
            width: getWidth(width[3], false),
            height: getHeight(height[3], false),

            position: scrollY >= FINISH ? position[1] : position[0],
            left: getLeft(left[3], false),
            top: getTop(scrollY >= FINISH ? top[3] + GAP : top[3], false),
            opacity: opacity3,
        })
    }
}

function part2_page3_effect(scrollY) {
    {
        const length = 470;
        const left = [0, 230, 725, 1220, 230, 725, 1220, 230, 725, 1220];
        const top = [0, 235.5, 235.5, 235.5, 733, 733, 733, 1231.3, 1231.3, 1231.3];
        for (var i = 1; i < 10; i++) {
            $('#p2_p3_friday' + i).css({
                backgroundImage: 'url(\'../src/p2_p3_friday' + i + '.png\')',
                width: getWidth(length, false),
                height: getHeight(length, false),
                left: getLeft(left[i], false),
                top: getTop(top[i], false),
            })
        }
    }
}

function part2_page4_effect(scrollY) {
    { // PAGE4_DETAIL & PART4_LOGO
        const width = [1037, 518];
        const height = [416, 199];
        const left = [442, 701];
        const top = [332, 440];
        const START = [2595, 2695];
        const FINISH = [2645, 2745];
        const RANGE = 30;
        const OPACITY = [scrollY < START[0] ? 0 : scrollY < FINISH[0] ? (scrollY - START[0]) / RANGE : 1 - (scrollY - FINISH[0]) / RANGE, scrollY < START[1] ? 0 : scrollY < FINISH[1] ? (scrollY - START[1]) / RANGE : 1];
        const ID = ['detail', 'logo'];


        if (scrollY >= FINISH[1]) {
            $('#p2_p4_logo').css({
                position: 'absolute',
                top: getTop(2080, false),
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
        const width = [521, 566, 513];
        const height = [486, 524, 427];
        const left = [190, 628, 1225];
        const top = [489, 72, 396];
        const APPEAR = [2851, 2901, 2951];
        const RANGE = 40;

        for (var i = 0; i < 3; i++) {
            const OPACITY = (scrollY - APPEAR[i]) / RANGE;
            console.log(i, OPACITY)
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

    { // PAGE4 IMAGES
        const START = 2851;
        const GAP = 2765;
        const ID = ['star', 'sad', 'wow', 'smile', 'greencool', 'pinkcool', 'thankyou'];
        const width = [53, 51, 54, 51, 68, 70, 896];
        const height = [50, 51, 53, 50, 53.2, 63, 425];
        const left = [420, 107, 1069, 1541, 1276, 1747, 711];
        const top = [156, 418, 827, 946, 76, 287, 327];

        for (var i = 0; i < 7; i++) {
            if (scrollY >= START) {
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