export function render_contact() {
    const app = document.getElementById("app");
    if (!app) return;

    // Create main container
    const container = document.createElement("div");
    container.classList.add("bg-[#1e1e1e]", "text-white", "min-h-screen");

    // Add header
    const header = createHeader();
    container.appendChild(header);

    // Create two-column layout for main content
    const mainContent = document.createElement("div");
    mainContent.classList.add("container", "mx-auto", "px-4", "py-8", "md:py-12");
    
    const contentGrid = document.createElement("div");
    contentGrid.classList.add("grid", "grid-cols-1", "lg:grid-cols-2", "gap-8");

    // Left column - Contact form and info
    const leftColumn = document.createElement("div");
    leftColumn.classList.add("space-y-8");

    // Contact information section
    const contactInfo = createContactInfo();
    leftColumn.appendChild(contactInfo);

    // Contact form section
    const contactForm = createContactForm();
    leftColumn.appendChild(contactForm);

    // Right column - Map and live chat
    const rightColumn = document.createElement("div");
    rightColumn.classList.add("space-y-8");

    // Google Maps section
    const mapSection = createMapSection();
    rightColumn.appendChild(mapSection);

    // Live chat section
    const liveChat = createLiveChat();
    rightColumn.appendChild(liveChat);

    // Add columns to grid
    contentGrid.appendChild(leftColumn);
    contentGrid.appendChild(rightColumn);
    mainContent.appendChild(contentGrid);
    container.appendChild(mainContent);

    // FAQ section (full width)
    const faqSection = createFAQSection();
    container.appendChild(faqSection);

    app.appendChild(container);

    // Initialize all interactive features
    setTimeout(() => {
        initializeFormValidation();
        initializeMap();
        initializeLiveChat();
        initializeFAQ();
    }, 100);
}

function createHeader(): HTMLElement {
    const header = document.createElement("header");
    header.classList.add("bg-[#2a2a2a]", "py-12", "px-4", "text-center");

    const title = document.createElement("h1");
    title.textContent = "Get in Touch";
    title.classList.add("text-4xl", "font-bold", "mb-4", "text-red-300");

    const subtitle = document.createElement("p");
    subtitle.textContent = "We'd love to hear from you. Here's how you can reach us.";
    subtitle.classList.add("text-xl", "max-w-2xl", "mx-auto", "text-gray-300");

    header.appendChild(title);
    header.appendChild(subtitle);
    return header;
}

function createContactInfo(): HTMLElement {
    const section = document.createElement("section");
    section.classList.add("bg-[#2a2a2a]", "p-6", "rounded-lg", "shadow-lg");

    const heading = document.createElement("h2");
    heading.textContent = "Contact Information";
    heading.classList.add("text-2xl", "font-bold", "mb-6", "text-red-300");
    section.appendChild(heading);

    const infoGrid = document.createElement("div");
    infoGrid.classList.add("grid", "grid-cols-1", "md:grid-cols-2", "gap-6");

    // Contact details
    const contactItems = [
        {
            icon: "📞",
            title: "Phone",
            value: "+62 888 0188 798",
            link: "tel:+8880188798"
            // value: "+1 (555) 123-4567",
            // link: "tel:+15551234567"
        },
        {
            icon: "✉️",
            title: "Email",
            value: "contact@company.com",
            link: "mailto:contact@company.com"
        },
        {
            icon: "🏢",
            title: "Address",
            value: "Jl. Dr. Ir. H. Soekarno No.201, Klampis Ngasem, Kec. Sukolilo, Surabaya, Jawa Timur 60117",
            link: "https://www.google.com/maps/place/Universitas+Katolik+Darma+Cendika/@-7.2915173,112.7811968,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fa48d8531e99:0x88be2742d63894e1!8m2!3d-7.2915173!4d112.7811968!16s%2Fg%2F1235wg8v?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            icon: "🕒",
            title: "Business Hours",
            value: "Mon-Fri: 9AM - 5PM",
            link: null
        }
    ];

    contactItems.forEach(item => {
        const contactItem = document.createElement("div");
        contactItem.classList.add("flex", "items-start", "space-x-3");

        const iconSpan = document.createElement("span");
        iconSpan.textContent = item.icon;
        iconSpan.classList.add("text-2xl", "text-red-300");

        const content = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = item.title;
        title.classList.add("font-semibold", "text-gray-200");

        let valueElement;
        if (item.link) {
            valueElement = document.createElement("a");
            valueElement.href = item.link;
            valueElement.textContent = item.value;
            valueElement.classList.add("text-red-300", "hover:underline");
            
            if (item.link === "#map-section") {
                valueElement.addEventListener("click", (e) => {
                    e.preventDefault();
                    document.getElementById("map-section")?.scrollIntoView({ behavior: "smooth" });
                });
            }
        } else {
            valueElement = document.createElement("p");
            valueElement.textContent = item.value;
            valueElement.classList.add("text-gray-300");
        }

        content.appendChild(title);
        content.appendChild(valueElement);

        contactItem.appendChild(iconSpan);
        contactItem.appendChild(content);

        infoGrid.appendChild(contactItem);
    });

    section.appendChild(infoGrid);

    // Social Media links
    const socialSection = document.createElement("div");
    socialSection.classList.add("mt-8");

    const socialTitle = document.createElement("h3");
    socialTitle.textContent = "Connect With Us";
    socialTitle.classList.add("font-semibold", "mb-4", "text-gray-200");
    socialSection.appendChild(socialTitle);

    const socialLinks = document.createElement("div");
    socialLinks.classList.add("flex", "space-x-4");

    const platforms = [
        { name: "Twitter", icon: "nf-dev-twitter" },
        { name: "Facebook", icon: "nf-dev-facebook" },
        { name: "LinkedIn", icon: "nf-dev-linkedin" },
    ];

    platforms.forEach(platform => {
        const link = document.createElement("a");
        link.href = "#";
        link.title = platform.name;
        link.classList.add(
            "w-10", "h-10", "flex", "items-center", "justify-center", 
            "bg-[#333]", "hover:bg-red-400", "hover:text-white", 
            "transition-colors", "rounded-full"
        );
        const icon = document.createElement("i");
        icon.classList.add("nf", platform.icon);
        link.appendChild(icon);
        socialLinks.appendChild(link);
    });

    socialSection.appendChild(socialLinks);
    section.appendChild(socialSection);

    return section;
}

