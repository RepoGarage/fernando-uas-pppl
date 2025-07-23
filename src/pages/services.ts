export function render_services() {
    const app = document.getElementById("app");
    if (!app) return;

    // Clear existing content
    app.innerHTML = '';

    // Main container
    const container = document.createElement("div");
    container.classList.add("p-6", "bg-[#1e1e1e]", "text-[#fafafa]", "min-h-screen");

    // Add page header
    const header = document.createElement("header");
    header.classList.add("mb-10", "text-center");
    
    const title = document.createElement("h1");
    title.textContent = "Smart Home Subscription Services";
    title.classList.add("text-4xl", "font-bold", "mb-3", "text-red-300");
    
    const subtitle = document.createElement("p");
    subtitle.textContent = "Transform your living space with our cutting-edge smart home solutions";
    subtitle.classList.add("text-xl", "text-gray-300", "mb-10");
    
    header.appendChild(title);
    header.appendChild(subtitle);
    container.appendChild(header);

    // Services data
    const services = [
        {
            id: 1,
            name: "Basic Security",
            category: "security",
            price: 19.99,
            features: ["Entry sensors", "Motion detection", "Mobile alerts"],
            description: "Essential security monitoring for peace of mind",
            popular: false
        },
        {
            id: 2,
            name: "Advanced Security",
            category: "security",
            price: 39.99,
            features: ["Entry sensors", "Motion detection", "Mobile alerts", "24/7 monitoring", "Security cameras", "Emergency response"],
            description: "Comprehensive security system with professional monitoring",
            popular: true
        },
        {
            id: 3,
            name: "Climate Control",
            category: "comfort",
            price: 29.99,
            features: ["Smart thermostat", "Zone control", "Energy reports", "Mobile app control"],
            description: "Optimize your home temperature and save energy costs",
            popular: false
        },
        {
            id: 4,
            name: "Entertainment Package",
            category: "entertainment",
            price: 24.99,
            features: ["Smart TV integration", "Voice control", "Multi-room audio", "Streaming optimization"],
            description: "Enhanced entertainment experience throughout your home",
            popular: false
        },
        {
            id: 5,
            name: "Complete Home Automation",
            category: "automation",
            price: 59.99,
            features: ["Lighting control", "Smart appliances", "Voice assistants", "Custom routines", "Remote access"],
            description: "Full home automation for maximum convenience and efficiency",
            popular: true
        },
        {
            id: 6,
            name: "Energy Management",
            category: "utility",
            price: 19.99,
            features: ["Usage monitoring", "Smart outlets", "Energy-saving recommendations", "Solar integration"],
            description: "Reduce your carbon footprint and utility bills",
            popular: false
        }
    ];

    // Filter categories
    const categories = ["all", "security", "comfort", "entertainment", "automation", "utility"];

    // 1. Service/Product Catalog with Filtering
    const catalogSection = createFilterableServiceCatalog(services, categories);
    container.appendChild(catalogSection);

    // 2. Price Calculator Section
    const calculatorSection = createPriceCalculator(services);
    container.appendChild(calculatorSection);

    // 3. Service Comparison Table
    const comparisonSection = createComparisonTable(services);
    container.appendChild(comparisonSection);

    // 4. Customization Form
    const customizationSection = createCustomizationForm(services);
    container.appendChild(customizationSection);

    // Add to app
    app.appendChild(container);

    // Initialize the filtering logic
    initializeFiltering();
}

