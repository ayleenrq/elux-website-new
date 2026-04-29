import { motion } from 'framer-motion';

// Common Types for Reusability
export interface ServiceDetailProps {
    serviceHash?: string;
    stageCategory?: string;
    serviceTitle?: string;
    description?: string;
        features?: string[];
    longDescription?: {
        header: string;
        paragraphs: string[];
    };
    deliverables?: {
        title: string;
        span: 1 | 2;
        imagePlaceholder?: boolean;
        image?: string;
        description?: string;
        features?: string[];
    }[];
    processSteps?: {
        number: string;
        title: string;
        description: string;
    }[];
    featuredProofImage?: string;
}

// ─── Service Data Map ──────────────────────────────────────────────────────────
export const serviceDataMap: Record<string, Omit<ServiceDetailProps, 'serviceHash'>> = {
    '#services': {
        stageCategory: 'ALL SERVICES',
        serviceTitle: 'UI/UX & Product Design.',
        description: 'From MVP concepts to enterprise-grade design systems — we build digital products that ship, scale, and convert.',
        longDescription: {
            header: 'Your Product Deserves Design That Performs.',
            paragraphs: [
                'Whether you\'re a seed-stage founder validating your first product or a growth-stage company scaling to new markets, we bring the right design strategy and execution at every stage.',
                'Our three engagement tiers — Seed, Growth, and Scale — are built around real startup milestones, not agency upselling. You get exactly what you need, nothing more.',
                'We\'ve shipped 80+ products across SaaS, fintech, healthtech, and e-commerce. Our team of senior designers embeds into your workflow, speaks your language, and delivers production-ready work every time.',
            ],
        },
        deliverables: [
            { title: 'MVP UX & UI Design', span: 2, description: 'Core flows and screens users actually need, designed for fast validation and investor-ready demos.', imagePlaceholder: false },
            { title: 'Design Systems', span: 1, description: 'Scalable component libraries that accelerate your team\'s development velocity.' },
            { title: 'UX Research & Audits', span: 1, description: 'Evidence-based direction from real user data and friction-point analysis.' },
            { title: 'No-Code & Web Development', span: 2, description: 'Full product builds on Webflow, Framer, or React — from design to deployment.', imagePlaceholder: false },
        ],
        processSteps: [
            { number: '01', title: 'Discovery', description: 'We align on your product goals, target users, and key constraints before touching a single screen.' },
            { number: '02', title: 'Strategy', description: 'Mapping user journeys, information architecture, and interaction patterns that solve the right problems.' },
            { number: '03', title: 'Design', description: 'High-fidelity UI that signals credibility and converts — built for both users and developers.' },
            { number: '04', title: 'Handoff & Launch', description: 'Annotated Figma files, a complete design system, and full dev-ready specifications. Zero guesswork.' },
        ],
        featuredProofImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    },
    '#services-seed': {
        stageCategory: 'SEED STAGE',
        serviceTitle: 'Launch-Ready Products, Fast.',
        description: 'From zero to a fundable, shippable product interface. We design the surfaces that signal credibility fast — in 2–4 weeks.',
        longDescription: {
            header: 'Validate Fast. Ship a Credible MVP in Weeks.',
            paragraphs: [
                'Pragmatic, metrics-first thinking means removing all friction. We do not do endless user research or moodboards when you just need fundamental flows in place to prove your core value hypothesis.',
                'Our process gives you a high-fidelity interface that looks totally legit from day one — giving your team exactly what they need to code and launch without second-guessing every padding value.',
                'Seed-stage clients use our work to secure funding, attract early users, and validate their riskiest assumptions before committing to full development costs.',
            ],
        },
        deliverables: [
            { title: 'User Flows & Architecture', span: 2, imagePlaceholder: false,
                "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop" },
            { title: 'High-Fidelity UI', span: 1, description: 'Premium visual language applied to every screen your users will see.' },
            { title: 'Clickable Prototype', span: 1, description: 'Interactive demo-ready prototype for investors, users, and your dev team.' },
            { title: 'Developer Handoff', span: 2, description: 'Ready for Framer, Webflow, or custom React codebases — zero guesswork for your engineers.' },
        ],
        processSteps: [
            { number: '01', title: 'Audit & Core Flows', description: 'Mapping out the absolute necessities for your launch — no bloat, no features that can wait.' },
            { number: '02', title: 'High-Fidelity Design', description: 'Applying a premium visual language that signals trust and competence from the first impression.' },
            { number: '03', title: 'Motion & Prototyping', description: 'Linking it all together so it feels real — interactive and demo-ready.' },
            { number: '04', title: 'Dev-Ready Handoff', description: 'Delivering precise Figma specs with no guesswork left behind for your engineering team.' },
        ],
        featuredProofImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    },
    '#services-growth': {
        stageCategory: 'GROWTH STAGE',
        serviceTitle: 'Redesign. Optimize. Scale.',
        description: 'Your product is live and growing. Now it\'s time to eliminate friction, elevate your brand, and build a foundation for the next 10x.',
        longDescription: {
            header: 'From Working to Winning — Growth-Stage UX.',
            paragraphs: [
                'You\'ve achieved product-market fit. Your biggest risk now isn\'t building — it\'s retention, activation, and conversion. Every drop-off in your onboarding flow is revenue you\'re leaving behind.',
                'Our growth-stage services focus on evidence-based redesign. We audit your existing product, identify the highest-impact friction points, and systematically improve them — with measurable results.',
                'Whether you need a full product redesign, a design system to accelerate your team, or an embedded senior designer to work alongside your developers — we have the right engagement for your stage.',
            ],
        },
        deliverables: [
            { title: 'UX Audit & Roadmap', span: 2, description: 'A prioritized list of friction points with specific design recommendations and expected impact metrics.', imagePlaceholder: false },
            { title: 'Brand & Visual Enhancement', span: 1, description: 'Elevate your product identity without disrupting existing users.' },
            { title: 'Dashboard & Data UX', span: 1, description: 'Turn complex data into clear, decision-driving interfaces your users will return to.' },
            { title: 'Team Extension', span: 2, description: 'Senior designers embedded into your existing product team — working in your tools, your process, your cadence.' },
        ],
        processSteps: [
            { number: '01', title: 'UX Audit', description: 'Systematic review of your existing product — user flows, drop-off points, and conversion blockers.' },
            { number: '02', title: 'Priority Roadmap', description: 'A ranked list of improvements with effort vs. impact scoring and a clear execution sequence.' },
            { number: '03', title: 'Iterative Design', description: 'Redesigning flows and components in focused sprints — testable, shippable, and measurable.' },
            { number: '04', title: 'Continuous Support', description: 'Ongoing design partnership to support your team as your product scales.' },
        ],
        featuredProofImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2070&auto=format&fit=crop',
    },
    '#services-scale': {
        stageCategory: 'SCALE STAGE',
        serviceTitle: 'Enterprise-Grade Design Systems.',
        description: 'When multiple teams are building the same product, you need a design system that scales without friction. We build living systems that grow with your organization.',
        longDescription: {
            header: 'Design at Organizational Scale — Without the Chaos.',
            paragraphs: [
                'At scale, design debt compounds fast. Inconsistent components, duplicated work, and missing documentation slow every team down. A proper design system pays for itself within 6 months — in reduced rework, faster shipping, and better product coherence.',
                'We build complete design systems from scratch, or audit and scale systems that\'ve outgrown their original scope. Every token, component, pattern, and documentation is production-ready and developer-integrated.',
                'Our enterprise UX redesign service takes on complex, multi-team products and restructures their design architecture for clarity, scalability, and consistent quality at every touchpoint.',
            ],
        },
        deliverables: [
            { title: 'Design System Build', span: 2, description: 'A complete, living system — tokens, components, patterns, guidelines, and interactive documentation.', imagePlaceholder: false },
            { title: 'Enterprise UX Redesign', span: 1, description: 'Scalable design architecture for complex, multi-team products with governance guidelines.' },
            { title: 'UX Research & Strategy', span: 1, description: 'User interviews, workshops, and evidence-based direction at the enterprise level.' },
            { title: 'Ongoing Design Partnership', span: 2, description: 'A long-term design team that grows with your product — embedded, accountable, and strategic.' },
        ],
        processSteps: [
            { number: '01', title: 'System Audit', description: 'Mapping your existing component landscape, identifying inconsistencies and gaps before building.' },
            { number: '02', title: 'Token & Foundation', description: 'Establishing the core design tokens — color, typography, spacing, elevation — that everything builds on.' },
            { number: '03', title: 'Component Library', description: 'Building every component with accessibility, dark mode, and responsive behavior built in from day one.' },
            { number: '04', title: 'Documentation & Handoff', description: 'Storybook or Figma-based docs your entire organization can use to ship consistently.' },
        ],
        featuredProofImage: 'https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=2070&auto=format&fit=crop',
    },
    '#services-seed-mvp': {
        "stageCategory": "SEED STAGE",
        "serviceTitle": "MVP UX & UI Design",
        "description": "From zero to a fundable, shippable product interface in weeks, not months.",
        "longDescription": {
            "header": "The Minimum Viable Product, Designed for Maximum Impact.",
            "paragraphs": [
                "In the seed stage, your biggest enemy is time. You need to validate your core hypothesis and secure funding before runway runs out. But building a clunky, ugly MVP just to test the waters is a mistake. Users today have high expectations. A poor interface doesn't test your idea; it tests their patience.",
                "We design MVP interfaces that strike the perfect balance: zero bloat, core-features only, but with a premium visual language that signals trust and competence. You get an interface that looks like a Series A product on a seed budget.",
                "Our process is lean and pragmatic. We map out the essential user flows, skip the endless moodboarding, and dive straight into high-fidelity design. The result is a dev-ready interface that your engineers can build rapidly and your investors will love."
            ]
        },
        "deliverables": [
            {
                "title": "Core User Flows",
                "span": 2,
                "description": "Mapping the exact path to value for your users, removing all unnecessary friction.",
                "features": [
                    "Journey Mapping",
                    "Friction Analysis",
                    "Information Architecture",
                    "Edge-case Handling"
                ]
            },
            {
                "title": "High-Fidelity UI",
                "span": 1,
                "description": "Premium visual design for 10-15 core screens.",
                "features": [
                    "Pixel-perfect Layouts",
                    "Typography & Color",
                    "Interactive States",
                    "Component Library"
                ]
            },
            {
                "title": "Design System Lite",
                "span": 1,
                "description": "A foundational set of components to speed up development.",
                "imagePlaceholder": true,
                "features": [
                    "Design Tokens",
                    "Master Components",
                    "Auto-layout Ready",
                    "Scalable Structure"
                ]
            },
            {
                "title": "Developer Handoff",
                "span": 2,
                "description": "Figma files annotated with exact specs, assets, and variables. Ready to be coded.",
                "imagePlaceholder": false,
                "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
                "features": [
                    "CSS/Tailwind Variables",
                    "Asset Export",
                    "Measurement Specs",
                    "Flow Documentation"
                ]
            }
        ],
        "processSteps": [
            {
                "number": "01",
                "title": "Scope Definition",
                "description": "We ruthlessly prioritize what makes it into the MVP. No nice-to-haves."
            },
            {
                "number": "02",
                "title": "Wireframing",
                "description": "Low-fidelity layouts to align on structure and information architecture."
            },
            {
                "number": "03",
                "title": "Visual Design",
                "description": "Applying a modern, trust-building aesthetic to the core flows."
            },
            {
                "number": "04",
                "title": "Handoff",
                "description": "Delivering pixel-perfect specs to your engineering team."
            }
        ],
        "featuredProofImage": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    '#services-seed-prototype': {
        "stageCategory": "SEED STAGE",
        "serviceTitle": "Clickable Prototype",
        "description": "Sell the vision before you write a single line of code.",
        "longDescription": {
            "header": "Interactive Prototypes that Close Deals.",
            "paragraphs": [
                "Building a full product to pitch investors or early customers is an expensive gamble. A high-fidelity clickable prototype allows you to demonstrate the core value proposition of your idea without the engineering overhead.",
                "We create prototypes that look, feel, and act like the real thing. From complex state changes to smooth micro-interactions, we build illusions so convincing that stakeholders will ask for the login link.",
                "Use our prototypes to secure funding, presell your SaaS, validate market demand, or align your internal stakeholders on the product vision before committing development resources."
            ]
        },
        "deliverables": [
            {
                "title": "Interactive Figma Prototype",
                "span": 2,
                "description": "A fully linked, clickable demonstration of your core user journey.",
                "features": [
                    "End-to-end Flow",
                    "Realistic Data",
                    "Complex Routing",
                    "Stakeholder Ready"
                ]
            },
            {
                "title": "Micro-interactions",
                "span": 1,
                "description": "Hover states, transitions, and loading animations that sell the realism.",
                "features": [
                    "Hover Effects",
                    "Loading States",
                    "Page Transitions",
                    "Success Prompts"
                ]
            },
            {
                "title": "Pitch Presentation",
                "span": 1,
                "description": "Screenshots and recordings optimized for your pitch deck.",
                "features": [
                    "High-res Exports",
                    "Screen Recordings",
                    "Device Mockups",
                    "Slide Integration"
                ]
            },
            {
                "title": "User Testing Setup",
                "span": 2,
                "description": "Prototype configured specifically for Maze or UserTesting.com to gather early feedback.",
                "imagePlaceholder": false,
                "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
                "features": [
                    "Testing Scripts",
                    "Task Definition",
                    "Analytics Integration",
                    "Feedback Capture"
                ]
            }
        ],
        "processSteps": [
            {
                "number": "01",
                "title": "Storyboarding",
                "description": "Defining the exact sequence of screens needed to tell your product story."
            },
            {
                "number": "02",
                "title": "UI Design",
                "description": "Creating the high-fidelity screens required for the illusion."
            },
            {
                "number": "03",
                "title": "Prototyping",
                "description": "Connecting the screens with realistic transitions and logic."
            },
            {
                "number": "04",
                "title": "Testing & Refinement",
                "description": "Ensuring the flow makes sense to first-time viewers."
            }
        ],
        "featuredProofImage": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    },
    '#services-seed-landing': {
        "stageCategory": "SEED STAGE",
        "serviceTitle": "Launch-Ready Landing Page",
        "description": "High-converting landing pages built to capture attention and waitlist signups.",
        "longDescription": {
            "header": "Your First Impression, Optimized for Conversion.",
            "paragraphs": [
                "Before you launch your product, you need to launch your narrative. A coming-soon page or waitlist landing page is your first opportunity to test your messaging and gauge market demand.",
                "We don't just design pretty pages; we design conversion machines. By combining persuasive copywriting principles with striking visual design and scroll-stopping animations, we ensure your page captures emails and builds hype.",
                "From the hero headline to the final call-to-action, every element is deliberately crafted to establish trust, articulate value, and drive user action."
            ]
        },
        "deliverables": [
            {
                "title": "Strategic Copywriting",
                "span": 2,
                "description": "We help refine your value proposition and write persuasive, benefit-driven copy.",
                "features": [
                    "Value Prop Definition",
                    "Headline Testing",
                    "Persuasive Structuring",
                    "SEO Basics"
                ]
            },
            {
                "title": "Custom Illustrations/3D",
                "span": 1,
                "description": "Unique visual assets that differentiate your brand from templates.",
                "features": [
                    "Bespoke 3D Assets",
                    "Vector Illustrations",
                    "Brand Alignment",
                    "Lottie Animations"
                ]
            },
            {
                "title": "Responsive Design",
                "span": 1,
                "description": "Flawless experience across mobile, tablet, and desktop.",
                "features": [
                    "Mobile-First",
                    "Tablet Breakpoints",
                    "Retina Ready",
                    "Fluid Typography"
                ]
            },
            {
                "title": "Webflow Development",
                "span": 2,
                "description": "Optional: We can build and host the page on Webflow, integrating with your CRM.",
                "imagePlaceholder": false,
                "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
                "features": [
                    "CMS Setup",
                    "Form Integration",
                    "Scroll Animations",
                    "Fast Hosting"
                ]
            }
        ],
        "processSteps": [
            {
                "number": "01",
                "title": "Messaging Strategy",
                "description": "Defining the core value prop and the story we need to tell."
            },
            {
                "number": "02",
                "title": "Wireframing",
                "description": "Laying out the content structure for maximum narrative flow."
            },
            {
                "number": "03",
                "title": "Visual Design",
                "description": "Bringing the page to life with color, typography, and imagery."
            },
            {
                "number": "04",
                "title": "Development",
                "description": "Building the page with buttery-smooth scroll animations."
            }
        ],
        "featuredProofImage": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
    },
    '#services-seed-nocode': {
        "stageCategory": "SEED STAGE",
        "serviceTitle": "No-Code MVP Build",
        "description": "Full products launched in weeks using Bubble, Webflow, and Make.",
        "longDescription": {
            "header": "Bypass the Engineering Bottleneck.",
            "paragraphs": [
                "Why spend six months and $100k building a custom application when you can validate your business model in four weeks using no-code tools? No-code has matured; it's no longer just for simple websites. We build complex marketplaces, SaaS dashboards, and internal tools without writing a single line of traditional code.",
                "We combine our senior-level UX/UI design with expert-level Bubble and Webflow development. This means your no-code product won't look like a template\u2014it will look and function like a custom-coded application.",
                "This approach allows you to iterate rapidly based on real user feedback, finding product-market fit faster and cheaper than ever before."
            ]
        },
        "deliverables": [
            {
                "title": "Database Architecture",
                "span": 2,
                "description": "Structuring your data models for scalability and performance within the no-code platform.",
                "features": [
                    "Data Modeling",
                    "Relationship Mapping",
                    "Security Rules",
                    "Performance Tuning"
                ]
            },
            {
                "title": "Custom UI Design",
                "span": 1,
                "description": "Bespoke interfaces designed in Figma before being built.",
                "features": [
                    "Figma to Webflow",
                    "Custom styling",
                    "Responsive UI"
                ]
            },
            {
                "title": "API Integrations",
                "span": 1,
                "description": "Connecting your app to Stripe, SendGrid, OpenAI, and more.",
                "features": [
                    "Stripe Checkout",
                    "SendGrid Emails",
                    "Third-party REST APIs"
                ]
            },
            {
                "title": "Fully Functional App",
                "span": 2,
                "description": "A live, usable application ready for your first paying customers.",
                "imagePlaceholder": false,
                "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
                "features": [
                    "User Auth",
                    "Payment Processing",
                    "Live Database",
                    "Production Ready"
                ]
            }
        ],
        "processSteps": [
            {
                "number": "01",
                "title": "Feasibility Check",
                "description": "Ensuring your product requirements can be met with no-code tools."
            },
            {
                "number": "02",
                "title": "Design & Architecture",
                "description": "Designing the UI and structuring the database concurrently."
            },
            {
                "number": "03",
                "title": "Development",
                "description": "Building out the logic, workflows, and integrations."
            },
            {
                "number": "04",
                "title": "Testing & Launch",
                "description": "Rigorous QA before handing over the keys to your new business."
            }
        ],
        "featuredProofImage": "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
    '#services-seed-pitch': {
        "stageCategory": "SEED STAGE",
        "serviceTitle": "Pitch & Demo Readiness",
        "description": "Investor-facing decks and product visuals that demand attention.",
        "longDescription": {
            "header": "Tell a Story Investors Can't Ignore.",
            "paragraphs": [
                "A great idea with a terrible pitch deck will struggle to raise capital. Investors pattern-match based on signals of competence, and your pitch deck is the first signal they see.",
                "We elevate your narrative by combining compelling copywriting with stunning visual design. We take complex technical concepts and distill them into clear, impactful slides that clearly articulate the market opportunity and your unique solution.",
                "Beyond just slides, we create high-fidelity mockups of your future product to make the vision tangible. We help you look like the inevitable winner in your category before you've even launched."
            ]
        },
        "deliverables": [
            {
                "title": "Narrative Structuring",
                "span": 2,
                "description": "Organizing your deck to flow logically from problem to solution to traction.",
                "features": [
                    "Problem/Solution Fit",
                    "Market Sizing Data",
                    "Competitor Matrix",
                    "Financial Projections"
                ]
            },
            {
                "title": "Deck Design",
                "span": 1,
                "description": "15-20 beautifully designed slides in Figma or Pitch.com.",
                "features": [
                    "Custom Templates",
                    "Typography System",
                    "Brand Integration"
                ]
            },
            {
                "title": "Product Mockups",
                "span": 1,
                "description": "Hero shots of your interface to make the solution real.",
                "features": [
                    "Device Frames",
                    "Isometric Views",
                    "High-res Renders"
                ]
            },
            {
                "title": "Data Visualization",
                "span": 2,
                "description": "Turning boring charts into compelling infographics that highlight your growth.",
                "imagePlaceholder": false,
                "image": "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop",
                "features": [
                    "Custom Charts",
                    "Infographics",
                    "Traction Metrics",
                    "Clear Data Story"
                ]
            }
        ],
        "processSteps": [
            {
                "number": "01",
                "title": "Content Review",
                "description": "Analyzing your current deck and business plan."
            },
            {
                "number": "02",
                "title": "Storyboarding",
                "description": "Mapping out the flow of the presentation."
            },
            {
                "number": "03",
                "title": "Visual Design",
                "description": "Creating a cohesive aesthetic that matches your brand."
            },
            {
                "number": "04",
                "title": "Refinement",
                "description": "Polishing the details until every slide is perfect."
            }
        ],
        "featuredProofImage": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    },
    '#services-growth-audit': {
        "stageCategory": "GROWTH STAGE",
        "serviceTitle": "UX Audit & Priorities",
        "description": "Identify exactly where users are dropping off and how to fix it.",
        "longDescription": {
            "header": "Stop Guessing Why Users Churn.",
            "paragraphs": [
                "When you have a live product, design decisions should no longer be based on intuition. A UX Audit is a systematic evaluation of your product against established usability heuristics, user psychology, and your specific conversion goals.",
                "We dive deep into your analytics, conduct expert reviews of your core flows, and optionally run targeted user testing. The goal isn't just to find what's \"ugly\"\u2014it's to identify specific friction points that are costing you money.",
                "We deliver a prioritized roadmap. We don't just hand you a list of 100 problems; we rank them by effort versus impact, giving your team a clear, actionable plan to improve retention and revenue."
            ]
        },
        "deliverables": [
            {
                "title": "Heuristic Evaluation",
                "span": 2,
                "description": "A comprehensive review of your app against usability best practices.",
                "features": [
                    "Nielsen Heuristics",
                    "Accessibility Check",
                    "Consistency Audit",
                    "Error Prevention"
                ]
            },
            {
                "title": "Friction Mapping",
                "span": 1,
                "description": "Visualizing exactly where users are abandoning the funnel.",
                "features": [
                    "Drop-off Analysis",
                    "User Flow Diagrams",
                    "Analytics Review"
                ]
            },
            {
                "title": "Quick Wins",
                "span": 1,
                "description": "Immediate, low-effort changes that can boost metrics today.",
                "features": [
                    "Copy Tweaks",
                    "Button Placements",
                    "Color Adjustments"
                ]
            },
            {
                "title": "Prioritized Roadmap",
                "span": 2,
                "description": "A strategic plan for the next 3-6 months of product design work.",
                "imagePlaceholder": false,
                "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
                "features": [
                    "Effort/Impact Matrix",
                    "Sprint Planning",
                    "Resource Allocation",
                    "Metric Goals"
                ]
            }
        ],
        "processSteps": [
            {
                "number": "01",
                "title": "Data Gathering",
                "description": "Reviewing Mixpanel, Google Analytics, or existing user feedback."
            },
            {
                "number": "02",
                "title": "Expert Review",
                "description": "Our senior designers walk through the product identifying issues."
            },
            {
                "number": "03",
                "title": "Synthesis",
                "description": "Grouping findings into themes and strategic recommendations."
            },
            {
                "number": "04",
                "title": "Action Plan",
                "description": "Presenting the findings with specific, actionable next steps."
            }
        ],
        "featuredProofImage": "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
    '#services-growth-brand': {
        "stageCategory": "GROWTH STAGE",
        "serviceTitle": "Brand & Visual Enhancement",
        "description": "Elevate your product's aesthetic without rebuilding it from scratch.",
        "longDescription": {
            "header": "A Facelift for Your Product.",
            "paragraphs": [
                "Your product works well, but the UI is starting to look dated. A full redesign is too risky and expensive right now. This is where a Brand & Visual Enhancement comes in.",
                "We take your existing structural layouts and apply a modern, premium visual layer. We update the typography, refine the color palette, improve spacing, and introduce modern UI patterns (like better shadows, glassmorphism, or updated iconography) without changing the underlying UX flows.",
                "This approach allows you to dramatically improve the perceived value and trustworthiness of your product with minimal disruption to your engineering team or your existing users."
            ]
        },
        "deliverables": [
            {
                "title": "UI Refresh",
                "span": 2,
                "description": "Updating core screens with a modern visual language.",
                "features": [
                    "Modern Patterns",
                    "Depth & Shadows",
                    "Glassmorphism touches",
                    "Spacing Fixes"
                ]
            },
            {
                "title": "Updated Design Tokens",
                "span": 1,
                "description": "New color palettes, typography scales, and spacing rules.",
                "features": [
                    "Color System",
                    "Type Hierarchy",
                    "Spacing Scale"
                ]
            },
            {
                "title": "Iconography & Assets",
                "span": 1,
                "description": "A cohesive set of icons and illustrations.",
                "features": [
                    "Custom Icon Set",
                    "SVG Assets",
                    "Illustration Library"
                ]
            },
            {
                "title": "Implementation Guide",
                "span": 2,
                "description": "CSS/Tailwind variables and guidance for developers to apply the new styles.",
                "imagePlaceholder": false,
                "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
                "features": [
                    "Tailwind Config",
                    "CSS Variables",
                    "Before/After Specs",
                    "QA Support"
                ]
            }
        ],
        "processSteps": [
            {
                "number": "01",
                "title": "Visual Audit",
                "description": "Identifying inconsistencies and areas for visual improvement."
            },
            {
                "number": "02",
                "title": "Moodboarding",
                "description": "Exploring new aesthetic directions that align with your brand."
            },
            {
                "number": "03",
                "title": "Style Application",
                "description": "Applying the new style to key screens for review."
            },
            {
                "number": "04",
                "title": "Rollout Plan",
                "description": "Strategizing how to implement the changes gradually."
            }
        ],
        "featuredProofImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    '#services-growth-redesign': {
        "stageCategory": "GROWTH STAGE",
        "serviceTitle": "Product Redesign",
        "description": "A strategic overhaul of your product's UX and UI to support scale.",
        "longDescription": {
            "header": "Rebuilding the Engine While Flying the Plane.",
            "paragraphs": [
                "You've outgrown your initial MVP. Features have been bolted on over the years, the navigation is a mess, and technical/design debt is slowing down development. It's time for a fundamental redesign.",
                "We approach product redesigns systematically. We don't just change the colors; we rethink the information architecture, streamline the core workflows, and build a scalable design foundation that can support your next phase of growth.",
                "We work closely with your product and engineering teams to ensure the redesign is ambitious yet technically feasible, often breaking the rollout into manageable phases to mitigate risk."
            ]
        },
        "deliverables": [
            {
                "title": "New Information Architecture",
                "span": 2,
                "description": "Restructuring the navigation and hierarchy of the application.",
                "features": [
                    "Site Mapping",
                    "Navigation UX",
                    "Content Grouping",
                    "Search & Filtering"
                ]
            },
            {
                "title": "Optimized User Flows",
                "span": 1,
                "description": "Streamlining the paths for core tasks.",
                "features": [
                    "Friction Removal",
                    "Shorter Paths",
                    "Clearer CTAs"
                ]
            },
            {
                "title": "Comprehensive UI Redesign",
                "span": 1,
                "description": "A completely new, modern interface.",
                "features": [
                    "Component System",
                    "Dark/Light Mode",
                    "Accessibility"
                ]
            },
            {
                "title": "Phased Rollout Strategy",
                "span": 2,
                "description": "A plan to release the redesign in stages to avoid shocking users.",
                "imagePlaceholder": false,
                "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
                "features": [
                    "Feature Flagging",
                    "Beta Testing Group",
                    "A/B Test Setup",
                    "Rollback Plan"
                ]
            }
        ],
        "processSteps": [
            {
                "number": "01",
                "title": "Deep Discovery",
                "description": "Understanding the legacy constraints and user pain points."
            },
            {
                "number": "02",
                "title": "Structural Design",
                "description": "Wireframing the new architecture."
            },
            {
                "number": "03",
                "title": "Detailed Design",
                "description": "Crafting the new high-fidelity interface component by component."
            },
            {
                "number": "04",
                "title": "Iterative Handoff",
                "description": "Delivering specs in sprints aligned with your dev team."
            }
        ],
        "featuredProofImage": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    },
    '#services-growth-dashboard': {
        "stageCategory": "GROWTH STAGE",
        "serviceTitle": "Dashboard & Data UX",
        "description": "Turn overwhelming data into actionable insights with clarity.",
        "longDescription": {
            "header": "Making Complex Data Understandable.",
            "paragraphs": [
                "In SaaS and B2B products, the dashboard is where you win or lose. A good dashboard shouldn't just show data; it should answer questions. \"What needs my attention right now?\", \"How is my business performing?\", \"What action should I take next?\"",
                "We specialize in designing high-density data interfaces. We understand the nuances of data visualization, table design, filtering mechanisms, and progressive disclosure.",
                "By prioritizing information hierarchy and reducing cognitive load, we turn overwhelming spreadsheets into intuitive command centers that your users will rely on daily."
            ]
        },
        "deliverables": [
            {
                "title": "Dashboard Architecture",
                "span": 2,
                "description": "Structuring the page to prioritize the most important metrics.",
                "features": [
                    "Widget Layouts",
                    "Customizable Views",
                    "KPI Highlights",
                    "Drill-down Paths"
                ]
            },
            {
                "title": "Data Visualization Design",
                "span": 1,
                "description": "Selecting the right charts for the right data.",
                "features": [
                    "Chart Library",
                    "Tooltip UX",
                    "Color Coding"
                ]
            },
            {
                "title": "Advanced Table UX",
                "span": 1,
                "description": "Designing sorting, filtering, and bulk actions.",
                "features": [
                    "Sticky Headers",
                    "Inline Editing",
                    "Complex Filters"
                ]
            },
            {
                "title": "Responsive Layouts",
                "span": 2,
                "description": "Ensuring complex data remains usable on smaller screens.",
                "imagePlaceholder": false,
                "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
                "features": [
                    "Mobile Tables",
                    "Stacked Charts",
                    "Touch-friendly Filters",
                    "App-like Feel"
                ]
            }
        ],
        "processSteps": [
            {
                "number": "01",
                "title": "Data Audit",
                "description": "Understanding the data you have and what users need from it."
            },
            {
                "number": "02",
                "title": "Wireframing",
                "description": "Layout out the widget structure and table formats."
            },
            {
                "number": "03",
                "title": "UI Design",
                "description": "Applying visual polish and designing the interaction states."
            },
            {
                "number": "04",
                "title": "Prototyping",
                "description": "Demonstrating how filters and drill-downs will work."
            }
        ],
        "featuredProofImage": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
    },
    '#services-growth-team': {
        "stageCategory": "GROWTH STAGE",
        "serviceTitle": "Team Extension",
        "description": "Senior designers seamlessly integrated into your agile workflows.",
        "longDescription": {
            "header": "Scale Your Design Capacity Instantly.",
            "paragraphs": [
                "Hiring senior product designers is slow, expensive, and risky. When your roadmap is expanding faster than your team, our Team Extension model provides instant access to top-tier design talent.",
                "We don't work like a traditional agency. We embed our designers directly into your Slack, Jira, and Agile ceremonies. We act as a seamless extension of your in-house team, adopting your processes and culture.",
                "Whether you need a dedicated UI specialist to crank out screens or a strategic UX lead to guide a new product vertical, we provide flexible, scalable capacity that turns on immediately."
            ]
        },
        "deliverables": [
            {
                "title": "Dedicated Senior Designers",
                "span": 2,
                "description": "Experts who focus entirely on your product.",
                "features": [
                    "Vetted Talent",
                    "Senior Level Only",
                    "Domain Expertise",
                    "Direct Communication"
                ]
            },
            {
                "title": "Agile Integration",
                "span": 1,
                "description": "Participation in standups, sprint planning, and retros.",
                "features": [
                    "Jira/Linear Ready",
                    "Slack Integration",
                    "Daily Standups"
                ]
            },
            {
                "title": "Continuous Delivery",
                "span": 1,
                "description": "A steady stream of shippable design work.",
                "features": [
                    "Sprint Commitments",
                    "Fast Turnaround",
                    "Iterative Updates"
                ]
            },
            {
                "title": "Design Ops Support",
                "span": 2,
                "description": "We bring our own tools, templates, and efficiencies to improve your internal processes.",
                "imagePlaceholder": false,
                "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
                "features": [
                    "Figma Organization",
                    "Handoff Standards",
                    "Meeting Frameworks",
                    "Design QA"
                ]
            }
        ],
        "processSteps": [
            {
                "number": "01",
                "title": "Onboarding",
                "description": "We learn your product, brand, and internal processes."
            },
            {
                "number": "02",
                "title": "Integration",
                "description": "Setting up comms and access to your workflow tools."
            },
            {
                "number": "03",
                "title": "Execution",
                "description": "Working week-to-week as part of your team."
            },
            {
                "number": "04",
                "title": "Scaling",
                "description": "Adding or removing resources as your needs fluctuate."
            }
        ],
        "featuredProofImage": "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop"
    },
    '#services-scale-designsystem': {
        "stageCategory": "SCALE STAGE",
        "serviceTitle": "Design System Build",
        "description": "The single source of truth that accelerates your engineering team.",
        "longDescription": {
            "header": "Stop Designing the Same Button Twice.",
            "paragraphs": [
                "As your organization scales, inconsistencies inevitably creep in. Different teams use slightly different shades of blue, the date picker behaves differently on three pages, and UI bugs multiply. A true Design System solves this.",
                "We build robust, scalable design systems from the ground up (or audit and restructure yours). We define the foundational tokens, build comprehensive component libraries with all states and variants, and write the guidelines for usage.",
                "A great design system bridges the gap between design and development. We ensure our Figma components map 1:1 with your React/Vue codebase, dramatically reducing QA time and time-to-market for new features."
            ]
        },
        "deliverables": [
            {
                "title": "Design Tokens",
                "span": 2,
                "description": "A systematic approach to color, typography, spacing, and elevation.",
                "features": [
                    "Semantic Naming",
                    "Dark Mode Support",
                    "Spacing Grid",
                    "Typography Scale"
                ]
            },
            {
                "title": "Component Library",
                "span": 1,
                "description": "Figma library with variants, auto-layout, and interactive states.",
                "features": [
                    "Auto-Layout",
                    "Component Properties",
                    "Interactive States"
                ]
            },
            {
                "title": "Usage Guidelines",
                "span": 1,
                "description": "Documentation on when and how to use specific components.",
                "features": [
                    "Do's and Don'ts",
                    "Accessibility Rules",
                    "Writing Guidelines"
                ]
            },
            {
                "title": "Governance Model",
                "span": 2,
                "description": "A clear process for how the team updates and maintains the system over time.",
                "imagePlaceholder": false,
                "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
                "features": [
                    "Contribution Flow",
                    "Versioning Strategy",
                    "Release Notes",
                    "Team Training"
                ]
            }
        ],
        "processSteps": [
            {
                "number": "01",
                "title": "UI Audit",
                "description": "Cataloging all existing components to identify inconsistencies."
            },
            {
                "number": "02",
                "title": "Foundation",
                "description": "Establishing the base tokens and visual language."
            },
            {
                "number": "03",
                "title": "Component Build",
                "description": "Creating the master components systematically."
            },
            {
                "number": "04",
                "title": "Documentation",
                "description": "Writing the rules of the system for designers and devs."
            }
        ],
        "featuredProofImage": "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
    },
    '#services-scale-enterprise': {
        "stageCategory": "SCALE STAGE",
        "serviceTitle": "Enterprise UX Redesign",
        "description": "Simplifying complex, multi-layered enterprise applications.",
        "longDescription": {
            "header": "Taming Enterprise Complexity.",
            "paragraphs": [
                "Enterprise software is notoriously difficult to use. It's often built by engineers for highly specialized users, resulting in steep learning curves and fragmented workflows. But enterprise users are also consumers, and their expectations for UX are rising.",
                "We specialize in detangling complex enterprise workflows. We conduct deep research to understand specialized user roles, simplify the information architecture, and create modular interfaces that can handle massive amounts of data without feeling overwhelming.",
                "Our enterprise redesigns focus on improving productivity, reducing training time, and decreasing support tickets for massive, mission-critical applications."
            ]
        },
        "deliverables": [
            {
                "title": "Role-Based Workflows",
                "span": 2,
                "description": "Optimizing the interface for specific permissions and user goals.",
                "features": [
                    "RBAC Design",
                    "Custom Views",
                    "Task-based Navigation",
                    "Permission States"
                ]
            },
            {
                "title": "Scalable Architecture",
                "span": 1,
                "description": "Navigation structures that can handle hundreds of features.",
                "features": [
                    "Mega-menus",
                    "Breadcrumbs",
                    "Global Search"
                ]
            },
            {
                "title": "Legacy Migration Strategy",
                "span": 1,
                "description": "Planning the transition from the old system to the new.",
                "features": [
                    "Phased Rollout",
                    "Data Mapping",
                    "User Training"
                ]
            },
            {
                "title": "High-Fidelity UI",
                "span": 2,
                "description": "A modern, accessible interface that meets enterprise standards.",
                "imagePlaceholder": false,
                "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
                "features": [
                    "WCAG 2.1 AA",
                    "High Contrast Mode",
                    "Keyboard Navigation",
                    "Localization Ready"
                ]
            }
        ],
        "processSteps": [
            {
                "number": "01",
                "title": "Stakeholder Alignment",
                "description": "Navigating complex organizational requirements."
            },
            {
                "number": "02",
                "title": "System Mapping",
                "description": "Documenting the sprawling legacy architecture."
            },
            {
                "number": "03",
                "title": "Iterative Redesign",
                "description": "Redesigning the platform module by module."
            },
            {
                "number": "04",
                "title": "Validation",
                "description": "Testing with specialized power-users before release."
            }
        ],
        "featuredProofImage": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
    },
    '#services-scale-website': {
        "stageCategory": "SCALE STAGE",
        "serviceTitle": "Website Redesign",
        "description": "Editorial-quality web presence that drives B2B sales and recruitment.",
        "longDescription": {
            "header": "Your Website is Your Best Salesperson.",
            "paragraphs": [
                "For scale-stage companies, the marketing website does heavy lifting. It needs to articulate a complex value proposition to enterprise buyers, attract top-tier talent, and establish industry authority.",
                "We design premium, editorial-style B2B websites that break the mold of the standard \"SaaS template\". We combine compelling storytelling with bespoke 3D assets, subtle scroll animations, and perfect typography.",
                "The result is a digital flagship that elevates your brand perception, increases lead generation quality, and creates a memorable experience that separates you from your competitors."
            ]
        },
        "deliverables": [
            {
                "title": "Strategic Narrative",
                "span": 2,
                "description": "Structuring the site map to guide visitors through your story.",
                "features": [
                    "Information Architecture",
                    "Copywriting",
                    "SEO Strategy",
                    "Conversion Funnels"
                ]
            },
            {
                "title": "Bespoke UI Design",
                "span": 1,
                "description": "Unique layouts that reflect your brand identity.",
                "features": [
                    "Custom Layouts",
                    "Editorial Typography",
                    "Brand Evolution"
                ]
            },
            {
                "title": "Interaction Design",
                "span": 1,
                "description": "Custom WebGL or CSS animations for premium feel.",
                "features": [
                    "Scroll Triggers",
                    "Micro-interactions",
                    "Page Transitions"
                ]
            },
            {
                "title": "CMS Architecture",
                "span": 2,
                "description": "Designing a scalable backend for your marketing team to manage content.",
                "imagePlaceholder": false,
                "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
                "features": [
                    "Headless CMS",
                    "Dynamic Collections",
                    "Localization",
                    "Role Management"
                ]
            }
        ],
        "processSteps": [
            {
                "number": "01",
                "title": "Strategy",
                "description": "Defining goals, audience, and the story we need to tell."
            },
            {
                "number": "02",
                "title": "Design",
                "description": "Creating the visual direction and page layouts."
            },
            {
                "number": "03",
                "title": "Motion",
                "description": "Adding the interactive layer that brings the site to life."
            },
            {
                "number": "04",
                "title": "Development",
                "description": "Building on Next.js or Webflow for ultimate performance."
            }
        ],
        "featuredProofImage": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    '#services-scale-ongoing': {
        "stageCategory": "SCALE STAGE",
        "serviceTitle": "Ongoing Design Partnership",
        "description": "Your dedicated external product design department.",
        "longDescription": {
            "header": "Strategic Partnership, Continuous Value.",
            "paragraphs": [
                "For mature organizations, design needs are constant but fluctuating. You might need a massive feature redesign this month, and primarily minor UX tweaks and design system maintenance the next.",
                "Our Ongoing Design Partnership provides you with a dedicated team of senior designers on a retainer basis. We act as your external design department, providing strategic oversight, continuous UI/UX delivery, and design leadership.",
                "This model offers the stability of an in-house team with the flexibility and elite quality of a top-tier agency, ensuring your product remains best-in-class year after year."
            ]
        },
        "deliverables": [
            {
                "title": "Strategic Planning",
                "span": 2,
                "description": "Monthly roadmap planning to align design efforts with business goals.",
                "features": [
                    "Quarterly Roadmaps",
                    "Resource Allocation",
                    "Impact Measurement",
                    "Goal Alignment"
                ]
            },
            {
                "title": "Continuous UI/UX",
                "span": 1,
                "description": "Ongoing design execution for new features and improvements.",
                "features": [
                    "Feature Design",
                    "Bug Fixing",
                    "Prototyping"
                ]
            },
            {
                "title": "Design Leadership",
                "span": 1,
                "description": "Mentorship and direction for your junior internal designers.",
                "features": [
                    "Design Reviews",
                    "Mentorship 1:1s",
                    "Process Setup"
                ]
            },
            {
                "title": "Predictable Velocity",
                "span": 2,
                "description": "A guaranteed amount of senior design output every single month.",
                "imagePlaceholder": false,
                "image": "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2070&auto=format&fit=crop",
                "features": [
                    "Retainer Model",
                    "Flexible Allocation",
                    "Guaranteed SLA",
                    "No Hiring Overhead"
                ]
            }
        ],
        "processSteps": [
            {
                "number": "01",
                "title": "Alignment",
                "description": "Setting up the communication and reporting cadence."
            },
            {
                "number": "02",
                "title": "Backlog Grooming",
                "description": "Prioritizing the design tasks for the upcoming month."
            },
            {
                "number": "03",
                "title": "Continuous Delivery",
                "description": "Executing and handing off work in regular sprints."
            },
            {
                "number": "04",
                "title": "Quarterly Review",
                "description": "Assessing impact and adjusting strategy for the next quarter."
            }
        ],
        "featuredProofImage": "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2070&auto=format&fit=crop"
    },
    '#services-scale-research': {
        "stageCategory": "SCALE STAGE",
        "serviceTitle": "UX Research & Strategy",
        "description": "Evidence-based direction for high-stakes product decisions.",
        "longDescription": {
            "header": "De-risk Your Product Strategy.",
            "paragraphs": [
                "At scale, a wrong product decision doesn't just cost development time; it can alienate thousands of users and impact revenue significantly. High-stakes decisions require high-quality evidence.",
                "Our UX Research & Strategy service provides the deep insights needed to navigate complex product challenges. We conduct rigorous qualitative and quantitative research\u2014from generative user interviews to discover new opportunities, to evaluative testing of proposed solutions.",
                "We translate raw data into strategic frameworks, journey maps, and actionable recommendations, ensuring your product roadmap is driven by user reality, not internal assumptions."
            ]
        },
        "deliverables": [
            {
                "title": "Generative Research",
                "span": 2,
                "description": "In-depth interviews to uncover unmet needs and new market opportunities.",
                "features": [
                    "User Interviews",
                    "Contextual Inquiry",
                    "Survey Design",
                    "Market Analysis"
                ]
            },
            {
                "title": "Journey Mapping",
                "span": 1,
                "description": "Visualizing the complete end-to-end customer experience.",
                "features": [
                    "Service Blueprints",
                    "Persona Creation",
                    "Touchpoint Mapping"
                ]
            },
            {
                "title": "Usability Testing",
                "span": 1,
                "description": "Rigorous testing of prototypes before committing to code.",
                "features": [
                    "Moderated Testing",
                    "A/B Testing",
                    "Task Success Metrics"
                ]
            },
            {
                "title": "Strategic Playbook",
                "span": 2,
                "description": "A comprehensive report detailing findings, personas, and strategic recommendations.",
                "imagePlaceholder": false,
                "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
                "features": [
                    "Executive Summary",
                    "Video Highlights",
                    "Actionable Roadmap",
                    "Workshop Presentation"
                ]
            }
        ],
        "processSteps": [
            {
                "number": "01",
                "title": "Study Design",
                "description": "Defining the research objectives and screening criteria."
            },
            {
                "number": "02",
                "title": "Execution",
                "description": "Conducting the interviews, surveys, or usability tests."
            },
            {
                "number": "03",
                "title": "Synthesis",
                "description": "Analyzing the data to find patterns and actionable insights."
            },
            {
                "number": "04",
                "title": "Strategic Application",
                "description": "Working with your team to integrate findings into the roadmap."
            }
        ],
        "featuredProofImage": "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
    },
};



// 2. DYNAMIC HERO (Black Section)
function DynamicHero({ stageCategory, serviceTitle, description }: Pick<ServiceDetailProps, 'stageCategory' | 'serviceTitle' | 'description'>) {
    return (
        <section className="min-h-[90vh] bg-[#0a0a0a] text-white flex flex-col justify-center px-8 border-0 shadow-none">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-7xl mx-auto w-full pt-20 border-0 shadow-none">
                <p className="text-blue-500 text-sm tracking-widest uppercase font-semibold mb-6 border-0 shadow-none">
                    {stageCategory}
                </p>
                <h1 className="text-[72px] leading-none tracking-tighter border-0 shadow-none font-display">
                    {serviceTitle}
                </h1>
                <p className="text-gray-400 text-2xl max-w-3xl mt-8 font-medium leading-relaxed border-0 shadow-none">
                    {description}
                </p>
                <div className="flex flex-wrap gap-4 mt-12">
                    <a
                        href="mailto:hello@elux.space"
                        className="inline-flex items-center gap-2 bg-[#2563EB] text-white text-[11px] font-bold uppercase tracking-widest px-7 py-4 rounded-full hover:bg-blue-500 transition-all duration-300 group"
                    >
                        Book a Discovery Call
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                    <a
                        href="#case-studies"
                        onClick={() => { window.location.hash = '#case-studies'; }}
                        className="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-white text-[11px] font-bold uppercase tracking-widest px-7 py-4 rounded-full hover:bg-white/15 transition-all duration-300"
                    >
                        View Our Work
                    </a>
                </div>
            </motion.div>
        </section>
    );
}

// 3. THE CONTEXT / WHY YOU NEED THIS (White Section - Sticky Scroll)
function TheContext({ longDescription }: Pick<ServiceDetailProps, 'longDescription'>) {
    if (!longDescription) return null;
    return (
        <section className="bg-white py-32 px-8 text-black border-0 shadow-none">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 max-w-7xl mx-auto border-0 shadow-none">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-5 h-fit sticky top-32 border-0 shadow-none">
                    <h2 className="text-[64px] font-medium tracking-tighter text-gray-900 leading-tight border-0 shadow-none font-display">
                        {longDescription.header}
                    </h2>
                </motion.div>
                <div className="md:col-span-7 flex flex-col border-0 shadow-none">
                    {longDescription.paragraphs.map((paragraph, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="border-t border-gray-200 py-8 shadow-none">
                            <p className="text-xl text-gray-600 leading-relaxed font-normal border-0 shadow-none">
                                {paragraph}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 4. DELIVERABLES (Light Gray Section - Bento Grid)
function Deliverables({ deliverables }: Pick<ServiceDetailProps, 'deliverables'>) {
    if (!deliverables) return null;
    return (
        <section className="bg-[#F9FAFB] py-32 px-8 border-0 shadow-none">
            <div className="max-w-7xl mx-auto border-0 shadow-none">
                <div className="flex items-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase">Deliverables</span>
                </div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[48px] font-medium tracking-tighter text-gray-900 mb-16 border-0 shadow-none font-display">What You Get</motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow-none border-0">
                    {deliverables.map((item, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`bg-white border border-gray-200 rounded-3xl p-10 shadow-none flex flex-col hover:border-gray-300 hover:shadow-sm transition-all duration-300 ${item.span === 2 ? 'md:col-span-2' : 'md:col-span-1'}`}>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight border-0 shadow-none">{item.title}</h3>
                                                        {item.description && <p className="text-gray-600 leading-relaxed mb-6 border-0 shadow-none">{item.description}</p>}
                            {item.features && item.features.length > 0 && (
                                <ul className="mb-6 space-y-3 mt-auto">
                                    {item.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-600 leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {item.image ? (
                                <div className="mt-auto border-0 shadow-none pt-6">
                                    <img src={item.image} alt={item.title} className="rounded-2xl w-full aspect-video object-cover border-0 shadow-none" />
                                </div>
                            ) : item.imagePlaceholder ? (
                                <div className="mt-auto pt-6">
                                    {/* Premium Design System Preview */}
                                    <div className="bg-[#0f0f0f] rounded-2xl w-full overflow-hidden">
                                        {/* Title bar */}
                                        <div className="px-4 py-3 border-b border-white/[0.07] flex items-center gap-2">
                                            <div className="flex gap-1.5">
                                                <span className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                                                <span className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                                            </div>
                                            <span className="text-[10px] text-white/25 font-mono ml-1">design-tokens.json</span>
                                        </div>
                                        <div className="p-4 space-y-4">
                                            {/* Color Tokens */}
                                            <div>
                                                <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-white/25 mb-2">Color Tokens</p>
                                                <div className="flex gap-2 items-center">
                                                    {['#2563EB','#7C3AED','#059669','#F59E0B','#1f1f1f'].map((c, i) => (
                                                        <div key={i} title={c} className="flex flex-col items-center gap-1">
                                                            <div style={{ backgroundColor: c }} className="w-7 h-7 rounded-lg shadow-sm" />
                                                            <span className="text-[8px] text-white/20 font-mono hidden sm:block">{c.replace('#','')}</span>
                                                        </div>
                                                    ))}
                                                    <div className="ml-auto text-[9px] text-white/20 font-mono">+12 more</div>
                                                </div>
                                            </div>
                                            {/* Type Scale */}
                                            <div className="border-t border-white/[0.06] pt-3">
                                                <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-white/25 mb-2">Type Scale</p>
                                                <div className="space-y-1">
                                                    <div className="flex items-baseline gap-3">
                                                        <span className="text-white font-bold text-base leading-none">Display</span>
                                                        <span className="text-white/20 text-[9px] font-mono">64px / 700</span>
                                                    </div>
                                                    <div className="flex items-baseline gap-3">
                                                        <span className="text-white/60 text-sm font-semibold">Heading</span>
                                                        <span className="text-white/20 text-[9px] font-mono">32px / 600</span>
                                                    </div>
                                                    <div className="flex items-baseline gap-3">
                                                        <span className="text-white/35 text-xs">Body</span>
                                                        <span className="text-white/20 text-[9px] font-mono">16px / 400</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Components */}
                                            <div className="border-t border-white/[0.06] pt-3">
                                                <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-white/25 mb-2">Components</p>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="bg-blue-600 text-white text-[10px] font-semibold px-3 py-1.5 rounded-full leading-none">Button</span>
                                                    <span className="border border-white/20 text-white/50 text-[10px] px-3 py-1.5 rounded-full leading-none">Secondary</span>
                                                    <span className="bg-white/8 text-white/30 text-[10px] px-2.5 py-1.5 rounded-lg leading-none">Badge</span>
                                                    <span className="bg-white/8 text-white/30 text-[10px] px-2.5 py-1.5 rounded-lg leading-none">Input</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 5. THE PRAGMATIC PROCESS (White Section)
function PragmaticProcess({ processSteps }: Pick<ServiceDetailProps, 'processSteps'>) {
    if (!processSteps) return null;
    return (
        <section className="bg-white py-32 px-8 border-0 shadow-none">
            <div className="max-w-4xl mx-auto border-0 shadow-none">
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[64px] font-medium tracking-tighter text-gray-900 text-center mb-16 border-0 shadow-none font-display">How We Ship It.</motion.h2>
                <div className="flex flex-col border-0 shadow-none">
                    {processSteps.map((step, index) => (
                        <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="border-t border-gray-200 py-12 flex flex-col md:flex-row gap-8 shadow-none">
                            <span className="text-6xl font-semibold text-gray-300 tracking-tighter border-0 shadow-none w-24 flex-shrink-0">{step.number}.</span>
                            <div className="border-0 shadow-none">
                                <h3 className="text-3xl font-semibold text-gray-900 tracking-tight mb-4 border-0 shadow-none">{step.title}</h3>
                                <p className="text-xl text-gray-600 leading-relaxed border-0 shadow-none">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 6. FEATURED PROOF (Black Section)
function FeaturedProof({ featuredProofImage }: Pick<ServiceDetailProps, 'featuredProofImage'>) {
    return (
        <section className="bg-[#0a0a0a] py-32 px-8 flex flex-col items-center border-0 shadow-none">
            <div className="max-w-7xl mx-auto w-full border-0 shadow-none">
                <h2 className="text-4xl text-white font-medium tracking-tighter text-center mb-16 border-0 shadow-none">Proof of Pragmatism.</h2>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-full border-0 shadow-none overflow-hidden rounded-3xl">
                    <img
                        src={featuredProofImage || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"}
                        alt="Featured Proof Dashboard"
                        className="w-full h-auto aspect-video object-cover border-0 rounded-3xl shadow-none filter grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </motion.div>
                <div className="mt-12 text-center">
                    <a
                        href="mailto:hello@elux.space"
                        className="inline-flex items-center gap-2 bg-[#2563EB] text-white text-[11px] font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-blue-500 transition-all duration-300 group"
                    >
                        Start a Project
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

// ─── ALL SERVICES OVERVIEW SECTION ───────────────────────────────────────────
function AllServicesOverview() {
    const stages = [
        {
            hash: '#services-seed',
            label: 'SEED STAGE',
            title: 'Validate & Launch',
            desc: 'MVP UI/UX, clickable prototypes, landing pages, and no-code builds — everything to go from idea to fundable product.',
            services: ['MVP UX & UI Design', 'Clickable Prototype', 'Launch-Ready Landing Page', 'No-Code MVP Build', 'Pitch & Demo Readiness'],
            color: 'text-emerald-400',
            bg: 'bg-emerald-400/10',
        },
        {
            hash: '#services-growth',
            label: 'GROWTH STAGE',
            title: 'Optimize & Elevate',
            desc: 'UX audits, brand enhancement, dashboard design, and product redesign — built for teams ready to scale.',
            services: ['UX Audit & Priorities', 'Brand & Visual Enhancement', 'Product Redesign', 'Dashboard & Data UX', 'Team Extension'],
            color: 'text-blue-400',
            bg: 'bg-blue-400/10',
        },
        {
            hash: '#services-scale',
            label: 'SCALE STAGE',
            title: 'System & Scale',
            desc: 'Design systems, enterprise UX, website redesign, and long-term design partnerships — for when quality at scale matters.',
            services: ['Design System Build', 'Enterprise UX Redesign', 'Website Redesign', 'Ongoing Design Partnership', 'UX Research & Strategy'],
            color: 'text-purple-400',
            bg: 'bg-purple-400/10',
        },
    ];

    return (
        <section className="bg-white py-32 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase">All Services</span>
                </div>
                <h2 className="text-[56px] font-medium tracking-tighter text-gray-900 mb-16 font-display leading-[1]">
                    Choose the right engagement<span className="text-blue-600">.</span>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {stages.map((stage) => (
                        <div key={stage.hash} className="group bg-[#0a0a0a] rounded-3xl p-10 flex flex-col gap-6 border border-white/5 hover:border-white/20 transition-all duration-300">
                            <div>
                                <span className={`text-[10px] font-bold tracking-[0.25em] uppercase ${stage.color} mb-3 block`}>{stage.label}</span>
                                <h3 className="text-white text-[28px] font-medium tracking-tighter font-display mb-4">{stage.title}</h3>
                                <p className="text-gray-400 text-[15px] font-medium leading-[1.6] tracking-tight">{stage.desc}</p>
                            </div>
                            <ul className="space-y-2.5 flex-1">
                                {stage.services.map((svc) => (
                                    <li key={svc} className="flex items-center gap-3">
                                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${stage.color.replace('text-', 'bg-')}`} />
                                        <span className="text-gray-300 text-[14px] font-medium">{svc}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={stage.hash}
                                onClick={() => { window.location.hash = stage.hash; }}
                                className="mt-4 inline-flex items-center gap-2 bg-white/8 border border-white/12 text-white text-[11px] font-bold uppercase tracking-widest px-5 py-3 rounded-full hover:bg-white/15 transition-all duration-300 group/btn w-fit"
                            >
                                Explore {stage.label.split(' ')[0]}
                                <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function ServiceDetail({ serviceHash = '#services' }: ServiceDetailProps) {
    // Normalize the hash key
    const normalizedHash = serviceHash.split('?')[0]; // remove query params if any
    const data = serviceDataMap[normalizedHash] || serviceDataMap['#services'];

    const isOverview = normalizedHash === '#services';

    return (
        <div className="font-sans antialiased bg-white border-0 shadow-none">
            <main className="border-0 shadow-none">
                <DynamicHero
                    stageCategory={data.stageCategory}
                    serviceTitle={data.serviceTitle}
                    description={data.description}
                />
                <TheContext longDescription={data.longDescription} />
                {isOverview ? <AllServicesOverview /> : <Deliverables deliverables={data.deliverables} />}
                <PragmaticProcess processSteps={data.processSteps} />
                <FeaturedProof featuredProofImage={data.featuredProofImage} />
            </main>
        </div>
    );
}
