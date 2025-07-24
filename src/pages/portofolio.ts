export function render_portofolio() {
    const app = document.getElementById("app");
    if (!app) return;

    // Main container
    const container = document.createElement("div");
    container.classList.add("bg-[#1e1e1e]", "text-[#fafafa]", "min-h-screen", "p-8");

    // Portfolio header
    const header = createPortfolioHeader();
    container.appendChild(header);

    // Project data with all necessary details
    const projects = [
        {
            id: 1,
            title: "Smart City Dashboard",
            category: "web-app",
            industry: "government",
            thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            images: [
                "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            ],
            description: "A comprehensive dashboard for city administrators to monitor and manage various urban systems including traffic, utilities, and public services in real-time.",
            challenge: "The client needed a way to visualize complex city data from multiple sources in an intuitive interface that could be used by technical and non-technical staff alike.",
            solution: "We developed a modular dashboard with customizable widgets and visualization tools, integrating data from various city systems through a unified API layer.",
            technologies: ["React", "D3.js", "Node.js", "MongoDB", "WebSockets"],
            testimonial: {
                text: "The dashboard revolutionized how we manage our city operations. The intuitive interface allows staff at all levels to make data-driven decisions quickly.",
                author: "Sarah Johnson",
                position: "City Technology Director",
                image: "https://randomuser.me/api/portraits/women/45.jpg"
            }
        },
        {
            id: 2,
            title: "HealthTrack Mobile App",
            category: "mobile-app",
            industry: "healthcare",
            thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            images: [
                "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            ],
            description: "A mobile application that helps patients track their health metrics, medication schedules, and connect with healthcare providers remotely.",
            challenge: "The healthcare provider wanted to reduce in-person visits for routine monitoring and improve patient engagement with their treatment plans.",
            solution: "We created a user-friendly mobile app that syncs with medical devices, sends reminders, and provides secure video consultation capabilities.",
            technologies: ["React Native", "Firebase", "WebRTC", "Swift", "Kotlin"],
            testimonial: {
                text: "Patient compliance with treatment plans improved by 78% after implementing the HealthTrack app. Our staff can now focus on patients who need in-person care.",
                author: "Dr. Michael Chen",
                position: "Medical Director",
                image: "https://randomuser.me/api/portraits/men/22.jpg"
            }
        },
        {
            id: 3,
            title: "E-Commerce Platform Redesign",
            category: "web-app",
            industry: "retail",
            thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            images: [
                "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1524750205628-c743046f4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            ],
            description: "Complete overhaul of an established online retailer's website with focus on mobile responsiveness, user experience, and conversion optimization.",
            challenge: "The client was experiencing high cart abandonment rates and poor mobile conversion despite having quality products and competitive prices.",
            solution: "We redesigned the user journey with a focus on simplicity, implemented one-click purchasing, and created a responsive design that works seamlessly across all devices.",
            technologies: ["Vue.js", "Nuxt.js", "Shopify API", "AWS", "Stripe"],
            testimonial: {
                text: "Our conversion rate increased by 43% and mobile sales doubled within three months of launching the redesigned platform.",
                author: "Alex Rivera",
                position: "E-Commerce Director",
                image: "https://randomuser.me/api/portraits/men/67.jpg"
            }
        },
        {
            id: 4,
            title: "Augmented Reality Product Viewer",
            category: "mobile-app",
            industry: "furniture",
            thumbnail: "https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            images: [
                "https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            ],
            description: "An AR application allowing customers to visualize furniture products in their own homes before making a purchase decision.",
            challenge: "The furniture retailer had high return rates because customers couldn't accurately visualize how products would look in their spaces.",
            solution: "We developed an AR application that uses the phone's camera to place virtual furniture in the customer's environment with accurate sizing and lighting.",
            technologies: ["ARKit", "ARCore", "Unity", "3D Modeling", "iOS/Android Development"],
            testimonial: {
                text: "Returns dropped by 35% and customer satisfaction scores improved significantly. The AR feature has become our most valuable sales tool.",
                author: "Emma Thompson",
                position: "Head of Customer Experience",
                image: "https://randomuser.me/api/portraits/women/33.jpg"
            }
        },
        {
            id: 5,
            title: "Financial Analytics Dashboard",
            category: "web-app",
            industry: "finance",
            thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            images: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            ],
            description: "A sophisticated analytics platform for financial advisors to track investments, analyze market trends, and generate client reports.",
            challenge: "The investment firm needed a way to consolidate data from multiple financial sources and provide actionable insights to their advisors.",
            solution: "We built a custom analytics platform that integrates with various financial APIs, implements predictive models, and generates comprehensive visualizations.",
            technologies: ["Angular", "TypeScript", "Python", "TensorFlow", "SQL Database"],
            testimonial: {
                text: "The analytics platform has given our advisors a competitive edge. They can now provide clients with insights and recommendations backed by comprehensive data analysis.",
                author: "Jonathan Miller",
                position: "Chief Investment Officer",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
            }
        },
        {
            id: 6,
            title: "Supply Chain Management System",
            category: "enterprise",
            industry: "logistics",
            thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            images: [
                "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            ],
            description: "An enterprise-level system for tracking inventory, managing suppliers, optimizing shipping routes, and predicting supply chain disruptions.",
            challenge: "The global manufacturing company was struggling with inventory management and needed better visibility across their international supply chain.",
            solution: "We implemented a comprehensive system with IoT integration for real-time tracking, AI for demand forecasting, and blockchain for secure supplier transactions.",
            technologies: ["Java", "Spring Boot", "Hyperledger Fabric", "IoT Sensors", "AI/ML"],
            testimonial: {
                text: "We've reduced inventory costs by 23% and improved delivery times by 18% since implementing this system. The predictive analytics have helped us avoid several potential supply chain disruptions.",
                author: "Patricia Okoye",
                position: "Supply Chain Director",
                image: "https://randomuser.me/api/portraits/women/67.jpg"
            }
        },
    ];

    // Categories and Industries for filtering
    const categories = [
        { id: "all", name: "All Projects" },
        { id: "web-app", name: "Web Applications" },
        { id: "mobile-app", name: "Mobile Apps" },
        { id: "enterprise", name: "Enterprise Systems" }
    ];

    const industries = [
        { id: "all", name: "All Industries" },
        { id: "government", name: "Government" },
        { id: "healthcare", name: "Healthcare" },
        { id: "retail", name: "Retail" },
        { id: "furniture", name: "Furniture" },
        { id: "finance", name: "Finance" },
        { id: "logistics", name: "Logistics" }
    ];

    // Filter section
    const filterSection = createFilterSection(categories, industries);
    container.appendChild(filterSection);

    // Portfolio grid
    const portfolioGrid = createPortfolioGrid(projects);
    container.appendChild(portfolioGrid);

    // Add project detail modal container (hidden initially)
    const modalContainer = createModalContainer();
    container.appendChild(modalContainer);

    // Add lightbox gallery container (hidden initially)
    const lightboxContainer = createLightboxContainer();
    container.appendChild(lightboxContainer);

    // Append everything to the app
    app.appendChild(container);

    // Initialize event listeners for filtering, modals and lightbox
    initializeEventListeners(projects);
}

function createPortfolioHeader(): HTMLElement {
    const header = document.createElement("header");
    header.classList.add("mb-12", "text-center");

    const title = document.createElement("h1");
    title.textContent = "Our Portfolio";
    title.classList.add("text-4xl", "font-bold", "mb-4", "text-red-300");

    const subtitle = document.createElement("p");
    subtitle.textContent = "Explore our latest projects and success stories";
    subtitle.classList.add("text-xl", "max-w-2xl", "mx-auto", "text-gray-300");

    header.appendChild(title);
    header.appendChild(subtitle);

    return header;
}

function createFilterSection(
    categories: Array<{ id: string; name: string }>,
    industries: Array<{ id: string; name: string }>
): HTMLElement {
    const filterSection = document.createElement("section");
    filterSection.classList.add("mb-8");

    const filterContainer = document.createElement("div");
    filterContainer.classList.add("flex", "flex-wrap", "gap-4", "justify-center", "mb-8");

    // Category filters
    const categoryGroup = document.createElement("div");
    categoryGroup.classList.add("flex", "gap-2", "flex-wrap", "justify-center");

    const categoryLabel = document.createElement("span");
    categoryLabel.textContent = "Category:";
    categoryLabel.classList.add("text-gray-400", "self-center");
    categoryGroup.appendChild(categoryLabel);

    categories.forEach(category => {
        const button = document.createElement("button");
        button.textContent = category.name;
        button.dataset.category = category.id;
        button.classList.add(
            "px-3", "py-1", "rounded", "bg-[#333]", "hover:bg-red-300", 
            "hover:text-[#1e1e1e]", "transition-colors", "text-sm"
        );

        // Set "all" as active by default
        if (category.id === "all") {
            button.classList.add("bg-red-300");
            button.classList.add("text-[#1e1e1e]");
        }

        categoryGroup.appendChild(button);
    });

    filterContainer.appendChild(categoryGroup);

    // Industry filters
    const industryGroup = document.createElement("div");
    industryGroup.classList.add("flex", "gap-2", "flex-wrap", "justify-center");

    const industryLabel = document.createElement("span");
    industryLabel.textContent = "Industry:";
    industryLabel.classList.add("text-gray-400", "self-center");
    industryGroup.appendChild(industryLabel);

    industries.forEach(industry => {
        const button = document.createElement("button");
        button.textContent = industry.name;
        button.dataset.industry = industry.id;
        button.classList.add(
            "px-3", "py-1", "rounded", "bg-[#333]", "hover:bg-red-300", 
            "hover:text-[#1e1e1e]", "transition-colors", "text-sm"
        );

        // Set "all" as active by default
        if (industry.id === "all") {
            button.classList.add("bg-red-300");
            button.classList.add("text-[#1e1e1e]");
        }

        industryGroup.appendChild(button);
    });

    filterContainer.appendChild(industryGroup);
    filterSection.appendChild(filterContainer);

    return filterSection;
}

function createPortfolioGrid(projects: any[]): HTMLElement {
    const gridContainer = document.createElement("div");
    gridContainer.id = "portfolio-grid";
    gridContainer.classList.add(
        "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3",
        "gap-8", "mb-16"
    );

    projects.forEach(project => {
        const card = createProjectCard(project);
        gridContainer.appendChild(card);
    });

    return gridContainer;
}

function createProjectCard(project: any): HTMLElement {
    const card = document.createElement("div");
    card.classList.add(
        "bg-[#2a2a2a]", "rounded-lg", "overflow-hidden", 
        "transition-transform", "hover:scale-[1.02]", "shadow-lg",
        "project-card"
    );
    card.dataset.id = project.id.toString();
    card.dataset.category = project.category;
    card.dataset.industry = project.industry;

    // Project thumbnail with overlay
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("relative", "overflow-hidden", "h-60");

    const image = document.createElement("img");
    image.src = project.thumbnail;
    image.alt = project.title;
    image.classList.add("w-full", "h-full", "object-cover", "transition-transform", "hover:scale-110");

    const overlay = document.createElement("div");
    overlay.classList.add(
        "absolute", "inset-0", "bg-black", "bg-opacity-50", "opacity-0",
        "hover:opacity-100", "transition-opacity", "flex", "items-center", 
        "justify-center", "gap-4"
    );

    // View details button
    const detailsButton = document.createElement("button");
    detailsButton.classList.add(
        "px-4", "py-2", "bg-red-300", "rounded", "text-white",
        "hover:bg-red-200", "transition-colors", "view-project"
    );
    detailsButton.textContent = "View Details";
    detailsButton.dataset.id = project.id.toString();

    // View gallery button
    const galleryButton = document.createElement("button");
    galleryButton.classList.add(
        "px-4", "py-2", "bg-[#333]", "rounded", "text-white",
        "hover:bg-[#444]", "transition-colors", "view-gallery"
    );
    galleryButton.textContent = "View Gallery";
    galleryButton.dataset.id = project.id.toString();

    overlay.appendChild(detailsButton);
    overlay.appendChild(galleryButton);
    imageContainer.appendChild(image);
    imageContainer.appendChild(overlay);
    card.appendChild(imageContainer);

    // Project info
    const info = document.createElement("div");
    info.classList.add("p-4");

    const title = document.createElement("h3");
    title.textContent = project.title;
    title.classList.add("text-xl", "font-bold", "mb-2");

    const categorySpan = document.createElement("span");
    categorySpan.classList.add("inline-block", "bg-red-200", "text-[#1e1e1e]", "text-xs", "px-2", "py-1", "rounded", "mr-2");
    categorySpan.textContent = getCategoryName(project.category);

    const industrySpan = document.createElement("span");
    industrySpan.classList.add("inline-block", "bg-[#444]", "text-white", "text-xs", "px-2", "py-1", "rounded");
    industrySpan.textContent = getIndustryName(project.industry);

    const description = document.createElement("p");
    description.textContent = truncateText(project.description, 100);
    description.classList.add("text-gray-300", "mt-3");

    info.appendChild(title);
    info.appendChild(categorySpan);
    info.appendChild(industrySpan);
    info.appendChild(description);
    card.appendChild(info);

    return card;
}

function createModalContainer(): HTMLElement {
    const modalOverlay = document.createElement("div");
    modalOverlay.id = "project-modal-overlay";
    modalOverlay.classList.add(
        "fixed", "inset-0", "bg-black", "bg-opacity-80", "z-50",
        "hidden", "flex", "items-center", "justify-center", "p-4"
    );

    const modalContent = document.createElement("div");
    modalContent.id = "project-modal-content";
    modalContent.classList.add(
        "bg-[#2a2a2a]", "rounded-lg", "max-w-4xl", "max-h-[90vh]",
        "w-full", "overflow-y-auto", "relative"
    );

    const closeButton = document.createElement("button");
    closeButton.id = "close-modal";
    closeButton.classList.add(
        "absolute", "top-4", "right-4", "text-gray-400", 
        "hover:text-white", "text-2xl", "z-10", "w-8", "h-8",
        "flex", "items-center", "justify-center", "bg-[#333]", "rounded-full"
    );
    closeButton.innerHTML = "×";

    modalContent.appendChild(closeButton);
    modalOverlay.appendChild(modalContent);

    return modalOverlay;
}

function createLightboxContainer(): HTMLElement {
    const lightboxOverlay = document.createElement("div");
    lightboxOverlay.id = "lightbox-overlay";
    lightboxOverlay.classList.add(
        "fixed", "inset-0", "bg-black", "z-50",
        "hidden", "flex", "items-center", "justify-center"
    );

    const lightboxContent = document.createElement("div");
    lightboxContent.classList.add("relative", "w-full", "max-w-5xl");

    // Close button
    const closeButton = document.createElement("button");
    closeButton.id = "close-lightbox";
    closeButton.classList.add(
        "absolute", "top-4", "right-4", "text-white", 
        "hover:text-gray-300", "text-3xl", "z-10", "w-10", "h-10",
        "flex", "items-center", "justify-center", "bg-black", "bg-opacity-50", "rounded-full"
    );
    closeButton.innerHTML = "×";
    lightboxContent.appendChild(closeButton);

    // Navigation buttons
    const prevButton = document.createElement("button");
    prevButton.id = "prev-image";
    prevButton.classList.add(
        "absolute", "left-2", "top-1/2", "-translate-y-1/2", "text-white", 
        "hover:text-gray-300", "text-4xl", "z-10", "w-12", "h-12",
        "flex", "items-center", "justify-center", "bg-black", "bg-opacity-50", "rounded-full"
    );
    prevButton.innerHTML = "‹";
    lightboxContent.appendChild(prevButton);

    const nextButton = document.createElement("button");
    nextButton.id = "next-image";
    nextButton.classList.add(
        "absolute", "right-2", "top-1/2", "-translate-y-1/2", "text-white", 
        "hover:text-gray-300", "text-4xl", "z-10", "w-12", "h-12",
        "flex", "items-center", "justify-center", "bg-black", "bg-opacity-50", "rounded-full"
    );
    nextButton.innerHTML = "›";
    lightboxContent.appendChild(nextButton);

    // Image container
    const imageContainer = document.createElement("div");
    imageContainer.id = "lightbox-image-container";
    imageContainer.classList.add("flex", "items-center", "justify-center", "h-full");
    
    const image = document.createElement("img");
    image.id = "lightbox-image";
    image.classList.add("max-w-full", "max-h-[85vh]", "object-contain");
    imageContainer.appendChild(image);
    
    lightboxContent.appendChild(imageContainer);
    
    // Counter
    const counter = document.createElement("div");
    counter.id = "lightbox-counter";
    counter.classList.add(
        "absolute", "bottom-4", "left-1/2", "-translate-x-1/2", "text-white",
        "bg-black", "bg-opacity-50", "px-4", "py-2", "rounded-full"
    );
    lightboxContent.appendChild(counter);
    
    lightboxOverlay.appendChild(lightboxContent);

    return lightboxOverlay;
}

function initializeEventListeners(projects: any[]): void {
    setTimeout(() => {
        // Filter buttons event listeners
        const categoryButtons = document.querySelectorAll("[data-category]");
        const industryButtons = document.querySelectorAll("[data-industry]");
        
        categoryButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Update active state
                categoryButtons.forEach(btn => {
                    if (!btn.classList.contains("project-card")) {
                        btn.classList.remove("bg-red-300");
                        btn.classList.remove("text-[#1e1e1e]");
                    }
                });
                if (!button.classList.contains("project-card")) {
                    button.classList.add("bg-red-300");
                    button.classList.add("text-[#1e1e1e]");
                }
                
                filterProjects();
            });
        });
        
        industryButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Update active state
                industryButtons.forEach(btn => {
                    if (!btn.classList.contains("project-card")) {
                        btn.classList.remove("bg-red-300");
                        btn.classList.remove("text-[#1e1e1e]");
                    }
                });
                if (!button.classList.contains("project-card")) {
                    button.classList.add("bg-red-300");
                    button.classList.add("text-[#1e1e1e]");
                }
                
            });
        });
        
        // View project details buttons
        const detailButtons = document.querySelectorAll(".view-project");
        detailButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                const projectId = parseInt((e.target as HTMLElement).dataset.id || "0");
                const project = projects.find(p => p.id === projectId);
                if (project) {
                    openProjectModal(project);
                }
            });
        });
        
        // View gallery buttons
        const galleryButtons = document.querySelectorAll(".view-gallery");
        galleryButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                const projectId = parseInt((e.target as HTMLElement).dataset.id || "0");
                const project = projects.find(p => p.id === projectId);
                if (project) {
                    openGalleryLightbox(project);
                }
            });
        });
        
        // Close modal button
        const closeModalButton = document.getElementById("close-modal");
        if (closeModalButton) {
            closeModalButton.addEventListener("click", closeProjectModal);
        }
        
        // Close lightbox button
        const closeLightboxButton = document.getElementById("close-lightbox");
        if (closeLightboxButton) {
            closeLightboxButton.addEventListener("click", closeGalleryLightbox);
        }
        
        // Lightbox navigation buttons
        const prevButton = document.getElementById("prev-image");
        const nextButton = document.getElementById("next-image");
        
        if (prevButton) {
            prevButton.addEventListener("click", () => navigateLightbox("prev"));
        }
        
        if (nextButton) {
            nextButton.addEventListener("click", () => navigateLightbox("next"));
        }
        
        // Close modal when clicking outside
        const modalOverlay = document.getElementById("project-modal-overlay");
        if (modalOverlay) {
            modalOverlay.addEventListener("click", (e) => {
                if (e.target === modalOverlay) {
                    closeProjectModal();
                }
            });
        }
        
        // Close lightbox when clicking outside
        const lightboxOverlay = document.getElementById("lightbox-overlay");
        if (lightboxOverlay) {
            lightboxOverlay.addEventListener("click", (e) => {
                if (e.target === lightboxOverlay) {
                    closeGalleryLightbox();
                }
            });
        }

        // Add keyboard navigation for lightbox
        document.addEventListener("keydown", (e) => {
            const lightbox = document.getElementById("lightbox-overlay");
            if (lightbox && !lightbox.classList.contains("hidden")) {
                if (e.key === "ArrowLeft") {
                    navigateLightbox("prev");
                } else if (e.key === "ArrowRight") {
                    navigateLightbox("next");
                } else if (e.key === "Escape") {
                    closeGalleryLightbox();
                }
            }
            
            // Close modal with Escape key
            const modal = document.getElementById("project-modal-overlay");
            if (modal && !modal.classList.contains("hidden") && e.key === "Escape") {
                closeProjectModal();
            }
        });

    }, 100);
}

