const play = document.querySelector(".play-button");

const myVideo = document.querySelector("video");




let isPlay = false;
let hasClick = false;

const PlayPause = play.addEventListener("click", () => {
    isPlay = true;
    hasClick = !hasClick;
    if (isPlay && hasClick) {
        myVideo.play();
        
    }
    else {
        myVideo.pause();
    }
});

PlayPause();