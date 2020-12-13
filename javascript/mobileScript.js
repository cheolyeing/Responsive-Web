const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

window.onload = function () {

    {
        var videoBox = document.getElementById("video_box").style
        const width = 1920;
        const height = 1080;

        videoBox.backgroundColor = 'reda';
        videoBox.width = WIDTH;
        videoBox.height = height * WIDTH / width;
    }

    {
        var viedo = document.getElementById('main_video').style
        const width = 1920;
        const height = 1080;
    }

    {
        var main = document.getElementById("main").style
        const width = 2037;
        const height = 32768;

        main.width = WIDTH;
        main.height = height * WIDTH / width;
        main.backgroundSize = 'contain';
    }
}