function filterProjects(): void {
    const activeCategory = document.querySelector("[data-category].bg-red-300")?.getAttribute("data-category") || "all";
    const activeIndustry = document.querySelector("[data-industry].bg-red-300")?.getAttribute("data-industry") || "all";
    
    const projectCards = document.querySelectorAll(".project-card");
    
    projectCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        const cardIndustry = card.getAttribute("data-industry");
        
        const categoryMatch = activeCategory === "all" || cardCategory === activeCategory;
        const industryMatch = activeIndustry === "all" || cardIndustry === activeIndustry;
        
        if (categoryMatch && industryMatch) {
            (card as HTMLElement).style.display = "block";
        } else {
            (card as HTMLElement).style.display = "none";
        }
    });
}


function openProjectModal(project: any): void {
    const modalContent = document.getElementById("project-modal-content");
    const modalOverlay = document.getElementById("project-modal-overlay");
    
    if (!modalContent || !modalOverlay) return;
    
    // Clear previous content
    modalContent.innerHTML = "";
    
    // Add close button
    const closeButton = document.createElement("button");
    closeButton.id = "close-modal";
    closeButton.classList.add(
        "absolute", "top-4", "right-4", "text-gray-400", 
        "hover:text-white", "text-2xl", "z-10", "w-8", "h-8",
        "flex", "items-center", "justify-center", "bg-[#333]", "rounded-full"
    );
    closeButton.innerHTML = "×";
    closeButton.addEventListener("click", closeProjectModal);
    modalContent.appendChild(closeButton);
    
    // Project header
    const header = document.createElement("div");
    header.classList.add("relative", "h-64");
    
    const headerImage = document.createElement("img");
    headerImage.src = project.thumbnail;
    headerImage.alt = project.title;
    headerImage.classList.add("w-full", "h-full", "object-cover");
    
    const headerOverlay = document.createElement("div");
    headerOverlay.classList.add(
        "absolute", "inset-0", "bg-gradient-to-t", 
        "from-[#2a2a2a]", "to-transparent"
    );
    
    const projectTitle = document.createElement("h2");
    projectTitle.textContent = project.title;
    projectTitle.classList.add(
        "absolute", "bottom-6", "left-6", "text-3xl", 
        "font-bold", "text-white", "z-10"
    );
    
    const projectCategory = document.createElement("div");
    projectCategory.classList.add(
        "absolute", "top-6", "left-6", "flex", "gap-2"
    );
    
    const categoryPill = document.createElement("span");
    categoryPill.textContent = getCategoryName(project.category);
    categoryPill.classList.add("bg-red-300", "text-[#1e1e1e]", "px-3", "py-1", "rounded-full", "text-sm");
    
    const industryPill = document.createElement("span");
    industryPill.textContent = getIndustryName(project.industry);
    industryPill.classList.add("bg-[#444]", "text-white", "px-3", "py-1", "rounded-full", "text-sm");
    
    projectCategory.appendChild(categoryPill);
    projectCategory.appendChild(industryPill);
    
    header.appendChild(headerImage);
    header.appendChild(headerOverlay);
    header.appendChild(projectTitle);
    header.appendChild(projectCategory);
    
    modalContent.appendChild(header);
    
    // Project content
    const content = document.createElement("div");
    content.classList.add("p-6", "space-y-8");
    
    // Project description
    const descriptionSection = document.createElement("section");
    
    const descriptionTitle = document.createElement("h3");
    descriptionTitle.textContent = "Project Overview";
    descriptionTitle.classList.add("text-xl", "font-bold", "mb-3", "text-red-300");
    
    const descriptionText = document.createElement("p");
    descriptionText.textContent = project.description;
    descriptionText.classList.add("text-gray-300", "leading-relaxed");
    
    descriptionSection.appendChild(descriptionTitle);
    descriptionSection.appendChild(descriptionText);
    content.appendChild(descriptionSection);
    
    // Challenge and Solution
    const challengeSection = document.createElement("section");
    challengeSection.classList.add("grid", "grid-cols-1", "md:grid-cols-2", "gap-6");
    
    // Challenge
    const challengeDiv = document.createElement("div");
    
    const challengeTitle = document.createElement("h3");
    challengeTitle.textContent = "The Challenge";
    challengeTitle.classList.add("text-xl", "font-bold", "mb-3", "text-red-300");
    
    const challengeText = document.createElement("p");
    challengeText.textContent = project.challenge;
    challengeText.classList.add("text-gray-300", "leading-relaxed");
    
    challengeDiv.appendChild(challengeTitle);
    challengeDiv.appendChild(challengeText);
    challengeSection.appendChild(challengeDiv);
    
    // Solution
    const solutionDiv = document.createElement("div");
    
    const solutionTitle = document.createElement("h3");
    solutionTitle.textContent = "Our Solution";
    solutionTitle.classList.add("text-xl", "font-bold", "mb-3", "text-red-300");
    
    const solutionText = document.createElement("p");
    solutionText.textContent = project.solution;
    solutionText.classList.add("text-gray-300", "leading-relaxed");
    
    solutionDiv.appendChild(solutionTitle);
    solutionDiv.appendChild(solutionText);
    challengeSection.appendChild(solutionDiv);
    
    content.appendChild(challengeSection);
    
    // Technologies used
    const techSection = document.createElement("section");
    
    const techTitle = document.createElement("h3");
    techTitle.textContent = "Technologies Used";
    techTitle.classList.add("text-xl", "font-bold", "mb-3", "text-red-300");
    
    const techList = document.createElement("div");
    techList.classList.add("flex", "flex-wrap", "gap-2");
    
    project.technologies.forEach((tech: string) => {
        const techPill = document.createElement("span");
        techPill.textContent = tech;
        techPill.classList.add(
            "bg-[#333]", "text-white", "px-3", "py-1", 
            "rounded-full", "text-sm"
        );
        techList.appendChild(techPill);
    });
    
    techSection.appendChild(techTitle);
    techSection.appendChild(techList);
    content.appendChild(techSection);
    
    // Testimonial
    const testimonialSection = document.createElement("section");
    testimonialSection.classList.add(
        "bg-[#333]", "p-6", "rounded-lg", "mt-8", 
        "border-l-4", "border-red-300"
    );
    
    const testimonialTitle = document.createElement("h3");
    testimonialTitle.textContent = "Client Testimonial";
    testimonialTitle.classList.add("text-xl", "font-bold", "mb-3", "text-red-300");
    
    const testimonialQuote = document.createElement("blockquote");
    testimonialQuote.classList.add("italic", "text-gray-300", "mb-4");
    testimonialQuote.textContent = `"${project.testimonial.text}"`;
    
    const testimonialAuthorContainer = document.createElement("div");
    testimonialAuthorContainer.classList.add("flex", "items-center");
    
    const testimonialAuthorImage = document.createElement("img");
    testimonialAuthorImage.src = project.testimonial.image;
    testimonialAuthorImage.alt = project.testimonial.author;
    testimonialAuthorImage.classList.add("w-12", "h-12", "rounded-full", "mr-4", "object-cover");
    
    const testimonialAuthorInfo = document.createElement("div");
    
    const testimonialAuthorName = document.createElement("div");
    testimonialAuthorName.textContent = project.testimonial.author;
    testimonialAuthorName.classList.add("font-bold");
    
    const testimonialAuthorPosition = document.createElement("div");
    testimonialAuthorPosition.textContent = project.testimonial.position;
    testimonialAuthorPosition.classList.add("text-sm", "text-gray-400");
    
    testimonialAuthorInfo.appendChild(testimonialAuthorName);
    testimonialAuthorInfo.appendChild(testimonialAuthorPosition);
    
    testimonialAuthorContainer.appendChild(testimonialAuthorImage);
    testimonialAuthorContainer.appendChild(testimonialAuthorInfo);
    
    testimonialSection.appendChild(testimonialTitle);
    testimonialSection.appendChild(testimonialQuote);
    testimonialSection.appendChild(testimonialAuthorContainer);
    
    content.appendChild(testimonialSection);
    modalContent.appendChild(content);
    
    // Show the modal
    modalOverlay.classList.remove("hidden");
    
    // Prevent body scrolling
    document.body.style.overflow = "hidden";
}

