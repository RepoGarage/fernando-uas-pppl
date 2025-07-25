import { addClassFromArray } from "../helper.js";
import { Component } from "../interface.js";

export function create_header(): Component {
    // ROOT
    const header = document.createElement("header");
    header.classList.add("bg-red-300", "min-h-20", "flex", "items-center", "p-2", "pl-4", "font-mono");

    // CONTAINER
    const container = document.createElement("div");
    container.classList.add("flex", "flex-row", "justify-between", "items-center", "w-full", "text-[#1e1e1e]");

    // COMPANY NAME
    const name = document.createElement("p");
    name.textContent = "Slope";
    name.classList.add("font-bold", "text-xl", "border", "border-solid", "border-[#1e1e1e]", "p-1")
    container.appendChild(name);

    // LINK CONTAINER
    const linkContainer = document.createElement("div");
    container.appendChild(linkContainer);
    const classForEntry = ["m-3", "hover:font-bold", "hover:text-[#2e2e2e]", "cursor-pointer", "text-lg", "transition-colors", "duration-200"];

    // HOME LINK
    const homeLink = document.createElement("a");
    addClassFromArray(homeLink, classForEntry);
    homeLink.setAttribute('data-link', "");
    homeLink.href = "/"
    homeLink.innerHTML = "Home";
    linkContainer.appendChild(homeLink);

    // SERVICE LINK
    const serviceLink = document.createElement("a");
    addClassFromArray(serviceLink, classForEntry);
    serviceLink.setAttribute('data-link', "");
    serviceLink.href = "/services"
    serviceLink.innerHTML = "Product";
    linkContainer.appendChild(serviceLink);

    // PORTOFOLIO LINK
    // const portofolioLink = document.createElement("a");
    // addClassFromArray(portofolioLink, classForEntry);
    // portofolioLink.setAttribute('data-link', "");
    // portofolioLink.href = "/portofolio"
    // portofolioLink.innerHTML = "Stories";
    // linkContainer.appendChild(portofolioLink);

    // ABOUT LINK
    const aboutLink = document.createElement("a");
    addClassFromArray(aboutLink, classForEntry);
    aboutLink.setAttribute('data-link', "");
    aboutLink.href = "/about";
    aboutLink.textContent = "About";
    linkContainer.appendChild(aboutLink);

    // ABOUT LINK
    const contactLink = document.createElement("a");
    addClassFromArray(contactLink, classForEntry);
    contactLink.setAttribute('data-link', "");
    contactLink.href = "/contact";
    contactLink.textContent = "Contact";
    linkContainer.appendChild(contactLink);

    // UPDATE
    header.appendChild(container);
    return { str: header.outerHTML, obj: header }
}
