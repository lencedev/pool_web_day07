const canvas = document.querySelector("footer div canvas");
const link = document.querySelector("section pre");
const btnPause = document.querySelector("footer div button:nth-child(1)");
const btnStop = document.querySelector("footer div button:nth-child(2)");
const btnMute = document.querySelector("footer div button:nth-child(3)");

if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(6, 6);
    ctx.lineTo(14, 10);
    ctx.lineTo(6, 14);
    ctx.fillStyle = "red";
    ctx.fill();
}


var audio = new Audio("./sound.mp3");

canvas.addEventListener("click", () => {
    audio.play();
})

btnPause.addEventListener("click", () => {
    audio.pause();
})

btnMute.addEventListener("click", () => {
    if (audio.muted == true)
        audio.muted = false
    else
        audio.muted = true;
})

btnStop.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.pause();
})
