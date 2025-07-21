import { create_header } from "./header.js";
import { addClassFromArray } from "./helper.js";

document.addEventListener("DOMContentLoaded", () => {
    const top = document.getElementById("top");
    const yb = document.getElementById("yeah-boi");

    if (top) create_header(top);
    if (yb) {
        make_button("Learn More", () => {console.log("clicked");}, yb);
        make_button("Start Here", () => {console.log("clicked");}, yb);
    }
});

function make_button(text: string, click: () => void, target: HTMLElement) {
    const btn = document.createElement("button");
    const allClass = ["mr-5", "p-2", "pl-3",
        "pr-3", "rounded-lg", "hover:bg-[#2e2e2e]",
        "hover:text-red-300", "hover:font-bold",
        "transition-colors", "duration-200"];
    btn.textContent = text;
    btn.onclick = click;
    addClassFromArray(btn, allClass);
    target.appendChild(btn);
}
