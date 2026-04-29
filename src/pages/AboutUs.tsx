import { useState, useRef } from 'react';

import heroVideo from '../assets/4957781-hd_1920_1080_25fps.mp4';

function Hero() {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="relative pt-40 pb-20 bg-white">
            <div className="px-8 max-w-7xl mx-auto w-full mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-0 shadow-none">
                    <div className="lg:col-span-8 border-0 shadow-none">
                        <h1 className="text-5xl md:text-[100px] leading-[0.9] text-gray-900 font-medium tracking-tighter border-0 shadow-none font-display uppercase">
                            We Design Products <br /> People Actually <br /> Want to Use
                        </h1>
                    </div>

                    <div className="lg:col-span-4 border-0 shadow-none pt-4 lg:pt-10">
                        <a href="#contact" onClick={(e) => { e.preventDefault(); window.location.hash = '#contact'; }} className="inline-flex items-center gap-2 group text-xl font-medium mb-8 border-0 shadow-none pointer-events-auto">
                            <span className="border-b border-black">Book a Discovery Call</span>
                            <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                        <p className="text-gray-600 text-lg font-medium leading-relaxed border-0 shadow-none">
                            We help brands grow with strategic design, modern development, and results-driven digital solutions.
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative overflow-hidden bg-gray-100 max-w-[95vw] mx-auto rounded-3xl h-[70vh]">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>

                <button
                    onClick={togglePlay}
                    className="absolute bottom-10 right-10 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/40 transition-all z-20 group"
                    aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
                >
                    {isPlaying ? (
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}

function InformationAndMetrics() {
    const metrics = [
        {
            number: "70+",
            label: "Happy Clients",
            description: "Delivering results that keep clients coming back."
        },
        {
            number: "20M",
            label: "Clients Revenue",
            description: "Helping brands turn vision into measurable growth."
        },
        {
            number: "80K",
            label: "Total Growth",
            description: "Driving continuous success through smart strategy."
        },
        {
            number: "15+",
            label: "Years Experience",
            description: "A decade and a half of shipping excellence and design mastery."
        }
    ];

    return (
        <section className="bg-white text-black py-32 px-8 border-0 shadow-none">
            <div className="max-w-7xl mx-auto border-0 shadow-none">
                {/* Introduction Content */}
                <div className="flex flex-col md:flex-row gap-16 md:gap-32 mb-32 border-0 shadow-none">
                    <div className="md:w-1/4 border-0 shadow-none">
                        <h4 className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase border-0 shadow-none">INFORMATION</h4>
                    </div>
                    <div className="md:w-3/4 border-0 shadow-none">
                        <h2 className="text-[64px] leading-[1.1] text-gray-900 font-medium tracking-tighter border-0 shadow-none font-display">
                            Elux Space is a global product design studio helping founders and operators build digital products that ship, scale, and convert.
                        </h2>
                    </div>
                </div>

                {/* Metrics Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-0 shadow-none">
                    {metrics.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[12px] p-10 h-[400px] flex flex-col justify-between border border-[#ededed] shadow-none hover:border-gray-400 transition-colors duration-500"
                        >
                            <div className="border-0 shadow-none">
                                <h3 className="text-6xl font-bold tracking-tighter text-gray-900 mb-4 border-0 shadow-none">
                                    {item.number}
                                </h3>
                                <h4 className="text-xl font-bold text-gray-900 border-0 shadow-none">
                                    {item.label}
                                </h4>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-[200px] font-medium border-0 shadow-none">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Awards() {
    const awards = [
        { id: "(01)", name: "Webby Awards", nomination: "Creative Excellence", year: "2025" },
        { id: "(02)", name: "CSS Design Awards", nomination: "UI/UX Mastery", year: "2025" },
        { id: "(03)", name: "The FWA", nomination: "Brand Innovation", year: "2024" },
        { id: "(04)", name: "Red Dot Award", nomination: "Top Campaign", year: "2024" },
        { id: "(05)", name: "Innovation Award", nomination: "Agency of the Year", year: "2023" },
        { id: "(06)", name: "UI Design Award", nomination: "Best Visual Design", year: "2022" },
    ];

    return (
        <section className="bg-[#0a0a0a] text-white py-40 px-8 border-0 shadow-none">
            <div className="max-w-7xl mx-auto border-0 shadow-none">
                <div className="flex justify-between items-start mb-32 border-0 shadow-none">
                    <h2 className="text-[144px] font-medium tracking-tighter leading-[0.8] border-0 shadow-none font-display">
                        Awards
                    </h2>
                    <div className="flex items-center gap-2 border-0 shadow-none">
                        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white flex items-center justify-center border-0 shadow-none">
                            <span className="text-xl md:text-3xl font-bold">C</span>
                        </div>
                        <span className="text-5xl md:text-8xl font-bold tracking-tighter leading-none border-0 shadow-none">25</span>
                    </div>
                </div>

                <div className="border-0 shadow-none">
                    {/* Table Header */}
                    <div className="grid grid-cols-12 border-b border-white/10 pb-6 mb-2 border-0 shadow-none">
                        <div className="col-span-1 border-0 shadow-none"></div>
                        <div className="col-span-5 text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold border-0 shadow-none">Award</div>
                        <div className="col-span-4 text-[10px] tracking-[0.2em] text-gray-500 uppercase font-semibold border-0 shadow-none">Nomination</div>
                        <div className="col-span-2 border-0 shadow-none"></div>
                    </div>

                    {/* Table Body */}
                    {awards.map((award) => (
                        <div key={award.id} className="grid grid-cols-12 py-10 border-b border-white/10 items-baseline border-0 shadow-none group hover:bg-white/[0.02] transition-colors">
                            <div className="col-span-1 text-xs text-gray-500 font-medium border-0 shadow-none">
                                {award.id}
                            </div>
                            <div className="col-span-5 text-xl md:text-3xl font-medium tracking-tight border-0 shadow-none">
                                {award.name}
                            </div>
                            <div className="col-span-4 text-sm md:text-lg text-gray-400 font-medium border-0 shadow-none">
                                {award.nomination}
                            </div>
                            <div className="col-span-2 text-right text-lg md:text-2xl font-bold tracking-tighter border-0 shadow-none">
                                {award.year}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function DesignToolStack() {
    const tools = [
        { name: 'Figma', category: 'Design & Prototyping', color: 'bg-purple-500/10 text-purple-400' },
        { name: 'Framer', category: 'Web Development', color: 'bg-blue-500/10 text-blue-400' },
        { name: 'Webflow', category: 'No-Code Build', color: 'bg-emerald-500/10 text-emerald-400' },
        { name: 'React', category: 'Front-End Dev', color: 'bg-cyan-500/10 text-cyan-400' },
        { name: 'Lottie', category: 'Motion & Animation', color: 'bg-orange-500/10 text-orange-400' },
        { name: 'Notion', category: 'Project Management', color: 'bg-gray-500/10 text-gray-400' },
        { name: 'Maze', category: 'User Testing', color: 'bg-pink-500/10 text-pink-400' },
        { name: 'Zeroheight', category: 'Design System Docs', color: 'bg-indigo-500/10 text-indigo-400' },
    ];

    return (
        <section className="bg-white py-32 px-8 border-0 shadow-none overflow-hidden">
            <div className="max-w-7xl mx-auto border-0 shadow-none">
                <div className="text-center mb-20 border-0 shadow-none">
                    <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-4 block">OUR TOOLKIT</span>
                    <h2 className="text-[56px] md:text-[72px] font-medium tracking-tighter text-gray-900 leading-[1.1] mb-6 font-display">
                        Tools of the trade
                    </h2>
                    <p className="text-gray-500 text-xl max-w-2xl mx-auto border-0 shadow-none">
                        We work in the same tools your developers use — ensuring seamless handoff, zero guesswork, and production-ready output every time.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-0 shadow-none">
                    {tools.map((tool) => (
                        <div
                            key={tool.name}
                            className="bg-[#f9f9f9] border border-gray-100 rounded-2xl p-6 flex flex-col gap-2 hover:border-gray-300 hover:shadow-sm transition-all duration-300"
                        >
                            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase px-2 py-1 rounded-full w-fit ${tool.color}`}>
                                {tool.category}
                            </span>
                            <span className="text-xl font-bold text-gray-900 mt-2">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function GrowthSolutions() {
    const solutions = [
        {
            title: "UX & UI Design",
            description: "End-to-end product design from discovery and wireframes to high-fidelity UI your developers can build from."
        },
        {
            title: "Design Systems",
            description: "Living component libraries and token systems that scale with your team and ship consistently across every surface."
        },
        {
            title: "MVP & Prototyping",
            description: "From rough concept to fundable, investor-ready prototype — in as little as two weeks."
        },
        {
            title: "Web Development",
            description: "Production-quality websites and web apps built on Webflow, Framer, or React — from design to deployment."
        },
        {
            title: "UX Audit & Research",
            description: "Evidence-based direction from user interviews, heuristic audits, and conversion funnel analysis."
        },
        {
            title: "Brand & Visual Identity",
            description: "Premium brand systems that signal trust and differentiate your product in a crowded market."
        }
    ];

    return (
        <section className="bg-[#0a0a0a] py-40 px-8 border-0 shadow-none">
            <div className="max-w-7xl mx-auto border-0 shadow-none">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 border-0 shadow-none items-end">
                    <h2 className="text-[72px] md:text-[96px] font-medium tracking-tighter text-white leading-[0.9] font-display">
                        What We <br /> Actually Do
                    </h2>
                    <div className="border-0 shadow-none flex flex-col items-start lg:items-end">
                        <p className="text-gray-400 text-xl max-w-md lg:text-right mb-10 leading-relaxed font-medium">
                            From zero-to-one MVPs to enterprise design systems — we bring senior design execution at every stage of your product journey.
                        </p>
                        <a
                            href="#services"
                            onClick={(e) => { e.preventDefault(); window.location.hash = '#services'; }}
                            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-gray-800 transition-all mb-2 leading-none group"
                        >
                            VIEW ALL SERVICES
                            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-0 shadow-none">
                    {solutions.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#111111] border border-white/5 rounded-[40px] h-[480px] flex flex-col overflow-hidden transition-all duration-500 hover:border-white/20 hover:scale-[1.02]"
                        >
                            {/* Sliding Background Layer */}
                            <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-white transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] z-0"></div>

                            {/* Card Content Wrapper */}
                            <div className="relative z-10 p-12 flex flex-col h-full pointer-events-none">
                                <div className="text-white group-hover:text-black transition-colors duration-500 mb-10">
                                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM6 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3 3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z" />
                                        <path d="M18 12a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3 3 3 0 0 1 3-3h6a3 3 0 0 1 3 3z" />
                                    </svg>
                                </div>

                                <h3 className="text-[44px] font-medium tracking-tighter text-white group-hover:text-black transition-colors duration-500 font-display leading-[1.1] mb-auto">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 group-hover:text-black transition-colors duration-500 text-lg leading-relaxed font-medium">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function HowWeWork() {
    const steps = [
        {
            number: '• Step 01',
            title: 'Discover',
            description: 'We dive deep into your goals, audience, and brand to map out the perfect direction for your MVP.'
        },
        {
            number: '• Step 02',
            title: 'Design',
            description: 'We create high-fidelity interfaces that signal credibility and conversion from day one.'
        },
        {
            number: '• Step 03',
            title: 'Develop',
            description: 'Seamless transition from high-fidelity design to launch-ready code with absolute precision.'
        },
        {
            number: '• Step 04',
            title: 'Deliver',
            description: 'Launching your product and iterating based on real-world performance and growth metrics.'
        }
    ];

    return (
        <section className="bg-[#f8f8f8] py-40 px-8 border-0 shadow-none">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 border-0 shadow-none">
                {/* Left Column: Info (Sticky-like) */}
                <div className="border-0 shadow-none h-fit lg:sticky lg:top-32">
                    <div className="flex items-center gap-2 mb-8 border-0 shadow-none">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full border-0 shadow-none"></span>
                        <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase border-0 shadow-none">PROCESS</span>
                    </div>
                    <h2 className="text-[64px] font-medium tracking-tighter text-gray-900 leading-[1] mb-10 border-0 shadow-none font-display">
                        How Our Service <br /> Process Works
                    </h2>
                    <p className="text-gray-500 text-lg mb-12 max-w-sm border-0 shadow-none">
                        No surprises — just structured milestones, clear updates, and open communication from start to finish.
                    </p>
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); window.location.hash = '#contact'; }}
                        className="group flex items-center gap-4 bg-black text-white px-8 py-5 rounded-full hover:bg-gray-800 transition-all duration-300 border-0 shadow-none w-fit"
                    >
                        <span className="text-sm font-bold uppercase tracking-widest border-0 shadow-none">Start a Project</span>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center transition-colors group-hover:bg-blue-600 border-0 shadow-none">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </a>
                </div>

                {/* Right Column: Cards */}
                <div className="flex flex-col gap-6 border-0 shadow-none">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm flex flex-col justify-between h-[320px] hover:scale-[1.01] transition-transform duration-500"
                        >
                            <span className="text-[10px] font-bold text-gray-900 tracking-[0.2em] uppercase border-0 shadow-none">
                                {step.number}
                            </span>
                            <div className="border-0 shadow-none">
                                <h3 className="text-[48px] font-medium tracking-tighter text-gray-900 mb-6 border-0 shadow-none font-display leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-gray-700 text-lg max-w-xl border-0 shadow-none">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Team() {
    const team = [
        { name: 'ARMAN NIUM', role: 'CREATIVE DIRECTOR', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80' },
        { name: 'THERESA WEBB', role: 'SENIOR UX DESIGNER', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80' },
        null, // EMPTY SLOT
        { name: 'KATHRYN MURPHY', role: 'PRODUCT DESIGNER', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80' },
        { name: 'JACOB JONES', role: 'UI DESIGN LEAD', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80' },
        { name: 'DARRELL STEWARD', role: 'DESIGN SYSTEMS LEAD', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&q=80' },
        { name: 'ROBERT FOX', role: 'FRAMER DEVELOPER', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=800&q=80' },
        null // EMPTY SLOT
    ];

    return (
        <section className="bg-white py-40 px-8 border-0 shadow-none">
            <div className="max-w-7xl mx-auto border-0 shadow-none">
                {/* Updated Header Section */}
                <div className="mb-32 border-0 shadow-none">
                    <div className="flex items-center gap-4 mb-8 border-0 shadow-none">
                        <span className="block w-2 h-2 bg-blue-600 rounded-full border-0 shadow-none"></span>
                        <h4 className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase border-0 shadow-none">OUR SQUAD</h4>
                    </div>
                    <h2 className="text-[64px] font-medium tracking-tighter leading-[1.1] text-gray-900 mb-10 border-0 shadow-none max-w-4xl font-display">
                        The Minds Behind <br /> the Craft.
                    </h2>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-0 shadow-none">
                        <p className="max-w-2xl text-2xl text-gray-400 font-medium leading-relaxed border-0 shadow-none">
                            A collective of senior designers and product thinkers dedicated to building valid foundations for the next generation of digital giants.
                        </p>
                        <a href="mailto:hello@elux.space" className="underline font-bold text-xs tracking-widest border-0 shadow-none whitespace-nowrap mb-2 hover:text-blue-600 transition-colors">JOIN US</a>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 w-full border-0 shadow-none">
                    {team.map((member, index) => (
                        member ? (
                            <div key={member.name} className="flex flex-col border-0 shadow-none group">
                                <div className="aspect-[4/5] overflow-hidden rounded-none mb-6 border-0 shadow-none bg-gray-100">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 shadow-none border-0"
                                    />
                                </div>
                                <h4 className="text-sm font-bold tracking-tight text-gray-900 border-0 shadow-none mb-1">{member.name}</h4>
                                <p className="text-[10px] tracking-[0.1em] text-gray-400 uppercase font-semibold border-0 shadow-none">{member.role}</p>
                            </div>
                        ) : (
                            <div key={`empty-${index}`} className="hidden lg:block border-0 shadow-none"></div>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
}



export default function AboutUs() {
    return (
        <div className="bg-white border-0 shadow-none">
            <Hero />
            <InformationAndMetrics />
            <GrowthSolutions />
            <HowWeWork />
            <Awards />
            <Team />
            <DesignToolStack />
        </div>
    );
}
