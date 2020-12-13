const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

window.onload = function () {

    console.log(WIDTH)

    {
        var html = document.html
        var body = document.body.style

        console.log(html)
        console.log(body)
        body.margin = 0;
        body.padding = 0;
    }

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
        main.backgroundSize = 'contain';
        console.log(main.width, main.height)
    }

    console.log("OK")
}