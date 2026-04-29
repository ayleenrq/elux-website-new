import re
import json
import random

images = [
    '"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2070&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"'
]

def get_img():
    return random.choice(images).strip('"')

data = {
    '#services-seed-mvp': {
        'stageCategory': 'SEED STAGE',
        'serviceTitle': 'MVP UX & UI Design',
        'description': 'From zero to a fundable, shippable product interface in weeks, not months.',
        'longDescription': {
            'header': 'The Minimum Viable Product, Designed for Maximum Impact.',
            'paragraphs': [
                'In the seed stage, your biggest enemy is time. You need to validate your core hypothesis and secure funding before runway runs out. But building a clunky, ugly MVP just to test the waters is a mistake. Users today have high expectations. A poor interface doesn\'t test your idea; it tests their patience.',
                'We design MVP interfaces that strike the perfect balance: zero bloat, core-features only, but with a premium visual language that signals trust and competence. You get an interface that looks like a Series A product on a seed budget.',
                'Our process is lean and pragmatic. We map out the essential user flows, skip the endless moodboarding, and dive straight into high-fidelity design. The result is a dev-ready interface that your engineers can build rapidly and your investors will love.'
            ]
        },
        'deliverables': [
            {
                'title': 'Core User Flows', 
                'span': 2, 
                'description': 'Mapping the exact path to value for your users, removing all unnecessary friction.',
                'features': ['Journey Mapping', 'Friction Analysis', 'Information Architecture', 'Edge-case Handling']
            },
            {
                'title': 'High-Fidelity UI', 
                'span': 1, 
                'description': 'Premium visual design for 10-15 core screens.',
                'features': ['Pixel-perfect Layouts', 'Typography & Color', 'Interactive States', 'Component Library']
            },
            {
                'title': 'Design System Lite', 
                'span': 1, 
                'description': 'A foundational set of components to speed up development.',
                'features': ['Design Tokens', 'Master Components', 'Auto-layout Ready', 'Scalable Structure']
            },
            {
                'title': 'Developer Handoff', 
                'span': 2, 
                'description': 'Figma files annotated with exact specs, assets, and variables. Ready to be coded.', 
                'imagePlaceholder': False,
                'image': get_img(),
                'features': ['CSS/Tailwind Variables', 'Asset Export', 'Measurement Specs', 'Flow Documentation']
            }
        ],
        'processSteps': [
            {'number': '01', 'title': 'Scope Definition', 'description': 'We ruthlessly prioritize what makes it into the MVP. No nice-to-haves.'},
            {'number': '02', 'title': 'Wireframing', 'description': 'Low-fidelity layouts to align on structure and information architecture.'},
            {'number': '03', 'title': 'Visual Design', 'description': 'Applying a modern, trust-building aesthetic to the core flows.'},
            {'number': '04', 'title': 'Handoff', 'description': 'Delivering pixel-perfect specs to your engineering team.'}
        ],
        'featuredProofImage': get_img()
    },
    '#services-seed-prototype': {
        'stageCategory': 'SEED STAGE',
        'serviceTitle': 'Clickable Prototype',
        'description': 'Sell the vision before you write a single line of code.',
        'longDescription': {
            'header': 'Interactive Prototypes that Close Deals.',
            'paragraphs': [
                'Building a full product to pitch investors or early customers is an expensive gamble. A high-fidelity clickable prototype allows you to demonstrate the core value proposition of your idea without the engineering overhead.',
                'We create prototypes that look, feel, and act like the real thing. From complex state changes to smooth micro-interactions, we build illusions so convincing that stakeholders will ask for the login link.',
                'Use our prototypes to secure funding, presell your SaaS, validate market demand, or align your internal stakeholders on the product vision before committing development resources.'
            ]
        },
        'deliverables': [
            {
                'title': 'Interactive Figma Prototype', 
                'span': 2, 
                'description': 'A fully linked, clickable demonstration of your core user journey.',
                'features': ['End-to-end Flow', 'Realistic Data', 'Complex Routing', 'Stakeholder Ready']
            },
            {
                'title': 'Micro-interactions', 
                'span': 1, 
                'description': 'Hover states, transitions, and loading animations that sell the realism.',
                'features': ['Hover Effects', 'Loading States', 'Page Transitions', 'Success Prompts']
            },
            {
                'title': 'Pitch Presentation', 
                'span': 1, 
                'description': 'Screenshots and recordings optimized for your pitch deck.',
                'features': ['High-res Exports', 'Screen Recordings', 'Device Mockups', 'Slide Integration']
            },
            {
                'title': 'User Testing Setup', 
                'span': 2, 
                'description': 'Prototype configured specifically for Maze or UserTesting.com to gather early feedback.', 
                'imagePlaceholder': False,
                'image': get_img(),
                'features': ['Testing Scripts', 'Task Definition', 'Analytics Integration', 'Feedback Capture']
            }
        ],
        'processSteps': [
            {'number': '01', 'title': 'Storyboarding', 'description': 'Defining the exact sequence of screens needed to tell your product story.'},
            {'number': '02', 'title': 'UI Design', 'description': 'Creating the high-fidelity screens required for the illusion.'},
            {'number': '03', 'title': 'Prototyping', 'description': 'Connecting the screens with realistic transitions and logic.'},
            {'number': '04', 'title': 'Testing & Refinement', 'description': 'Ensuring the flow makes sense to first-time viewers.'}
        ],
        'featuredProofImage': get_img()
    },
    '#services-seed-landing': {
        'stageCategory': 'SEED STAGE',
        'serviceTitle': 'Launch-Ready Landing Page',
        'description': 'High-converting landing pages built to capture attention and waitlist signups.',
        'longDescription': {
            'header': 'Your First Impression, Optimized for Conversion.',
            'paragraphs': [
                'Before you launch your product, you need to launch your narrative. A coming-soon page or waitlist landing page is your first opportunity to test your messaging and gauge market demand.',
                'We don\'t just design pretty pages; we design conversion machines. By combining persuasive copywriting principles with striking visual design and scroll-stopping animations, we ensure your page captures emails and builds hype.',
                'From the hero headline to the final call-to-action, every element is deliberately crafted to establish trust, articulate value, and drive user action.'
            ]
        },
        'deliverables': [
            {'title': 'Strategic Copywriting', 'span': 2, 'description': 'We help refine your value proposition and write persuasive, benefit-driven copy.', 'features': ['Value Prop Definition', 'Headline Testing', 'Persuasive Structuring', 'SEO Basics']},
            {'title': 'Custom Illustrations/3D', 'span': 1, 'description': 'Unique visual assets that differentiate your brand from templates.', 'features': ['Bespoke 3D Assets', 'Vector Illustrations', 'Brand Alignment', 'Lottie Animations']},
            {'title': 'Responsive Design', 'span': 1, 'description': 'Flawless experience across mobile, tablet, and desktop.', 'features': ['Mobile-First', 'Tablet Breakpoints', 'Retina Ready', 'Fluid Typography']},
            {'title': 'Webflow Development', 'span': 2, 'description': 'Optional: We can build and host the page on Webflow, integrating with your CRM.', 'imagePlaceholder': False, 'image': get_img(), 'features': ['CMS Setup', 'Form Integration', 'Scroll Animations', 'Fast Hosting']}
        ],
        'processSteps': [
            {'number': '01', 'title': 'Messaging Strategy', 'description': 'Defining the core value prop and the story we need to tell.'},
            {'number': '02', 'title': 'Wireframing', 'description': 'Laying out the content structure for maximum narrative flow.'},
            {'number': '03', 'title': 'Visual Design', 'description': 'Bringing the page to life with color, typography, and imagery.'},
            {'number': '04', 'title': 'Development', 'description': 'Building the page with buttery-smooth scroll animations.'}
        ],
        'featuredProofImage': get_img()
    },
    '#services-seed-nocode': {
        'stageCategory': 'SEED STAGE',
        'serviceTitle': 'No-Code MVP Build',
        'description': 'Full products launched in weeks using Bubble, Webflow, and Make.',
        'longDescription': {
            'header': 'Bypass the Engineering Bottleneck.',
            'paragraphs': [
                'Why spend six months and $100k building a custom application when you can validate your business model in four weeks using no-code tools? No-code has matured; it\'s no longer just for simple websites. We build complex marketplaces, SaaS dashboards, and internal tools without writing a single line of traditional code.',
                'We combine our senior-level UX/UI design with expert-level Bubble and Webflow development. This means your no-code product won\'t look like a template—it will look and function like a custom-coded application.',
                'This approach allows you to iterate rapidly based on real user feedback, finding product-market fit faster and cheaper than ever before.'
            ]
        },
        'deliverables': [
            {'title': 'Database Architecture', 'span': 2, 'description': 'Structuring your data models for scalability and performance within the no-code platform.', 'features': ['Data Modeling', 'Relationship Mapping', 'Security Rules', 'Performance Tuning']},
            {'title': 'Custom UI Design', 'span': 1, 'description': 'Bespoke interfaces designed in Figma before being built.', 'features': ['Figma to Webflow', 'Custom styling', 'Responsive UI']},
            {'title': 'API Integrations', 'span': 1, 'description': 'Connecting your app to Stripe, SendGrid, OpenAI, and more.', 'features': ['Stripe Checkout', 'SendGrid Emails', 'Third-party REST APIs']},
            {'title': 'Fully Functional App', 'span': 2, 'description': 'A live, usable application ready for your first paying customers.', 'imagePlaceholder': False, 'image': get_img(), 'features': ['User Auth', 'Payment Processing', 'Live Database', 'Production Ready']}
        ],
        'processSteps': [
            {'number': '01', 'title': 'Feasibility Check', 'description': 'Ensuring your product requirements can be met with no-code tools.'},
            {'number': '02', 'title': 'Design & Architecture', 'description': 'Designing the UI and structuring the database concurrently.'},
            {'number': '03', 'title': 'Development', 'description': 'Building out the logic, workflows, and integrations.'},
            {'number': '04', 'title': 'Testing & Launch', 'description': 'Rigorous QA before handing over the keys to your new business.'}
        ],
        'featuredProofImage': get_img()
    },
    '#services-seed-pitch': {
        'stageCategory': 'SEED STAGE',
        'serviceTitle': 'Pitch & Demo Readiness',
        'description': 'Investor-facing decks and product visuals that demand attention.',
        'longDescription': {
            'header': 'Tell a Story Investors Can\'t Ignore.',
            'paragraphs': [
                'A great idea with a terrible pitch deck will struggle to raise capital. Investors pattern-match based on signals of competence, and your pitch deck is the first signal they see.',
                'We elevate your narrative by combining compelling copywriting with stunning visual design. We take complex technical concepts and distill them into clear, impactful slides that clearly articulate the market opportunity and your unique solution.',
                'Beyond just slides, we create high-fidelity mockups of your future product to make the vision tangible. We help you look like the inevitable winner in your category before you\'ve even launched.'
            ]
        },
        'deliverables': [
            {'title': 'Narrative Structuring', 'span': 2, 'description': 'Organizing your deck to flow logically from problem to solution to traction.', 'features': ['Problem/Solution Fit', 'Market Sizing Data', 'Competitor Matrix', 'Financial Projections']},
            {'title': 'Deck Design', 'span': 1, 'description': '15-20 beautifully designed slides in Figma or Pitch.com.', 'features': ['Custom Templates', 'Typography System', 'Brand Integration']},
            {'title': 'Product Mockups', 'span': 1, 'description': 'Hero shots of your interface to make the solution real.', 'features': ['Device Frames', 'Isometric Views', 'High-res Renders']},
            {'title': 'Data Visualization', 'span': 2, 'description': 'Turning boring charts into compelling infographics that highlight your growth.', 'imagePlaceholder': False, 'image': get_img(), 'features': ['Custom Charts', 'Infographics', 'Traction Metrics', 'Clear Data Story']}
        ],
        'processSteps': [
            {'number': '01', 'title': 'Content Review', 'description': 'Analyzing your current deck and business plan.'},
            {'number': '02', 'title': 'Storyboarding', 'description': 'Mapping out the flow of the presentation.'},
            {'number': '03', 'title': 'Visual Design', 'description': 'Creating a cohesive aesthetic that matches your brand.'},
            {'number': '04', 'title': 'Refinement', 'description': 'Polishing the details until every slide is perfect.'}
        ],
        'featuredProofImage': get_img()
    },
    '#services-growth-audit': {
        'stageCategory': 'GROWTH STAGE',
        'serviceTitle': 'UX Audit & Priorities',
        'description': 'Identify exactly where users are dropping off and how to fix it.',
        'longDescription': {
            'header': 'Stop Guessing Why Users Churn.',
            'paragraphs': [
                'When you have a live product, design decisions should no longer be based on intuition. A UX Audit is a systematic evaluation of your product against established usability heuristics, user psychology, and your specific conversion goals.',
                'We dive deep into your analytics, conduct expert reviews of your core flows, and optionally run targeted user testing. The goal isn\'t just to find what\'s "ugly"—it\'s to identify specific friction points that are costing you money.',
                'We deliver a prioritized roadmap. We don\'t just hand you a list of 100 problems; we rank them by effort versus impact, giving your team a clear, actionable plan to improve retention and revenue.'
            ]
        },
        'deliverables': [
            {'title': 'Heuristic Evaluation', 'span': 2, 'description': 'A comprehensive review of your app against usability best practices.', 'features': ['Nielsen Heuristics', 'Accessibility Check', 'Consistency Audit', 'Error Prevention']},
            {'title': 'Friction Mapping', 'span': 1, 'description': 'Visualizing exactly where users are abandoning the funnel.', 'features': ['Drop-off Analysis', 'User Flow Diagrams', 'Analytics Review']},
            {'title': 'Quick Wins', 'span': 1, 'description': 'Immediate, low-effort changes that can boost metrics today.', 'features': ['Copy Tweaks', 'Button Placements', 'Color Adjustments']},
            {'title': 'Prioritized Roadmap', 'span': 2, 'description': 'A strategic plan for the next 3-6 months of product design work.', 'imagePlaceholder': False, 'image': get_img(), 'features': ['Effort/Impact Matrix', 'Sprint Planning', 'Resource Allocation', 'Metric Goals']}
        ],
        'processSteps': [
            {'number': '01', 'title': 'Data Gathering', 'description': 'Reviewing Mixpanel, Google Analytics, or existing user feedback.'},
            {'number': '02', 'title': 'Expert Review', 'description': 'Our senior designers walk through the product identifying issues.'},
            {'number': '03', 'title': 'Synthesis', 'description': 'Grouping findings into themes and strategic recommendations.'},
            {'number': '04', 'title': 'Action Plan', 'description': 'Presenting the findings with specific, actionable next steps.'}
        ],
        'featuredProofImage': get_img()
    },
    '#services-growth-brand': {
        'stageCategory': 'GROWTH STAGE',
        'serviceTitle': 'Brand & Visual Enhancement',
        'description': 'Elevate your product\'s aesthetic without rebuilding it from scratch.',
        'longDescription': {
            'header': 'A Facelift for Your Product.',
            'paragraphs': [
                'Your product works well, but the UI is starting to look dated. A full redesign is too risky and expensive right now. This is where a Brand & Visual Enhancement comes in.',
                'We take your existing structural layouts and apply a modern, premium visual layer. We update the typography, refine the color palette, improve spacing, and introduce modern UI patterns (like better shadows, glassmorphism, or updated iconography) without changing the underlying UX flows.',
                'This approach allows you to dramatically improve the perceived value and trustworthiness of your product with minimal disruption to your engineering team or your existing users.'
            ]
        },
        'deliverables': [
            {'title': 'UI Refresh', 'span': 2, 'description': 'Updating core screens with a modern visual language.', 'features': ['Modern Patterns', 'Depth & Shadows', 'Glassmorphism touches', 'Spacing Fixes']},
            {'title': 'Updated Design Tokens', 'span': 1, 'description': 'New color palettes, typography scales, and spacing rules.', 'features': ['Color System', 'Type Hierarchy', 'Spacing Scale']},
            {'title': 'Iconography & Assets', 'span': 1, 'description': 'A cohesive set of icons and illustrations.', 'features': ['Custom Icon Set', 'SVG Assets', 'Illustration Library']},
            {'title': 'Implementation Guide', 'span': 2, 'description': 'CSS/Tailwind variables and guidance for developers to apply the new styles.', 'imagePlaceholder': False, 'image': get_img(), 'features': ['Tailwind Config', 'CSS Variables', 'Before/After Specs', 'QA Support']}
        ],
        'processSteps': [
            {'number': '01', 'title': 'Visual Audit', 'description': 'Identifying inconsistencies and areas for visual improvement.'},
            {'number': '02', 'title': 'Moodboarding', 'description': 'Exploring new aesthetic directions that align with your brand.'},
            {'number': '03', 'title': 'Style Application', 'description': 'Applying the new style to key screens for review.'},
            {'number': '04', 'title': 'Rollout Plan', 'description': 'Strategizing how to implement the changes gradually.'}
        ],
        'featuredProofImage': get_img()
    },
    '#services-growth-redesign': {
        'stageCategory': 'GROWTH STAGE',
        'serviceTitle': 'Product Redesign',
        'description': 'A strategic overhaul of your product\'s UX and UI to support scale.',
        'longDescription': {
            'header': 'Rebuilding the Engine While Flying the Plane.',
            'paragraphs': [
                'You\'ve outgrown your initial MVP. Features have been bolted on over the years, the navigation is a mess, and technical/design debt is slowing down development. It\'s time for a fundamental redesign.',
                'We approach product redesigns systematically. We don\'t just change the colors; we rethink the information architecture, streamline the core workflows, and build a scalable design foundation that can support your next phase of growth.',
                'We work closely with your product and engineering teams to ensure the redesign is ambitious yet technically feasible, often breaking the rollout into manageable phases to mitigate risk.'
            ]
        },
        'deliverables': [
            {'title': 'New Information Architecture', 'span': 2, 'description': 'Restructuring the navigation and hierarchy of the application.', 'features': ['Site Mapping', 'Navigation UX', 'Content Grouping', 'Search & Filtering']},
            {'title': 'Optimized User Flows', 'span': 1, 'description': 'Streamlining the paths for core tasks.', 'features': ['Friction Removal', 'Shorter Paths', 'Clearer CTAs']},
            {'title': 'Comprehensive UI Redesign', 'span': 1, 'description': 'A completely new, modern interface.', 'features': ['Component System', 'Dark/Light Mode', 'Accessibility']},
            {'title': 'Phased Rollout Strategy', 'span': 2, 'description': 'A plan to release the redesign in stages to avoid shocking users.', 'imagePlaceholder': False, 'image': get_img(), 'features': ['Feature Flagging', 'Beta Testing Group', 'A/B Test Setup', 'Rollback Plan']}
        ],
        'processSteps': [
            {'number': '01', 'title': 'Deep Discovery', 'description': 'Understanding the legacy constraints and user pain points.'},
            {'number': '02', 'title': 'Structural Design', 'description': 'Wireframing the new architecture.'},
            {'number': '03', 'title': 'Detailed Design', 'description': 'Crafting the new high-fidelity interface component by component.'},
            {'number': '04', 'title': 'Iterative Handoff', 'description': 'Delivering specs in sprints aligned with your dev team.'}
        ],
        'featuredProofImage': get_img()
    },
    '#services-growth-dashboard': {
        'stageCategory': 'GROWTH STAGE',
        'serviceTitle': 'Dashboard & Data UX',
        'description': 'Turn overwhelming data into actionable insights with clarity.',
        'longDescription': {
            'header': 'Making Complex Data Understandable.',
            'paragraphs': [
                'In SaaS and B2B products, the dashboard is where you win or lose. A good dashboard shouldn\'t just show data; it should answer questions. "What needs my attention right now?", "How is my business performing?", "What action should I take next?"',
                'We specialize in designing high-density data interfaces. We understand the nuances of data visualization, table design, filtering mechanisms, and progressive disclosure.',
                'By prioritizing information hierarchy and reducing cognitive load, we turn overwhelming spreadsheets into intuitive command centers that your users will rely on daily.'
            ]
        },
        'deliverables': [
            {'title': 'Dashboard Architecture', 'span': 2, 'description': 'Structuring the page to prioritize the most important metrics.', 'features': ['Widget Layouts', 'Customizable Views', 'KPI Highlights', 'Drill-down Paths']},
            {'title': 'Data Visualization Design', 'span': 1, 'description': 'Selecting the right charts for the right data.', 'features': ['Chart Library', 'Tooltip UX', 'Color Coding']},
            {'title': 'Advanced Table UX', 'span': 1, 'description': 'Designing sorting, filtering, and bulk actions.', 'features': ['Sticky Headers', 'Inline Editing', 'Complex Filters']},
            {'title': 'Responsive Layouts', 'span': 2, 'description': 'Ensuring complex data remains usable on smaller screens.', 'imagePlaceholder': False, 'image': get_img(), 'features': ['Mobile Tables', 'Stacked Charts', 'Touch-friendly Filters', 'App-like Feel']}
        ],
        'processSteps': [
            {'number': '01', 'title': 'Data Audit', 'description': 'Understanding the data you have and what users need from it.'},
            {'number': '02', 'title': 'Wireframing', 'description': 'Layout out the widget structure and table formats.'},
            {'number': '03', 'title': 'UI Design', 'description': 'Applying visual polish and designing the interaction states.'},
            {'number': '04', 'title': 'Prototyping', 'description': 'Demonstrating how filters and drill-downs will work.'}
        ],
        'featuredProofImage': get_img()
    },
    '#services-growth-team': {
        'stageCategory': 'GROWTH STAGE',
        'serviceTitle': 'Team Extension',
        'description': 'Senior designers seamlessly integrated into your agile workflows.',
        'longDescription': {
            'header': 'Scale Your Design Capacity Instantly.',
            'paragraphs': [
                'Hiring senior product designers is slow, expensive, and risky. When your roadmap is expanding faster than your team, our Team Extension model provides instant access to top-tier design talent.',
                'We don\'t work like a traditional agency. We embed our designers directly into your Slack, Jira, and Agile ceremonies. We act as a seamless extension of your in-house team, adopting your processes and culture.',
                'Whether you need a dedicated UI specialist to crank out screens or a strategic UX lead to guide a new product vertical, we provide flexible, scalable capacity that turns on immediately.'
            ]
        },
        'deliverables': [
            {'title': 'Dedicated Senior Designers', 'span': 2, 'description': 'Experts who focus entirely on your product.', 'features': ['Vetted Talent', 'Senior Level Only', 'Domain Expertise', 'Direct Communication']},
            {'title': 'Agile Integration', 'span': 1, 'description': 'Participation in standups, sprint planning, and retros.', 'features': ['Jira/Linear Ready', 'Slack Integration', 'Daily Standups']},
            {'title': 'Continuous Delivery', 'span': 1, 'description': 'A steady stream of shippable design work.', 'features': ['Sprint Commitments', 'Fast Turnaround', 'Iterative Updates']},
            {'title': 'Design Ops Support', 'span': 2, 'description': 'We bring our own tools, templates, and efficiencies to improve your internal processes.', 'imagePlaceholder': False, 'image': get_img(), 'features': ['Figma Organization', 'Handoff Standards', 'Meeting Frameworks', 'Design QA']}
        ],
        'processSteps': [
            {'number': '01', 'title': 'Onboarding', 'description': 'We learn your product, brand, and internal processes.'},
            {'number': '02', 'title': 'Integration', 'description': 'Setting up comms and access to your workflow tools.'},
            {'number': '03', 'title': 'Execution', 'description': 'Working week-to-week as part of your team.'},
            {'number': '04', 'title': 'Scaling', 'description': 'Adding or removing resources as your needs fluctuate.'}
        ],
        'featuredProofImage': get_img()
    },
    '#services-scale-designsystem': {
        'stageCategory': 'SCALE STAGE',
        'serviceTitle': 'Design System Build',
        'description': 'The single source of truth that accelerates your engineering team.',
        'longDescription': {
            'header': 'Stop Designing the Same Button Twice.',
            'paragraphs': [
                'As your organization scales, inconsistencies inevitably creep in. Different teams use slightly different shades of blue, the date picker behaves differently on three pages, and UI bugs multiply. A true Design System solves this.',
                'We build robust, scalable design systems from the ground up (or audit and restructure yours). We define the foundational tokens, build comprehensive component libraries with all states and variants, and write the guidelines for usage.',
                'A great design system bridges the gap between design and development. We ensure our Figma components map 1:1 with your React/Vue codebase, dramatically reducing QA time and time-to-market for new features.'
            ]
        },
        'deliverables': [
            {'title': 'Design Tokens', 'span': 2, 'description': 'A systematic approach to color, typography, spacing, and elevation.', 'features': ['Semantic Naming', 'Dark Mode Support', 'Spacing Grid', 'Typography Scale']},
            {'title': 'Component Library', 'span': 1, 'description': 'Figma library with variants, auto-layout, and interactive states.', 'features': ['Auto-Layout', 'Component Properties', 'Interactive States']},
            {'title': 'Usage Guidelines', 'span': 1, 'description': 'Documentation on when and how to use specific components.', 'features': ['Do\'s and Don\'ts', 'Accessibility Rules', 'Writing Guidelines']},
            {'title': 'Governance Model', 'span': 2, 'description': 'A clear process for how the team updates and maintains the system over time.', 'imagePlaceholder': False, 'image': get_img(), 'features': ['Contribution Flow', 'Versioning Strategy', 'Release Notes', 'Team Training']}
        ],
        'processSteps': [
            {'number': '01', 'title': 'UI Audit', 'description': 'Cataloging all existing components to identify inconsistencies.'},
            {'number': '02', 'title': 'Foundation', 'description': 'Establishing the base tokens and visual language.'},
            {'number': '03', 'title': 'Component Build', 'description': 'Creating the master components systematically.'},
            {'number': '04', 'title': 'Documentation', 'description': 'Writing the rules of the system for designers and devs.'}
        ],
        'featuredProofImage': get_img()
    },
    '#services-scale-enterprise': {
        'stageCategory': 'SCALE STAGE',
        'serviceTitle': 'Enterprise UX Redesign',
        'description': 'Simplifying complex, multi-layered enterprise applications.',
        'longDescription': {
            'header': 'Taming Enterprise Complexity.',
            'paragraphs': [
                'Enterprise software is notoriously difficult to use. It\'s often built by engineers for highly specialized users, resulting in steep learning curves and fragmented workflows. But enterprise users are also consumers, and their expectations for UX are rising.',
                'We specialize in detangling complex enterprise workflows. We conduct deep research to understand specialized user roles, simplify the information architecture, and create modular interfaces that can handle massive amounts of data without feeling overwhelming.',
                'Our enterprise redesigns focus on improving productivity, reducing training time, and decreasing support tickets for massive, mission-critical applications.'
            ]
        },
        'deliverables': [
            {'title': 'Role-Based Workflows', 'span': 2, 'description': 'Optimizing the interface for specific permissions and user goals.', 'features': ['RBAC Design', 'Custom Views', 'Task-based Navigation', 'Permission States']},
            {'title': 'Scalable Architecture', 'span': 1, 'description': 'Navigation structures that can handle hundreds of features.', 'features': ['Mega-menus', 'Breadcrumbs', 'Global Search']},
            {'title': 'Legacy Migration Strategy', 'span': 1, 'description': 'Planning the transition from the old system to the new.', 'features': ['Phased Rollout', 'Data Mapping', 'User Training']},
            {'title': 'High-Fidelity UI', 'span': 2, 'description': 'A modern, accessible interface that meets enterprise standards.', 'imagePlaceholder': False, 'image': get_img(), 'features': ['WCAG 2.1 AA', 'High Contrast Mode', 'Keyboard Navigation', 'Localization Ready']}
        ],
        'processSteps': [
            {'number': '01', 'title': 'Stakeholder Alignment', 'description': 'Navigating complex organizational requirements.'},
            {'number': '02', 'title': 'System Mapping', 'description': 'Documenting the sprawling legacy architecture.'},
            {'number': '03', 'title': 'Iterative Redesign', 'description': 'Redesigning the platform module by module.'},
            {'number': '04', 'title': 'Validation', 'description': 'Testing with specialized power-users before release.'}
        ],
        'featuredProofImage': get_img()
    },
    '#services-scale-website': {
        'stageCategory': 'SCALE STAGE',
        'serviceTitle': 'Website Redesign',
        'description': 'Editorial-quality web presence that drives B2B sales and recruitment.',
        'longDescription': {
            'header': 'Your Website is Your Best Salesperson.',
            'paragraphs': [
                'For scale-stage companies, the marketing website does heavy lifting. It needs to articulate a complex value proposition to enterprise buyers, attract top-tier talent, and establish industry authority.',
                'We design premium, editorial-style B2B websites that break the mold of the standard "SaaS template". We combine compelling storytelling with bespoke 3D assets, subtle scroll animations, and perfect typography.',
                'The result is a digital flagship that elevates your brand perception, increases lead generation quality, and creates a memorable experience that separates you from your competitors.'
            ]
        },
        'deliverables': [
            {'title': 'Strategic Narrative', 'span': 2, 'description': 'Structuring the site map to guide visitors through your story.', 'features': ['Information Architecture', 'Copywriting', 'SEO Strategy', 'Conversion Funnels']},
            {'title': 'Bespoke UI Design', 'span': 1, 'description': 'Unique layouts that reflect your brand identity.', 'features': ['Custom Layouts', 'Editorial Typography', 'Brand Evolution']},
            {'title': 'Interaction Design', 'span': 1, 'description': 'Custom WebGL or CSS animations for premium feel.', 'features': ['Scroll Triggers', 'Micro-interactions', 'Page Transitions']},
            {'title': 'CMS Architecture', 'span': 2, 'description': 'Designing a scalable backend for your marketing team to manage content.', 'imagePlaceholder': False, 'image': get_img(), 'features': ['Headless CMS', 'Dynamic Collections', 'Localization', 'Role Management']}
        ],
        'processSteps': [
            {'number': '01', 'title': 'Strategy', 'description': 'Defining goals, audience, and the story we need to tell.'},
            {'number': '02', 'title': 'Design', 'description': 'Creating the visual direction and page layouts.'},
            {'number': '03', 'title': 'Motion', 'description': 'Adding the interactive layer that brings the site to life.'},
            {'number': '04', 'title': 'Development', 'description': 'Building on Next.js or Webflow for ultimate performance.'}
        ],
        'featuredProofImage': get_img()
    },
    '#services-scale-ongoing': {
        'stageCategory': 'SCALE STAGE',
        'serviceTitle': 'Ongoing Design Partnership',
        'description': 'Your dedicated external product design department.',
        'longDescription': {
            'header': 'Strategic Partnership, Continuous Value.',
            'paragraphs': [
                'For mature organizations, design needs are constant but fluctuating. You might need a massive feature redesign this month, and primarily minor UX tweaks and design system maintenance the next.',
                'Our Ongoing Design Partnership provides you with a dedicated team of senior designers on a retainer basis. We act as your external design department, providing strategic oversight, continuous UI/UX delivery, and design leadership.',
                'This model offers the stability of an in-house team with the flexibility and elite quality of a top-tier agency, ensuring your product remains best-in-class year after year.'
            ]
        },
        'deliverables': [
            {'title': 'Strategic Planning', 'span': 2, 'description': 'Monthly roadmap planning to align design efforts with business goals.', 'features': ['Quarterly Roadmaps', 'Resource Allocation', 'Impact Measurement', 'Goal Alignment']},
            {'title': 'Continuous UI/UX', 'span': 1, 'description': 'Ongoing design execution for new features and improvements.', 'features': ['Feature Design', 'Bug Fixing', 'Prototyping']},
            {'title': 'Design Leadership', 'span': 1, 'description': 'Mentorship and direction for your junior internal designers.', 'features': ['Design Reviews', 'Mentorship 1:1s', 'Process Setup']},
            {'title': 'Predictable Velocity', 'span': 2, 'description': 'A guaranteed amount of senior design output every single month.', 'imagePlaceholder': False, 'image': get_img(), 'features': ['Retainer Model', 'Flexible Allocation', 'Guaranteed SLA', 'No Hiring Overhead']}
        ],
        'processSteps': [
            {'number': '01', 'title': 'Alignment', 'description': 'Setting up the communication and reporting cadence.'},
            {'number': '02', 'title': 'Backlog Grooming', 'description': 'Prioritizing the design tasks for the upcoming month.'},
            {'number': '03', 'title': 'Continuous Delivery', 'description': 'Executing and handing off work in regular sprints.'},
            {'number': '04', 'title': 'Quarterly Review', 'description': 'Assessing impact and adjusting strategy for the next quarter.'}
        ],
        'featuredProofImage': get_img()
    },
    '#services-scale-research': {
        'stageCategory': 'SCALE STAGE',
        'serviceTitle': 'UX Research & Strategy',
        'description': 'Evidence-based direction for high-stakes product decisions.',
        'longDescription': {
            'header': 'De-risk Your Product Strategy.',
            'paragraphs': [
                'At scale, a wrong product decision doesn\'t just cost development time; it can alienate thousands of users and impact revenue significantly. High-stakes decisions require high-quality evidence.',
                'Our UX Research & Strategy service provides the deep insights needed to navigate complex product challenges. We conduct rigorous qualitative and quantitative research—from generative user interviews to discover new opportunities, to evaluative testing of proposed solutions.',
                'We translate raw data into strategic frameworks, journey maps, and actionable recommendations, ensuring your product roadmap is driven by user reality, not internal assumptions.'
            ]
        },
        'deliverables': [
            {'title': 'Generative Research', 'span': 2, 'description': 'In-depth interviews to uncover unmet needs and new market opportunities.', 'features': ['User Interviews', 'Contextual Inquiry', 'Survey Design', 'Market Analysis']},
            {'title': 'Journey Mapping', 'span': 1, 'description': 'Visualizing the complete end-to-end customer experience.', 'features': ['Service Blueprints', 'Persona Creation', 'Touchpoint Mapping']},
            {'title': 'Usability Testing', 'span': 1, 'description': 'Rigorous testing of prototypes before committing to code.', 'features': ['Moderated Testing', 'A/B Testing', 'Task Success Metrics']},
            {'title': 'Strategic Playbook', 'span': 2, 'description': 'A comprehensive report detailing findings, personas, and strategic recommendations.', 'imagePlaceholder': False, 'image': get_img(), 'features': ['Executive Summary', 'Video Highlights', 'Actionable Roadmap', 'Workshop Presentation']}
        ],
        'processSteps': [
            {'number': '01', 'title': 'Study Design', 'description': 'Defining the research objectives and screening criteria.'},
            {'number': '02', 'title': 'Execution', 'description': 'Conducting the interviews, surveys, or usability tests.'},
            {'number': '03', 'title': 'Synthesis', 'description': 'Analyzing the data to find patterns and actionable insights.'},
            {'number': '04', 'title': 'Strategic Application', 'description': 'Working with your team to integrate findings into the roadmap.'}
        ],
        'featuredProofImage': get_img()
    }
}