function closeProjectModal(): void {
    const modalOverlay = document.getElementById("project-modal-overlay");
    if (modalOverlay) {
        modalOverlay.classList.add("hidden");
    }
    // Re-enable body scrolling
    document.body.style.overflow = "";
}

// Gallery lightbox variables
let currentImageIndex = 0;
let currentImages: string[] = [];

function openGalleryLightbox(project: any): void {
    const lightboxOverlay = document.getElementById("lightbox-overlay");
    const lightboxImage = document.getElementById("lightbox-image") as HTMLImageElement;
    const lightboxCounter = document.getElementById("lightbox-counter");
    
    if (!lightboxOverlay || !lightboxImage || !lightboxCounter) return;
    
    // Store the project images
    currentImages = project.images;
    currentImageIndex = 0;
    
    // Set the first image
    lightboxImage.src = currentImages[currentImageIndex];
    
    // Update counter
    updateLightboxCounter();
    
    // Show the lightbox
    lightboxOverlay.classList.remove("hidden");
    
    // Prevent body scrolling
    document.body.style.overflow = "hidden";
}

function closeGalleryLightbox(): void {
    const lightboxOverlay = document.getElementById("lightbox-overlay");
    if (lightboxOverlay) {
        lightboxOverlay.classList.add("hidden");
    }
    // Re-enable body scrolling
    document.body.style.overflow = "";
}

