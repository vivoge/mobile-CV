FastClick.attach(document.body);

~function () {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / 640 * 100 + "px";
}();

//->初始化Swiper
new Swiper(".swiper-container", {
    loop: true,
    direction: "vertical",
    onSlidePrevEnd: changeEnd,
    onSlideNextEnd: changeEnd
});


function changeEnd(swiper) {
    var n = swiper.activeIndex,
        slideAry = swiper.slides;
    [].forEach.call(slideAry, function (slide, index) {
        if (n === index) {

            if(n == 1 || n == 5) {
                slide.id ="page1";
            }else if(n == 0 || n == 4) {
                slide.id ="page4";
            }else {slide.id ="page"+n}

            return;
        }
        slide.id = null;
    });
}


var music = document.getElementById("music"),
    musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
    musicAudio.play();
    musicAudio.addEventListener("canplay", function () {

        music.style.display = "block";
        music.className = "music move";
    }, false);
}, 1000);
music.addEventListener("click", function () {

    if (musicAudio.paused) {
        musicAudio.play();
        music.className = "music move";
        return;
    }

    musicAudio.pause();
    music.className = "music";
}, false);





