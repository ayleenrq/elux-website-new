export default function Footer() {
    return (
        <section className="bg-[#111111] text-white pt-24 pb-12 px-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="flex flex-col border-0 shadow-none">
                        <a href="#" className="mb-6 border-0 shadow-none inline-block">
                            <img src="/images/Frame-117.webp" alt="Elux Space Logo" className="h-8 object-contain shadow-none border-0" />
                        </a>
                        <p className="text-[28px] text-gray-300 leading-snug max-w-sm border-0 shadow-none font-display">
                            We help startups and companies design digital products people love and trust.
                        </p>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 border-0 shadow-none">
                        <div className="flex flex-col gap-6 border-0 shadow-none">
                            <h3 className="text-2xl font-bold text-white border-0 shadow-none">Find Us On</h3>
                            <div className="flex flex-col gap-4 border-0 shadow-none">
                                <a href="https://clutch.co/profile/elux-space" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-white transition-colors">Clutch</a>
                                <a href="https://www.designrush.com/agency/profile/elux-space" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-white transition-colors">Design Rush</a>
                                <a href="https://contra.com/eluxspace" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-white transition-colors">Contra</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 border-0 shadow-none">
                            <h3 className="text-2xl font-bold text-white border-0 shadow-none">Product</h3>
                            <div className="flex flex-col gap-4 border-0 shadow-none">
                                <a href="https://ui8.net/elux-space/products" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-white transition-colors">UI8</a>
                                <a href="https://creativemarket.com/eluxspace" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-white transition-colors">Creative Market</a>
                                <a href="https://craftwork.design/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-white transition-colors">Craftwork</a>
                                <a href="https://gumroad.com/eluxspace" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-white transition-colors">Gumroad</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 border-0 shadow-none">
                            <h3 className="text-2xl font-bold text-white border-0 shadow-none">Our Social</h3>
                            <div className="flex flex-col gap-4 border-0 shadow-none">
                                <a href="https://id.linkedin.com/company/elux-space" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-white transition-colors">Linkedin Page</a>
                                <a href="https://dribbble.com/eluxspace" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-white transition-colors">Dribbble</a>
                                <a href="https://www.behance.net/eluxspace" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-white transition-colors">Behance</a>
                                <a href="https://www.instagram.com/elux.space/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-white transition-colors">Instagram</a>
                                <a href="https://layers.to/eluxspace" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-white transition-colors">Layers</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col border-0 shadow-none">
                    <div className="w-full h-px bg-white/10 mb-12 shadow-none"></div>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-0 shadow-none">
                        <div className="flex flex-wrap items-center gap-8 border-0 shadow-none">
                            <a href="mailto:hello@elux.space" className="flex items-center gap-3 text-xl text-white hover:text-blue-400 transition-colors shadow-none group">
                                hello@elux.space
                                <svg className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 7L7 17M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </a>
                            <a href="tel:+6285156989279" className="flex items-center gap-3 text-xl text-white hover:text-blue-400 transition-colors shadow-none group">
                                +62 851-5698-9279
                                <svg className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 7L7 17M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="flex flex-col items-end gap-2 border-0 shadow-none">
                            <div className="text-lg text-gray-400 shadow-none border-0">© 2026 eluxspace-All Rights Reserved.</div>
                            <div className="flex items-center gap-2 shadow-none border-0">
                                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors opacity-60 hover:opacity-100">Privacy Policy</a>
                                <span className="text-sm text-gray-400 opacity-40 mx-2">|</span>
                                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors opacity-60 hover:opacity-100">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
