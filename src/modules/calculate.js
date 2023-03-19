const math = require("mathjs");
let data = "";

const buttonListen = () => {
    document.addEventListener("click", (e) => {
        if (e.target.className === "button" && /[0-9+-/÷×]/g.test(e.target.textContent)) {
            const input = document.getElementById("data");
            data += e.target.textContent;
            input.innerHTML = data;
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
            data = input.textContent;
        }
    });
};

const clear = () => {
    document.addEventListener("click", (e) => {
        if (e.target.className === "button" && e.target.textContent === "C") {
            const input = document.getElementById("data");
            data = "";
            input.innerHTML = "0";
        }
    });
};

const deleteLast = () => {
    document.addEventListener("click", (e) => {
        if (e.target.className === "button" && e.target.textContent === "CE") {
            const input = document.getElementById("data");
            data = data.slice(0, -1);
            input.innerHTML = data;
        }
    });
};

const posNeg = () => {
    document.addEventListener("click", (e) => {
        if (e.target.className === "button"
            && e.target.textContent === "±") {
            const input = document.getElementById("data");
            data = data[0] === "-" ? data.slice(1) : "-" + data;
            input.innerHTML = data;
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