function createFilterableServiceCatalog(
    services: Array<{
        id: number;
        name: string;
        category: string;
        price: number;
        features: string[];
        description: string;
        popular: boolean;
    }>,
    categories: string[]
): HTMLElement {
    const section = document.createElement("section");
    section.classList.add("mb-16");

    // Section header
    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = "Our Subscription Plans";
    sectionTitle.classList.add("text-2xl", "font-bold", "mb-6", "text-center", "text-red-300");
    section.appendChild(sectionTitle);

    // Filter buttons
    const filterContainer = document.createElement("div");
    filterContainer.classList.add("flex", "justify-center", "gap-4", "mb-8", "flex-wrap");
    
    categories.forEach(category => {
        const button = document.createElement("button");
        button.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        button.dataset.category = category;
        button.classList.add(
            "px-4", "py-2", "rounded-md", "transition-colors",
            "bg-[#3e3e3e]", "hover:bg-red-300", "hover:text-[#1e1e1e]"
        );
        
        // Set "all" as default selected
        if (category === "all") {
            button.classList.add("bg-red-300", "text-[#1e1e1e]");
        }
        
        filterContainer.appendChild(button);
    });
    
    section.appendChild(filterContainer);

    // Services grid
    const servicesGrid = document.createElement("div");
    servicesGrid.id = "services-grid";
    servicesGrid.classList.add(
        "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3",
        "gap-6"
    );

    // Create service cards
    services.forEach(service => {
        const card = document.createElement("div");
        card.dataset.category = service.category;
        card.classList.add(
            "bg-[#2e2e2e]", "rounded-lg", "p-6", "flex", "flex-col",
            "transition-all", "hover:shadow-lg", "hover:shadow-red-300/20"
        );

        // Popular badge if applicable
        if (service.popular) {
            const popularBadge = document.createElement("div");
            popularBadge.textContent = "POPULAR";
            popularBadge.classList.add(
                "bg-red-300", "text-[#1e1e1e]", "text-xs", "font-bold",
                "px-3", "py-1", "rounded-full", "self-start", "mb-2"
            );
            card.appendChild(popularBadge);
        }

        // Service name
        const name = document.createElement("h3");
        name.textContent = service.name;
        name.classList.add("text-xl", "font-bold", "mb-2");
        card.appendChild(name);

        // Price
        const price = document.createElement("div");
        price.classList.add("text-2xl", "font-bold", "text-red-300", "mb-3", "font-mono");
        price.innerHTML = `$${service.price}<span class="text-sm text-gray-400">/month</span>`;
        card.appendChild(price);

        // Description
        const description = document.createElement("p");
        description.textContent = service.description;
        description.classList.add("text-gray-300", "mb-4");
        card.appendChild(description);

        // Features list
        const featuresList = document.createElement("ul");
        featuresList.classList.add("mb-6", "flex-grow");
        
        service.features.forEach(feature => {
            const featureItem = document.createElement("li");
            featureItem.classList.add("flex", "items-start", "mb-2");
            
            // Checkmark icon
            const checkmark = document.createElement("span");
            checkmark.textContent = "✓";
            checkmark.classList.add("text-green-500", "mr-2", "font-bold");
            
            featureItem.appendChild(checkmark);
            featureItem.appendChild(document.createTextNode(feature));
            featuresList.appendChild(featureItem);
        });
        
        card.appendChild(featuresList);

        // Subscribe button
        const button = document.createElement("button");
        button.textContent = "Subscribe Now";
        button.classList.add(
            "mt-auto", "text-[#1e1e1e]", "bg-red-300", "hover:bg-red-200",
            "py-2", "px-4", "rounded-lg", "transition-colors", "w-full"
        );
        card.appendChild(button);

        servicesGrid.appendChild(card);
    });

    section.appendChild(servicesGrid);
    return section;
}

