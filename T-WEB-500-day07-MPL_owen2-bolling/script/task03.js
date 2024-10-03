const output = document.querySelector("footer div");
let nb = 0;
let str = "";
window.addEventListener("keydown", (e) => {
    nb++;
    str += e.key;
    if (c > 4)
        str = str.substring(1);
    output.textContent = str;
});
