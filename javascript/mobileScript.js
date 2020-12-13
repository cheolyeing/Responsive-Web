const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

window.onload = function () {
    loadingMotion();
    document.body.style.overflowY = 'hidden';

    {
        var video = document.getElementById('main_video').style
        const width = 1920;
        const height = 1080;
        video.width = WIDTH + 'px';
        video.height = height * WIDTH / width + 'px';
        video.backgroundSize = 'contain';
    }

    {
        var main = document.getElementById("main_box").style
        const width = 2037;
        const height = 32768;

        main.backgroundImage = 'url(./src/mobile.png)';
        main.width = WIDTH + 'px';
        main.height = height * WIDTH / width + 'px';
    }

    {
        var loadingBack = document.getElementById('loading_back').style

        loadingBack.position = 'fixed';
        loadingBack.width = WIDTH + 'px';
        loadingBack.height = HEIGHT + 'px';
        loadingBack.backgroundColor = 'black';
        loadingBack.zIndex = 2;
        loadingBack.opacity = 0.8;
    }

    {
        const height = 1080 * WIDTH / 1920;
        const top = (HEIGHT - height) / 2;

        var loadingFront = document.getElementById('loading_front').style;

        loadingFront.position = 'fixed';
        loadingFront.width = WIDTH * 0.9 + 'px';
        loadingFront.left = WIDTH * 0.05 + 'px';
        loadingFront.height = height + 'px';
        loadingFront.backgroundColor = 'black';
        loadingFront.top = top + 'px';
        loadingFront.boxShadow = '0px 0px 10px grey';
        loadingFront.zIndex = 3;
    }

    {
        const height = 1080 * WIDTH / 1920;
        const gap = (HEIGHT - height) / 2;

        var loadingFace1 = document.getElementById('loading_face1').style;
        loadingFace1.position = 'fixed';
        loadingFace1.width = WIDTH * 0.034 + 'px';
        loadingFace1.height = WIDTH * 0.034 + 'px';
        loadingFace1.left = WIDTH * (0.5 - 0.017 * 4) + 'px';
        loadingFace1.top = gap + height * 0.31 + 'px';
        loadingFace1.backgroundImage = 'url(./src/loading_face1.png)'
        loadingFace1.zIndex = 4;

        var loadingFace2 = document.getElementById('loading_face2').style;
        loadingFace2.position = 'fixed';
        loadingFace2.width = WIDTH * 0.034 + 'px';
        loadingFace2.height = WIDTH * 0.034 + 'px';
        loadingFace2.left = WIDTH * (0.5 - 0.017) + 'px';
        loadingFace2.top = gap + height * 0.31 + 'px';
        loadingFace2.backgroundImage = 'url(./src/loading_face2.png)'
        loadingFace2.zIndex = 4;

        var loadingFace3 = document.getElementById('loading_face3').style;
        loadingFace3.position = 'fixed';
        loadingFace3.width = WIDTH * 0.034 + 'px';
        loadingFace3.height = WIDTH * 0.034 + 'px';
        loadingFace3.right = WIDTH * (0.5 - 0.017 * 4) + 'px';
        loadingFace3.top = gap + height * 0.31 + 'px';
        loadingFace3.backgroundImage = 'url(./src/loading_face3.png)'
        loadingFace3.zIndex = 4;

        var loadingMobile = document.getElementById('loading_mobile').style;
        loadingMobile.position = 'fixed';
        loadingMobile.width = WIDTH * 0.49 + 'px';
        loadingMobile.height = WIDTH * 0.14 + 'px';
        loadingMobile.left = WIDTH * 0.255 + 'px';
        loadingMobile.top = gap + height * 0.426 + 'px';
        loadingMobile.backgroundImage = 'url(./src/loading_mobile.png)'
        loadingMobile.zIndex = 4;
    }

    setTimeout(() => {
        document.getElementById('loading_back').style.display = 'none';
        document.getElementById('loading_front').style.display = 'none';
        document.body.style.overflowY = 'auto';
    }, 5000);
}

function loadingMotion() {
    var index = 0;
    setInterval(() => {
        index++;
        for (var i = 1; i < 4; i++) {
            var loadingFace = document.getElementById('loading_face' + i).style;
            loadingFace.opacity = 0.2;
        }
        var target = index % 3 + 1;
        var loadingFace = document.getElementById('loading_face' + target).style;
        loadingFace.opacity = 1;
        if (index > 20) return;
    }, 300)
}