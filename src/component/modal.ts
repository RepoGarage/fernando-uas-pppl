import { Component } from "../interface.js";

export function create_modal(): Component {
    const outerWrapper = document.createElement("div");
    outerWrapper.classList.add("hidden");

    const bgDimmer = document.createElement("div");
    bgDimmer.classList.add("bg-black", "w-[100%]", "h-[100%]", "fixed", "top-0", "opacity-50", "z-[100]");
    outerWrapper.appendChild(bgDimmer);

    const wrapper = document.createElement("div");
    wrapper.id = "modal-content";
    wrapper.classList.add(
        "fixed", "top-1/2", "left-1/2",
        "-translate-x-1/2", "-translate-y-1/2",
        "bg-[#3e3e3e]", "w-[60%]", "h-[40%]", "z-[101]",
        "shadow-lg", "rounded"
    );
    outerWrapper.appendChild(wrapper);

    bgDimmer.addEventListener("click", () => {
        if (outerWrapper.classList.contains("hidden")) {
            outerWrapper.classList.remove("hidden");
        } else {
            outerWrapper.classList.add("hidden");
        }
    });
    return { str: outerWrapper.outerHTML, obj: outerWrapper };
}