function createContactForm(): HTMLElement {
    const section = document.createElement("section");
    section.classList.add("bg-[#2a2a2a]", "p-6", "rounded-lg", "shadow-lg");

    const heading = document.createElement("h2");
    heading.textContent = "Send Us a Message";
    heading.classList.add("text-2xl", "font-bold", "mb-6", "text-red-300");
    section.appendChild(heading);

    const form = document.createElement("form");
    form.id = "contact-form";
    form.classList.add("space-y-4");

    // Name field
    const nameGroup = createFormGroup(
        "name", 
        "Your Name", 
        "text", 
        "John Doe", 
        "Please enter your name (minimum 2 characters)",
        true
    );
    form.appendChild(nameGroup);

    // Email field
    const emailGroup = createFormGroup(
        "email", 
        "Email Address", 
        "email", 
        "john@example.com", 
        "Please enter a valid email address",
        true
    );
    form.appendChild(emailGroup);

    // Phone field
    const phoneGroup = createFormGroup(
        "phone", 
        "Phone Number (optional)", 
        "tel", 
        "+1 (555) 123-4567", 
        "Please enter a valid phone number",
        false
    );
    form.appendChild(phoneGroup);

    // Subject field
    const subjectGroup = createFormGroup(
        "subject", 
        "Subject", 
        "text", 
        "Inquiry about your services", 
        "Please enter a subject (minimum 5 characters)",
        true
    );
    form.appendChild(subjectGroup);

    // Message field
    const messageGroup = document.createElement("div");
    messageGroup.classList.add("form-group");

    const messageLabel = document.createElement("label");
    messageLabel.setAttribute("for", "message");
    messageLabel.textContent = "Your Message";
    messageLabel.classList.add("block", "mb-2", "font-medium");

    const charCounter = document.createElement("span");
    charCounter.id = "message-counter";
    charCounter.textContent = "0/500";
    charCounter.classList.add("float-right", "text-sm", "text-gray-400");
    messageLabel.appendChild(charCounter);

    const messageTextarea = document.createElement("textarea");
    messageTextarea.id = "message";
    messageTextarea.name = "message";
    messageTextarea.rows = 5;
    messageTextarea.placeholder = "Please tell us how we can help you...";
    messageTextarea.setAttribute("maxlength", "500");
    messageTextarea.setAttribute("required", "true");
    messageTextarea.classList.add(
        "w-full", "px-3", "py-2", "bg-[#333]", "text-white", 
        "rounded", "border", "focus:outline-none", "focus:ring-2", 
        "focus:border-transparent", "transition"
    );

    const messageError = document.createElement("div");
    messageError.id = "message-error";
    messageError.classList.add("error-message", "text-sm", "text-red-400", "mt-1", "hidden");
    messageError.textContent = "Please enter your message (minimum 10 characters)";

    messageGroup.appendChild(messageLabel);
    messageGroup.appendChild(messageTextarea);
    messageGroup.appendChild(messageError);
    form.appendChild(messageGroup);

    // Department selection
    const departmentGroup = document.createElement("div");
    departmentGroup.classList.add("form-group");

    const departmentLabel = document.createElement("label");
    departmentLabel.setAttribute("for", "department");
    departmentLabel.textContent = "Department";
    departmentLabel.classList.add("block", "mb-2", "font-medium");

    const departmentSelect = document.createElement("select");
    departmentSelect.id = "department";
    departmentSelect.name = "department";
    departmentSelect.classList.add(
        "w-full", "px-3", "py-2", "bg-[#333]", "text-white", 
        "rounded", "border", "focus:outline-none", "focus:ring-2", 
        "focus:border-transparent"
    );

    const departments = [
        { value: "", label: "Select a department", disabled: true },
        { value: "general", label: "General Inquiry" },
        { value: "sales", label: "Sales" },
        { value: "support", label: "Technical Support" },
        { value: "billing", label: "Billing & Payments" }
    ];

    departments.forEach(dept => {
        const option = document.createElement("option");
        option.value = dept.value;
        option.textContent = dept.label;
        if (dept.disabled) {
            option.disabled = true;
            option.selected = true;
        }
        departmentSelect.appendChild(option);
    });

    departmentGroup.appendChild(departmentLabel);
    departmentGroup.appendChild(departmentSelect);
    form.appendChild(departmentGroup);

    // Priority radio buttons
    const priorityGroup = document.createElement("div");
    priorityGroup.classList.add("form-group");

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority";
    priorityLabel.classList.add("block", "mb-2", "font-medium");
    priorityGroup.appendChild(priorityLabel);

    const priorityOptions = document.createElement("div");
    priorityOptions.classList.add("flex", "space-x-4");

    const priorities = [
        { value: "low", label: "Low" },
        { value: "medium", label: "Medium" },
        { value: "high", label: "High" }
    ];

    priorities.forEach((priority, index) => {
        const radioDiv = document.createElement("div");
        radioDiv.classList.add("flex", "items-center");

        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.id = `priority-${priority.value}`;
        radioInput.name = "priority";
        radioInput.value = priority.value;
        radioInput.classList.add("mr-2");
        if (index === 1) { // Medium as default
            radioInput.checked = true;
        }

        const radioLabel = document.createElement("label");
        radioLabel.setAttribute("for", `priority-${priority.value}`);
        radioLabel.textContent = priority.label;

        radioDiv.appendChild(radioInput);
        radioDiv.appendChild(radioLabel);
        priorityOptions.appendChild(radioDiv);
    });

    priorityGroup.appendChild(priorityOptions);
    form.appendChild(priorityGroup);

    // Terms checkbox
    const termsGroup = document.createElement("div");
    termsGroup.classList.add("form-group");

    const termsCheckbox = document.createElement("div");
    termsCheckbox.classList.add("flex", "items-center", "mt-4");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "terms";
    checkbox.name = "terms";
    checkbox.required = true;
    checkbox.classList.add("mr-2");

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", "terms");
    checkboxLabel.innerHTML = 'I agree to the <a href="#" class="text-red-300 hover:underline">Terms & Privacy Policy</a>';
    checkboxLabel.classList.add("text-sm");

    termsCheckbox.appendChild(checkbox);
    termsCheckbox.appendChild(checkboxLabel);
    termsGroup.appendChild(termsCheckbox);

    const termsError = document.createElement("div");
    termsError.id = "terms-error";
    termsError.classList.add("error-message", "text-sm", "text-red-400", "mt-1", "hidden");
    termsError.textContent = "You must agree to the terms to proceed";
    termsGroup.appendChild(termsError);
    form.appendChild(termsGroup);

    // Submit button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Send Message";
    submitButton.classList.add(
        "w-full", "bg-red-500", "hover:bg-red-600", "text-white", 
        "font-bold", "py-2", "px-4", "rounded", "transition-colors", 
        "mt-6"
    );
    form.appendChild(submitButton);

    // Form status message (hidden initially)
    const formStatus = document.createElement("div");
    formStatus.id = "form-status";
    formStatus.classList.add(
        "mt-4", "p-3", "rounded", "text-center", "hidden"
    );
    form.appendChild(formStatus);

    section.appendChild(form);
    return section;
}

