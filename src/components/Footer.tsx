export default function Footer() {
    return (
        <div className="webflow-wrapper footer-scoped" id="footer-section">
            <style dangerouslySetInnerHTML={{ __html: `
                #footer-section {
                    background-color: #111111;
                    width: 100%;
                    padding: 100px 0 64px 0 !important;
                    box-sizing: border-box;
                }
                #footer-section * {
                    box-sizing: border-box;
                }
                #footer-section .container {
                    max-width: 1280px !important;
                    margin: 0 auto !important;
                    padding: 0 24px !important; /* Adjusted to match home page side padding */
                }
                #footer-section .v-flex-2xl {
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 80px !important;
                }
                #footer-section .footer-link {
                    color: rgba(255, 255, 255, 0.6) !important;
                    text-decoration: none !important;
                    transition: all 0.3s ease !important;
                    font-size: 18px !important;
                    line-height: 1.6 !important;
                }
                #footer-section .footer-link:hover {
                    color: #ffffff !important;
                    transform: translateX(4px) !important;
                }
                #footer-section .line {
                    height: 1px !important;
                    background-color: rgba(255, 255, 255, 0.1) !important;
                    width: 100% !important;
                }
                #footer-section .grid-2xl.footer {
                    display: grid !important;
                    grid-template-columns: 1.2fr 2fr !important;
                    gap: 100px !important;
                }
                #footer-section .grid-1x3 {
                    display: grid !important;
                    grid-template-columns: 1fr 1fr 1fr !important;
                    gap: 112px !important; /* Pixel-perfect gap from home page */
                }
                #footer-section .v-flex-lg {
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 32px !important; /* Adjusted to match Home */
                }
                #footer-section .v-flex-md {
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 43px !important; /* Pixel-perfect vertical link spacing */
                }
                #footer-section .text-2xl {
                    font-size: 24px !important;
                    font-weight: 500 !important;
                    line-height: 1.4 !important;
                }
                #footer-section .text-lg {
                    font-size: 18px !important;
                    line-height: 1.6 !important;
                }
                #footer-section .bold {
                    font-weight: 700 !important;
                }
                #footer-section .white {
                    color: #ffffff !important;
                }
                #footer-section .color-neu-30 {
                    color: rgba(255, 255, 255, 0.5) !important;
                }
                #footer-section .color-inverse {
                    color: rgba(255, 255, 255, 0.4) !important;
                }
                #footer-section .pt-16 {
                    padding-top: 64px !important;
                }
                #footer-section .h-flex-space {
                    display: flex !important;
                    justify-content: space-between !important;
                    align-items: center !important;
                }
                #footer-section .h-flex-lg {
                    display: flex !important;
                    gap: 40px !important;
                    align-items: center !important;
                }

                @media (max-width: 991px) {
                    #footer-section .grid-2xl.footer {
                        grid-template-columns: 1fr !important;
                        gap: 64px !important;
                    }
                    #footer-section .grid-1x3 {
                        gap: 48px !important;
                    }
                }
                @media (max-width: 767px) {
                    #footer-section .grid-1x3 {
                        grid-template-columns: 1fr 1fr !important;
                    }
                    #footer-section .h-flex-space {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 32px !important;
                    }
                    #footer-section .v-flex-xxs {
                        align-items: flex-start !important;
                    }
                }
            ` }} />
            <div className="section-relative border">
                <section className="section dark-3">
                    <div className="w-layout-blockcontainer container w-container">
                        <div className="v-flex-2xl">
                            <div className="w-layout-grid grid-2xl footer">
                                <div className="v-flex-md" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                    <a href="#" className="brand footer w-nav-brand">
                                        <img src="/images/Frame-117.webp" loading="lazy" alt="Elux Space" style={{ height: '32px' }} />
                                    </a>
                                    <div className="text-2xl color-neu-30">We help startups and companies design digital products people love and trust.</div>
                                </div>
                                <div className="w-layout-grid grid-1x3">
                                    <div className="v-flex-lg" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                        <div className="text-2xl bold"><span className="white">Find Us On</span></div>
                                        <div className="v-flex-md" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                            <a href="https://clutch.co/profile/elux-space" target="_blank" rel="noopener noreferrer" className="text-lg footer-link">Clutch</a>
                                            <a href="https://www.designrush.com/agency/profile/elux-space" target="_blank" rel="noopener noreferrer" className="text-lg footer-link">Design Rush</a>
                                            <a href="https://contra.com/eluxspace" target="_blank" rel="noopener noreferrer" className="text-lg footer-link">Contra</a>
                                        </div>
                                    </div>
                                    <div className="v-flex-lg" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                        <div className="text-2xl bold"><span className="white">Product</span></div>
                                        <div className="v-flex-md" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                            <a href="https://ui8.net/elux-space/products" target="_blank" rel="noopener noreferrer" className="text-lg footer-link">UI8</a>
                                            <a href="https://creativemarket.com/eluxspace" target="_blank" rel="noopener noreferrer" className="text-lg footer-link">Creative Market</a>
                                            <a href="https://craftwork.design/" target="_blank" rel="noopener noreferrer" className="text-lg footer-link">Craftwork</a>
                                            <a href="https://gumroad.com/eluxspace" target="_blank" rel="noopener noreferrer" className="text-lg footer-link">Gumroad</a>
                                        </div>
                                    </div>
                                    <div className="v-flex-lg" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                        <div className="text-2xl bold"><span className="white">Our Social</span></div>
                                        <div className="v-flex-md" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                            <a href="https://id.linkedin.com/company/elux-space" target="_blank" rel="noopener noreferrer" className="text-lg footer-link">Linkedin Page</a>
                                            <a href="https://dribbble.com/eluxspace" target="_blank" rel="noopener noreferrer" className="text-lg footer-link">Dribbble</a>
                                            <a href="https://www.behance.net/eluxspace" target="_blank" rel="noopener noreferrer" className="text-lg footer-link">Behance</a>
                                            <a href="https://www.instagram.com/elux.space/" target="_blank" rel="noopener noreferrer" className="text-lg footer-link">Instagram</a>
                                            <a href="https://layers.to/eluxspace" target="_blank" rel="noopener noreferrer" className="text-lg footer-link">Layers</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="v-flex-default">
                                <div className="line"></div>
                                <div className="h-flex-space pt-16" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: "wrap", rowGap: "24px" }}>
                                    <div className="h-flex-lg" style={{ display: 'flex', flexWrap: "wrap", gap: "32px" }}>
                                        <a href="mailto:hello@elux.space" className="link w-inline-block" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                                            <div className="text-xl white">hello@elux.space</div>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 7L7 17M17 7H8M17 7V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </a>
                                        <a href="tel:+6285156989279" className="link w-inline-block" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                                            <div className="text-xl white">+62 851-5698-9279</div>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 7L7 17M17 7H8M17 7V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="v-flex-xxs" style={{ display: 'flex', flexDirection: 'column', alignItems: "flex-end", gap: '8px' }}>
                                        <div className="text-lg color-inverse">© 2026 eluxspace-All Rights Reserved.</div>
                                        <div className="h-flex-xs" style={{ display: 'flex', gap: '16px' }}>
                                            <a href="#" className="footer-link" style={{ fontSize: "14px", opacity: "0.6" }}>Privacy Policy</a>
                                            <a href="#" className="footer-link" style={{ fontSize: "14px", opacity: "0.6" }}>Terms of Service</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
