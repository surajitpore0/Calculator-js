const btns = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");

const equalBtn = document.querySelector(".btn-equal");
const clearBtn = document.querySelector(".btn-clear");
const backBtn = document.querySelector(".btn-back");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let number = btns[i].getAttribute("data-num");
        screen.value += number;
    });
}

equalBtn.addEventListener("click", function () {
    let value = eval(screen.value);
    screen.value = value;

    if (screen.value === "") {
        alert("input is empty");
    }
});

clearBtn.addEventListener("click", function () {
    screen.value = "";
});
backBtn.addEventListener("click", function () {
    screen.value = screen.value.slice(0, -1);
    // console.log(screen.value);
});
