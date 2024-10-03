let count = 0;
const output = document.querySelector("footer div");

output.addEventListener("click", () => {
    count++;
    output.textContent = count;
})