function createFormGroup(
    id: string, 
    label: string, 
    type: string, 
    placeholder: string, 
    errorMessage: string,
    required: boolean
): HTMLElement {
    const group = document.createElement("div");
    group.classList.add("form-group");

    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", id);
    labelElement.textContent = label;
    labelElement.classList.add("block", "mb-2", "font-medium");

    const input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.name = id;
    input.placeholder = placeholder;
    input.classList.add(
        "w-full", "px-3", "py-2", "bg-[#333]", "text-white", 
        "rounded", "border", "focus:outline-none", "focus:ring-2", 
        "focus:border-transparent", "transition"
    );

    if (required) {
        input.setAttribute("required", "true");
    }

    const errorElement = document.createElement("div");
    errorElement.id = `${id}-error`;
    errorElement.classList.add("error-message", "text-sm", "text-red-400", "mt-1", "hidden");
    errorElement.textContent = errorMessage;

    group.appendChild(labelElement);
    group.appendChild(input);
    group.appendChild(errorElement);

    return group;
}

function createMapSection(): HTMLElement {
    const section = document.createElement("section");
    section.id = "map-section";
    section.classList.add("bg-[#2a2a2a]", "p-6", "rounded-lg", "shadow-lg");

    const heading = document.createElement("h2");
    heading.textContent = "Our Locations";
    heading.classList.add("text-2xl", "font-bold", "mb-6", "text-red-300");
    section.appendChild(heading);

    // Tab navigation for multiple offices
    const tabNav = document.createElement("div");
    tabNav.classList.add("flex", "border-b", "border-gray-700", "mb-4");

    const offices = [
        { id: "headquarters", name: "Headquarters", active: true },
        // { id: "branch-west", name: "West Office", active: false },
        // { id: "branch-east", name: "East Office", active: false }
    ];

    offices.forEach(office => {
        const tab = document.createElement("button");
        tab.dataset.tab = office.id;
        tab.textContent = office.name;
        tab.classList.add(
            "py-2", "px-4", "border-b-2", "transition-colors",
            "focus:outline-none"
        );
        
        if (office.active) {
            tab.classList.add("border-red-300", "text-red-300");
        } else {
            tab.classList.add("border-transparent", "hover:border-gray-400");
        }
        
        tabNav.appendChild(tab);
    });

    section.appendChild(tabNav);

    // Map container
    const mapContainer = document.createElement("div");
    mapContainer.id = "map";
    mapContainer.classList.add("w-full", "h-80", "bg-[#333]", "rounded", "overflow-hidden");
    mapContainer.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.553632237963!2d112.77862187523692!3d-7.291517292715923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa48d8531e99%3A0x88be2742d63894e1!2sUniversitas%20Katolik%20Darma%20Cendika!5e0!3m2!1sid!2sid!4v1753290497224!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    
    // Placeholder until Google Maps loads
    // mapContainer.innerHTML = `
    //     <div class="flex items-center justify-center h-full">
    //         <div class="text-center">
    //             <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-red-300 mx-auto mb-4"></div>
    //             <p>Loading map...</p>
    //         </div>
    //     </div>
    // `;
    
    section.appendChild(mapContainer);

    // Office information (changes based on tab selection)
    // const officeInfo = document.createElement("div");
    // officeInfo.id = "office-info";
    // officeInfo.classList.add("mt-4", "p-4", "bg-[#333]", "rounded");
    //
    // // Default content for headquarters
    // officeInfo.innerHTML = `
    //     <h3 class="font-bold text-lg mb-2">Headquarters</h3>
    //     <p class="text-gray-300">
    //         123 Business Street, Suite 100<br>
    //         Tech City, CA 90210<br>
    //         United States
    //     </p>
    //     <div class="mt-3 flex space-x-3">
    //         <a href="tel:+15551234567" class="text-red-300 hover:underline">+1 (555) 123-4567</a>
    //         <a href="mailto:hq@company.com" class="text-red-300 hover:underline">hq@company.com</a>
    //     </div>
    // `;
    //
    // section.appendChild(officeInfo);

    return section;
}

