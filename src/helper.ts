import { ROUTES, render_404 } from "./routes.js";
import { create_header } from "./component/header.js";

export function addClassFromArray(elm: HTMLElement, c: string[]) {
    for (let a in c) {
        elm.classList.add(c[a]);
    }
}

export function navigate(path: string) {
    localStorage.setItem("done_typing", "0");
    window.history.pushState({}, '', path);
    window.scrollTo(0,0);
    render();
}

export function render() {
    const path = window.location.pathname;
    const foundRoute = ROUTES.find(r => r.route === path);

    // Always render header
    const top = document.getElementById("top");
    const app = document.getElementById("app");
    if (top && top.innerHTML.length <= 0) top.innerHTML = create_header().str;
    if (app) app.innerHTML = "";

    if (foundRoute) {
        foundRoute.callback();
        document.title = foundRoute.title;
    } else {
        render_404();
    }
}
