import { addClassFromArray } from "../helper.js";
import { Component } from "../interface.js";

export function create_default_button(text: string, click: () => void): Component {
    const btn = document.createElement("button");
    const allClass = ["text-lg", "mr-5", "p-2", "pl-3",
        "pr-3", "rounded-lg", "hover:bg-[#2e2e2e]",
        "hover:text-red-300", "transition-colors",
        "duration-200"];
    btn.textContent = text;
    btn.onclick = click;
    addClassFromArray(btn, allClass);
    return { str: btn.outerHTML, obj: btn };
}

export function create_button(text: string, click: () => void): Component {
    const btn = document.createElement("button");
    const allClass = ["text-md", "mr-5", "p-2", "pl-3",
        "pr-3", "rounded-lg", "hover:bg-[#3e3e3e]",
        "hover:text-red-300", "transition-colors",
        "border", "border-[#aeaeae]", "hover:border-red-300",
        "duration-200"];
    btn.textContent = text;
    btn.onclick = click;
    addClassFromArray(btn, allClass);
    return { str: btn.outerHTML, obj: btn };
}
