import json

services = [
    ('MVP UX & UI Design', 'From zero to a fundable, shippable product interface.', '#services-seed-mvp', 'SEED STAGE'),
    ('Clickable Prototype', 'Validated, interactive prototypes for demos or user testing.', '#services-seed-prototype', 'SEED STAGE'),
    ('Launch-Ready Landing Page', 'High-converting landing pages built to capture and retain.', '#services-seed-landing', 'SEED STAGE'),
    ('No-Code MVP Build', 'Full product launched without a single line of custom code.', '#services-seed-nocode', 'SEED STAGE'),
    ('Pitch & Demo Readiness', 'Investor-facing decks, flows, and screen presentations.', '#services-seed-pitch', 'SEED STAGE'),

    ('UX Audit & Priorities', 'Identify friction points and a clear roadmap to fix them.', '#services-growth-audit', 'GROWTH STAGE'),
    ('Brand & Visual Enhancement', 'Elevate your product identity without a full redesign.', '#services-growth-brand', 'GROWTH STAGE'),
    ('Product Redesign', 'Modernise and restructure existing products for better outcomes.', '#services-growth-redesign', 'GROWTH STAGE'),
    ('Dashboard & Data UX', 'Turn complex data into clear, decision-driving interfaces.', '#services-growth-dashboard', 'GROWTH STAGE'),
    ('Team Extension', 'Senior designers embedded into your existing product team.', '#services-growth-team', 'GROWTH STAGE'),

    ('Design System Build', 'A living system of components, tokens, and documentation.', '#services-scale-designsystem', 'SCALE STAGE'),
    ('Enterprise UX Redesign', 'Scalable design architecture for complex, multi-team products.', '#services-scale-enterprise', 'SCALE STAGE'),
    ('Website Redesign', 'Editorial-quality web presence that converts and retains.', '#services-scale-website', 'SCALE STAGE'),
    ('Ongoing Design Partnership', 'A long-term design team that grows with your product.', '#services-scale-ongoing', 'SCALE STAGE'),
    ('UX Research & Strategy', 'User interviews, workshops, and evidence-based direction.', '#services-scale-research', 'SCALE STAGE')
]

out = ""
for title, desc, hash_val, stage in services:
    out += f"""    '{hash_val}': {{
        stageCategory: '{stage}',
        serviceTitle: '{title}',
        description: '{desc}',
        longDescription: {{
            header: '{title} for {stage}',
            paragraphs: [
                'We specialize in {title.lower()} that perfectly fits the {stage.lower()} needs.',
                '{desc}',
                'Our process ensures that we deliver high quality and scalable solutions for your business.'
            ],
        }},
        deliverables: [
            {{ title: 'Analysis & Strategy', span: 2, description: 'Deep dive into your requirements.' }},
            {{ title: 'Execution', span: 1, description: 'Building the core value.' }},
            {{ title: 'Delivery', span: 1, description: 'Handover of {title.lower()}.' }}
        ],
        processSteps: [
            {{ number: '01', title: 'Discovery', description: 'Understanding goals.' }},
            {{ number: '02', title: 'Design', description: 'Crafting the solution.' }},
            {{ number: '03', title: 'Refinement', description: 'Iterating.' }},
            {{ number: '04', title: 'Launch', description: 'Going live.' }}
        ],
        featuredProofImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    }},\n"""

open('services_out.txt', 'w', encoding='utf-8').write(out)

industries = [
    ('#industries-cloud', 'CLOUD & DEVOPS', 'Cloud & DevOps', 'Infrastructure dashboards for ops teams who move fast.', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200'),
    ('#industries-devtools', 'DEVELOPER TOOLS', 'Developer Tools', 'Precision-first UX for technical, particular audiences.', 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200'),
    ('#industries-banking', 'BANKING & INSURANCE', 'Banking & Insurance', 'Compliance-first UX with excellent accessibility.', 'https://images.unsplash.com/photo-1501167786227-4cba60a62585?q=80&w=1200'),
    ('#industries-crypto', 'CRYPTO & DEFI', 'Crypto & DeFi', 'Decentralised exchanges and staking interfaces.', 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1200'),
    ('#industries-investment', 'INVESTMENT PLATFORMS', 'Investment Platforms', 'Portfolio trackers and trade execution UX.', 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200'),
    ('#industries-compliance', 'REGULATORY COMPLIANCE', 'Regulatory Compliance', 'KYC flows and audit dashboards as a competitive edge.', 'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?q=80&w=1200'),
    ('#industries-travel', 'TRAVEL & HOSPITALITY', 'Travel & Hospitality', 'Booking flows that make travel feel effortless.', 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200'),
    ('#industries-media', 'MEDIA & ENTERTAINMENT', 'Media & Entertainment', 'Content discovery and streaming UX audiences return to.', 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?q=80&w=1200'),
]

out2 = ""
for hash_val, label, title, desc, img in industries:
    out2 += f"""    '{hash_val}': {{
        label: '{label}',
        title: '{title}',
        desc: '{desc}',
        image: '{img}',
    }},\n"""

open('industries_out.txt', 'w', encoding='utf-8').write(out2)
