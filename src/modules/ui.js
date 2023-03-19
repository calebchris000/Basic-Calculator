
const createUI = () => {
    const characters = ["C", "CE", "±", '+', 7, 8, 9, '-', 4, 5, 6, '×', 1, 2, 3, '÷', 0, '.', '00', '='];
    const container = document.querySelector(".container");
    const item = `<div class='screen'>
      <p type='text' id='data' pattern="[0-9]+">0</p>
      </div>`;
    container.insertAdjacentHTML("afterbegin", item);
    const buttons = document.createElement("div");
    buttons.className = "buttons";
    for (let i = 0; i < characters.length; i++) {
        const div = document.createElement("div");
        div.className = "button";
        div.textContent = characters[i];
        buttons.appendChild(div);
    }
    container.insertAdjacentElement("beforeend", buttons);
};

const load = () => {
    createUI();
}

window.onload = load()