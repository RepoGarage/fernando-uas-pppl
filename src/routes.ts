import { Route } from "./interface.js";
import { render_home } from "./pages/home.js";
import { render_about } from "./pages/about.js";

export const ROUTES: Route[] = [
    { title: "Slope Homepage", route: "/",      callback: () => { render_home(); } },
    { title: "Slope About", route: "/about", callback: () => { render_about(); } },
];

export function render_404() {
    const app = document.getElementById("app");
    document.title = "404: OMG";
    if (app) app.innerHTML = `<h1 class="text-center text-4xl p-5 font-bold"> 404 Not Found </h1>`;
}
