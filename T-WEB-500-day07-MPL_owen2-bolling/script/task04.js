const btn_plus = document.querySelector("footer div button:nth-child(1)");
const btn_moins = document.querySelector("footer div button:nth-child(2)");
const btn_change = document.querySelector("select");
const body = document.querySelector("body");

let zoom = 1;


btn_plus.addEventListener("click", () => {
    zoom+= 0.1
    document.body.style.zoom = zoom;
})

btn_moins.addEventListener("click", () => {
    zoom-= 0.1
    document.body.style.zoom = zoom;
})

btn_change.addEventListener("click", () => {
    document.body.style.backgroundColor = btn_change.value;
})
