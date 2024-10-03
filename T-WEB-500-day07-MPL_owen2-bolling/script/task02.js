const output = document.querySelector("footer div");

output.addEventListener("click", () => {
    let name = prompt("Please enter your name:");
    confirm("are you sure your name is : " + name);
    output.textContent = "hello mister " + name;
    alert("hello mister " + name);
})
