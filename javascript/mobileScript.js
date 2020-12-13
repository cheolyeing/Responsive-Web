const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

window.onload = function () {
    var main = document.getElementById("main").style
    console.log(main)

    {
        const width = 2037;
        const height = 32768;

        main.width = WIDTH;
        main.height = height * WIDTH / width;
        main.backgroundSize = 'contain';
    }
}