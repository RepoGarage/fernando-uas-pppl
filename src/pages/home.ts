import { create_default_button } from "../component/button.js";
import { navigate } from "../helper.js";

export function render_home() {
    const app = document.getElementById("app");
    if (app) {
        app.innerHTML = `
        <div class="w-full h-[350px] overflow-hidden">
                <p class="absolute font-bold font-mono z-3 w-full text-center p-1">You Found Me :P</p>
                <img src="./static/hero.jpg" class="w-full h-full object-cover relative transform transition-transform duration-300 z-4"/>
                <div class="relative bottom-32 left-0 w-full h-32 bg-gradient-to-t from-[#1e1e1e]/100 to-transparent"></div>
        </div>

        <div class="bg-[#1e1e1e] h-full">
            <h1 id="animated-tagline" class="text-red-300 text-6xl ml-7 mr-7 font-bold p-1">&nbsp</h1>
            <div id="yeah-boi" class="flex m-3 ml-7 font-mono"></div>

            <p class="ml-7 mr-7 w-[87%] md:w-[50%] text-justify">
                Experience the next level of connected living. Our smart home ecosystem integrates lighting, security, climate, and entertainment — all controlled from your phone or voice. Build routines, monitor your home in real-time, and enjoy peace of mind no matter where you are.
            </p>
            <p class="ml-7 mr-7 w-[87%] md:w-[50%] text-justify font-semibold">
                Live smarter, not harder.
            </p>
                <h1 id="gs-arrow" class="text-4xl text-center mt-[100px] cursor-pointer">↓</h1>
        </div>
        `;

        app.innerHTML += `
        <div class="bg-[#2e2e2e] h-full pt-[100px] pb-[100px] pb-4 mt-5 flex flex-row flex-wrap-reverse place-content-between">
            <div>
                <h1 id="gs" class="text-red-300 text-4xl ml-7 mr-7 mb-10 font-bold">Get Started</h1>
                <ol style="list-style: decimal; margin-left: 1.5rem;">
                    <li class="text-lg mt-4 ml-7 mr-7 p-0">Choose the smart devices you want to connect.</li>
                    <li class="text-lg mt-4 ml-7 mr-7 p-0">Download our app and link your home network.</li>
                    <li class="text-lg mt-4 ml-7 mr-7 p-0">Customize routines and control everything from your phone or voice.</li>
                </ol>
            </div>
            <div class="mt-20 mb-40 ml-auto mr-auto lg:mr-20 lg:ml-0 lg:mt-0 lg:mb-0 items-center text-center flex">
                <i class="text-8xl nf nf-fa-person_running"></i>
            </div>
        </div>
        `;

        const heroImage = app.querySelector('img');
        if (heroImage) {
            let timeout: number;
            window.addEventListener('scroll', () => {
                clearTimeout(timeout);

                timeout = setTimeout(() => {
                    const scrollPosition = window.pageYOffset;
                    heroImage.style.transform = `translateY(${scrollPosition * 0.15}px)`;
                }, 5);
            });
        }
    }

    const gsArrow = document.getElementById("gs-arrow");
    if (gsArrow) gsArrow.addEventListener("click", (_) => {
        window.location.hash = "gs";
    });

    const taglineElement = document.getElementById("animated-tagline");
    const taglineText = "Smart Living Starts Here.";
    let i = 0;
    let typingSpeed = 75;

    async function typeWriter() {
        if (taglineElement && taglineElement.innerText.length >= taglineText.length)
            taglineElement.textContent = taglineElement.innerText.slice(0, taglineElement.innerText.length - 1);
        if (i < taglineText.length) {
            if (i == 0 && taglineElement) taglineElement.textContent = "";
            if (taglineElement) {
                if (taglineElement && taglineElement.textContent?.endsWith('|')) {
                    taglineElement.textContent = taglineElement.textContent.slice(0, taglineElement.textContent.length - 1);
                    localStorage.setItem("done_typing", "1");
                }
                taglineElement.innerHTML += taglineText.charAt(i);
                taglineElement.innerHTML += '|';
            }
            i++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    const doneTyping = localStorage.getItem("done_typing");
    if (!Number(doneTyping)) {
        setTimeout(typeWriter, 500);
    } else {
        if (taglineElement) taglineElement.innerText = taglineText;
    }

    const yb = document.getElementById("yeah-boi");
    if (yb) {
        // yb.appendChild(create_default_button("[Learn More]",  () => { window.location.hash = "gs"; }).obj);
        yb.appendChild(create_default_button("[Get Started]", () => { window.location.hash = "gs"; }).obj);
    }
}
