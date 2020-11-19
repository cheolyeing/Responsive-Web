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
            setSizeInit();
            log();
        }, 100);
    })
}

function interval() {
    page2_effect();
}

function page1_init() {
    $('#part1_page1').css({
        'display': 'block'
    })
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


    meme_Effect(scrollY);
    meme_sub_Effeect(scrollY);
    phone_Effect(scrollY);
}



function bottom_background_Effect() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ms = date.getMilliseconds();

    const SPEED_DIVIDER = 10000;

    var pos_to_right = (ms + 1000 * (s + 60 * m + 3600 * h)) % SPEED_DIVIDER;
    var pos_to_left = -(ms + 1000 * (s + 60 * m + 3600 * h)) % SPEED_DIVIDER;

    $("#page4_bottom_background1").css({
        "background-position-x": pos_to_left + "px",
    })

    $("#page4_bottom_background2").css({
        "background-position-x": pos_to_right + "px",
    })

    $("#page4_bottom_background3").css({
        "background-position-x": pos_to_left + "px",
    })
}

function meme_Effect(scrollY) {
    const START = 100;
    const RANGE = 20;
    const GOAL_SIZE = 36;

    const SIZE = Math.max(0, Math.min(((scrollY - START) / RANGE) * GOAL_SIZE, GOAL_SIZE));

    if (scrollY < START) {
        $("#page2_meme").css({
            "width": "0%",
            'display': 'none',
        });
    } else if (SIZE == GOAL_SIZE) {
        $("#page2_meme").css({
            "width": GOAL_SIZE + "%",
            "background-image": "url('../src/p1_p2_meme.png')",
            'display': 'block',
        });
    } else {
        $("#page2_meme").css({
            "width": SIZE + "%",
            "background-image": "linear-gradient(to right, transparent, #f3f8ff), url('../src/p1_p2_meme.png')",
            'display': 'block',
        });
        $("#page2_meme_sub").css({
            "display": "none",
        });
    }
}

function meme_sub_Effeect(scrollY) {

    const START = 120;
    const RANGE = 20;
    const GOAL_HEIGHT = 18;
    const GOAL_TOP = 66;

    const HEIGHT = Math.min(((scrollY - START) / RANGE) * ((scrollY - START) / RANGE) * GOAL_HEIGHT, GOAL_HEIGHT) + "%";
    const TOP = 87 - Math.min(((scrollY - START) / RANGE) * ((scrollY - START) / RANGE) * GOAL_TOP, GOAL_TOP) + "%";

    if (scrollY < START) {
        $("#page2_meme_sub").css({
            "display": "none",
        })
    } else if (scrollY >= START) {
        $("#page2_meme_sub").css({
            "display": "block",
            "height": HEIGHT,
            "top": TOP,
        })
    }
}

function phone_Effect(scrollY) {
    {
        const START = 140;
        const RANGE = 20;
        const GOAL_TOP = 35;

        const TOP = 70 - Math.min(((scrollY - START) / RANGE) * ((scrollY - START) / RANGE) * GOAL_TOP, GOAL_TOP) + "%";
        if (scrollY < START) {
            $("#page2_phone").css({
                "display": "none",
            })
        } else if (scrollY >= START) {
            $("#page2_phone").css({
                "display": "block",
                "top": TOP,
            })
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
        const START = [160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184];
        const RANGE = 10;
        const TOP = [-21.6, 27, 8, 8.4, 8.5, -26.2, 2.6, 47.8, 20.7, 7, 61, 51, -2.2, 6.6];

        for (var i = 0; i < 13; i++) {
            if (START[i] <= scrollY) {
                $("#page2_" + ID[i]).css({
                    'display': 'block',
                })
                var element = document.getElementById("page2_" + ID[i])
                element.classList.add("bounce");
            } else {
                $("#page2_" + ID[i]).css({
                    'display': 'none',
                })
            }
        }
    }
}

// function effect_PART1(scrollY) {
//     // meme Effect
//     if (scrollY < 100) {
//         meme_Effect(scrollY);
//     }

//     // meme_sub Effect
//     if (scrollY < 140) {
//         meme_sub_Effeect(scrollY);
//     }
// }

function getScrollY() {
    var winHeight = window.innerHeight;
    var scrollY = window.scrollY;
    return (scrollY / winHeight) * 100;
}

function log() {

    bottom_background_Effect();

    // // Effect #6
    // start = 3000;
    // range = 400;
    // var opacity = Math.min((scrollY-start)/range, 1);
    // $("#page2_06").css({
    //     "opacity" : opacity
    // })

    // if(true) {
    //     var date = new Date();
    //     var ms = Math.log(date.getMilliseconds()/10);
    //     var tx = Math.sin(ms) * Math.sin(ms)*2 + "px";
    //     var ty = Math.cos(ms) * Math.sin(ms)*2 + "px";
    //     var transform1 = "translateX(" + tx + ") translateY(" + ty + ")"
    //     var transform2 = "translateX(-" + tx + ") translateY(" + ty + ")"
    //     var transform3 = "translateX(" + tx + ") translateY(-" + ty + ")"
    //     var transform4 = "translateX(-" + tx + ") translateY(-" + ty + ")"

    //     $("#icon05").css({
    //         "opacity" : scrollY>=3000 ? "1" : "0",
    //         "transform": transform1,
    //     })

    //     $("#icon03").css({
    //         "opacity" : scrollY>=3040 ? "1" : "0",
    //         "transform": transform2,
    //     })

    //     $("#icon06").css({
    //         "opacity" : scrollY>=3080 ? "1" : "0",
    //         "transform": transform3,
    //     })

    //     $("#icon02").css({
    //         "opacity" : scrollY>=3120 ? "1" : "0",
    //         "transform": transform4,
    //     })

    //     $("#icon04").css({
    //         "opacity" : scrollY>=3160 ? "1" : "0",
    //         "transform": transform1,
    //     })

    //     $("#icon07").css({
    //         "opacity" : scrollY>=3200 ? "1" : "0",
    //         "transform": transform2,
    //     })

    //     $("#icon01").css({
    //         "opacity" : scrollY>=3240 ? "1" : "0",
    //         "transform": transform3,
    //     })
    // }

    // console.log(scrollY);
}

function setSizeInit() {

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
}