function createLiveChat(): HTMLElement {
    const section = document.createElement("section");
    section.classList.add("bg-[#2a2a2a]", "p-6", "rounded-lg", "shadow-lg");

    const heading = document.createElement("h2");
    heading.textContent = "Live Chat";
    heading.classList.add("text-2xl", "font-bold", "mb-6", "text-red-300");
    section.appendChild(heading);

    // Chat container
    const chatContainer = document.createElement("div");
    chatContainer.classList.add("flex", "flex-col", "h-96");

    // Chat messages area
    const chatMessages = document.createElement("div");
    chatMessages.id = "chat-messages";
    chatMessages.classList.add(
        "flex-grow", "bg-[#333]", "p-4", "rounded-t", 
        "overflow-y-auto", "space-y-3", "mb-4"
    );

    // Initial message from support
    const welcomeMessage = document.createElement("div");
    welcomeMessage.classList.add("flex", "items-start", "space-x-2");
    
    const supportAvatar = document.createElement("div");
    supportAvatar.classList.add("w-8", "h-8", "rounded-full", "bg-red-300", "flex", "items-center", "justify-center", "text-white", "font-bold", "flex-shrink-0");
    supportAvatar.textContent = "S";
    
    const messageContent = document.createElement("div");
    messageContent.classList.add("bg-[#444]", "rounded-lg", "p-3", "max-w-[80%]");
    
    const messageName = document.createElement("div");
    messageName.classList.add("text-sm", "font-bold", "text-red-300", "mb-1");
    messageName.textContent = "Support Agent";
    
    const messageText = document.createElement("div");
    messageText.classList.add("text-sm");
    messageText.textContent = "👋 Hello! Welcome to our live chat. How can I help you today?";
    
    messageContent.appendChild(messageName);
    messageContent.appendChild(messageText);
    welcomeMessage.appendChild(supportAvatar);
    welcomeMessage.appendChild(messageContent);
    
    chatMessages.appendChild(welcomeMessage);
    chatContainer.appendChild(chatMessages);

    // Chat input area
    const chatInputContainer = document.createElement("div");
    chatInputContainer.classList.add("flex", "space-x-2");
    
    const chatInput = document.createElement("input");
    chatInput.type = "text";
    chatInput.id = "chat-input";
    chatInput.placeholder = "Type your message...";
    chatInput.classList.add(
        "flex-grow", "px-3", "py-2", "bg-[#333]", "text-white", 
        "rounded", "border", "border-gray-700", "focus:outline-none", 
        "focus:ring-2", "focus:ring-red-300", "focus:border-transparent"
    );
    
    const sendButton = document.createElement("button");
    sendButton.id = "send-chat";
    sendButton.classList.add(
        "bg-red-500", "hover:bg-red-600", "text-white", 
        "px-4", "py-2", "rounded", "transition-colors",
        "flex", "items-center", "justify-center"
    );
    sendButton.innerHTML = "Send";
    
    chatInputContainer.appendChild(chatInput);
    chatInputContainer.appendChild(sendButton);
    chatContainer.appendChild(chatInputContainer);

    // Chat status
    const chatStatus = document.createElement("div");
    chatStatus.classList.add("mt-3", "flex", "items-center", "text-sm", "text-gray-400");
    
    const statusDot = document.createElement("span");
    statusDot.classList.add("w-2", "h-2", "bg-green-400", "rounded-full", "mr-2");
    
    const statusText = document.createElement("span");
    statusText.textContent = "Support agents are online | Average response time: 2 mins";
    
    chatStatus.appendChild(statusDot);
    chatStatus.appendChild(statusText);
    chatContainer.appendChild(chatStatus);

    section.appendChild(chatContainer);
    return section;
}

