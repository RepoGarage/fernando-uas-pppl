import { create_default_button, create_button } from "../component/button.js";
import { create_card } from "../component/card.js";
import { addClassFromArray, navigate } from "../helper.js";
import { counterData } from "../data/counter.js";
// import { reviewData } from "../data/reviews.js";

export async function render_home() {
    const app = document.getElementById("app");
    if (app) {
        // Top header that include until the arrow
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

        // Get started section
        app.innerHTML += `
        <div class="bg-[#2e2e2e] h-full pt-[90px] pb-[100px] pb-4 mt-5 flex flex-row flex-wrap-reverse place-content-between">
            <div id="gs-section">
                <h1 id="gs" class="text-red-300 text-4xl ml-7 mr-7 mb-10 font-bold">Get Started</h1>
                <ol style="list-style: decimal; margin-left: 1.5rem;">
                    <li class="text-lg mt-4 ml-7 mr-7 p-0">Choose the smart devices you want to connect.</li>
                    <li class="text-lg mt-4 ml-7 mr-7 p-0">Download our app and link your home network.</li>
                    <li class="text-lg mt-4 ml-7 mr-7 p-0">Customize routines and control everything from your phone or voice.</li>
                </ol>
            </div>
            <div class="mt-20 mb-40 ml-auto mr-auto lg:mr-20 lg:ml-0 md:mt-0 md:mb-0 items-center text-center flex">
                <i class="text-8xl nf nf-fa-person_running"></i>
            </div>
        </div>
        `;

        // INFO START HERE //
        // Supported brand and device
        app.innerHTML += `
        <div class="h-full pt-[90px] pb-[100px] pb-4 mt-5 flex flex-col flex-wrap-reverse place-content-center text-center items-center">
            <div id="gs-section">
                <p id="bi" class="text-red-300 text-xl md:text-4xl ml-7 mr-7 mb-5 font-bold">Supported Brand & Device</p>
                <p id="supported" class="text-white text-7xl md:text-9xl ml-7 mr-7 mb-5 font-bold">69.420*</p>
                <p class="text-xs mb-4 md:text-base text-gray-500"> From: Vibr*ator, Philips, Samsung, Polytron and other.</p>
            </div>
            <img class="relative w-24 h-24 m-2" src="./static/hug.gif"/>
        </div>
        `;

        // Card section: Feature
        app.innerHTML += `
        <div class="bg-[#2e2e2e] h-full pt-[90px] pb-[100px] pb-4 mt-5">
            <p id="bi" class="text-red-300 text-xl md:text-4xl ml-7 mr-7 mb-10 font-bold text-center">Feature</p>
            <div id="card-feature" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center lg:mx-auto lg:w-fit">
            </div>
        </div>
        `;

        // Card section
        // app.innerHTML += `
        // <div class="bg-[#2e2e2e] h-full pt-[90px] pb-[100px] pb-4 mt-5">
        //     <p id="bi" class="text-red-300 text-xl md:text-4xl ml-7 mr-7 mb-10 font-bold text-center">What people says</p>
        //     <div id="card-section" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto w-fit">
        //     </div>
        // </div>
        // `;

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

    const featureSet = [
        {
            name: "It's Just a Talk",
            icon: "nf-md-microphone",
            desc: "Control your appliances simply by speaking."
        },
        {
            name: "Smart Scheduling",
            icon: "nf-md-calendar",
            desc: "Automate your lights, climate, and routines with customizable schedules."
        },
        {
            name: "Secure Monitoring",
            icon: "nf-md-shield_home",
            desc: "Keep your home safe with real-time monitoring and instant alerts."
        },
        // {
        //     name: "Energy Efficiency",
        //     icon: "nf-md-flash",
        //     desc: "Save on bills with intelligent energy usage tracking and suggestions."
        // }
    ];

    const cardSectionElm = document.getElementById("card-feature");
    for (let i = 0; i < featureSet.length; i++) {
        const current = featureSet[i];
        if (cardSectionElm) {
            const newCard = create_card().obj;
            newCard.classList.add("flex", "flex-col", "place-content-between", "text-center", "font-bold", "m-5", "p-3");

            const cardName = document.createElement("p");
            cardName.textContent = current.name;
            cardName.classList.add("text-red-300", "text-lg", "font-bold");
            newCard.appendChild(cardName);

            const cardIcon = document.createElement("i");
            cardIcon.classList.add("nf", current.icon, "text-3xl", "pt-2", "text-white", "text-shadow-lg/30");
            newCard.appendChild(cardIcon);

            const cardDescription = document.createElement("p");
            cardDescription.textContent = current.desc;
            cardDescription.classList.add("pt-3", "p-1", "text-balance", "font-mono", "text-sm", "font-medium");
            newCard.appendChild(cardDescription);

            cardSectionElm.appendChild(newCard);
        }
    }

    // const cardSectionElm = document.getElementById("card-feature");
    // for (let i = 0; i < reviewData.length; i++) {
    //     const c = reviewData[i];
    //     if (cardSectionElm) {
    //         const newCard = create_card().obj;
    //         newCard.classList.add("flex", "flex-col", "place-content-between");
    //
    //         const upperDiv = document.createElement("div");
    //
    //         const cardName = document.createElement("p");
    //         cardName.textContent = c.name;
    //         cardName.classList.add("text-red-300");
    //         upperDiv.appendChild(cardName);
    //
    //         const cardReview = document.createElement("p");
    //         cardReview.textContent = c.review;
    //         cardReview.classList.add("pt-3", "p-1", "text-balance", "font-mono");
    //         upperDiv.appendChild(cardReview);
    //
    //         newCard.appendChild(upperDiv);
    //
    //         const lowerDiv = document.createElement("div");
    //         lowerDiv.classList.add("flex", "flex-row", "text-center", "items-center", "place-content-center");
    //
    //         const ratingIcon = document.createElement("i");
    //         ratingIcon.classList.add("nf", "nf-md-star", "text-base", "pt-2");
    //         lowerDiv.appendChild(ratingIcon);
    //
    //         const cardRating = document.createElement("p");
    //         cardRating.textContent = `${String(c.score)}/5`;
    //         cardRating.classList.add("pl-2", "pt-3", "p-1", "text-balance", "font-mono");
    //         lowerDiv.appendChild(cardRating);
    //
    //         newCard.appendChild(lowerDiv);
    //
    //         newCard.classList.add("text-center", "font-bold");
    //         cardSectionElm.appendChild(newCard);
    //     }
    // }

    const supportedElm = document.getElementById("supported");
    if (supportedElm) {
        const formatted = new Intl.NumberFormat('de-DE').format(counterData.counter);
        supportedElm.innerText = String(formatted);
    }

    const gsArrow = document.getElementById("gs-arrow");
    if (gsArrow) gsArrow.addEventListener("click", (_) => {
        window.location.hash = "gs";
    });

    const gsSection = document.getElementById("gs-section");
    const gsnButton = create_button("Get Started FR Now", () => { navigate("/blabla"); }).obj
    const newClass = ["mt-7", "ml-7"];
    addClassFromArray(gsnButton, newClass);
    gsSection?.appendChild(gsnButton);

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
        yb.appendChild(create_default_button("[More Info]",  () => { window.location.hash = "bi"; }).obj);
        yb.appendChild(create_default_button("[Get Started]", () => { window.location.hash = "gs"; }).obj);
    }
}
