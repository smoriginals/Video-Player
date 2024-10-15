const pslider = document.getElementById("playback-slider");
const sslider = document.getElementById("sound-slider");
const video = document.querySelector("video");
const volume = document.querySelector(".volume-button");
const playing = document.querySelector(".play-button");
const seekback = document.querySelector(".seek-backward");
const seekforward = document.querySelector(".seek-forward");
const speedup = document.querySelector(".speed-up");
const speedown = document.querySelector(".speed-down");

let onVideoClick = false;
let onVolumeClick = true;
let onClickPlay = false;


//Video play by his background click
video.addEventListener("click", () => {
    onVideoClick = !onVideoClick;
    if (onVideoClick) {
        video.play();
    } else {
        video.pause();
    }
});

//volume control
volume.addEventListener("click", () => {
    
    if (onVolumeClick) {
        video.volume = 0;
        volume.classList.add("muted");
    } else {
        video.volume = 1;
        volume.classList.remove("muted");
    }
    onVolumeClick = !onVolumeClick;
});

//play with button
playing.addEventListener("click", () => {
    onClickPlay = !onClickPlay;
    if (onClickPlay) {
        video.play();
        playing.classList.add("pause");
    } else {
        video.pause();
        playing.classList.remove("pause");
    }
});

//seeking video
seekback.addEventListener("click", () => {
    video.currentTime = Math.max(0, video.currentTime - 10.0);
});
seekforward.addEventListener("click", () => {
    video.currentTime = Math.max(video.duration, video.currentTime + 15.0);
});

//speeding video
speedup.addEventListener("click", () => {
    video.playbackRate = 2;
});
speedup.addEventListener("dblclick", () => {
    video.playbackRate = 1;
});
speedown.addEventListener("click", () => {
    video.playbackRate = 0.5;
});
speedown.addEventListener("dblclick", () => {
    video.playbackRate = 1;
});

//cantrol durition progress

video.addEventListener("timeupdate", () => {
    const deltaTime = 100.0;
    const progress = (video.currentTime / video.duration) * deltaTime;
    pslider.value = `${progress}`;
});
pslider.addEventListener('input', (e) => {
    const newTime = (e.target.value / 100) * video.duration;
    video.currentTime = newTime;
});

sslider.addEventListener('input', (e) => {
    video.volume = e.target.value;
});