function createFAQSection(): HTMLElement {
    const section = document.createElement("section");
    section.classList.add("py-12", "px-4", "bg-[#2a2a2a]", "mt-8");

    const container = document.createElement("div");
    container.classList.add("container", "mx-auto", "max-w-4xl");

    const heading = document.createElement("h2");
    heading.textContent = "Frequently Asked Questions";
    heading.classList.add("text-3xl", "font-bold", "mb-8", "text-red-300", "text-center");
    container.appendChild(heading);

    // Search box
    const searchContainer = document.createElement("div");
    searchContainer.classList.add("mb-8");
    
    const searchBox = document.createElement("div");
    searchBox.classList.add("relative");
    
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.id = "faq-search";
    searchInput.placeholder = "Search FAQs...";
    searchInput.classList.add(
        "w-full", "px-4", "py-3", "pl-10", "bg-[#333]", "text-white", 
        "rounded", "focus:outline-none", "focus:ring-2", 
        "focus:ring-red-300", "border-transparent"
    );
    
    const searchIcon = document.createElement("div");
    searchIcon.classList.add("absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-gray-400");
    searchIcon.innerHTML = "🔍";
    
    searchBox.appendChild(searchIcon);
    searchBox.appendChild(searchInput);
    searchContainer.appendChild(searchBox);
    container.appendChild(searchContainer);

    // FAQ accordion items
    const faqList = document.createElement("div");
    faqList.id = "faq-accordion";
    faqList.classList.add("space-y-4");

    // FAQ data
    const faqs = [
        {
            question: "How do I get started with your services?",
            answer: "Getting started is easy! Simply fill out our contact form with your requirements, and one of our account managers will reach out to schedule an initial consultation. During this meeting, we'll discuss your needs in detail and recommend the best solution for your business."
        },
        {
            question: "What are your payment terms?",
            answer: "We accept various payment methods including credit cards, PayPal, and bank transfers. For project-based work, we typically require a 50% deposit upfront, with the remainder due upon completion. For subscription services, we bill monthly with payments due at the beginning of each service period."
        },
        {
            question: "Do you offer support after project completion?",
            answer: "Yes, we provide comprehensive support after project completion. Each project comes with a 30-day warranty period for bug fixes. Beyond that, we offer various support plans to ensure your solution continues to run smoothly. Our premium support includes 24/7 assistance, regular maintenance, and priority response times."
        },
        {
            question: "Can I upgrade my subscription plan later?",
            answer: "Absolutely! You can upgrade your subscription plan at any time. When you upgrade, we'll prorate the difference and apply it to your current billing cycle. The new features will be available immediately upon upgrading. If you need to downgrade, changes will take effect at the start of your next billing period."
        },
        {
            question: "What is your refund policy?",
            answer: "For subscription services, we offer a 14-day money-back guarantee if you're not satisfied with our service. For project-based work, refunds are handled on a case-by-case basis, depending on the work completed. We strive to ensure client satisfaction and will work with you to resolve any issues."
        },
        {
            question: "How do you handle data privacy and security?",
            answer: "We take data privacy and security very seriously. Our systems comply with GDPR and other relevant data protection regulations. We implement industry-standard encryption, secure data storage, and strict access controls. We never share your information with third parties without your explicit consent."
        },
        {
            question: "What makes your company different from competitors?",
            answer: "Our key differentiators include our experienced team of industry experts, our custom-tailored approach to each client's unique needs, our transparent communication throughout the project lifecycle, and our commitment to ongoing innovation. We don't just deliver a solution; we become your long-term technology partner."
        }
    ];

    faqs.forEach((faq, index) => {
        const faqItem = document.createElement("div");
        faqItem.classList.add("faq-item", "border", "border-gray-700", "rounded-lg", "overflow-hidden");
        faqItem.dataset.question = faq.question.toLowerCase();
        faqItem.dataset.answer = faq.answer.toLowerCase();

        const faqHeader = document.createElement("button");
        faqHeader.classList.add(
            "w-full", "text-left", "px-6", "py-4", "flex", "justify-between", 
            "items-center", "bg-[#333]", "hover:bg-[#3a3a3a]", 
            "transition-colors", "focus:outline-none"
        );
        faqHeader.dataset.index = index.toString();

        const questionText = document.createElement("span");
        questionText.textContent = faq.question;
        questionText.classList.add("font-medium", "pr-6");

        const icon = document.createElement("span");
        icon.classList.add("transform", "transition-transform");
        icon.innerHTML = "+";

        faqHeader.appendChild(questionText);
        faqHeader.appendChild(icon);

        const faqBody = document.createElement("div");
        faqBody.classList.add("faq-body", "px-6", "py-0", "max-h-0", "overflow-hidden", "transition-all", "duration-300");

        const answerText = document.createElement("p");
        answerText.textContent = faq.answer;
        answerText.classList.add("text-gray-300", "py-4");

        faqBody.appendChild(answerText);
        faqItem.appendChild(faqHeader);
        faqItem.appendChild(faqBody);
        faqList.appendChild(faqItem);
    });

    container.appendChild(faqList);

    // No results message (hidden initially)
    const noResults = document.createElement("div");
    noResults.id = "faq-no-results";
    noResults.classList.add("text-center", "py-8", "hidden");
    
    const noResultsMessage = document.createElement("p");
    noResultsMessage.textContent = "No matching questions found. Please try a different search term.";
    noResultsMessage.classList.add("text-gray-400");
    
    noResults.appendChild(noResultsMessage);
    container.appendChild(noResults);

    section.appendChild(container);
    return section;
}

function initializeFormValidation(): void {
    const form = document.getElementById('contact-form') as HTMLFormElement;
    const messageTextarea = document.getElementById('message') as HTMLTextAreaElement;
    const messageCounter = document.getElementById('message-counter');
    const formStatus = document.getElementById('form-status');

    if (!form || !messageTextarea || !messageCounter || !formStatus) return;

    // Character counter for message
    messageTextarea.addEventListener('input', () => {
        const currentLength = messageTextarea.value.length;
        const maxLength = parseInt(messageTextarea.getAttribute('maxlength') || '500');
        messageCounter.textContent = `${currentLength}/${maxLength}`;

        // Visual feedback as approaching limit
        if (currentLength > maxLength * 0.9) {
            messageCounter.classList.add('text-red-400');
        } else {
            messageCounter.classList.remove('text-red-400');
        }
    });

    // Real-time validation
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateInput(input as HTMLInputElement | HTMLTextAreaElement);
        });
        
        input.addEventListener('input', () => {
            // Hide error when user starts typing again
            const errorElement = document.getElementById(`${input.id}-error`);
            if (errorElement) {
                errorElement.classList.add('hidden');
            }
            
            if (input.classList.contains('border-red-500')) {
                input.classList.remove('border-red-500');
                input.classList.add('border-gray-700');
            }
        });
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Validate all required inputs
        inputs.forEach(input => {
            if (!validateInput(input as HTMLInputElement | HTMLTextAreaElement)) {
                isValid = false;
            }
        });

        if (isValid) {
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            // Simulate form submission
            setTimeout(() => {
                // Show success message
                formStatus.textContent = 'Thank you! Your message has been sent successfully.';
                formStatus.classList.remove('hidden', 'bg-red-100', 'text-red-700');
                formStatus.classList.add('bg-green-100', 'text-green-700');
                
                // Reset form
                form.reset();
                
                // Reset button
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
                
                // Reset message counter
                messageCounter.textContent = '0/500';
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formStatus.classList.add('hidden');
                }, 5000);
            }, 1500);
        }
    });
}

