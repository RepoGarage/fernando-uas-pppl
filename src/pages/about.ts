import { addClassFromArray } from "../helper.js";
import { navigate } from "../helper.js";

export function render_about() {
    const app = document.getElementById("app");
    if (!app) return;

    const newStyle = document.createElement("style");
    newStyle.innerHTML = `
    .perspective {
        perspective: 1000px;
    }
    .transform-style-preserve-3d {
        transform-style: preserve-3d;
    }
    .backface-hidden {
        backface-visibility: hidden;
    }
    .rotate-y-180 {
        transform: rotateY(180deg);
    }
    .group:hover .group-hover\\:rotate-y-180 {
        transform: rotateY(180deg);
    }
    `;
    app.appendChild(newStyle);

    const wrapper = document.createElement("div");
    wrapper.classList.add("p-6", "bg-[#1e1e1e]", "text-[#fafafa]", "space-y-20");

    // --- 1. Company Story with Timeline ---
    const timeline = document.createElement("div");
    timeline.classList.add("space-y-10");

    const timelineTitle = document.createElement("h2");
    timelineTitle.textContent = "Our Journey";
    timelineTitle.classList.add("text-4xl", "font-bold", "text-center", "text-red-300", "mt-2");
    timeline.appendChild(timelineTitle);

    const timelineItems = [
        { year: "2018", text: "Our Company was founded.",         desc: "Wow never thought of that aren't you 😎, i know man we are awesome!" },
        { year: "2019", text: "Our own first product launched.",  desc: "👏👏👏 Congratulations to our first product 👏👏👏" },
        { year: "2021", text: "Expanded to global market.",       desc: "Investor actually agree with our product and value 😱." },
        { year: "2024", text: "Reached 1M users.",                desc: "🎂 1M : Good run boys." },
        { year: "2025", text: "We archive nothing this year 😔.", desc: "This is so sad, Alexa play despacito 😭." },
    ];

    const timelineContainer = document.createElement("div");
    timelineContainer.classList.add("flex", "flex-col", "gap-6");

    for (const item of timelineItems) {
        const box = document.createElement("div");
        box.classList.add(
            "border-l-4", "border-red-500", "pl-4", "opacity-0", "translate-x-[-20px]", "transition-all", "duration-700", "mt-5",
        );
        box.innerHTML = `<p class="text-3xl font-semibold text-red-300">${item.year}</p>
        <p class="ml-1">${item.text}</p>
        <p class="ml-1 text-sm text-gray-400 italic">${item.desc}</p>`;
        timelineContainer.appendChild(box);
    }

    // Fixed IntersectionObserver to animate timeline
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0", "translate-x-[-20px]");
                entry.target.classList.add("opacity-100", "translate-x-0");
            }
        });
    }, { threshold: 0.1 });

    setTimeout(() => {
        // Fixed: Properly access child nodes and cast them
        Array.from(timelineContainer.children).forEach(el => observer.observe(el));
    }, 100);

    timeline.appendChild(timelineContainer);
    wrapper.appendChild(timeline);

    // --- 2. Team Member Cards --- (Fixed section)
    const teamSection = document.createElement("div");
    teamSection.classList.add("bg-[#2e2e2e]", "p-5", "rounded-xl");
    teamSection.innerHTML = `<h2 class="text-4xl font-bold text-center mb-8 text-red-300">Meet the Team</h2>`;
    const teamGrid = document.createElement("div");
    teamGrid.classList.add("grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "gap-8");

    const team = [
        { name: "Me",     role: "CEO", hidden_info: "I" },
        { name: "Myself", role: "CEO of the CEO", hidden_info: "use" },
        { name: "Tyself", role: "CEO of the CEO of the CEO", hidden_info: "Arch BTW." }
    ];

    for (const member of team) {
        const card = document.createElement("div");
        card.classList.add("perspective", "bg-[#2e2e2e]", "rounded-xl", "p-6", "cursor-pointer", "group", "relative");

        // Fixed: Correct class application for the flip card
        card.innerHTML = `
        <div class="transition-transform duration-500 transform-style-preserve-3d relative w-full h-40 group-hover:rotate-y-180">
            <div class="absolute inset-0 backface-hidden flex flex-col justify-center items-center">
                <p class="text-xl font-bold">${member.name}</p>
                <p>${member.role}</p>
            </div>
            <div class="absolute inset-0 backface-hidden rotate-y-180 flex justify-center items-center bg-red-300 text-[#1e1e1e] font-bold rounded-xl">
                ${member.hidden_info}
            </div>
        </div>
        `;
        teamGrid.appendChild(card);
    }

    teamSection.appendChild(teamGrid);
    wrapper.appendChild(teamSection);

    // --- 3. Company Statistics with Animated Counters ---
    const stats = document.createElement("div");
    stats.classList.add("text-center", "mt-5", "bg-[#2e2e2e]", "p-10", "pb-12", "rounded-lg");

    stats.innerHTML = `
    <h2 class="text-4xl font-bold text-red-300 mb-10">Our Impact</h2>
    <div class="flex justify-around text-2xl font-mono pt-10 pb-10">
        <div><p id="stat-users">0</p>     <p class="font-bold text-red-300 text-xl">Users</p></div>
        <div><p id="stat-downloads">0</p> <p class="font-bold text-red-300 text-xl">Downloads</p></div>
        <div><p id="stat-teams">0</p>     <p class="font-bold text-red-300 text-xl">Teams</p></div>
    </div>
    `;

    wrapper.appendChild(stats);

    // Animate counters
    const animateCount = (id: string, target: number) => {
        let count = 0;
        const step = Math.ceil(target / 50);
        const interval = setInterval(() => {
            count += step;
            if (count >= target) {
                count = target;
                clearInterval(interval);
            }
            const el = document.getElementById(id);
            if (el) el.textContent = count.toString();
        }, 50);
    };

    setTimeout(() => {
        animateCount("stat-users", 1000000);
        animateCount("stat-downloads", 500000);
        animateCount("stat-teams", 120);
    }, 100);

    // --- 4. Company Values ---
    const values = [
        { title: "Innovation", desc: "We embrace new ideas and technology." },
        { title: "Integrity", desc: "We operate with honesty and fairness." },
        { title: "Collaboration", desc: "We believe in teamwork and partnership." }
    ];

    const valuesSection = document.createElement("div");
    valuesSection.innerHTML = `<h2 class="text-4xl font-bold text-center mb-8 text-red-300 pb-2">Our Values</h2>`;
    const valueGrid = document.createElement("div");
    valueGrid.classList.add("grid", "sm:grid-cols-2", "md:grid-cols-3", "gap-6", "m-10");

    for (const val of values) {
        const box = document.createElement("div");
        box.classList.add("bg-[#2e2e2e]", "p-6", "rounded-lg", "hover:bg-red-300", "hover:text-[#1e1e1e]", "transition-all", "transition-colors", "duration-300", "cursor-default");
        box.innerHTML = `<p class="text-xl font-bold">${val.title}</p><p class="mt-2">${val.desc}</p>`;
        valueGrid.appendChild(box);
    }

    valuesSection.appendChild(valueGrid);
    wrapper.appendChild(valuesSection);


    const bwrapper = document.createElement("div");
    bwrapper.classList.add("text-center", "w-full");
    const classForEntry = ["p-4", "hover:text-[#2e2e2e]", "hover:bg-red-300", "cursor-pointer", "text-lg", "transition-colors", "duration-200", "text-center"];
    const portofolioLink = document.createElement("button");
    addClassFromArray(portofolioLink, classForEntry);
    portofolioLink.addEventListener("click",
        () => { navigate("/portofolio"); }
    )
    portofolioLink.innerHTML = "Checkout more of our Stories here.";

    bwrapper.appendChild(portofolioLink);
    wrapper.appendChild(bwrapper);

    // --- Attach to DOM ---
    app.appendChild(wrapper);
}
