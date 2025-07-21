import { create_header } from "./component/header.js";
import { render_home } from "./pages/home.js";
import { Route } from "./interface.js";

const ROUTES: Route[] = [
    { route: "/",      callback: () => { render_home(); } },
    { route: "/about", callback: () => { render_about(); } },
];

function navigate(path: string) {
    window.history.pushState({}, '', path);
    render();
}

function render() {
    const path = window.location.pathname;
    const foundRoute = ROUTES.find(r => r.route === path);

    // Always render header
    const top = document.getElementById("top");
    const app = document.getElementById("app");
    if (top) top.innerHTML = create_header().str;
    if (app) app.innerHTML = "";

    if (foundRoute) {
        foundRoute.callback();
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
}

function render_about() {
}
