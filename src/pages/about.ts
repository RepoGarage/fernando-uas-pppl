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
    `;
    app.appendChild(newStyle);

    const wrapper = document.createElement("div");
    wrapper.classList.add("p-6", "bg-[#1e1e1e]", "text-white", "space-y-20");

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
            "border-l-4", "border-red-500", "pl-4", "opacity-0", "translate-x-[-20px]", "transition-all", "duration-700", "mt-5"
        );
        box.innerHTML = `<p class="text-3xl font-semibold text-red-300">${item.year}</p>
        <p class="ml-1">${item.text}</p>
        <p class="ml-1 text-sm text-gray-400 italic">${item.desc}</p>`;
        timelineContainer.appendChild(box);
    }

    // THIS DIDNT WORK //
    // IntersectionObserver to animate timeline
    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0", "translate-x-[-20px]");
                entry.target.classList.add("opacity-100", "translate-x-0");
            }
        }
    }, { threshold: 0.1 });

    setTimeout(() => {
        timelineContainer.childNodes.forEach(el => observer.observe(el as Element));
    }, 100);

    timeline.appendChild(timelineContainer);
    wrapper.appendChild(timeline);

    // --- 2. Team Member Cards ---
    const teamSection = document.createElement("div");
    teamSection.classList.add("bg-[#2e2e2e]", "p-5", "rounded-xl");
    teamSection.innerHTML = `<h2 class="text-3xl font-bold text-center mb-8 text-red-300">Meet the Team</h2>`;
    const teamGrid = document.createElement("div");
    teamGrid.classList.add("grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "gap-8");

    const team = [
        { name: "Me", role: "CEO" },
        { name: "Myself", role: "CTO" },
        { name: "Tyself", role: "CMO" }
    ];

    for (const member of team) {
        const card = document.createElement("div");
        card.classList.add("bg-[#2e2e2e]", "rounded-xl", "p-6", "cursor-pointer", "group", "relative", "perspective");

        card.innerHTML = `
        <div class="transition-transform duration-500 group-hover:rotate-y-180 transform-style-preserve-3d relative w-full h-40">
        <div class="absolute inset-0 backface-hidden flex flex-col justify-center items-center">
        <p class="text-xl font-bold">${member.name}</p>
        <p>${member.role}</p>
        </div>
        <div class="absolute inset-0 rotate-y-180 backface-hidden flex justify-center items-center bg-red-500 text-black font-bold">
        Contact me!
        </div>
        </div>
        `;
        teamGrid.appendChild(card);
    }

    teamSection.appendChild(teamGrid);
    wrapper.appendChild(teamSection);

    // THIS DIDNT WORK END //

    // --- 3. Company Statistics with Animated Counters ---
    const stats = document.createElement("div");
    stats.classList.add("text-center", "space-y-8");

    stats.innerHTML = `
    <h2 class="text-3xl font-bold">Our Impact</h2>
    <div class="flex justify-around text-2xl font-mono">
    <div><p id="stat-users">0</p><p>Users</p></div>
    <div><p id="stat-downloads">0</p><p>Downloads</p></div>
    <div><p id="stat-teams">0</p><p>Teams</p></div>
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
    valuesSection.innerHTML = `<h2 class="text-3xl font-bold text-center mb-8">Our Values</h2>`;
    const valueGrid = document.createElement("div");
    valueGrid.classList.add("grid", "sm:grid-cols-2", "md:grid-cols-3", "gap-6");

    for (const val of values) {
        const box = document.createElement("div");
        box.classList.add("bg-[#2e2e2e]", "p-6", "rounded-lg", "hover:bg-red-500", "transition-colors");
        box.innerHTML = `<p class="text-xl font-bold">${val.title}</p><p class="mt-2">${val.desc}</p>`;
        valueGrid.appendChild(box);
    }

    valuesSection.appendChild(valueGrid);
    wrapper.appendChild(valuesSection);

    // --- Attach to DOM ---
    app.appendChild(wrapper);
}

