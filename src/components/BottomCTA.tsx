import { useState } from 'react';

export default function BottomCTA() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('submitting');
        
        const form = e.currentTarget;
        const formData = new FormData(form);
        const searchParams = new URLSearchParams();
        
        for (const [key, value] of formData.entries()) {
            searchParams.append(key, value as string);
        }
        
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
        <div className="section-relative" style={{ backgroundColor: '#111111' }}>
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
                                <div className="text-xl text-gray-400">Let's start to create and fix yours. Book a discovery call today!</div>
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
                                                <div className="line"></div>
                                                <a href="mailto:arya.pradana@elux.space" className="h-flex-xxs w-inline-block" style={{ textDecoration: "none" }}>
                                                    <div className="text-lg color-inverse">arya.pradana@elux.space</div>
                                                    <div className="code-embed-2 w-embed"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.75 5.25L5.25 12.75M12.75 5.25H6M12.75 5.25V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg></div>
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
                                                <div className="line"></div>
                                                <a href="mailto:lintang.utami@elux.space" className="h-flex-xxs w-inline-block" style={{ textDecoration: "none" }}>
                                                    <div className="text-lg color-inverse">lintang.utami@elux.space</div>
                                                    <div className="code-embed-2 w-embed"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.75 5.25L5.25 12.75M12.75 5.25H6M12.75 5.25V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-block w-form p-8">
                                <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} title="hidden_iframe" />
                                
                                {formStatus === 'success' ? (
                                    <div className="success-design-wrap" style={{ 
                                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', 
                                        padding: '60px 20px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '24px',
                                        border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', animation: 'fadeIn 0.5s ease-out'
                                    }}>
                                        <div className="success-icon-wrap" style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#3B6EF5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0 0 30px rgba(59, 110, 245, 0.4)' }}>
                                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                        <h2 className="text-4xl white mb-4" style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700 }}>Message Sent!</h2>
                                        <p className="text-lg color-inverse mb-8" style={{ maxWidth: '400px', opacity: 0.8 }}>Thank you for reaching out. We've received your inquiry and will get back to you within 24 hours.</p>
                                        <button onClick={() => setFormStatus('idle')} className="submit w-button" style={{ backgroundColor: 'transparent', border: '1px solid #3B6EF5', padding: '12px 32px', borderRadius: '999px', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#3B6EF5'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'white'; }}>Send Another Message</button>
                                        <style dangerouslySetInnerHTML={{ __html: `@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }` }} />
                                    </div>
                                ) : (
                                    <form id="contact-form" onSubmit={handleFormSubmit} className="from-wrap">
                                        <input type="hidden" name="_subject" value="New Inquiry from Elux Space Website" />
                                        <input type="hidden" name="_gotcha" style={{ display: 'none' }} />
                                        
                                        <div className="w-layout-grid grid-2x2 form-grid">
                                            <div className="v-flex-md">
                                                <div className="text-lg color-inverse">Your Name</div>
                                                <input className="text-form w-input" maxLength={256} name="name" placeholder="Enter Your Name" type="text" id="form-name" required />
                                            </div>
                                            <div className="v-flex-md">
                                                <div className="text-lg color-inverse">Enter Your Email<br /></div>
                                                <input className="text-form w-input" maxLength={256} name="email" placeholder="Enter Your Email" type="email" id="form-email" required />
                                            </div>
                                            <div className="v-flex-md">
                                                <div className="text-lg color-inverse">Your Company Name</div>
                                                <input className="text-form w-input" maxLength={256} name="company" placeholder="Enter Your Company Name" type="text" id="form-company" />
                                            </div>
                                            <div className="v-flex-md">
                                                <div className="text-lg color-inverse">Your Title</div>
                                                <input className="text-form w-input" maxLength={256} name="title" placeholder="Enter your Title in Company" type="text" id="form-title" />
                                            </div>
                                        </div>
                                        <div className="v-flex-md pt-6">
                                            <div className="text-lg color-inverse">Message</div>
                                            <input className="text-form w-input" maxLength={256} name="message" placeholder="Tell us about your project" type="text" id="form-message" required />
                                        </div>
                                        <div className="v-flex-lg pt-6">
                                            <div className="text-lg color-inverse">Project type</div>
                                            <div className="grid">
                                                <label className="radio-field w-radio">
                                                    <input id="UX" className="w-form-formradioinput hidden w-radio-input" type="radio" value="UI/UX Design" name="project-type" />
                                                    <span className="text-xl white w-form-label"><span className="medium">UI/UX Design</span></span>
                                                </label>
                                                <label className="radio-field w-radio">
                                                    <input id="Product" className="w-form-formradioinput hidden w-radio-input" type="radio" value="Product Design" name="project-type" />
                                                    <span className="text-xl white w-form-label">Product Design</span>
                                                </label>
                                                <label className="radio-field _2 w-radio">
                                                    <input id="web-dev" className="w-form-formradioinput hidden w-radio-input" type="radio" value="Webflow/Framer Development" name="project-type" />
                                                    <span className="text-xl white w-form-label">Webflow/Framer Development</span>
                                                </label>
                                                <label className="radio-field _3 w-radio">
                                                    <input id="branding" className="w-form-formradioinput hidden w-radio-input" type="radio" value="Branding Identity" name="project-type" />
                                                    <span className="text-xl white w-form-label">Branding Identity</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="v-flex-lg pt-6">
                                            <div className="text-lg color-inverse">Your Budget About This Project</div>
                                            <div className="grid budget">
                                                <label className="radio-field w-radio">
                                                    <input id="budget-1" className="w-form-formradioinput hidden w-radio-input" type="radio" value="<$5,000" name="budget" />
                                                    <span className="text-xl white w-form-label">&lt; $5,000</span>
                                                </label>
                                                <label className="radio-field budget w-radio">
                                                    <input id="budget-2" className="w-form-formradioinput hidden w-radio-input" type="radio" value="$5-$10k" name="budget" />
                                                    <span className="text-xl white w-form-label">$5-$10k</span>
                                                </label>
                                                <label className="radio-field budget w-radio">
                                                    <input id="budget-3" className="w-form-formradioinput hidden w-radio-input" type="radio" value="$10-$20k" name="budget" />
                                                    <span className="text-xl white w-form-label">$10-$20k</span>
                                                </label>
                                                <label className="radio-field budget w-radio">
                                                    <input id="budget-4" className="w-form-formradioinput hidden w-radio-input" type="radio" value="$20-$50k" name="budget" />
                                                    <span className="text-xl white w-form-label">$20-$50k</span>
                                                </label>
                                                <label className="radio-field budget w-radio">
                                                    <input id="budget-5" className="w-form-formradioinput hidden w-radio-input" type="radio" value="$50k+" name="budget" />
                                                    <span className="text-xl white w-form-label">$50k+</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="v-flex-default left">
                                            <div className="h-flex-lg pt-16">
                                                <input disabled={formStatus === 'submitting'} className="submit w-button rounded-full" type="submit" value={formStatus === 'submitting' ? "Sending..." : "Submit"} />
                                                <div className="_w-50">
                                                    <div className="text-lg color-inverse">By clicking this button you accept Terms of Service and Privacy Policy.</div>
                                                </div>
                                            </div>
                                        </div>

                                        {formStatus === 'error' && (
                                            <div className="w-form-fail" style={{ display: 'block', marginTop: '20px' }}>
                                                <div className="text-lg color-inverse">Oops! Something went wrong while submitting the form. Please try again.</div>
                                            </div>
                                        )}

                                        <div className="code-embed-3 w-embed">
                                            <style dangerouslySetInnerHTML={{ __html: `
                                                .text-form {
                                                    background-color: transparent !important;
                                                    border-top: none;
                                                    border-left: none;
                                                    border-right: none;
                                                    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                                                    color: #ffffff !important; 
                                                    font-size: 18px; 
                                                    font-weight: 600; 
                                                    line-height: 1.5;
                                                    padding-top: 12px;
                                                    padding-bottom: 12px;
                                                    padding-left: 0;
                                                    outline: none;
                                                    transition: all 0.3s ease;
                                                }
                                                .text-form::placeholder {
                                                    color: #ffffff;
                                                    opacity: 1; 
                                                    font-size: clamp(14px, 2vw + 10px, 24px) !important;
                                                }
                                                .text-form:focus {
                                                    border-bottom: 1px solid #3B6EF5; 
                                                }
                                                .radio-field:has(input[type="radio"]:checked) {
                                                    background-color: #2853ff !important; 
                                                    color: white !important; 
                                                }
                                            ` }} />
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
