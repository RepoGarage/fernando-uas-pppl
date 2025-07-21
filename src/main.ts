import { create_header } from "./component/header.js";
import { render_home } from "./pages/home.js";
import { Route } from "./interface.js";

const ROUTES: Route[] = [
    { title: "Slope Homepage", route: "/",      callback: () => { render_home(); } },
    { title: "Slope About", route: "/about", callback: () => { render_about(); } },
];

function navigate(path: string) {
    localStorage.setItem("done_typing", "0");
    window.history.pushState({}, '', path);
    render();
}

function render() {
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

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener('click', (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const link = target.closest(`a[data-link]`) as HTMLAnchorElement | null;
        if (link && link.origin === window.location.origin) {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (href) navigate(href);
        }
    });
    window.addEventListener('popstate', render);
    render();
});

function render_404() {
    const app = document.getElementById("app");
    document.title = "404: OMG";
    if (app) app.innerHTML = `<h1 class="text-center text-4xl p-5 font-bold"> 404 Not Found </h1>`;
}

function render_about() {
}