function validateInput(input: HTMLInputElement | HTMLTextAreaElement): boolean {
    const errorElement = document.getElementById(`${input.id}-error`);
    let isValid = true;

    // Different validation for different input types
    switch (input.id) {
        case 'name':
            isValid = input.value.trim().length >= 2;
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(input.value);
            break;
        case 'phone':
            if (input.value.trim() === '') return true; // Optional field
            const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
            isValid = phoneRegex.test(input.value);
            break;
        case 'subject':
            isValid = input.value.trim().length >= 5;
            break;
        case 'message':
            isValid = input.value.trim().length >= 10;
            break;
        case 'terms':
            isValid = (input as HTMLInputElement).checked;
            break;
    }

    // Show/hide error message
    if (!isValid && errorElement) {
        errorElement.classList.remove('hidden');
        input.classList.remove('border-gray-700');
        input.classList.add('border-red-500');
    } else if (errorElement) {
        errorElement.classList.add('hidden');
        input.classList.remove('border-red-500');
        input.classList.add('border-gray-700');
    }

    return isValid;
}

function initializeMap(): void {
    // Since we can't actually load Google Maps without API key,
    // this creates a mockup map with interactive markers

    const mapContainer = document.getElementById('map');
    const officeInfo = document.getElementById('office-info');
    const mapTabs = document.querySelectorAll('[data-tab]');
    
    if (!mapContainer || !officeInfo) return;

    // Clear loading indicator
    mapContainer.innerHTML = '';

    // Create mock map
    mapContainer.style.position = 'relative';
    mapContainer.style.backgroundColor = '#3a3a3a';

    // Create mock map elements
    const mapElements = document.createElement('div');
    mapElements.classList.add('absolute', 'inset-0', 'opacity-40');
    
    // Draw some grid lines to simulate a map
    for (let i = 0; i < 10; i++) {
        const horizontalLine = document.createElement('div');
        horizontalLine.classList.add('absolute', 'w-full', 'h-px', 'bg-gray-500');
        horizontalLine.style.top = `${i * 10}%`;
        mapElements.appendChild(horizontalLine);

        const verticalLine = document.createElement('div');
        verticalLine.classList.add('absolute', 'h-full', 'w-px', 'bg-gray-500');
        verticalLine.style.left = `${i * 10}%`;
        mapElements.appendChild(verticalLine);
    }

    // Office locations data
    const locations = [
        { 
            id: 'headquarters', 
            name: 'Headquarters', 
            address: '123 Business Street, Suite 100<br>Tech City, CA 90210<br>United States',
            phone: '+1 (555) 123-4567',
            email: 'hq@company.com',
            position: { left: '30%', top: '40%' }
        },
        { 
            id: 'branch-west', 
            name: 'West Office', 
            address: '456 Innovation Ave<br>Silicon Valley, CA 94024<br>United States',
            phone: '+1 (555) 987-6543',
            email: 'west@company.com',
            position: { left: '15%', top: '65%' }
        },
        { 
            id: 'branch-east', 
            name: 'East Office', 
            address: '789 Finance Street<br>New York, NY 10004<br>United States',
            phone: '+1 (555) 246-8101',
            email: 'east@company.com',
            position: { left: '75%', top: '35%' }
        }
    ];

    // Add markers for each location
    locations.forEach(location => {
        const marker = document.createElement('div');
        marker.dataset.location = location.id;
        marker.classList.add(
            'absolute', 'w-6', 'h-6', 'bg-red-500', 'rounded-full', 
            'cursor-pointer', 'transform', 'hover:scale-110', 
            'transition-transform', 'flex', 'items-center', 'justify-center',
            'shadow-lg'
        );
        
        marker.style.left = location.position.left;
        marker.style.top = location.position.top;
        marker.style.transform = 'translate(-50%, -50%)';
        
        // Pulse effect
        if (location.id === 'headquarters') { // Default active location
            const pulse = document.createElement('div');
            pulse.classList.add('absolute', 'w-6', 'h-6', 'bg-red-500', 'rounded-full', 'animate-ping', 'opacity-75');
            marker.appendChild(pulse);
        }
        
        // Marker icon
        const icon = document.createElement('span');
        icon.textContent = '📍';
        icon.classList.add('text-xs', 'text-white');
        marker.appendChild(icon);
        
        // Marker tooltip
        const tooltip = document.createElement('div');
        tooltip.textContent = location.name;
        tooltip.classList.add(
            'absolute', 'bg-black', 'bg-opacity-75', 'text-white', 
            'text-xs', 'px-2', 'py-1', 'rounded', 'pointer-events-none',
            'opacity-0', 'transition-opacity', 'whitespace-nowrap'
        );
        tooltip.style.top = 'calc(100% + 5px)';
        tooltip.style.left = '50%';
        tooltip.style.transform = 'translateX(-50%)';
        marker.appendChild(tooltip);
        
        // Show tooltip on hover
        marker.addEventListener('mouseenter', () => {
            tooltip.classList.remove('opacity-0');
            tooltip.classList.add('opacity-100');
        });
        
        marker.addEventListener('mouseleave', () => {
            tooltip.classList.remove('opacity-100');
            tooltip.classList.add('opacity-0');
        });
        
        // Change office info on click
        marker.addEventListener('click', () => {
            updateActiveLocation(location.id);
            updateOfficeInfo(location);
        });
        
        mapContainer.appendChild(marker);
    });
    
    mapContainer.appendChild(mapElements);

    // Tab switching functionality
    mapTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const locationId = tab.getAttribute('data-tab');
            if (!locationId) return;
            
            // Update active tab
            mapTabs.forEach(t => {
                t.classList.remove('border-red-300', 'text-red-300');
                t.classList.add('border-transparent');
            });
            tab.classList.add('border-red-300', 'text-red-300');
            tab.classList.remove('border-transparent');
            
            // Update map and info
            updateActiveLocation(locationId);
            const location = locations.find(loc => loc.id === locationId);
            if (location) {
                updateOfficeInfo(location);
            }
        });
    });

    function updateActiveLocation(locationId: string): void {
        // Remove active pulse from all markers
        const allMarkers = document.querySelectorAll('[data-location]');
        allMarkers.forEach(marker => {
            marker.innerHTML = '<span class="text-xs text-white">📍</span>';
            
            // Add tooltip back
            const tooltip = document.createElement('div');
            tooltip.textContent = locations.find(loc => loc.id === marker.getAttribute('data-location'))?.name || '';
            tooltip.classList.add(
                'absolute', 'bg-black', 'bg-opacity-75', 'text-white', 
                'text-xs', 'px-2', 'py-1', 'rounded', 'pointer-events-none',
                'opacity-0', 'transition-opacity', 'whitespace-nowrap'
            );
            tooltip.style.top = 'calc(100% + 5px)';
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translateX(-50%)';
            marker.appendChild(tooltip);
            
            // Re-add hover events
            marker.addEventListener('mouseenter', () => {
                tooltip.classList.remove('opacity-0');
                tooltip.classList.add('opacity-100');
            });
            
            marker.addEventListener('mouseleave', () => {
                tooltip.classList.remove('opacity-100');
                tooltip.classList.add('opacity-0');
            });
        });
        
        // Add pulse to active marker
        const activeMarker = document.querySelector(`[data-location="${locationId}"]`);
        if (activeMarker) {
            const pulse = document.createElement('div');
            pulse.classList.add('absolute', 'w-6', 'h-6', 'bg-red-500', 'rounded-full', 'animate-ping', 'opacity-75');
            
            const icon = document.createElement('span');
            icon.textContent = '📍';
            icon.classList.add('text-xs', 'text-white', 'relative', 'z-10');
            
            activeMarker.innerHTML = '';
            activeMarker.appendChild(pulse);
            activeMarker.appendChild(icon);
            
            // Add tooltip back
            const tooltip = document.createElement('div');
            tooltip.textContent = locations.find(loc => loc.id === locationId)?.name || '';
            tooltip.classList.add(
                'absolute', 'bg-black', 'bg-opacity-75', 'text-white', 
                'text-xs', 'px-2', 'py-1', 'rounded', 'pointer-events-none',
                'opacity-0', 'transition-opacity', 'whitespace-nowrap'
            );
            tooltip.style.top = 'calc(100% + 5px)';
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translateX(-50%)';
            activeMarker.appendChild(tooltip);
            
            // Re-add hover events
            activeMarker.addEventListener('mouseenter', () => {
                tooltip.classList.remove('opacity-0');
                tooltip.classList.add('opacity-100');
            });
            
            activeMarker.addEventListener('mouseleave', () => {
                tooltip.classList.remove('opacity-100');
                tooltip.classList.add('opacity-0');
            });
        }
        
        // Update tab selection
        mapTabs.forEach(tab => {
            if (tab.getAttribute('data-tab') === locationId) {
                tab.classList.add('border-red-300', 'text-red-300');
                tab.classList.remove('border-transparent');
            } else {
                tab.classList.remove('border-red-300', 'text-red-300');
                tab.classList.add('border-transparent');
            }
        });
    }

    function updateOfficeInfo(location: any): void {
        if (!officeInfo) return;
        
        officeInfo.innerHTML = `
            <h3 class="font-bold text-lg mb-2">${location.name}</h3>
            <p class="text-gray-300">${location.address}</p>
            <div class="mt-3 flex space-x-3">
                <a href="tel:${location.phone}" class="text-red-300 hover:underline">${location.phone}</a>
                <a href="mailto:${location.email}" class="text-red-300 hover:underline">${location.email}</a>
            </div>
        `;
    }
}

