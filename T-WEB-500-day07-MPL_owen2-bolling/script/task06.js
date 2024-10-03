var square = document.querySelector("footer div canvas");
var position = document.querySelector("footer div:nth-child(2)");
let isClicked = false;

square.addEventListener("mousedown", (e) => {
    isClicked = true;
    square.style.position = "fixed";
});

window.addEventListener("mousemove", (e) => {
    if (isClicked) {
        let xPos = e.pageX;
        let yPos = e.pageY;
        square.style.left = xPos + "px";
        square.style.top = yPos + "px";
        position.textContent = `New coordinates => {x:${xPos}, y:${yPos}}`;
    }
});

window.addEventListener("mouseup", () => {
    isClicked = false;
});
