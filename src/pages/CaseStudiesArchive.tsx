import { useState, useEffect, useRef } from 'react';

const filters = ["All", "Healthcare", "SaaS", "AI Platforms", "FinTech", "E-Commerce", "Blockchain", "EdTech"];

export const caseStudies = [
    { 
        id: 1, title: "Novus Medical", category: "HEALTHCARE", filter: "Healthcare", tagline: "Redesigning a clinical workflow platform for 8,000+ daily active clinicians.", metric: "+120% Placement Rate", tags: ["Product Design", "Design System", "UX Research"], image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80", span: 2,
        problem: "Clinicians wasted hours navigating deeply nested EHR menus, causing burnout and data entry errors.",
        solution: "We engineered a modular dashboard with predictive charting and a command palette to minimize clicks.",
        impact: "Reduced charting time by 35% and increased workflow completion rates by 120%."
    },
    { 
        id: 2, title: "Upnova", category: "AI PLATFORMS", filter: "AI Platforms", tagline: "Turning complex AI model outputs into dashboards non-technical teams actually use.", metric: "2x Faster Workflows", tags: ["AI UX", "Dashboard Design"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", span: 1,
        problem: "Raw AI data tables alienated their primary audience: marketing and sales teams.",
        solution: "Abstracted complexity through visual storytelling and dynamic widgets with actionable insights.",
        impact: "Increased daily active usage by 300% among non-technical staff."
    },
    { 
        id: 3, title: "AETERNA Labs", category: "SAAS", filter: "SaaS", tagline: "0→1 product design for a biotech SaaS that closed a $2M seed round.", metric: "$2M Seed Raised", tags: ["MVP Design", "Investor Deck"], image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80", span: 1,
        problem: "Scientists had a revolutionary algorithm but no interface to prove commercial viability to investors.",
        solution: "A rapid 4-week design sprint to build a highly-polished, interactive prototype for investor demos.",
        impact: "The prototype was instrumental in closing an oversubscribed $2M seed round."
    },
    { 
        id: 4, title: "KlickEx", category: "FINTECH", filter: "FinTech", tagline: "Redesigning a cross-border payments interface handling $1B+ in annual transactions.", metric: "+40% Conversion Rate", tags: ["FinTech UX", "Mobile Design", "Payment Flows"], image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80", span: 2,
        problem: "High abandonment rates caused by a confusing fee display and multi-page checkout.",
        solution: "Consolidated the transfer process into a single page with real-time previews and transparent fees.",
        impact: "Transaction completion jumped by 40% and support tickets dropped by 65%."
    },
    { 
        id: 5, title: "Vitalix", category: "HEALTHCARE", filter: "Healthcare", tagline: "A telehealth MVP designed in 3 weeks that helped close a $2.4M funding round.", metric: "3-Week MVP Launch", tags: ["Telehealth", "MVP", "Prototype"], image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=800&q=80", span: 1,
        problem: "Needed a believable, production-ready product experience from a rough whiteboard concept in 3 weeks.",
        solution: "Used 'Design System Lite' to assemble the core 'book-to-consult' flow with high-end micro-animations.",
        impact: "Delivered a clickable prototype in 21 days, securing a $2.4M seed funding round."
    },
    { 
        id: 6, title: "CartFlow", category: "E-COMMERCE", filter: "E-Commerce", tagline: "Eliminating checkout friction for a D2C brand processing 40k+ orders monthly.", metric: "+65% Cart Completion", tags: ["E-Commerce UX", "Conversion Optimization"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80", span: 1,
        problem: "Multi-step checkout with manual data entry bled revenue on mobile devices.",
        solution: "Redesigned into a frictionless, one-page accordion checkout with one-click express payments.",
        impact: "Mobile checkout completion increased by 65%, adding $120k in monthly revenue."
    },
    { 
        id: 7, title: "ChainVault", category: "BLOCKCHAIN", filter: "Blockchain", tagline: "Making DeFi accessible — a non-custodial wallet UX for mainstream users.", metric: "50k+ Wallet Activations", tags: ["Web3 UX", "Wallet Design", "DeFi"], image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=1600&q=80", span: 2,
        problem: "Complex onboarding and seed-phrase management deterred mainstream web2 users from adopting DeFi.",
        solution: "Introduced social logins and abstracted gas fees to create a familiar web2-like experience.",
        impact: "Surpassed 50,000 active wallets in the first month post-launch."
    },
    { 
        id: 8, title: "Learnify Pro", category: "EDTECH", filter: "EdTech", tagline: "Rebuilding a corporate LMS that reduced course drop-off by 55%.", metric: "-55% Drop-off Rate", tags: ["EdTech", "LMS Design", "Engagement"], image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80", span: 1,
        problem: "Employees found the corporate LMS boring and overwhelming, leading to low completion rates.",
        solution: "Gamified the learning experience with bite-sized modules, progress streaks, and clear milestones.",
        impact: "Reduced course drop-off by 55% and increased average session length by 12 minutes."
    },
    { 
        id: 9, title: "NeuralDesk", category: "AI PLATFORMS", filter: "AI Platforms", tagline: "Designing the interface for an enterprise AI assistant used by 200+ companies.", metric: "4.9★ User Satisfaction", tags: ["Enterprise UX", "AI Interface", "B2B SaaS"], image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80", span: 1,
        problem: "The AI assistant felt disconnected from users' daily workflows and lacked contextual awareness.",
        solution: "Integrated the assistant directly into the OS layer with a sleek, non-intrusive floating interface.",
        impact: "Achieved a 4.9/5 user satisfaction score and expanded to 200+ enterprise clients."
    },
    { 
        id: 10, title: "Dekryption Labs", category: "SAAS", filter: "SaaS", tagline: "A cybersecurity SaaS dashboard that surfaces critical threats without noise.", metric: "42% Churn Reduction", tags: ["Security UX", "Data Visualization"], image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80", span: 2,
        problem: "Security analysts suffered from alert fatigue due to an overloaded dashboard with 100+ daily notifications.",
        solution: "Implemented a severity-based triage view that highlights critical threats and auto-groups anomalies.",
        impact: "Reduced mean time to resolution (MTTR) by 40% and decreased customer churn by 42%."
    },
    { 
        id: 11, title: "MedConnect", category: "HEALTHCARE", filter: "Healthcare", tagline: "Patient portal redesign for 120 clinics — improving scheduling adherence.", metric: "+38% Appointment Rate", tags: ["Patient UX", "Portal Design"], image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80", span: 1,
        problem: "Elderly patients struggled to book appointments online, leading to high call center volume.",
        solution: "Redesigned the booking flow with large typography, clear contrast, and a conversational interface.",
        impact: "Increased online appointment bookings by 38% and reduced call center load."
    },
    { 
        id: 12, title: "PocketTrade", category: "FINTECH", filter: "FinTech", tagline: "A zero-commission trading app designed to feel premium for first-time investors.", metric: "280k Downloads in 3 months", tags: ["Trading UX", "Mobile App", "Onboarding"], image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", span: 1,
        problem: "First-time investors felt intimidated by complex trading jargon and cluttered charts.",
        solution: "Created a minimalist, swipe-to-trade interface with gamified educational modules.",
        impact: "Generated 280,000 downloads in the first 3 months with a 45% daily retention rate."
    },
];

const stats = [
    { num: '80+', label: 'Products Shipped' },
    { num: '15+', label: 'Industries Served' },
    { num: '98%', label: 'Client Satisfaction' },
    { num: '$500M+', label: 'Raised by Clients' },
];

const processSlides = [
    { num: '01', title: 'Discovery & Alignment', desc: 'We embed into your world before touching a single frame. User interviews, stakeholder alignment, competitive benchmarking, and clear success metrics — all before week two.', tag: 'Research' },
    { num: '02', title: 'Strategy & Architecture', desc: 'Information architecture, user flows, and interaction logic mapped out in low-fidelity. We pressure-test the structure before investing in visual polish.', tag: 'UX Strategy' },
    { num: '03', title: 'High-Fidelity Design', desc: 'Pixel-precise screens, a scalable component library, and micro-interactions that make the product feel alive. Every state accounted for — hover, error, empty, loading.', tag: 'UI Design' },
    { num: '04', title: 'Handoff & Launch Support', desc: 'Annotated Figma files, CSS/token exports, and real-time support during the build sprint. We stay on until the product ships — not until the file is delivered.', tag: 'Delivery' },
];

const marqueeItems = [
    'SaaS Platforms', 'FinTech', 'HealthTech', 'AI & ML', 'E-Commerce', 'Blockchain', 'EdTech', 'DevTools', 'B2B Products', 'Consumer Apps', 'Enterprise UX', 'No-Code Builds',
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
function ArchiveHero() {
    return (
        <section className="bg-[#0a0a0a] pt-44 pb-0 px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="pb-20 border-b border-white/8">
                    <p className="text-[10px] font-semibold tracking-[0.25em] text-gray-500 uppercase mb-8">Selected Work</p>
                    <div className="flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-24">
                        <div className="flex-1">
                            <h1 className="text-[72px] md:text-[100px] font-medium tracking-tighter leading-[1.0] text-white font-display mb-8">
                                Work That<br />Ships.
                            </h1>
                            <p className="text-gray-400 text-lg md:text-xl font-medium leading-[1.6] tracking-tight max-w-lg">
                                80+ digital products shipped across SaaS, fintech, healthtech, Web3, and more — each one built around measurable outcomes, not just good-looking screens.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-px bg-white/8 border border-white/8 rounded-2xl overflow-hidden flex-shrink-0 lg:w-[360px]">
                            {stats.map((s, i) => (
                                <div key={i} className="bg-[#0a0a0a] px-8 py-7">
                                    <p className="text-4xl font-bold tracking-tighter text-white leading-none mb-2">{s.num}</p>
                                    <p className="text-gray-500 text-sm font-medium leading-[1.5] tracking-tight">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Marquee ──────────────────────────────────────────────────────────────────
function MarqueeTicker() {
    return (
        <div className="bg-[#0f0f0f] border-b border-white/8 py-5 overflow-hidden">
            <style>{`
                @keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }
                .marquee-track { animation: marquee 28s linear infinite; display: flex; width: max-content; }
                .marquee-track:hover { animation-play-state: paused; }
            `}</style>
            <div className="marquee-track">
                {[...marqueeItems, ...marqueeItems].map((item, i) => (
                    <span key={i} className="flex items-center gap-6 px-8 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-600 whitespace-nowrap">
                        {item}
                        <span className="w-1 h-1 rounded-full bg-blue-600 flex-shrink-0" />
                    </span>
                ))}
            </div>
        </div>
    );
}

// ─── Filter + Grid ────────────────────────────────────────────────────────────
// ─── Filter + Detailed Grid ────────────────────────────────────────────────────────
function CaseStudyCard({ study }: { study: any }) {
    const [activeTab, setActiveTab] = useState<'problem' | 'solution' | 'impact'>('problem');
    
    return (
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch border-b border-gray-100 py-24 first:pt-12 last:border-0">
            {/* Left: Visual & Identity */}
            <div className="w-full lg:w-1/2 flex flex-col">
                <div className="overflow-hidden rounded-3xl bg-gray-100 mb-8 relative aspect-[4/3] group cursor-pointer" onClick={() => window.location.hash = `#case-study-detail-${study.id}`}>
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                    <div className="absolute top-5 left-5 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {study.tags && study.tags.map((tag: string, i: number) => (
                            <span key={i} className="text-[9px] font-bold uppercase tracking-widest text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">{tag}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">{study.category}</span>
                        <span className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />{study.metric}
                        </span>
                    </div>
                    <h3 className="text-[36px] md:text-[48px] font-medium tracking-tight text-gray-900 font-display mb-4 leading-none">{study.title}</h3>
                    <p className="text-gray-500 text-lg font-medium leading-[1.6] tracking-tight">{study.tagline}</p>
                </div>
            </div>

            {/* Right: Rich Text Carousel / Tabs */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center bg-[#0a0a0a] rounded-3xl p-10 md:p-14 text-white">
                <div className="flex gap-6 border-b border-white/10 mb-8 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
                    {(['problem', 'solution', 'impact'] as const).map((tab) => (
                        <button 
                            key={tab} 
                            onClick={() => setActiveTab(tab)}
                            className={`pb-4 text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap transition-colors relative ${activeTab === tab ? 'text-white' : 'text-gray-600 hover:text-gray-300'}`}
                        >
                            The {tab}
                            {activeTab === tab && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" />
                            )}
                        </button>
                    ))}
                </div>
                
                <div className="flex-1 relative min-h-[180px]">
                    <div className={`absolute inset-0 transition-all duration-500 ${activeTab === 'problem' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                        <p className="text-gray-400 text-lg md:text-xl font-medium leading-[1.7] tracking-tight">
                            {study.problem}
                        </p>
                    </div>
                    <div className={`absolute inset-0 transition-all duration-500 ${activeTab === 'solution' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                        <p className="text-gray-400 text-lg md:text-xl font-medium leading-[1.7] tracking-tight">
                            {study.solution}
                        </p>
                    </div>
                    <div className={`absolute inset-0 transition-all duration-500 ${activeTab === 'impact' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                        <p className="text-gray-400 text-lg md:text-xl font-medium leading-[1.7] tracking-tight">
                            {study.impact}
                        </p>
                        <div className="mt-8 inline-flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl">
                            <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">Key Result</p>
                                <p className="text-lg font-bold text-white">{study.metric}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <a href={`#case-study-detail-${study.id}`} className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white group">
                        Read Full Case Study
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                            <svg className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

function StickyFilterAndGrid() {
    const [activeFilter, setActiveFilter] = useState("All");
    const filtered = activeFilter === "All" ? caseStudies : caseStudies.filter(s => s.filter === activeFilter);

    return (
        <section className="bg-white text-black min-h-screen pb-32">
            <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md py-5 px-8 border-b border-gray-100">
                <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
                    {filters.map(f => (
                        <button key={f} onClick={() => setActiveFilter(f)}
                            className={`px-5 py-2 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase transition-all duration-200 whitespace-nowrap flex-shrink-0 ${activeFilter === f ? 'bg-black text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                            {f}
                        </button>
                    ))}
                    <span className="ml-auto text-[11px] font-medium text-gray-400 whitespace-nowrap pl-4 flex-shrink-0">
                        {filtered.length} projects
                    </span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-8 mt-8">
                <div className="flex flex-col">
                    {filtered.map(study => (
                        <CaseStudyCard key={study.id} study={study} />
                    ))}
                </div>
                {filtered.length === 0 && (
                    <div className="text-center py-32">
                        <p className="text-gray-400 text-xl font-medium">No projects in this category yet.</p>
                        <button onClick={() => setActiveFilter("All")} className="mt-6 text-blue-600 font-semibold underline underline-offset-4">View all</button>
                    </div>
                )}
            </div>
        </section>
    );
}

// ─── Results Strip ────────────────────────────────────────────────────────────
function ResultsStrip() {
    const results = [
        { value: '35%+', label: 'Average conversion lift after redesign' },
        { value: '$1.8M', label: 'Avg. funding secured post-MVP' },
        { value: '97%', label: 'Projects delivered on time' },
        { value: '91%', label: 'Client retention rate' },
    ];
    return (
        <section className="bg-[#0a0a0a] py-24 px-8">
            <div className="max-w-7xl mx-auto">
                <p className="text-[10px] font-bold tracking-[0.25em] text-gray-600 uppercase mb-14">Outcomes by the Numbers</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8">
                    {results.map((r, i) => (
                        <div key={i} className="bg-[#0a0a0a] px-8 py-10 group hover:bg-white/[0.03] transition-colors">
                            <p className="text-[52px] md:text-[64px] font-bold tracking-tighter text-white leading-none mb-3 group-hover:text-blue-400 transition-colors">{r.value}</p>
                            <p className="text-gray-500 text-sm font-medium leading-[1.6] tracking-tight">{r.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Process Carousel ─────────────────────────────────────────────────────────
function ProcessCarousel() {
    const [active, setActive] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        timerRef.current = setInterval(() => setActive(p => (p + 1) % processSlides.length), 4000);
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, []);

    const go = (i: number) => {
        if (timerRef.current) clearInterval(timerRef.current);
        setActive(i);
        timerRef.current = setInterval(() => setActive(p => (p + 1) % processSlides.length), 4000);
    };

    const slide = processSlides[active];

    return (
        <section className="bg-white py-32 px-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase">Our Approach</span>
                </div>
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                    {/* Left: heading + nav */}
                    <div className="w-full lg:w-[38%] lg:sticky lg:top-32">
                        <h2 className="text-[48px] md:text-[60px] font-medium tracking-tighter text-gray-900 leading-[1.05] font-display mb-12">
                            How we approach every engagement.
                        </h2>
                        <div className="flex flex-col gap-3">
                            {processSlides.map((s, i) => (
                                <button key={i} onClick={() => go(i)}
                                    className={`flex items-center gap-4 text-left group transition-all duration-300 py-3 px-4 rounded-xl ${active === i ? 'bg-gray-950 text-white' : 'text-gray-400 hover:text-gray-700'}`}>
                                    <span className={`text-[11px] font-bold w-8 shrink-0 ${active === i ? 'text-blue-400' : 'text-gray-400'}`}>{s.num}</span>
                                    <span className="font-medium text-[15px] tracking-tight">{s.title}</span>
                                    {active === i && (
                                        <span className="ml-auto text-[9px] font-bold tracking-widest uppercase text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">{s.tag}</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: slide content */}
                    <div className="w-full lg:w-[62%]">
                        <div key={active} className="bg-[#0a0a0a] rounded-3xl p-12 min-h-[360px] flex flex-col justify-between"
                            style={{ animation: 'fadeSlideIn 0.4s ease' }}>
                            <style>{`@keyframes fadeSlideIn { from { opacity:0; transform:translateY(16px) } to { opacity:1; transform:translateY(0) } }`}</style>
                            <div>
                                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-blue-400 mb-6 block">{slide.tag}</span>
                                <p className="text-6xl font-bold tracking-tighter text-white/10 mb-4">{slide.num}</p>
                                <h3 className="text-[32px] font-medium tracking-tighter text-white leading-[1.15] font-display mb-8">{slide.title}</h3>
                                <p className="text-gray-400 text-lg font-medium leading-[1.7] tracking-tight">{slide.desc}</p>
                            </div>
                            {/* Progress bar */}
                            <div className="flex gap-2 mt-12">
                                {processSlides.map((_, i) => (
                                    <button key={i} onClick={() => go(i)}
                                        className={`h-1 rounded-full transition-all duration-300 ${active === i ? 'bg-blue-500 flex-1' : 'bg-white/10 w-8 hover:bg-white/20'}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Industry Highlights ──────────────────────────────────────────────────────
function IndustryHighlights() {
    const items = [
        { label: 'SaaS & B2B', desc: 'Dashboards, onboarding flows, and design systems that reduce churn and accelerate activation.', icon: '⬡', count: '22+' },
        { label: 'FinTech', desc: 'Payment UX, trading interfaces, and banking apps where every interaction builds trust.', icon: '◎', count: '14+' },
        { label: 'HealthTech', desc: 'Clinical workflows, patient portals, and telehealth platforms with empathy baked in.', icon: '▭', count: '18+' },
        { label: 'AI Platforms', desc: 'Interfaces that make complex model outputs legible for technical and non-technical users alike.', icon: '⬡', count: '11+' },
        { label: 'E-Commerce', desc: 'Product discovery, checkout optimization, and retention-focused post-purchase UX.', icon: '◎', count: '9+' },
        { label: 'Web3 & DeFi', desc: 'Wallets, DEXes, and NFT platforms designed for the mainstream — not just crypto-native users.', icon: '▭', count: '7+' },
    ];

    return (
        <section className="bg-[#f8f8f8] py-32 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase">Industry Depth</span>
                </div>
                <h2 className="text-[48px] md:text-[64px] font-medium tracking-tighter text-gray-900 leading-[1.0] font-display mb-4">
                    Domain expertise,<br />not just design skills.
                </h2>
                <p className="text-gray-500 text-lg font-medium leading-[1.6] tracking-tight max-w-2xl mb-20">
                    We speak your industry's language before the first kickoff call. No ramp-up tax. No educating us on your users' context.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, i) => (
                        <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 group hover:border-blue-100 hover:shadow-sm transition-all duration-300">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-3xl text-gray-200 group-hover:text-blue-500 transition-colors">{item.icon}</span>
                                <span className="text-[11px] font-bold tracking-[0.15em] text-gray-300 uppercase">{item.count} projects</span>
                            </div>
                            <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">{item.label}</h3>
                            <p className="text-gray-500 text-[15px] font-medium leading-[1.6] tracking-tight">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA() {
    return (
        <section className="bg-[#0a0a0a] py-40 px-8">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-[10px] font-semibold tracking-[0.25em] text-gray-500 uppercase mb-8">Start a Project</p>
                <h2 className="text-[56px] md:text-[88px] lg:text-[104px] font-medium tracking-tighter text-white font-display leading-[1.0] mb-10">
                    Your product<br />could be next.
                </h2>
                <p className="text-gray-400 text-lg md:text-xl font-medium leading-[1.6] max-w-xl mx-auto mb-12 tracking-tight">
                    We take on a limited number of projects each quarter to ensure every client gets our full attention and our best work.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="mailto:hello@elux.space"
                        className="inline-flex items-center gap-2 bg-white text-black text-[11px] font-bold uppercase tracking-widest px-8 py-5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 group">
                        Book a Discovery Call
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                    <a href="#services" onClick={() => { window.location.hash = '#services'; }}
                        className="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-white text-[11px] font-bold uppercase tracking-widest px-8 py-5 rounded-full hover:bg-white/15 transition-all duration-300">
                        Explore Services
                    </a>
                </div>
            </div>
        </section>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CaseStudiesArchive() {
    useEffect(() => { document.title = 'Case Studies | Elux Space – Work That Ships'; }, []);
    return (
        <div className="font-sans antialiased text-gray-900 bg-white">
            <main>
                <ArchiveHero />
                <MarqueeTicker />
                <StickyFilterAndGrid />
                <ResultsStrip />
                <ProcessCarousel />
                <IndustryHighlights />
            </main>
        </div>
    );
}
