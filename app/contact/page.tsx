import type { Metadata } from 'next';
import { LucideMapPin, LucidePhone, LucideMail, LucideClock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us - INDOTRAVI',
    description: 'Get in touch with us to plan your next Indonesian adventure.',
};

export default function ContactPage() {
    return (
        <main>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-header-title">Contact Us</h1>
                    <p className="page-header-desc">
                        Have questions or ready to book your Indonesian adventure? We&apos;d love to hear from you.
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <div>
                            <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>Get in Touch</h2>
                            <p className="section-desc" style={{ marginBottom: '2.5rem' }}>
                                Fill out the form or reach us directly. Our team is ready to help you plan your dream trip.
                            </p>

                            <div className="contact-info">
                                <div className="contact-item">
                                    <div className="contact-item-icon">
                                        <LucideMapPin size={20} />
                                    </div>
                                    <div>
                                        <div className="contact-item-title">Address</div>
                                        <div className="contact-item-text">Jl. Sudirman No. 123, Jakarta, Indonesia</div>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-item-icon">
                                        <LucidePhone size={20} />
                                    </div>
                                    <div>
                                        <div className="contact-item-title">Phone</div>
                                        <div className="contact-item-text">+62 21 1234 5678</div>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-item-icon">
                                        <LucideMail size={20} />
                                    </div>
                                    <div>
                                        <div className="contact-item-title">Email</div>
                                        <div className="contact-item-text">hello@indotravi.com</div>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-item-icon">
                                        <LucideClock size={20} />
                                    </div>
                                    <div>
                                        <div className="contact-item-title">Working Hours</div>
                                        <div className="contact-item-text">Mon - Sat: 09:00 - 18:00 WIB</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form">
                            <form>
                                <div className="form-group">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-input" placeholder="Your name" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-input" placeholder="you@example.com" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Subject</label>
                                    <input type="text" className="form-input" placeholder="How can we help?" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Message</label>
                                    <textarea className="form-input form-textarea" placeholder="Tell us about your dream trip..."></textarea>
                                </div>
                                <button type="submit" className="form-submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
