setInterval(() => {
    log();
}, 100);


const PART1_PAGE1 = 100;
const PART1_PAGE2 = PART1_PAGE1 + 364;
const PART1_PAGE3 = PART1_PAGE2 + 560;
const PART1 = PART1_PAGE3;

function bottom_background_Effect() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ms = date.getMilliseconds();

    const SPEED_DIVIDER = 2.5;

    var pos_to_right = (ms + 1000 * (s + 60 * m + 3600 * h)) / SPEED_DIVIDER;
    var pos_to_left = -(ms + 1000 * (s + 60 * m + 3600 * h)) / SPEED_DIVIDER;

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
    const START = 55;
    const RANGE = 20;
    const GOAL_SIZE = 73;

    const SIZE = Math.max(0, Math.min(((scrollY - START) / RANGE) * GOAL_SIZE, GOAL_SIZE));

    if (scrollY < START) {
        $("#page2_meme").css({
            "width": "0%",
        });
    } else if (SIZE == 73) {
        $("#page2_meme").css({
            "width": "73%",
            "background-image": "url('../src/p1_p2_meme.png')",
        });
    } else {
        $("#page2_meme").css({
            "width": SIZE + "%",
            "background-image": "linear-gradient(to right, transparent, #f3f8ff), url('../src/p1_p2_meme.png')",
        });
        $("#page2_meme_sub").css({
            "display": "none",
        });
    }
}

function meme_sub_Effeect(scrollY) {
    const START = 75;
    const RANGE = 20;
    const GOAL_HEIGHT = 18;
    const GOAL_TOP = 44;

    const HEIGHT = Math.min(((scrollY - START) / RANGE) * ((scrollY - START) / RANGE) * GOAL_HEIGHT, GOAL_HEIGHT) + "%";
    const TOP = 87 - Math.min(((scrollY - START) / RANGE) * ((scrollY - START) / RANGE) * GOAL_TOP, GOAL_TOP) + "%";

    if (scrollY >= START) {
        $("#page2_meme_sub").css({
            "display": "block",
            "height": HEIGHT,
            "top": TOP,
        })
    }
}

function effect_PART1(scrollY) {
    // meme Effect
    if (scrollY < 100) {
        meme_Effect(scrollY);
    }

    // meme_sub Effect
    if (scrollY < 140) {
        meme_sub_Effeect(scrollY);
    }
}

function getScrollY() {
    var winHeight = window.innerHeight;
    var scrollY = window.scrollY;
    return (scrollY / winHeight) * 100;
}

function log() {

    var scrollY = getScrollY();
    console.log(scrollY)

    if (scrollY <= PART1) {
        effect_PART1(scrollY);
    }

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