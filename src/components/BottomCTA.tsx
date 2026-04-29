import { useState } from 'react';

export default function BottomCTA() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('submitting');
        
        const form = e.currentTarget;
        const formData = new FormData(form);
        
        fetch('https://formspree.io/qisthyayleen@gmail.com', {
            method: 'POST',
            body: formData,
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json'
            }
        }).then(() => {
            setFormStatus('success');
            form.reset();
        }).catch((error) => {
            console.error('Submission Catch:', error);
            setFormStatus('error');
        });
    };

    return (
        <div className="webflow-wrapper cta-scoped" id="bottom-cta-section">
            <style dangerouslySetInnerHTML={{ __html: `
                #bottom-cta-section {
                    background-color: #111111;
                    width: 100%;
                    font-family: inherit;
                    box-sizing: border-box;
                }
                #bottom-cta-section * {
                    box-sizing: border-box;
                }
                #bottom-cta-section .container {
                    max-width: 1280px !important;
                    margin: 0 auto !important;
                    padding: 0 24px !important; /* Adjusted to match home page side padding */
                }
                #bottom-cta-section .v-flex-2xl {
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 115px !important;
                    padding: 100px 0 !important;
                }
                #bottom-cta-section .section-relative .grid-2xl.cta {
                    display: grid !important;
                    grid-template-columns: 1fr 1.5fr !important;
                    gap: 100px !important;
                    align-items: start !important;
                }
                #bottom-cta-section .form-block {
                    background-color: #1a1a1a !important;
                    padding: 60px !important;
                    border-radius: 32px !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                }
                #bottom-cta-section .cta-card-wrap {
                    background-color: #1a1a1a !important;
                    padding: 32px !important;
                    border-radius: 24px !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    margin-bottom: 32px !important;
                }
                #bottom-cta-section .form-grid {
                    display: grid !important;
                    grid-template-columns: 1fr 1fr !important;
                    gap: 40px 32px !important;
                }
                #bottom-cta-section .v-flex-lg {
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 32px !important;
                }
                #bottom-cta-section .v-flex-xl {
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 48px !important;
                }
                #bottom-cta-section .v-flex-md {
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 16px !important;
                }
                #bottom-cta-section .h-flex-md {
                    display: flex !important;
                    flex-direction: row !important;
                    gap: 24px !important;
                    align-items: center !important;
                }
                #bottom-cta-section .center {
                    align-items: center !important;
                    text-align: center !important;
                }
                #bottom-cta-section .label {
                    display: flex !important;
                    align-items: center !important;
                    gap: 8px !important;
                    padding: 8px 16px !important;
                    background: rgba(255, 255, 255, 0.05) !important;
                    border-radius: 100px !important;
                    width: fit-content !important;
                }
                #bottom-cta-section .dot {
                    width: 6px !important;
                    height: 6px !important;
                    background: #2853ff !important;
                    border-radius: 50% !important;
                }
                #bottom-cta-section .label-text {
                    font-size: 12px !important;
                    font-weight: 700 !important;
                    letter-spacing: 0.1em !important;
                    color: rgba(255, 255, 255, 0.6) !important;
                    text-transform: uppercase !important;
                }
                #bottom-cta-section .radio-field {
                    padding: 14px 24px !important;
                    border: 1px solid rgba(255, 255, 255, 0.2) !important; /* Increased border contrast */
                    border-radius: 100px !important;
                    cursor: pointer !important;
                    transition: all 0.3s ease !important;
                    background-color: rgba(255, 255, 255, 0.03) !important; /* Subtle background for contrast */
                    display: flex !important;
                    align-items: center !important;
                    width: fit-content !important;
                }
                #bottom-cta-section .radio-field:hover {
                    border-color: rgba(255, 255, 255, 0.4) !important;
                }
                #bottom-cta-section .radio-field:has(input[type="radio"]:checked) {
                    background-color: #2853ff !important; 
                    color: white !important; 
                    border-color: #2853ff !important;
                }
                #bottom-cta-section .text-form {
                    background-color: transparent !important;
                    border-top: none !important;
                    border-left: none !important;
                    border-right: none !important;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.15) !important;
                    color: #ffffff !important; 
                    font-size: 20px !important; 
                    font-weight: 500 !important; 
                    line-height: 1.5 !important;
                    padding: 16px 0 !important;
                    outline: none !important;
                    transition: all 0.3s ease !important;
                    width: 100% !important;
                }
                #bottom-cta-section .text-form::placeholder {
                    color: rgba(255, 255, 255, 0.3) !important;
                }
                #bottom-cta-section .text-form:focus {
                    border-bottom: 1px solid #2853ff !important; 
                }
                #bottom-cta-section .submit {
                    background-color: #2853ff !important;
                    padding: 18px 42px !important; /* Adjusted to match punchier pill on home */
                    border-radius: 100px !important;
                    font-weight: 700 !important;
                    font-size: 16px !important;
                    text-transform: uppercase !important;
                    border: none !important;
                    color: white !important;
                    cursor: pointer !important;
                    transition: all 0.3s ease !important;
                }
                #bottom-cta-section .submit:hover {
                    background-color: #1d4ed8 !important;
                    transform: translateY(-2px) !important;
                    box-shadow: 0 10px 20px rgba(40, 83, 255, 0.2) !important;
                }
                #bottom-cta-section .text-7xl {
                    font-size: 80px !important;
                    line-height: 1.1 !important; /* Tightened line-height to match Home */
                    letter-spacing: -0.04em !important;
                    font-weight: 500 !important;
                    margin: 0 !important;
                }
                #bottom-cta-section .text-xl {
                    font-size: 22px !important;
                    line-height: 1.4 !important;
                    color: rgba(255, 255, 255, 0.6) !important;
                }
                #bottom-cta-section .white {
                    color: #ffffff !important;
                }
                #bottom-cta-section .color-inverse {
                    color: rgba(255, 255, 255, 0.5) !important;
                }
                #bottom-cta-section .line {
                    height: 1px !important;
                    background-color: rgba(255, 255, 255, 0.1) !important;
                    width: 100% !important;
                }

                @media (max-width: 991px) {
                    #bottom-cta-section .container {
                        padding: 0 24px !important;
                    }
                    #bottom-cta-section .section-relative .grid-2xl.cta {
                        grid-template-columns: 1fr !important;
                        gap: 64px !important;
                    }
                    #bottom-cta-section .text-7xl {
                        font-size: 56px !important;
                    }
                }
                @media (max-width: 767px) {
                    #bottom-cta-section .v-flex-2xl {
                        gap: 64px !important;
                        padding: 64px 0 !important;
                    }
                    #bottom-cta-section .form-grid {
                        grid-template-columns: 1fr !important;
                        gap: 32px !important;
                    }
                    #bottom-cta-section .form-block {
                        padding: 32px !important;
                    }
                    #bottom-cta-section .text-7xl {
                        font-size: 40px !important;
                    }
                }
            ` }} />
            <div className="section-relative">
                <section className="section dark-3">
                    <div className="w-layout-blockcontainer container w-container">
                        <div className="v-flex-2xl">
                            <div className="v-flex-lg center">
                                <div className="label" style={{ opacity: 1, visibility: 'visible' }}>
                                    <div className="dot"></div>
                                    <div className="label-text">CALL TO ACTION</div>
                                </div>
                                <div className="word-animation">
                                    <h2 className="text-7xl _100"><span className="white split-text">Great Product dies <br />in bad interfaces and experiences</span></h2>
                                </div>
                                <div className="v-flex-2xl">
                                    <div className="text-xl white">Let's start to create and fix yours. Book a discovery call today!</div>
                                </div>
                            </div>
                            <div className="w-layout-grid grid-2xl cta">
                                <div id="w-node-ddb07485-992f-57db-bdfb-f0a71b2709ff-a7701396" className="v-flex-xl bootm">
                                    <div className="v-flex-lg">
                                        <div className="text-2xl white">Have a project to discuss?</div>
                                        <div className="cta-card-wrap">
                                            <div className="h-flex-md"><img src="/images/Arya-Profile.jpg" loading="lazy" alt="" className="image-10" style={{ borderRadius: "12px", objectFit: "cover", height: "120px" }} />
                                                <div className="v-flex-md _w-100">
                                                    <div className="v-flex-xxs">
                                                        <div className="text-2xl white">Arya Pradana</div>
                                                        <div className="text-lg color-inverse">Chief Executive Officer & Founder</div>
                                                    </div>
                                                    <div className="line" style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', margin: '12px 0' }}></div>
                                                    <a href="mailto:arya.pradana@elux.space" className="h-flex-xxs w-inline-block" style={{ textDecoration: "none", display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                        <div className="text-lg color-inverse">arya.pradana@elux.space</div>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.75 5.25L5.25 12.75M12.75 5.25H6M12.75 5.25V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="v-flex-lg">
                                        <div className="text-2xl white">Have a partnership in mind?</div>
                                        <div className="cta-card-wrap">
                                            <div className="h-flex-md"><img src="/images/Lintang-Profile.jpg" loading="lazy" alt="" className="image-10" style={{ borderRadius: "12px", objectFit: "cover", height: "120px" }} />
                                                <div className="v-flex-md _w-100">
                                                    <div className="v-flex-xxs">
                                                        <div className="text-2xl white">Lintang Fajar Utami</div>
                                                        <div className="text-lg color-inverse">Project Manager</div>
                                                    </div>
                                                    <div className="line" style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', margin: '12px 0' }}></div>
                                                    <a href="mailto:lintang.utami@elux.space" className="h-flex-xxs w-inline-block" style={{ textDecoration: "none", display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                        <div className="text-lg color-inverse">lintang.utami@elux.space</div>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.75 5.25L5.25 12.75M12.75 5.25H6M12.75 5.25V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-block w-form p-8">
                                    {formStatus === 'success' ? (
                                        <div className="success-design-wrap" style={{ 
                                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', 
                                            padding: '60px 20px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '24px',
                                            border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)'
                                        }}>
                                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#3B6EF5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </div>
                                            <h2 className="text-4xl white mb-4" style={{ fontWeight: 700 }}>Message Sent!</h2>
                                            <p className="text-lg color-inverse mb-8">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                                            <button onClick={() => setFormStatus('idle')} className="submit" style={{ background: 'transparent', border: '1px solid #3B6EF5' }}>Send Another</button>
                                        </div>
                                    ) : (
                                        <form id="contact-form" onSubmit={handleFormSubmit} className="from-wrap">
                                            <div className="w-layout-grid grid-2x2 form-grid">
                                                <div className="v-flex-md">
                                                    <div className="text-lg color-inverse">Your Name</div>
                                                    <input className="text-form w-input" name="name" placeholder="Enter Your Name" type="text" required />
                                                </div>
                                                <div className="v-flex-md">
                                                    <div className="text-lg color-inverse">Enter Your Email</div>
                                                    <input className="text-form w-input" name="email" placeholder="Enter Your Email" type="email" required />
                                                </div>
                                                <div className="v-flex-md">
                                                    <div className="text-lg color-inverse">Your Company</div>
                                                    <input className="text-form w-input" name="company" placeholder="Enter Company Name" type="text" />
                                                </div>
                                                <div className="v-flex-md">
                                                    <div className="text-lg color-inverse">Your Title</div>
                                                    <input className="text-form w-input" name="title" placeholder="Enter Your Title" type="text" />
                                                </div>
                                            </div>
                                            <div className="v-flex-md pt-6" style={{ marginTop: '24px' }}>
                                                <div className="text-lg color-inverse">Message</div>
                                                <input className="text-form w-input" name="message" placeholder="Tell us about your project" type="text" required />
                                            </div>
                                            <div className="v-flex-lg pt-6" style={{ marginTop: '24px' }}>
                                                <div className="text-lg color-inverse">Project type</div>
                                                <div className="grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '12px' }}>
                                                    {['UI/UX Design', 'Product Design', 'Webflow/Framer Development', 'Branding Identity'].map(type => (
                                                        <label key={type} className="radio-field">
                                                            <input type="radio" value={type} name="project-type" style={{ display: 'none' }} />
                                                            <span className="text-xl white">{type}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="v-flex-lg pt-6" style={{ marginTop: '24px' }}>
                                                <div className="text-lg color-inverse">Your Budget</div>
                                                <div className="grid budget" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '12px' }}>
                                                    {['<$5,000', '$5-$10k', '$10-$20k', '$20-$50k', '$50k+'].map(budget => (
                                                        <label key={budget} className="radio-field">
                                                            <input type="radio" value={budget} name="budget" style={{ display: 'none' }} />
                                                            <span className="text-xl white">{budget}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="v-flex-default left" style={{ marginTop: '40px' }}>
                                                <div className="h-flex-lg" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                                                    <input disabled={formStatus === 'submitting'} className="submit" type="submit" value={formStatus === 'submitting' ? "Sending..." : "Submit"} />
                                                    <div style={{ maxWidth: '200px' }}>
                                                        <div className="text-sm color-inverse" style={{ fontSize: '12px' }}>By clicking this button you accept Terms of Service and Privacy Policy.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