with open("src/pages/ServiceDetail.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update ServiceDetailProps to include features
if "features?: string[];" not in content:
    content = content.replace("description?: string;", "description?: string;\n        features?: string[];")

# 2. Update Deliverables component to render features
features_code = """                            {item.description && <p className="text-gray-600 leading-relaxed mb-6 border-0 shadow-none">{item.description}</p>}
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
                            )}"""

if "item.features && item.features.length" not in content:
    content = content.replace('{item.description && <p className="text-gray-600 leading-relaxed mb-6 border-0 shadow-none">{item.description}</p>}', features_code)


# 3. Patch the data map
new_data_str = "export const serviceDataMap: Record<string, Omit<ServiceDetailProps, 'serviceHash'>> = {\n"
match = re.search(r"(    '#services': \{.*?)    '#services-seed-mvp':", content, flags=re.DOTALL)
if match:
    new_data_str += match.group(1)
else:
    print("Could not find top level services")
    exit(1)

for key, value in data.items():
    val_str = json.dumps(value, indent=4)
    val_str = val_str.replace('\\"', '"') # just in case
    val_str = val_str.replace('\n', '\n    ')
    new_data_str += f"    '{key}': {val_str},\n"
new_data_str += "};\n"

start_idx = content.find("export const serviceDataMap")
end_idx = content.find("};", start_idx) + 2
content = content[:start_idx] + new_data_str + content[end_idx:]

with open("src/pages/ServiceDetail.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Features added successfully.")
