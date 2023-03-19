const math = require("mathjs");
let item = "";

const buttonListen = () => {
    document.addEventListener("click", (e) => {
        if (e.target.className === "button" && /[0-9+-/÷×]/g.test(e.target.textContent)) {
            const input = document.getElementById("data");
            item += e.target.textContent;
            input.innerHTML = item;
        }
    });
};

const evaluate = () => {
    document.addEventListener("click", (e) => {
        if (e.target.className === "button" && e.target.textContent === "=") {
            const input = document.getElementById("data");
            const filter = input.textContent.replace(/[÷]/g, "/").replace(/[×]/, '*');
            const result = math.evaluate(filter);
            input.innerHTML = result;
            item = input.textContent;
        }
    });
};

const clear = () => {
    document.addEventListener("click", (e) => {
        if (e.target.className === "button" && e.target.textContent === "C") {
            const input = document.getElementById("data");
            item = "";
            input.innerHTML = "0";
        }
    });
};

const deleteLast = () => {
    document.addEventListener("click", (e) => {
        if (e.target.className === "button" && e.target.textContent === "CE") {
            const input = document.getElementById("data");
            item = item.slice(0, -1);
            input.innerHTML = item;
        }
    });
};

const posNeg = () => {
    document.addEventListener("click", (e) => {
        if (e.target.className === "button"
            && e.target.textContent === "±") {
            const input = document.getElementById("data");
            item = item[0] === "-" ? item.slice(1) : "-" + item;
            input.innerHTML = item;
        }
    });
};

const load = () => {
    clear();
    deleteLast();
    buttonListen();
    evaluate();
    posNeg();
};

window.onload = load();
