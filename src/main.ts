import { create_header } from "./component/header.js";
import { render, navigate } from "./helper.js";

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