function navigateLightbox(direction: string): void {
    const lightboxImage = document.getElementById("lightbox-image") as HTMLImageElement;
    if (!lightboxImage) return;
    
    if (direction === "prev") {
        currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    } else {
        currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    }
    
    // Fade out effect
    lightboxImage.style.opacity = "0";
    
    // Change image after fade
    setTimeout(() => {
        lightboxImage.src = currentImages[currentImageIndex];
        updateLightboxCounter();
        lightboxImage.style.opacity = "1";
    }, 200);
}

function updateLightboxCounter(): void {
    const lightboxCounter = document.getElementById("lightbox-counter");
    if (lightboxCounter) {
        lightboxCounter.textContent = `${currentImageIndex + 1} / ${currentImages.length}`;
    }
}

// Helper functions
function getCategoryName(categoryId: string): string {
    const categories: {[key: string]: string} = {
        "web-app": "Web App",
        "mobile-app": "Mobile App",
        "enterprise": "Enterprise System"
    };
    return categories[categoryId] || categoryId;
}

function getIndustryName(industryId: string): string {
    const industries: {[key: string]: string} = {
        "government": "Government",
        "healthcare": "Healthcare",
        "retail": "Retail",
        "furniture": "Furniture",
        "finance": "Finance",
        "logistics": "Logistics"
    };
    return industries[industryId] || industryId;
}

function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
}