function createPriceCalculator(
    services: Array<{
        id: number;
        name: string;
        category: string;
        price: number;
        features: string[];
        description: string;
        popular: boolean;
    }>
): HTMLElement {
    const section = document.createElement("section");
    section.classList.add("mb-16", "bg-[#2a2a2a]", "p-6", "rounded-lg");

    // Section header
    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = "Price Calculator";
    sectionTitle.classList.add("text-3xl", "font-bold", "mb-6", "text-center", "text-red-300");
    section.appendChild(sectionTitle);

    // Calculator description
    const description = document.createElement("p");
    description.textContent = "Select the services you're interested in to calculate your total monthly cost.";
    description.classList.add("text-center", "mb-8", "text-gray-300");
    section.appendChild(description);

    // Services selection form
    const form = document.createElement("form");
    form.id = "calculator-form";
    form.classList.add("space-y-4", "mb-8");

    // Create checkboxes for each service
    services.forEach(service => {
        const formGroup = document.createElement("div");
        formGroup.classList.add("flex", "items-center", "justify-between");
        
        const labelContainer = document.createElement("div");
        labelContainer.classList.add("flex", "items-center");
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `service-${service.id}`;
        checkbox.dataset.price = service.price.toString();
        checkbox.classList.add("mr-3", "h-5", "w-5", "accent-red-300");
        
        const label = document.createElement("label");
        label.htmlFor = `service-${service.id}`;
        label.textContent = service.name;
        
        labelContainer.appendChild(checkbox);
        labelContainer.appendChild(label);
        formGroup.appendChild(labelContainer);
        
        const price = document.createElement("span");
        price.textContent = `$${service.price}/month`;
        price.classList.add("text-red-300");
        formGroup.appendChild(price);
        
        form.appendChild(formGroup);
    });

    // Add subscription length selector
    const durationGroup = document.createElement("div");
    durationGroup.classList.add("mt-8", "mb-4");
    
    const durationLabel = document.createElement("label");
    durationLabel.htmlFor = "subscription-duration";
    durationLabel.textContent = "Subscription Duration:";
    durationLabel.classList.add("block", "mb-2");
    durationGroup.appendChild(durationLabel);
    
    const durationSelect = document.createElement("select");
    durationSelect.id = "subscription-duration";
    durationSelect.classList.add(
        "bg-[#333]", "text-white", "p-2", "rounded", "w-full",
        "border", "border-gray-600"
    );
    
    const durations = [
        { value: "1", text: "Monthly (no discount)" },
        { value: "6", text: "6 Months (10% discount)" },
        { value: "12", text: "12 Months (20% discount)" }
    ];
    
    durations.forEach(duration => {
        const option = document.createElement("option");
        option.value = duration.value;
        option.textContent = duration.text;
        durationSelect.appendChild(option);
    });
    
    durationGroup.appendChild(durationSelect);
    form.appendChild(durationGroup);

    section.appendChild(form);

    // Total price display
    const totalContainer = document.createElement("div");
    totalContainer.classList.add(
        "bg-[#1a1a1a]", "p-4", "rounded", "flex", "justify-between",
        "items-center", "mt-6"
    );
    
    const totalLabel = document.createElement("span");
    totalLabel.textContent = "Estimated Total:";
    totalLabel.classList.add("text-lg");
    totalContainer.appendChild(totalLabel);
    
    const totalPrice = document.createElement("span");
    totalPrice.id = "total-price";
    totalPrice.textContent = "$0.00";
    totalPrice.classList.add("text-2xl", "font-bold", "text-red-300", "font-mono");
    totalContainer.appendChild(totalPrice);
    
    section.appendChild(totalContainer);

    // Add event listeners after DOM is loaded
    setTimeout(() => {
        const checkboxes = document.querySelectorAll<HTMLInputElement>('#calculator-form input[type="checkbox"]');
        const durationSelectElement = document.getElementById('subscription-duration') as HTMLSelectElement;
        
        const calculateTotal = () => {
            let total = 0;
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    total += parseFloat(checkbox.dataset.price || "0");
                }
            });
            
            // Apply discount based on duration
            const duration = parseInt(durationSelectElement.value);
            let discount = 0;
            
            if (duration === 6) discount = 0.1;  // 10% for 6 months
            else if (duration === 12) discount = 0.2;  // 20% for 12 months
            
            const discountedTotal = total * (1 - discount);
            const totalElement = document.getElementById('total-price');
            if (totalElement) {
                totalElement.textContent = `$${discountedTotal.toFixed(2)}/month`;
            }
        };
        
        // Add event listeners to all checkboxes and the duration select
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', calculateTotal);
        });
        
        durationSelectElement.addEventListener('change', calculateTotal);
    }, 100);

    return section;
}