function initializeLiveChat(): void {
    const chatInput = document.getElementById('chat-input') as HTMLInputElement;
    const sendButton = document.getElementById('send-chat');
    const chatMessages = document.getElementById('chat-messages');
    
    if (!chatInput || !sendButton || !chatMessages) return;
    
    const supportReplies = [
        "Thank you for your message. How else can I assist you today?",
        "I understand your concern. Let me help you with that.",
        "Great question! Our team specializes in that area.",
        "I'll need to check with our technical team about this. Can I get your email to follow up?",
        "We have several solutions that might work for your situation.",
        "That's a common question. The short answer is yes, we can help with that.",
        "I'd be happy to schedule a demo for you. What days work best for you?",
        "We've helped many clients with similar requirements.",
        "Let me direct you to our knowledge base for more detailed information on that topic."
    ];
    
    // Send message function
    const sendMessage = () => {
        const message = chatInput.value.trim();
        if (message === '') return;
        
        // Create user message element
        const userMessage = document.createElement('div');
        userMessage.classList.add(
            'flex', 'items-start', 'space-x-2', 
            'justify-end', 'ml-12'
        );
        
        const messageContent = document.createElement('div');
        messageContent.classList.add(
            'bg-red-500', 'rounded-lg', 'p-3', 'max-w-[80%]'
        );
        
        const messageText = document.createElement('div');
        messageText.classList.add('text-sm');
        messageText.textContent = message;
        
        messageContent.appendChild(messageText);
        userMessage.appendChild(messageContent);
        
        chatMessages.appendChild(userMessage);
        
        // Clear input
        chatInput.value = '';
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add(
            'flex', 'items-start', 'space-x-2', 'typing-indicator'
        );
        
        const supportAvatar = document.createElement('div');
        supportAvatar.classList.add(
            'w-8', 'h-8', 'rounded-full', 'bg-red-300', 
            'flex', 'items-center', 'justify-center', 
            'text-white', 'font-bold', 'flex-shrink-0'
        );
        supportAvatar.textContent = 'S';
        
        const typingContent = document.createElement('div');
        typingContent.classList.add(
            'bg-[#444]', 'rounded-lg', 'p-3', 
            'max-w-[80%]', 'flex', 'items-center'
        );
        
        const dots = document.createElement('div');
        dots.classList.add('flex', 'space-x-1');
        
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('div');
            dot.classList.add(
                'w-2', 'h-2', 'bg-gray-300', 'rounded-full',
                'animate-pulse'
            );
            dot.style.animationDelay = `${i * 0.2}s`;
            dots.appendChild(dot);
        }
        
        typingContent.appendChild(dots);
        typingIndicator.appendChild(supportAvatar);
        typingIndicator.appendChild(typingContent);
        
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Simulate reply after delay
        setTimeout(() => {
            // Remove typing indicator
            chatMessages.removeChild(typingIndicator);
            
            // Create support reply
            const supportMessage = document.createElement('div');
            supportMessage.classList.add('flex', 'items-start', 'space-x-2');
            
            const supportAvatar = document.createElement('div');
            supportAvatar.classList.add(
                'w-8', 'h-8', 'rounded-full', 'bg-red-300', 
                'flex', 'items-center', 'justify-center', 
                'text-white', 'font-bold', 'flex-shrink-0'
            );
            supportAvatar.textContent = 'S';
            
            const messageContent = document.createElement('div');
            messageContent.classList.add('bg-[#444]', 'rounded-lg', 'p-3', 'max-w-[80%]');
            
            const messageName = document.createElement('div');
            messageName.classList.add('text-sm', 'font-bold', 'text-red-300', 'mb-1');
            messageName.textContent = 'Support Agent';
            
            const messageText = document.createElement('div');
            messageText.classList.add('text-sm');
            
            // Select random response
            const randomIndex = Math.floor(Math.random() * supportReplies.length);
            messageText.textContent = supportReplies[randomIndex];
            
            messageContent.appendChild(messageName);
            messageContent.appendChild(messageText);
            supportMessage.appendChild(supportAvatar);
            supportMessage.appendChild(messageContent);
            
            chatMessages.appendChild(supportMessage);
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1500);
    };
    
    // Event listeners
    sendButton.addEventListener('click', sendMessage);
    
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

function initializeFAQ(): void {
    const faqHeaders = document.querySelectorAll('.faq-item button');
    const faqSearch = document.getElementById('faq-search') as HTMLInputElement;
    const faqItems = document.querySelectorAll('.faq-item');
    const noResults = document.getElementById('faq-no-results');
    
    if (!faqSearch || !noResults) return;
    
    // FAQ accordion toggle
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const faqItem = header.parentElement;
            const faqBody = faqItem?.querySelector('.faq-body');
            const icon = header.querySelector('span:last-child');
            
            if (!faqItem || !faqBody || !icon) return;
            
            // Check if this item is already open
            const isOpen = faqBody.classList.contains('max-h-96');
            
            // Close all other items first
            document.querySelectorAll('.faq-body').forEach(body => {
                body.classList.remove('max-h-96', 'py-4');
                body.classList.add('max-h-0', 'py-0');
            });
            
            document.querySelectorAll('.faq-item button span:last-child').forEach(iconElement => {
                iconElement.textContent = '+';
                iconElement.classList.remove('rotate-45');
            });
            
            // Toggle the clicked item
            if (!isOpen) {
                faqBody.classList.remove('max-h-0', 'py-0');
                faqBody.classList.add('max-h-96', 'py-4');
                icon.textContent = '+';
                icon.classList.add('rotate-45');
            }
        });
    });
    
    // FAQ search functionality
    faqSearch.addEventListener('input', () => {
        const searchTerm = faqSearch.value.trim().toLowerCase();
        let hasResults = false;
        
        faqItems.forEach(item => {
            const question = item.getAttribute('data-question') || '';
            const answer = item.getAttribute('data-answer') || '';
            
            if (
                question.toLowerCase().includes(searchTerm) || 
                answer.toLowerCase().includes(searchTerm) ||
                searchTerm === ''
            ) {
                (item as HTMLElement).style.display = 'block';
                hasResults = true;
            } else {
                (item as HTMLElement).style.display = 'none';
            }
        });
        
        // Toggle no results message
        if (hasResults || searchTerm === '') {
            noResults.classList.add('hidden');
        } else {
            noResults.classList.remove('hidden');
        }
    });
}
