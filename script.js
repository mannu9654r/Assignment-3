let heading = document.getElementById("heading");
let btn = document.getElementById("btn");
let input = document.getElementById("nameInput");
let boxes = document.querySelectorAll(".box");

btn.addEventListener("click", function () {
    let name = input.value.trim();

    if (name === "") {
        heading.innerText = "Hello";
    } else {
        heading.innerText = "Hello " + name;
    }
});

boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        let color = box.innerText.toLowerCase();

        box.style.backgroundColor = color;

        if (color === "yellow") {
            box.style.color = "black";
        } else {
            box.style.color = "white";
        }
    });
});