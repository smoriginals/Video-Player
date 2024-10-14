const play = document.querySelector(".play-button");
const myVideo = document.querySelector("video");
const volume = document.querySelector(".volume-button");
const seekF = document.querySelector(".seek15-button");
const seekB = document.querySelector(".seek10-button");
const fullS = document.querySelector(".full-button");
let vidSeek = document.getElementById("vid-basis");

let isPlay = false;
let hasClick = false;
let hasAudio = true;
let seekFW = false;
let seekBW = false;
let fw = 15;
let bw = 10;


const ControlVolume = volume.addEventListener("click", () => {
    
    if (hasAudio) {
        volume.classList.add("volume-button-update");
        myVideo.volume = 0;
    }
    else {
        volume.classList.remove("volume-button-update");
        myVideo.volume = 1;
    }
    hasAudio = !hasAudio;
});


const PlayPause = play.addEventListener("click", () => {
    isPlay = true;
    hasClick = !hasClick;
    if (isPlay && hasClick) {
        myVideo.play();
        play.classList.add("play-button-update");
    }
    else {
        myVideo.pause();
        play.classList.remove("play-button-update");
    }
});

const FastFoward = seekF.addEventListener("click", () => {
    seekFW = !seekFW;
    if (seekFW) {
        seekF.classList.add("seek15-button-update");
        myVideo.currentTime += fw;
    } else {
        seekF.classList.remove("seek15-button-update");
    }
    
});
const BackFoward = seekB.addEventListener("click", () => {
    seekBW = !seekBW;
    if (seekBW) {
        seekB.classList.add("seek10-button-update");
        myVideo.currentTime -= bw;
    } else {
        seekB.classList.remove("seek10-button-update");
    }

});

const fullScreen = fullS.addEventListener("click", () => {
    myVideo.requestFullscreen();
});

myVideo.addEventListener("timeupdate", () => {
    const deltaTime = 100;
    const progress = (myVideo.currentTime / myVideo.duration) * deltaTime;
    vidSeek.style.width = `${progress}%`;
});


fullScreen();
BackFoward();
FastFoward();
ControlVolume();
PlayPause();


/**<script>
    const video = document.getElementById('video');
    const progressDiv = document.getElementById('progress-div');
    const videoContainer = document.getElementById('video-container');

    // Update the width of the progress div as video plays
    video.addEventListener('timeupdate', () => {
        const progress = (video.currentTime / video.duration) * 100;
        progressDiv.style.width = `${progress}%`;
    });

    // Add drag functionality to fast-forward/rewind the video
    progressDiv.addEventListener('mousedown', (e) => {
        function seekVideo(e) {
            const rect = videoContainer.getBoundingClientRect();
            const position = e.clientX - rect.left;
            const percentage = position / rect.width;
            video.currentTime = percentage * video.duration;
        }

        function stopDrag() {
            document.removeEventListener('mousemove', seekVideo);
            document.removeEventListener('mouseup', stopDrag);
        }

        document.addEventListener('mousemove', seekVideo);
        document.addEventListener('mouseup', stopDrag);
    });

    // Sync video length with the div on load
    video.addEventListener('loadedmetadata', () => {
        progressDiv.style.width = '0%';
    });
</script>

</body>
</html> */