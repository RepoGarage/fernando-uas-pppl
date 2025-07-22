import { Component } from "../interface.js"
export function create_card(): Component {
    // Outer card
    const outerCard = document.createElement("div");
    outerCard.classList.add("w-[70%]", "h-[220px]",
                            "s:w-[160px]", "s:h-[160px]",
                            "lg:w-[240px]", "lg:h-[240px]",
                            "bg-[#3e3e3e]", "p-2", "rounded-lg", "m-2",
                            "shadow", "transition", "hover:shadow-xl",
                            "hover:bg-[#4e4e4e]", "cursor-default"
                           );

    return { str: outerCard.outerHTML, obj: outerCard };
}
