import { create_default_button } from "../component/button.js";
export function render_home() {
    const app = document.getElementById("app");
    if (app) {
        app.innerHTML = `
        <div class="w-full h-[300px] overflow-hidden">
                <img src="./static/hero.jpg" class="w-full h-full object-cover opacity-80"/>
                <div class="relative bottom-32 left-0 w-full h-32 bg-gradient-to-t from-[#1e1e1e]/100 to-transparent"></div>
        </div>
        <h1 class="text-red-300 text-5xl ml-7 mr-7 font-bold">Smart Living Starts Here</h1>
        <div id="yeah-boi" class="flex m-3 ml-7 font-mono"></div>
        `;
    }
    const yb = document.getElementById("yeah-boi");
    if (yb) {
        yb.appendChild(create_default_button("Learn More", () => {console.log("clicked");}).obj);
        yb.appendChild(create_default_button("Start Here", () => {console.log("clicked");}).obj);
    }
}
