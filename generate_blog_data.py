import re

with open("src/pages/BlogDetail.tsx", "r", encoding="utf-8") as f:
    content = f.read()

new_article_data = """
const articleContentMap: Record<string, { heading: string, body: string, highlight?: string }[]> = {
    'why-ux-research-matters': [
        {
            heading: 'The Problem With Skipping Research',
            body: `Most product teams skip research not because they don't value it — but because they're afraid of what it might reveal. Admitting that you don't know your users means admitting that your assumptions might be wrong. And in a world of tight deadlines and investor pressure, that's a hard pill to swallow.\\n\\nBut here's the uncomfortable truth: every hour saved by skipping research is typically paid back threefold in rework, failed features, and churned users. The data is consistent across the products we've built and advised on over the past five years.`
        },
        {
            heading: 'What the Data Actually Shows',
            body: `In our own project retrospectives, we found that products that had at least two rounds of user interviews before any visual design had a 40% lower rate of major post-launch UX revisions. That's not a small margin — that's the difference between a product that grows and one that stalls.\\n\\nThe most common failure mode we see is teams doing research after design — using it to validate rather than generate direction. Discovery research and validation research are fundamentally different activities. Conflating them is one of the most expensive mistakes you can make.`,
            highlight: 'Products with early user interviews had 40% fewer post-launch UX revisions.'
        },
        {
            heading: 'How We Approach Research at Elux',
            body: `Our process has three stages before a single wireframe gets drawn:\\n\\n1. Stakeholder alignment — We interview internal teams to surface assumptions, constraints, and existing knowledge.\\n2. User discovery — Structured 30-minute interviews with 5–8 representative users. We're looking for patterns, not anecdotes.\\n3. Synthesis & direction — We turn raw observations into design principles that guide every decision downstream.\\n\\nThis takes roughly one week for most projects. The ROI is consistently positive.`
        }
    ],
    'design-systems-scaling': [
        {
            heading: 'The False Promise of Component Libraries',
            body: `Many teams confuse a component library with a design system. They build a Figma file with buttons, inputs, and typography tokens, call it a design system, and expect consistency to magically follow. But a component library without governance is just a collection of UI elements.`
        },
        {
            heading: 'Building for Change',
            body: `A true design system is built for change. It includes documentation on how and when to use components, patterns for common workflows, and most importantly, a clear process for adding new elements or updating existing ones as the product evolves. Without this, the system becomes rigid and developers will start building one-off solutions.`,
            highlight: 'A component library without governance is just a collection of UI elements.'
        },
        {
            heading: 'Our Systematic Approach',
            body: `When we build design systems for our clients, we focus heavily on the consumption experience. We create clear, copy-pasteable code snippets, align Figma components exactly with React/Vue components, and establish a 'contribution model' so product teams know how to propose changes to the core system.`
        }
    ],
    'fintech-ux-trust': [
        {
            heading: 'Trust is the Ultimate Feature',
            body: `In fintech, trust isn't just a marketing buzzword; it's the core utility of the product. If users don't trust your app, they won't link their bank accounts or move their money. Trust is built through consistency, transparency, and a design language that feels secure.`
        },
        {
            heading: 'Transparency Over Cleverness',
            body: `When handling transactions, clarity always wins over cleverness. Using overly abstract icons or hiding transaction details behind unnecessary clicks creates anxiety. Users need to see exactly where their money is going, how long it will take, and what fees are involved upfront.`,
            highlight: 'In financial products, a confusing UI doesn\\'t just frustrate users — it erodes trust.'
        },
        {
            heading: 'Friction as a Design Tool',
            body: `While most UX design focuses on removing friction, in fintech, strategic friction is essential. Adding a confirmation screen before a large transfer or requiring biometric authentication for sensitive actions reassures users that the app is protecting them.`
        }
    ],
    'mvp-design-mistakes': [
        {
            heading: 'The Minimum Viable Misconception',
            body: `The term 'MVP' is often used as an excuse for poor design. Founders think, "We'll just get something out there and fix the UI later." But in today's market, user expectations are incredibly high. A buggy, ugly MVP doesn't test your core value proposition; it only tests users' tolerance for bad software.`
        },
        {
            heading: 'Mistake #1: Ignoring Onboarding',
            body: `You can build the most powerful tool in the world, but if users can't figure out how to use it in the first 30 seconds, they'll bounce. We often see MVPs that dump users onto a complex dashboard with no guidance. A focused, step-by-step onboarding flow is not a 'nice to have'—it's critical for retention.`,
            highlight: 'A buggy, ugly MVP doesn\\'t test your core value proposition; it only tests users\\' tolerance for bad software.'
        },
        {
            heading: 'Mistake #2: Feature Creep',
            body: `The hardest part of designing an MVP is saying no. It's tempting to add 'just one more feature' to make the launch more impressive. But every new feature dilutes the core value proposition and delays time-to-market. We ruthlessly prioritize the primary user flow and design that to perfection.`
        }
    ],
    'vitalix-case-study': [
        {
            heading: 'The Vitalix Challenge',
            body: `Vitalix approached us with an ambitious goal: redesign their entire patient portal in just three weeks to secure their next round of funding. The existing platform was built by engineers without a designer, resulting in a fragmented, unintuitive experience that frustrated both patients and healthcare providers.`
        },
        {
            heading: 'Week 1: Discovery & Strategy',
            body: `We kicked off with intense discovery. We interviewed three doctors and five patients to understand where the current system was failing. The key insight? Patients were overwhelmed by medical jargon, and doctors spent too much time navigating between different tabs to get a complete view of a patient's history.`,
            highlight: 'We identified the core friction points within 48 hours and aligned the entire team around a new vision.'
        },
        {
            heading: 'Week 2 & 3: Rapid Prototyping & Handoff',
            body: `Armed with our insights, we moved into rapid wireframing and high-fidelity design. We created a unified patient dashboard that brought the most critical information front and center. By week three, we delivered a clickable prototype that Vitalix used to successfully close their funding round.`
        }
    ],
    'saas-dashboard-ux': [
        {
            heading: 'The Dashboard Dilemma',
            body: `The dashboard is the beating heart of any SaaS application. It's where users start their day and where they return to assess their progress. Yet, many dashboards are simply a dumping ground for every metric the product tracks, leading to cognitive overload.`
        },
        {
            heading: 'Hierarchy of Information',
            body: `A great dashboard tells a story. It should answer three questions immediately: What is the current status? What requires my attention right now? What actions can I take? We structure dashboards hierarchically, placing primary KPIs at the top, followed by actionable alerts, and secondary metrics below.`,
            highlight: 'Dashboards are where SaaS products win or lose. We\\'ve designed dozens — here are the structural patterns.'
        },
        {
            heading: 'Customization vs. Curation',
            body: `While power users love customizable widgets, most users just want a curated experience out of the box. We believe in providing strong, opinionated default views based on user roles, while allowing flexibility for those who need it.`
        }
    ],
    'no-code-mvps': [
        {
            heading: 'The Rise of No-Code',
            body: `Tools like Webflow, Bubble, and FlutterFlow have democratized product creation. For early-stage founders, the speed and cost advantages of no-code are undeniable. You can spin up a fully functional application in a fraction of the time it would take to build from scratch.`
        },
        {
            heading: 'When to Use No-Code',
            body: `No-code is perfect for validating ideas, building internal tools, or launching simple marketplaces and directories. It allows you to test market demand with real users and iterate quickly without significant engineering overhead.`,
            highlight: 'No-code tools have matured dramatically. For many early-stage founders, they\\'re the fastest path to user validation.'
        },
        {
            heading: 'When to Code from Scratch',
            body: `However, no-code hits its limits when you need complex custom logic, high-performance computing, or deep integration with legacy systems. We advise clients to use no-code to find product-market fit, and then secure funding to rebuild a scalable, custom platform.`
        }
    ],
    'mobile-ux-patterns': [
        {
            heading: 'Evolution of Mobile UX',
            body: `Mobile interfaces have evolved rapidly over the past decade. The shift from skeuomorphism to flat design changed how things looked, but the underlying interaction patterns have remained remarkably consistent. This consistency is driven by human ergonomics and cognitive limits.`
        },
        {
            heading: 'The Thumb Zone',
            body: `Despite screen sizes getting larger, our thumbs haven't grown. The 'thumb zone'—the area of the screen easily reachable with one hand—dictates that critical navigation and primary actions should be placed at the bottom of the screen. This is why the bottom tab bar has become the undisputed standard for mobile navigation.`,
            highlight: 'Trends come and go. But some mobile interaction patterns have survived because they align with how people actually think.'
        },
        {
            heading: 'Gestures vs. Visible Controls',
            body: `Swipe-to-delete and pull-to-refresh are ingrained in user behavior, but gestures are inherently hidden. A golden rule of mobile UX is that gestures should enhance the experience for power users, but visible controls should always exist for primary actions.`
        }
    ]
};
"""

content = re.sub(r"const articleSections = \[.*?\];", new_article_data, content, flags=re.DOTALL)
content = re.sub(r"const tocItems = articleSections\.map.*?;", "", content, flags=re.DOTALL)

# Now inject dynamic logic inside the component.
replacement_inside = """export default function BlogDetail() {
    const slug = window.location.hash.replace('#blog/', '');
    const post = posts.find(p => p.slug === slug) ?? posts[0];
    const relatedPosts = posts.filter(p => p.slug !== post.slug).slice(0, 3);
    const articleSections = articleContentMap[post.slug] || articleContentMap['why-ux-research-matters'];
    const tocItems = articleSections.map((s, i) => ({ id: `section-${i}`, label: s.heading }));
"""

content = re.sub(r"export default function BlogDetail\(\) \{.*?(?=const \[activeSection, setActiveSection\])", replacement_inside, content, flags=re.DOTALL)

with open("src/pages/BlogDetail.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("BlogDetail updated")
