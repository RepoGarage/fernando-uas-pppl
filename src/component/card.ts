import { Component } from "../interface.js"
export function create_card(): Component {
    // Outer card
    const outerCard = document.createElement("div");
    outerCard.classList.add("w-[220px]", "h-[220px]",
                            "s:w-[160px]", "s:h-[160px]",
                            "lg:w-[220px]", "lg:h-[220px]",
                            "bg-[#3e3e3e]", "p-2", "rounded-lg", "m-2");
    return { str: outerCard.outerHTML, obj: outerCard };
}