function createComparisonTable(
    services: Array<{
        id: number;
        name: string;
        category: string;
        price: number;
        features: string[];
        description: string;
        popular: boolean;
    }>
): HTMLElement {
    const section = document.createElement("section");
    section.classList.add("mb-16", "overflow-x-auto");

    // Section header
    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = "Plan Comparison";
    sectionTitle.classList.add("text-3xl", "font-bold", "mb-6", "text-center", "text-red-300");
    section.appendChild(sectionTitle);

    // Create table
    const table = document.createElement("table");
    table.classList.add("min-w-full", "bg-[#2a2a2a]", "rounded-lg", "overflow-hidden");

    // Table header
    const thead = document.createElement("thead");
    thead.classList.add("bg-[#1a1a1a]", "text-left");
    
    const headerRow = document.createElement("tr");
    
    const emptyHeader = document.createElement("th");
    emptyHeader.classList.add("p-4", "border-b", "border-gray-700");
    headerRow.appendChild(emptyHeader);
    
    // Add service names as column headers
    services.forEach(service => {
        const th = document.createElement("th");
        th.classList.add("p-4", "border-b", "border-gray-700", "text-center");
        
        const nameSpan = document.createElement("div");
        nameSpan.textContent = service.name;
        nameSpan.classList.add("font-bold", "mb-1");
        th.appendChild(nameSpan);
        
        const priceSpan = document.createElement("div");
        priceSpan.textContent = `$${service.price}/month`;
        priceSpan.classList.add("text-red-300");
        th.appendChild(priceSpan);
        
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Table body - collect all unique features
    const allFeatures = new Set<string>();
    services.forEach(service => {
        service.features.forEach(feature => {
            allFeatures.add(feature);
        });
    });

    const tbody = document.createElement("tbody");
    
    // Create rows for each feature
    Array.from(allFeatures).forEach(feature => {
        const row = document.createElement("tr");
        row.classList.add("hover:bg-[#333]");
        
        // Feature name cell
        const featureCell = document.createElement("td");
        featureCell.textContent = feature;
        featureCell.classList.add("p-4", "border-b", "border-gray-700");
        row.appendChild(featureCell);
        
        // Check which services include this feature
        services.forEach(service => {
            const td = document.createElement("td");
            td.classList.add("p-4", "border-b", "border-gray-700", "text-center");
            
            if (service.features.includes(feature)) {
                const checkmark = document.createElement("span");
                checkmark.textContent = "✓";
                checkmark.classList.add("text-green-500", "text-xl");
                td.appendChild(checkmark);
            } else {
                const x = document.createElement("span");
                x.textContent = "×";
                x.classList.add("text-red-500", "text-xl");
                td.appendChild(x);
            }
            
            row.appendChild(td);
        });
        
        tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    section.appendChild(table);

    return section;
}

function createCustomizationForm(
    services: Array<{
        id: number;
        name: string;
        category: string;
        price: number;
        features: string[];
        description: string;
        popular: boolean;
    }>
): HTMLElement {
    const section = document.createElement("section");
    section.classList.add("mb-16", "bg-[#2a2a2a]", "p-6", "rounded-lg");

    // Section header
    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = "Customize Your Smart Home Package";
    sectionTitle.classList.add("text-3xl", "font-bold", "mb-6", "text-center", "text-red-300");
    section.appendChild(sectionTitle);

    // Form description
    const description = document.createElement("p");
    description.textContent = "Tell us about your needs and we'll create a custom smart home solution just for you.";
    description.classList.add("text-center", "mb-8", "text-gray-300");
    section.appendChild(description);

    // Create form
    const form = document.createElement("form");
    form.id = "customization-form";
    form.classList.add("space-y-6");

    // Personal Information
    const personalInfoSection = document.createElement("div");
    personalInfoSection.classList.add("space-y-4");
    
    const personalInfoTitle = document.createElement("h3");
    personalInfoTitle.textContent = "Personal Information";
    personalInfoTitle.classList.add("text-xl", "font-semibold", "mb-3");
    personalInfoSection.appendChild(personalInfoTitle);
    
    // Create a row for name fields
    const nameRow = document.createElement("div");
    nameRow.classList.add("grid", "grid-cols-1", "md:grid-cols-2", "gap-4");
    
    // First Name
    const firstNameGroup = createFormGroup("first-name", "First Name", "text");
    nameRow.appendChild(firstNameGroup);
    
    // Last Name
    const lastNameGroup = createFormGroup("last-name", "Last Name", "text");
    nameRow.appendChild(lastNameGroup);
    
    personalInfoSection.appendChild(nameRow);
    
    // Email
    const emailGroup = createFormGroup("email", "Email Address", "email");
    personalInfoSection.appendChild(emailGroup);
    
    // Phone
    const phoneGroup = createFormGroup("phone", "Phone Number", "tel");
    personalInfoSection.appendChild(phoneGroup);
    
    form.appendChild(personalInfoSection);

    // Home Information
    const homeInfoSection = document.createElement("div");
    homeInfoSection.classList.add("space-y-4", "mt-8");
    
    const homeInfoTitle = document.createElement("h3");
    homeInfoTitle.textContent = "Home Information";
    homeInfoTitle.classList.add("text-xl", "font-semibold", "mb-3");
    homeInfoSection.appendChild(homeInfoTitle);
    
    // Home Size
    const homeSizeGroup = document.createElement("div");
    homeSizeGroup.classList.add("mb-4");
    
    const homeSizeLabel = document.createElement("label");
    homeSizeLabel.htmlFor = "home-size";
    homeSizeLabel.textContent = "Home Size";
    homeSizeLabel.classList.add("block", "mb-2");
    homeSizeGroup.appendChild(homeSizeLabel);
    
    const homeSizeSelect = document.createElement("select");
    homeSizeSelect.id = "home-size";
    homeSizeSelect.name = "home-size";
    homeSizeSelect.classList.add(
        "bg-[#333]", "text-white", "p-2", "rounded", "w-full",
        "border", "border-gray-600"
    );
    
    const homeSizes = [
        "Small (< 1,000 sq ft)",
        "Medium (1,000 - 2,000 sq ft)",
        "Large (2,000 - 3,000 sq ft)",
        "Very Large (> 3,000 sq ft)"
    ];
    
    homeSizes.forEach(size => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        homeSizeSelect.appendChild(option);
    });
    
    homeSizeGroup.appendChild(homeSizeSelect);
    homeInfoSection.appendChild(homeSizeGroup);
    
    // Number of Rooms
    const roomsGroup = document.createElement("div");
    roomsGroup.classList.add("mb-4");
    
    const roomsLabel = document.createElement("label");
    roomsLabel.htmlFor = "rooms";
    roomsLabel.textContent = "Number of Rooms";
    roomsLabel.classList.add("block", "mb-2");
    roomsGroup.appendChild(roomsLabel);
    
    const roomsInput = document.createElement("input");
    roomsInput.type = "number";
    roomsInput.id = "rooms";
    roomsInput.name = "rooms";
    roomsInput.min = "1";
    roomsInput.max = "20";
    roomsInput.value = "3";
    roomsInput.classList.add(
        "bg-[#333]", "text-white", "p-2", "rounded", "w-full",
        "border", "border-gray-600"
    );
    roomsGroup.appendChild(roomsInput);
    
    homeInfoSection.appendChild(roomsGroup);
    
    form.appendChild(homeInfoSection);

    // Service Interests
    const interestsSection = document.createElement("div");
    interestsSection.classList.add("space-y-4", "mt-8");
    
    const interestsTitle = document.createElement("h3");
    interestsTitle.textContent = "I'm interested in...";
    interestsTitle.classList.add("text-xl", "font-semibold", "mb-3");
    interestsSection.appendChild(interestsTitle);
    
    // Create checkboxes for each category
    const categories = [
        { id: "security", label: "Home Security" },
        { id: "automation", label: "Home Automation" },
        { id: "entertainment", label: "Entertainment Systems" },
        { id: "climate", label: "Climate Control" },
        { id: "lighting", label: "Smart Lighting" },
        { id: "energy", label: "Energy Management" }
    ];
    
    categories.forEach(category => {
        const checkboxGroup = document.createElement("div");
        checkboxGroup.classList.add("flex", "items-center");
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = category.id;
        checkbox.name = "interests";
        checkbox.value = category.id;
        checkbox.classList.add("mr-3", "h-5", "w-5", "accent-red-300");
        
        const label = document.createElement("label");
        label.htmlFor = category.id;
        label.textContent = category.label;
        
        checkboxGroup.appendChild(checkbox);
        checkboxGroup.appendChild(label);
        interestsSection.appendChild(checkboxGroup);
    });
    
    form.appendChild(interestsSection);

    // Special Requirements
    const specialReqSection = document.createElement("div");
    specialReqSection.classList.add("mt-8");
    
    const specialReqLabel = document.createElement("label");
    specialReqLabel.htmlFor = "special-requirements";
    specialReqLabel.textContent = "Special Requirements or Requests";
    specialReqLabel.classList.add("block", "mb-2");
    specialReqSection.appendChild(specialReqLabel);
    
    const specialReqTextarea = document.createElement("textarea");
    specialReqTextarea.id = "special-requirements";
    specialReqTextarea.name = "special-requirements";
    specialReqTextarea.rows = 4;
    specialReqTextarea.placeholder = "Tell us about any specific needs or requests for your smart home setup...";
    specialReqTextarea.classList.add(
        "bg-[#333]", "text-white", "p-2", "rounded", "w-full",
        "border", "border-gray-600"
    );
    specialReqSection.appendChild(specialReqTextarea);
    
    form.appendChild(specialReqSection);

    // Budget Range
    const budgetSection = document.createElement("div");
    budgetSection.classList.add("mt-8");
    
    const budgetLabel = document.createElement("label");
    budgetLabel.htmlFor = "budget-range";
    budgetLabel.innerHTML = "Monthly Budget Range: <span id='budget-value'>$50</span>";
    budgetLabel.classList.add("block", "mb-2");
    budgetSection.appendChild(budgetLabel);
    
    const budgetSlider = document.createElement("input");
    budgetSlider.type = "range";
    budgetSlider.id = "budget-range";
    budgetSlider.name = "budget-range";
    budgetSlider.min = "20";
    budgetSlider.max = "200";
    budgetSlider.step = "5";
    budgetSlider.value = "50";
    budgetSlider.classList.add("w-full", "accent-red-300");
    budgetSection.appendChild(budgetSlider);
    
    form.appendChild(budgetSection);

    // Submit button
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Get Custom Quote";
    submitBtn.classList.add(
        "mt-8", "bg-red-300", "hover:bg-red-200", "text-[#1e1e1e]",
        "py-3", "px-6", "rounded", "transition-colors", "w-full",
        "text-lg", "font-bold"
    );
    form.appendChild(submitBtn);

    section.appendChild(form);

    // Add event listeners after DOM is loaded
    setTimeout(() => {
        // Budget slider update
        const budgetSlider = document.getElementById('budget-range') as HTMLInputElement;
        const budgetValue = document.getElementById('budget-value');
        
        if (budgetSlider && budgetValue) {
            budgetSlider.addEventListener('input', () => {
                budgetValue.textContent = `$${budgetSlider.value}`;
            });
        }
        
        // Form submission
        const customForm = document.getElementById('customization-form');
        if (customForm) {
            customForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your inquiry! Our team will contact you shortly with a custom quote.');
            });
        }
    }, 100);

    return section;
}

function createFormGroup(id: string, label: string, type: string): HTMLElement {
    const group = document.createElement("div");
    group.classList.add("mb-4");
    
    const labelElement = document.createElement("label");
    labelElement.htmlFor = id;
    labelElement.textContent = label;
    labelElement.classList.add("block", "mb-2");
    group.appendChild(labelElement);
    
    const input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.name = id;
    input.classList.add(
        "bg-[#333]", "text-white", "p-2", "rounded", "w-full",
        "border", "border-gray-600"
    );
    group.appendChild(input);
    
    return group;
}

function initializeFiltering(): void {
    setTimeout(() => {
        // Get all filter buttons and service cards
        const filterButtons = document.querySelectorAll('[data-category]');
        const serviceCards = document.querySelectorAll('#services-grid > div');
        
        // Add click event to filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Get selected category
                const selectedCategory = button.getAttribute('data-category');
                
                // Remove active class from all buttons
                filterButtons.forEach(btn => {
                    btn.classList.remove('bg-red-300');
                    btn.classList.remove('text-[#1e1e1e]');
                    btn.classList.add('bg-[#333333]');
                });
                
                // Add active class to clicked button
                button.classList.remove('bg-[#333333]');
                button.classList.add('bg-red-300');
                button.classList.add('text-[#1e1e1e]');
                
                // Filter services based on category
                serviceCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    
                    if (selectedCategory === 'all' || selectedCategory === cardCategory) {
                        (card as HTMLElement).style.display = 'flex';
                    } else {
                        (card as HTMLElement).style.display = 'none';
                    }
                });
            });
        });
    }, 100);
}
